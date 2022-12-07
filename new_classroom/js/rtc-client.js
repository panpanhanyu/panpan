/* global $ TRTC getCameraId getMicrophoneId resetView isHidden shareUserId addMemberView removeView addVideoView */
class RtcClient {
    constructor(options) {
        this.sdkAppId_ = options.sdkAppId;
        this.userId_ = options.userId;
        this.userSig_ = options.userSig;
        this.roomId_ = options.roomId;
        this.video = options.video;//是否是视频上课
        this.plays = options.plays;

        this.isJoined_ = false;
        this.isPublished_ = false;
        this.isAudioMuted = false;
        this.isVideoMuted = false;
        this.localStream_ = null;
        this.remoteStreams_ = [];
        this.remoteStream_video=null;
        this.members_ = new Map();

        // create a client for RtcClient
        this.client_ = TRTC.createClient({
            mode: 'rtc',
            sdkAppId: this.sdkAppId_,
            userId: this.userId_,
            userSig: this.userSig_,
            // useStringRoomId: true  // roomId 使用 string 类型时，必须设置 useStringRoomId 为 true
        });
        this.handleEvents();
    }

    async join() {
        if (this.isJoined_) {
            console.warn('duplicate RtcClient.join() observed');
            return;
        }
        try {
            // join the room
            await this.client_.join({
                roomId: parseInt(this.roomId_)//将房间id转换成int类型，4.8.2后要强制转换类型，如果设置useStringRoomId 为 true会生成两个相同id的房间（数字和字符串相同的情况下也是两个房间）
            });
            console.log('join room success');
            this.isJoined_ = true;

            // create a local stream with audio/video from microphone/camera
            // if (getCameraId() && getMicrophoneId()) {
            //     this.localStream_ = TRTC.createStream({
            //         audio: true,
            //         video:  this.video,
            //         userId: this.userId_,
            //         cameraId: getCameraId(),
            //         microphoneId: getMicrophoneId(),
            //         mirror: true
            //     });
            // } else {
                // not to specify cameraId/microphoneId to avoid OverConstrainedError
                this.localStream_ = TRTC.createStream({
                    audio: true,
                    video:  this.video,
                    userId: this.userId_,
                    mirror: true
                });
            // }
            //如果是视频通话，设置视频的清晰度
            if(this.video==true){
                this.localStream_.setVideoProfile('240p');
            }
            try {
                // initialize the local stream and the stream will be populated with audio/video
                await this.localStream_.initialize();

                console.log('initialize local stream success');

                //订阅远端视频流
                this.localStream_.on('player-state-changed', event => {
                    console.log(`local stream ${event.type} player is ${event.state}`);
                });

                // publish the local stream
                await this.publish();

                this.localStream_.play(this.plays).then(() => {
                    // autoplay success
                }).catch((e) => {
                    const errorCode = e.getCode();
                if (errorCode === 0x4043) {
                    // PLAY_NOT_ALLOWED,引导用户手势操作恢复音视频播放
                    this.resumeStreams();
                }
            });

                // $('#main-video-btns').show();
                // $('#mask_main').appendTo($('#player_' + this.localStream_.getId()));
            } catch (e) {
                console.error('failed to initialize local stream - ' + e);
            }
        } catch (e) {
            console.error('join room failed! ' + e);
            console.error( e);
        }

        let show_client=   this.client_;
        let show_localStream=this.localStream_;
        setInterval(function(){
            //设置我的网络传输状况统计数据
            show_client.getTransportStats().then(stats=>{
                // console.log('RTT: ' + stats.rtt);
                $(".t_webspeed_test_mine_ms").text(stats.rtt+'ms'　)
        });
            //设置我的已发布本地流的音频统计数据
            show_client.getLocalAudioStats().then(stats=>{
                for (let userId in stats) {
                $(".t_webspeed_test_mine_kb").text(parseInt(stats[userId].bytesSent/1024)+'kb'　)
            }
        });
            //设置音量大小
            const level = parseInt(show_localStream.getAudioLevel()*100);
            $(".t_new_voice_num").css('width',level+'%');
            $(".t_new_voice_num2").css('width',level+'%');
        },200)
    }


