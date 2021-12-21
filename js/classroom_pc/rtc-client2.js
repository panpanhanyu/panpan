/* eslint-disable require-jsdoc */

// 设备初始化不成功 通知老师
function refuse_m(){
    var d = '{"type":"login","client_name":"'+client_name+'","room_id":"'+chat_room_id+'","is_mobile":16}';
    ws.send(d);
}

class RtcClient {
  constructor(options) {
    this.sdkAppId_ = options.sdkAppId;
    this.userId_ = options.userId;
    this.userSig_ = options.userSig;
    this.roomId_ = options.roomId;

    this.isJoined_ = false;
    this.isPublished_ = false;
    this.localStream_ = null;
    this.remoteStreams_ = [];

    // check if browser is compatible with TRTC
    TRTC.checkSystemRequirements().then(result => {
      if (!result) {
        //alert('Your browser is not compatible with TRTC! Please download Chrome M72+');
            $("#call3-notice").html("请使用最新版本的Chrome浏览器进入教室");
        console.log('Your browser is not compatible with TRTC! Please download Chrome M72+');
      }else{
            if (re_browser > 10) {
                if (role == 2) {
                    $("#call3-notice").html("请使用最新版本的Chrome浏览器进入教室");
                } else {
                    $("#call3-notice").html(notice2);
                }
                $(".call3").show();
            }
        }
    });
  }