    async leave() {
        if (!this.isJoined_) {
            console.warn('leave() - please join() firstly');
            return;
        }
        // ensure the local stream is unpublished before leaving.
        await this.unpublish();

        // leave the room
        await this.client_.leave();

        this.localStream_.stop();
        this.localStream_.close();
        this.localStream_ = null;
        this.isJoined_ = false;
        // resetView();
    }

    async publish() {
        if (!this.isJoined_) {
            console.warn('publish() - please join() firstly');
            return;
        }
        if (this.isPublished_) {
            console.warn('duplicate RtcClient.publish() observed');
            return;
        }
        try {
            await this.client_.publish(this.localStream_);
        } catch (e) {
            console.error('failed to publish local stream ' + e);
            this.isPublished_ = false;
        }

        this.isPublished_ = true;
    }

    async unpublish() {
        if (!this.isJoined_) {
            console.warn('unpublish() - please join() firstly');
            return;
        }
        if (!this.isPublished_) {
            console.warn('RtcClient.unpublish() called but not published yet');
            return;
        }

        await this.client_.unpublish(this.localStream_);
        this.isPublished_ = false;
    }

    muteLocalAudio() {
        this.localStream_.muteAudio();
    }

    unmuteLocalAudio() {
        this.localStream_.unmuteAudio();
    }

    muteLocalVideo() {
        this.localStream_.muteVideo();
    }

    unmuteLocalVideo() {
        this.localStream_.unmuteVideo();
    }
    videoPlay() {
        this.remoteStream_video.play('t_new_video_talk_box1');
        // this.localStream_.play(this.plays)
    }