  async join() {
    if (this.isJoined_) {
      console.warn('duplicate RtcClient.join() observed');
      return;
    }

    // create a client for RtcClient
    this.client_ = TRTC.createClient({
      mode: 'videoCall', // 实时通话模式
      sdkAppId: this.sdkAppId_,
      userId: this.userId_,
      userSig: this.userSig_,
      //pureAudioPushMode: 1, //  添加旁路参数 ####
    });

    // 处理 client 事件
    this.handleEvents();

    try {
      // join the room
      await this.client_.join({ roomId: this.roomId_ });
      console.log('join room success');
      //Toast.notify('进房成功！');
      this.isJoined_ = true;
    } catch (error) {
      console.error('failed to join room because: ' + error);
      //alert(
//          '进房失败原因：' +
//          error +
//          '\r\n\r\n请确保您的网络连接是正常的，您可以先体验一下我们的Demo以确保网络连接是正常的：' +
//          '\r\n https://trtc-1252463788.file.myqcloud.com/web/demo/official-demo/index.html ' +
//          '\r\n\r\n另外，请确保您的账号信息是正确的。' +
//          '\r\n请打开链接：https://cloud.tencent.com/document/product/647/34342 查询详细错误信息！'
//      );
      //Toast.error('进房错误！');
      return;
    }

    try {
      // 采集摄像头和麦克风视频流
      await this.createLocalStream({ audio: true, video: true }); // ####
      //Toast.info('摄像头及麦克风采集成功！');
      console.log('createLocalStream with audio/video success');

    } catch (error) {
      // console.error('createLocalStream with audio/video failed: ' + error);
      console.log('没有麦克风或者摄像头')
      alert(no_audio_tips);
       $(".t_no_open").show()
      // return;
       
       // window.location.reload();
       
      
      try {
        // fallback to capture camera only
        await this.createLocalStream({ audio: true, video: true }); // ####
        //Toast.info('采集摄像头成功！');
      } catch (error) {
        console.log("没有摄像头")
        // console.error('createLocalStream with video failed: ' + error);
        return;
      }

    }

    this.localStream_.on('player-state-changed', event => {
      console.log(`local stream ${event.type} player is ${event.state}`);
      if (event.type === 'video' && event.state === 'PLAYING') {
        // dismiss the remote user UI placeholder
      } else if (event.type === 'video' && event.state === 'STOPPPED') {
        // show the remote user UI placeholder
      }
    });

    // 在名为 ‘local_stream’ 的 div 容器上播放本地音视频
    this.localStream_.play('local_stream');

    // publish local stream by default after join the room
    // await this.publish();
    // Toast.notify('发布本地流成功！');
  }

//实时声音
  async nowVoice(){
     var level=this.localStream_.getAudioLevel()
    // console.log(level*1000)
    // console.log(level)
    $(".t_voice_w").width(level*100+'%')
    if(level*100==0){
         $(".t_voice_w").html('<span style="margin-left:1vw">'+no_voice+'</span>')
    }else{
        $(".t_voice_w").html('')
    }
    //声音可视
        var my_voice=level*100;
        if(my_voice>80){
            $(".t_view_v").eq(0).css('background-color', '#24A25B');
            $(".t_view_v").eq(1).css('background-color', '#24A25B');
            $(".t_view_v").eq(2).css('background-color', '#24A25B');
            $(".t_view_v").eq(3).css('background-color', '#24A25B');
            $(".t_view_v").eq(4).css('background-color', '#24A25B');
        }else if(my_voice>60){
            $(".t_view_v").eq(0).css('background-color', '#24A25B');
            $(".t_view_v").eq(1).css('background-color', '#24A25B');
            $(".t_view_v").eq(2).css('background-color', '#24A25B');
            $(".t_view_v").eq(3).css('background-color', '#24A25B');

            $(".t_view_v").eq(4).css('background-color', '#34363b');
        }else if(my_voice>40){
            $(".t_view_v").eq(0).css('background-color', '#24A25B');
            $(".t_view_v").eq(1).css('background-color', '#24A25B');
            $(".t_view_v").eq(2).css('background-color', '#24A25B');

            $(".t_view_v").eq(3).css('background-color', '#34363b');
            $(".t_view_v").eq(4).css('background-color', '#34363b');
        }else if(my_voice>20){
            $(".t_view_v").eq(0).css('background-color', '#24A25B');
            $(".t_view_v").eq(1).css('background-color', '#24A25B');

            $(".t_view_v").eq(2).css('background-color', '#34363b');
            $(".t_view_v").eq(3).css('background-color', '#34363b');
            $(".t_view_v").eq(4).css('background-color', '#34363b');
        }else if(my_voice>0){
            $(".t_view_v").eq(0).css('background-color', '#24A25B');

            $(".t_view_v").eq(1).css('background-color', '#34363b');
            $(".t_view_v").eq(2).css('background-color', '#34363b');
            $(".t_view_v").eq(3).css('background-color', '#34363b');
            $(".t_view_v").eq(4).css('background-color', '#34363b');
        }else{
            $(".t_view_v").eq(0).css('background-color', '#34363b');
            $(".t_view_v").eq(1).css('background-color', '#34363b');
            $(".t_view_v").eq(2).css('background-color', '#34363b');
            $(".t_view_v").eq(3).css('background-color', '#34363b');
            $(".t_view_v").eq(4).css('background-color', '#34363b');

        }
   
  }
//打开声音
  async openVoice(){
      this.localStream_.unmuteAudio();
  }
//关闭声音
  async closeVoice(){
      this.localStream_.muteAudio();
  }
//打开视频
  async openVideo(){
    this.localStream_.unmuteVideo();
  }
//关闭视频
  async closeVideo(){
      this.localStream_.muteVideo();
  }
//获取网速
  async audioUp(){
      this.client_.getTransportStats().then(stats => {
      // console.log(stats.rtt+'ms')
      $(".t_webspeed_test").text(stats.rtt+'ms')
    });
  }

//本地已发布音频数据
async localAudio(){
      this.client_.getLocalAudioStats().then(stats => {
      for (let userId in stats) {
          console.log('userId: ' + userId +
                      ' bytesSent: ' + stats[userId].bytesSent +
                      ' packetsSent: ' + stats[userId].packetsSent);
          var localAudioKB= stats[userId].bytesSent*0.000977
            localAudioKB=localAudioKB.toFixed(1)
          $(".t_audiospeed_test").text(localAudioKB+'kb')
        }
    });
  }

//本地已发布视频数据
async localVideo(){
      this.client_.getLocalVideoStats().then(stats => {
      for (let userId in stats) {
        console.log('userId: ' + userId +
                    'bytesSent: ' + stats[userId].bytesSent +
                    'packetsSent: ' + stats[userId].packetsSent +
                    'framesEncoded: ' + stats[userId].framesEncoded +
                    'framesSent: ' + stats[userId].framesSent +
                    'frameWidth: ' + stats[userId].frameWidth +
                    'frameHeight: ' + stats[userId].frameHeight);
        var localVideoKB= stats[userId].bytesSent*0.000977
            localVideoKB=localVideoKB.toFixed(1)
          $(".t_videospeed_test").text(localVideoKB+'kb')
      }
    });
  }

//远端已发布音频数据
async remoteAudio(){
      this.client_.getRemoteAudioStats().then(stats => {
      for (let userId in stats) {
        console.log('---userId: ' + userId +
                    ' bytesReceived: ' + stats[userId].bytesReceived +
                    ' packetsReceived: ' + stats[userId].packetsReceived +
                    ' packetsLost: ' + stats[userId].packetsLost);
        var remoteAudioKB= stats[userId].bytesReceived*0.000977
            remoteAudioKB=remoteAudioKB.toFixed(1)
          $(".t_audiospeed_remote").text(remoteAudioKB+'kb')
      }
    });
  }

  //远端已发布视频数据
async remoteVideo(){
      this.client_.getRemoteVideoStats().then(stats => {
      for (let userId in stats) {
        console.log('---userId: ' + userId +
                    ' bytesReceived: ' + stats[userId].bytesReceived +
                    ' packetsReceived: ' + stats[userId].packetsReceived +
                    ' packetsLost: ' + stats[userId].packetsLost +
                    ' framesDecoded: ' + stats[userId].framesDecoded +
                    ' frameWidth: ' + stats[userId].frameWidth +
                    ' frameHeight: ' + stats[userId].frameHeight);
        var remoteVideoKB= stats[userId].bytesReceived*0.000977
            remoteVideoKB=remoteVideoKB.toFixed(1)
          $(".t_videospeed_remote").text(remoteVideoKB+'kb')

      }
    });
  }

//切换摄像头
  async changeCamera(cameraId){
     // var level=this.localStream_.getAudioLevel()
    // console.log(level*1000)
    // console.log(level)
     this.localStream_.switchDevice('video', cameraId).then(() => {
        // camera切换成功
        alert(changeCamera_tips)
      });
   
  }
  //切换麦克风
  async changeMic(micId){
     // var level=this.localStream_.getAudioLevel()
    // console.log(level*1000)
    // console.log(level)
     this.localStream_.switchDevice('audio', micId).then(() => {
        // camera切换成功
        alert(changeMic_tips)
      });
   
  }
    //切换扬声器
  async changeYsq(ysqId){
     this.localStream_.setAudioOutput(ysqId).then(() => {
        // camera切换成功
        // alert("扬声器切换成功")
      });
   
  }












  async leave() {
    if (!this.isJoined_) {
      console.warn('leave() - leave without join()d observed');
      //Toast.error('请先加入房间！');
      return;
    }

    if (this.isPublished_) {
      // ensure the local stream has been unpublished before leaving.
      await this.unpublish(true);
    }
    //removeView("local_stream");

    try {
      // leave the room
      await this.client_.leave();
      //Toast.notify('退房成功！');
      this.isJoined_ = false;
    } catch (error) {
      console.error('failed to leave the room because ' + error);
      location.reload();
    } finally {
      // 停止本地流，关闭本地流内部的音视频播放器
      this.localStream_.stop();
      // 关闭本地流，释放摄像头和麦克风访问权限
      this.localStream_.close();
      this.localStream_ = null;
    }
  }