    resumeStreams() {
        this.localStream_.resume();
        for (let stream of this.remoteStreams_) {
            stream.resume();
        }
    }
    switchDevice(type,camera_devices){
        this.localStream_.switchDevice(type, camera_devices);
    }



//////////////////////////
    handleEvents(){
        //远端流订阅成功事件
        this.client_.on('stream-subscribed', event => {
            const remoteStream = event.stream;

        this.remoteStreams_.push(remoteStream);
        remoteStream.on('player-state-changed', event => {
            console.log(`${event.type} player is ${event.state}`);
        });
        // remoteStream.play('t_othervideo')
        //chromeM71以下会自动暂停，手动唤醒
        if (getBroswer().broswer == 'Chrome' && getBroswer().version < '72') {
            this.resumeStreams();
        }
        // remoteStream.play("rtc_audio");


    });
        // 监听远端流增加事件
        this.client_.on('stream-added', event => {
            other_is_coming_rtc=1
            this.remoteStream_video=event.stream;
            const remoteStream = event.stream;
        //判断视频上课还是音频上课
        if(voice_or_video==0){

            //语音上课
            //// 仅订阅音频数据
            this.client_.subscribe(remoteStream, { audio: true, video: false }).catch(e => {
                console.error('failed to subscribe remoteStream');
        });
            remoteStream.play('t_new_voice_talk_box1').then(() => {
                // autoplay success
            }).catch((e) => {
                const errorCode = e.getCode();
            if (errorCode === 0x4043) {
                // PLAY_NOT_ALLOWED,引导用户手势操作恢复音视频播放
                // remoteStream.resume();
                remoteStream.stop();
                setTimeout(function(){
                    //更改麦克风
                    $(".video_btn").click();
                    console.log("-------------重新连接");
                },2000);
            }
        });
            $("#t_new_video_talk_box1").hide()
            $("#t_new_voice_talk_box1").show()
        }else if(voice_or_video==1){
            $("#t_new_video_talk_box1").html("")
            //视频上课
            // 订阅远端音频和视频流
            this.client_.subscribe(remoteStream, { audio: true, video: true }).catch(e => {
                console.error('failed to subscribe remoteStream');
        });
            remoteStream.play('t_new_video_talk_box1').then(() => {
                // autoplay success
            }).catch((e) => {
                const errorCode = e.getCode();
            if (errorCode === 0x4043) {
                // PLAY_NOT_ALLOWED,引导用户手势操作恢复音视频播放
                // remoteStream.resume();
                remoteStream.stop();
                setTimeout(function(){
                    //更改麦克风
                    $(".video_btn").click();
                    console.log("-------------重新连接");
                },2000);
                // remoteStream.play('t_new_video_talk_box1');

                // let replay = () => {
                //     remoteStream.stop()
                //     remoteStream.play('t_new_video_talk_box1', { muted: false })
                //     // 移除用户鼠标事件监听
                //     document.removeEventListener('mousedown', replay)
                //     // 移除用户触屏事件监听
                //     document.removeEventListener('touchstart', replay)
                // }
                // document.addEventListener('mousedown', replay)
                //
                // document.addEventListener('touchstart', replay)

                // video_error()
            }
        });;

            //显示对方视频模块，隐藏音频模块
            $("#t_new_video_talk_box1").show()
            $("#t_new_voice_talk_box1").hide()
        }else{
            //语音上课
            //// 仅订阅音频数据
            this.client_.subscribe(remoteStream, { audio: true, video: false }).catch(e => {
                console.error('failed to subscribe remoteStream');
        });
            remoteStream.play('t_new_voice_talk_box1').then(() => {
                // autoplay success
            }).catch((e) => {
                const errorCode = e.getCode();
            if (errorCode === 0x4043) {
                // PLAY_NOT_ALLOWED,引导用户手势操作恢复音视频播放
                // remoteStream.resume();
                remoteStream.stop();
                setTimeout(function(){
                    //更改麦克风
                    $(".video_btn").click();
                    console.log("-------------重新连接");
                },2000);

            }
        });;
            $("#t_new_video_talk_box1").hide()
            $("#t_new_voice_talk_box1").show()
        }
    });
        //监听远端进入房间
        this.client_.on('peer-join', event => {
            // alert(event.userId)
            // alert('远端进入房间')
            // classroom_is_content=1
            $(".t_new_timebox").hide()
        $(".t_new_timebox2").show()
        $("#t_talk_time").addClass('t_talk_time_lei')
        var teacher_is_comed=$("#t_talk_time").text()
        teacher_in_classroom=1
        if(new_phone_time==0&&teacher_is_comed=='00:00'){

            time_zheng_s('t_talk_time',0,2)

        }
        // if(new_phone_time==0&&teacher_later==0){
        //  console.log('teacher_later:'+teacher_later)

        //  // time_dao_s27("t_lasttime_show2", '1620',"inClass");
        // }
        if(dao_time_class == 0){
            time_dao_s27("t_lasttime_show2", '1620',"inClass");
        }
        //强制关闭教室计时
        // var time_close =new_phone_time
        // var close_lasttime = setInterval(function(){
        //   time_close++;
        //     if(time_close==2400){
        //         rtc_leave()
        //         clearInterval(close_lasttime)
        //     }
        // },1000)
        console.log(event.userId+_lang27)
        $.growl.warning({
            title: _lang18,
            message:_lang27
        });
        //更换用户文字
        $("#t_video_font1").text(_lang08)
        $("#t_video_font2").text(_lang08)
        //更换用户头像
        $("#video-img-v1").attr('src',new_teacher_avatar)
        $(".t_new_ispeoplein1").addClass("t_new_ispeoplein_lei")
        //更换顶部头像
        $(".t_new_header").attr('src',new_teacher_avatar)
        //远端音频统计数据
        let show_client=   this.client_;
        setInterval(function(){
            show_client.getRemoteAudioStats().then(stats => {
                for (let userId in stats) {
                $(".t_webspeed_test_other").text(parseInt(stats[userId].bytesReceived/1024)+'kb'　)
            }
        });
        },200)
    });
        //监听远端退出房间
        this.client_.on('peer-leave', event => {

            // alert(event.userId)
            console.log(event.userId+_lang20)
        $.growl.warning({
            title: _lang18,
            message:_lang20
        });
        // classroom_is_content=0
        if(is_chat_enter==1){
            //还原远端文字
            $("#t_video_font1").text(_lang14)
            //还原远端头像
            $("#video-img-v1").attr('src','/Classroomstudent/img/come.png')
        }else{
            //还原远端文字
            $("#t_video_font1").text(_lang26)
            //还原远端头像
            $("#video-img-v1").attr('src','/Classroomstudent/img/shipin.png')
        }


        $(".t_new_ispeoplein1").removeClass("t_new_ispeoplein_lei")
        //还原顶部头像
        $(".t_new_header").attr('src','/Classroomstudent/img/come.png')
        //还原远端音量
        $(".remotevoice").text(0)
        //还原远端摄像头
        $('#videobox_other').empty()
        //还原远端网络条
        // $(".t_view_voice_box1").find(".t_view_v").eq(0).css('background-color','#000000')
        // $(".t_view_voice_box1").find(".t_view_v").eq(1).css('background-color','#000000')
        // $(".t_view_voice_box1").find(".t_view_v").eq(2).css('background-color','#000000')
        // $(".t_view_voice_box1").find(".t_view_v").eq(3).css('background-color','#000000')
        // $(".t_view_voice_box1").find(".t_view_v").eq(4).css('background-color','#000000')
        //还原远端语音数据
        $(".t_webspeed_test_other").text('0kb')
        //还原音频，视频模块
        $("#t_new_video_talk_box1").hide()
        $("#t_new_voice_talk_box1").show()


        // alert('远端退出房间')
    });
        //监听远端用户禁用视频
        this.client_.on('mute-video', event => {
            $("#t_new_video_talk_box1").hide()
        $("#t_new_voice_talk_box1").show()
        // alert(event.userId)
        // alert('远端禁用视频')
    });
        //监听远端用户启用视频
        this.client_.on('unmute-video', event => {

            //显示对方视频模块，隐藏音频模块
            if(voice_or_video==1){
            $("#t_new_video_talk_box1").show()
            $("#t_new_voice_talk_box1").hide()
        }

        // alert(event.userId)
        // alert('远端启用视频')
    });
        //监听网络质量
        this.client_.on('network-quality', event => {

            // $(".uplink").text(event.uplinkNetworkQuality)
            if(event.uplinkNetworkQuality>4&&event.uplinkNetworkQuality!=6){
            $.growl.error({
                title: _lang18,
                message: _lang21
            });
        }

        //
        // 0 网络状况未知，表示当前 client 实例还没有建立上行/下行连接
        // 1   网络状况极佳
        // 2   网络状况较好
        // 3   网络状况一般
        // 4   网络状况差
        // 5   网络状况极差
        // 6   网络连接已断开
        // 注意：若下行网络质量为此值，则表示所有下行连接都断开了
    })
        //监听客户端错误
        this.client_.on('error', error => {
            console.error('client error observed: ' + error);
        const errorCode = error.getCode();
        alert('客户端错误！错误码：'+errorCode)
        // 请根据错误码列表(https://cloud.tencent.com/document/product/647/34342)查看错误类型。
        // 当出现客户端错误后，请调用 Client.leave() 退房并尝试通过 Client.join() 重新进房恢复通话。
    });
    }

    showStreamState(stream) {
        console.log('has audio: ' + stream.hasAudio() + ' has video: ' + stream.hasVideo());
    }

    getUidByStreamId(streamId) {
        for (let [uid, stream] of this.members_) {
            if (stream.getId() == streamId) {
                return uid;
            }
        }
    }
}