  async publish() {
    if (!this.isJoined_) {
     // Toast.error('请先加入房间再点击开始推流！');
      console.warn('publish() - please join() firstly');
      return;
    }
    if (this.isPublished_) {
      console.warn('duplicate RtcClient.publish() observed');
     // Toast.error('当前正在推流！');
      return;
    }
    try {
      // 发布本地流
      await this.client_.publish(this.localStream_);

        //  todo 本地流发布成功
        $(".tong-video-div1").show();
        $(".tong-video-div2").hide();
        //$(".tong-video-div3").show();
        //$(".tong-video-div4").hide();
        $(".t_open_yy").show();
        $(".t_down_yy").hide();
        video_time = 4;
        if(video_time_yuan == 1){
            tong_time("tong-time", 0);
            video_pause_bei = 2;
        }else{
            $("#tong-dialing").html(video_state_3);
            //  开启5S倒计时
            is_tong_p = 1;
            is_tong_p_dao(30);
        }
        $("#video-img-v2").attr("src", down_avatar); ////
        $("#t_video_font2").text(video_state_2);

     // Toast.info('发布本地流成功！');
      this.isPublished_ = true;
    } catch (error) {
        refuse_m();
        $(".call1").hide();
        if(video_state_6 == 1){
            if(role == 2){
                alert('没有麦克风摄像头或权限未打开');
            }else{
                alert(video_state_5);
            }
        }else{
            alert(video_state_5 + "\n" + video_state_6 + "\n\n" + "(문제가 지속되는 경우 FAQ 를 확인 해주세요.)");
        }
        window.location.reload();
        //alert('麦克风摄像头设备故障或权限未打开');
      console.error('failed to publish local stream ' + error);
     // Toast.error('发布本地流失败！');
      this.isPublished_ = false;
    }
  }

  async unpublish(isLeaving) {
    if (!this.isJoined_) {
      console.warn('unpublish() - please join() firstly');
     // Toast.error('请先加入房间再停止推流！');
      return;
    }
    if (!this.isPublished_) {
      console.warn('RtcClient.unpublish() called but not published yet');
     // Toast.error('当前尚未发布本地流！');
      return;
    }

    try {
      // 停止发布本地流
      await this.client_.unpublish(this.localStream_);
      this.isPublished_ = false;
      //Toast.info('停止发布本地流成功！');
    } catch (error) {
      console.error('failed to unpublish local stream because ' + error);
      //Toast.error('停止发布本地流失败！');
      if (!isLeaving) {
        console.warn('leaving the room because unpublish failure observed');
        //Toast.error('停止发布本地流失败，退出房间！');
        this.leave();
      }
    }
  }

  async createLocalStream(options) {
    this.localStream_ = TRTC.createStream({
      audio: options.audio, // 采集麦克风
      video: options.video, // 采集摄像头 ####
      userId: this.userId_
       //cameraId: getCameraId(),
       //microphoneId: getMicrophoneId()
    });
    // 设置视频分辨率帧率和码率
    this.localStream_.setVideoProfile('240p');

    // 使用自定义视频Profile设置 todo 自定义
    //this.localStream_.setVideoProfile({
    //    width: 400, // 视频宽度
    //    height: 400, // 视频高度
    //    frameRate: 15, // 帧率
    //    bitrate: 350 // 比特率 kbps
    //});

    await this.localStream_.initialize();
  }

  handleEvents() {
    // 处理 client 错误事件，错误均为不可恢复错误，建议提示用户后刷新页面
    this.client_.on('error', err => {
      console.error(err);
      alert(err);
      //Toast.error('客户端错误：' + err);
      // location.reload();
    });

    // 处理用户被踢事件，通常是因为房间内有同名用户引起，这种问题一般是应用层逻辑错误引起的
    // 应用层请尽量使用不同用户ID进房
    this.client_.on('client-banned', err => {
      console.error('client has been banned for ' + err);
      //Toast.error('用户被踢出房间！');
      // location.reload();
    });

    // 远端用户进房通知 - 仅限主动推流用户
    this.client_.on('peer-join', evt => {
      const userId = evt.userId;
      console.log('peer-join ' + userId);
      //Toast.notify('远端用户进房 - ' + userId);
    });
    // 远端用户退房通知 - 仅限主动推流用户
    this.client_.on('peer-leave', evt => {
      const userId = evt.userId;
      console.log('peer-leave ' + userId);
      //Toast.notify('远端用户退房 - ' + userId);
    });

    // 处理远端流增加事件
    this.client_.on('stream-added', evt => {
      const remoteStream = evt.stream;
      const id = remoteStream.getId();
      const userId = remoteStream.getUserId();
      console.log(`remote stream added: [${userId}] ID: ${id} type: ${remoteStream.getType()}`);
      //Toast.info('远端流增加 - ' + userId);
      console.log('subscribe to this remote stream');
      // 远端流默认已订阅所有音视频，此处可指定只订阅音频或者音视频，不能仅订阅视频。
      // 如果不想观看该路远端流，可调用 this.client_.unsubscribe(remoteStream) 取消订阅
      this.client_.subscribe(remoteStream);
    });

    // 远端流订阅成功事件
    this.client_.on('stream-subscribed', evt => {
        const remoteStream = evt.stream;
        const id = remoteStream.getId();
        this.remoteStreams_.push(remoteStream);
        addView(id);
        // 在指定的 div 容器上播放音视频
        remoteStream.play(id);
        //$(".tong-video-div1").show();
        //$(".tong-video-div2").hide();
        $(".tong-video-div3").show();
        $(".tong-video-div4").hide();
        //var d = '{"type":"login","client_name":"'+client_name+'","room_id":"'+chat_room_id+'","is_mobile":5}';
        //ws.send(d);
      video_time_yuan = 1;
      if(video_time != 4){
        setInterval(function(){
          rtc.remoteAudio()
          rtc.remoteVideo()
        },200)
        $(".call1").show()
      }else{
      tong_time("tong-time", 0);
      $("#tong-dialing").html('');
          is_tong_p = 0;
          clearInterval(t_is_tong_p_dao);
      }
        video_pause_bei = 5;
      $("#video-img-v1").attr("src", up_avatar); ////
      $("#t_video_font1").text(video_state_2);

      console.log('stream-subscribed ID: ', id);
      //Toast.info('远端流订阅成功 - ' + remoteStream.getUserId());
    });

    // 处理远端流被删除事件
    this.client_.on('stream-removed', evt => {
        const remoteStream = evt.stream;
        const id = remoteStream.getId();
        // 关闭远端流内部的音视频播放器
        remoteStream.stop();
        this.remoteStreams_ = this.remoteStreams_.filter(stream => {
            return stream.getId() !== id;
        });
        removeView(id);
        $(".tong-video-div1").hide();
        $(".tong-video-div2").show();
        $(".tong-video-div3").hide();
        $(".tong-video-div4").show();
video_pause_bei = 0;


$("#video-img-v1").attr("src", '/static/img/classroom_pc/yuyin.png');
$("#t_video_font1").text(video_state_1);
    //   console.log(tong_time_s);
      video_time_yuan = 0;
      if(video_time == 4){
      clearTimeout(tong_time_s);
        document.getElementById('tong-time').innerHTML =  '';
        pause_voice();
          //video_time = 5;
          $(".call2").show();
    }else{
          $(".tong-video-div3").hide();
          $(".tong-video-div4").show();
      }

      console.log(`stream-removed ID: ${id}  type: ${remoteStream.getType()}`);
      //Toast.info('远端流删除 - ' + remoteStream.getUserId());
    });

    // 处理远端流更新事件，在音视频通话过程中，远端流音频或视频可能会有更新
    this.client_.on('stream-updated', evt => {
      const remoteStream = evt.stream;
      console.log(
        'type: ' +
          remoteStream.getType() +
          ' stream-updated hasAudio: ' +
          remoteStream.hasAudio() +
          ' hasVideo: ' +
          remoteStream.hasVideo()
      );
      //Toast.info('远端流更新！');
    });

    // 远端流音频或视频mute状态通知
    this.client_.on('mute-audio', evt => {
      console.log(evt.userId + ' mute audio');
    });
    this.client_.on('unmute-audio', evt => {
      console.log(evt.userId + ' unmute audio');
    });
    this.client_.on('mute-video', evt => {
      console.log(evt.userId + ' mute video');
    });
    this.client_.on('unmute-video', evt => {
      console.log(evt.userId + ' unmute video');
    });

    // 信令通道连接状态通知
    this.client_.on('connection-state-changed', evt => {
      console.log(`RtcClient state changed to ${evt.state} from ${evt.prevState}`);
    });
  }
}
