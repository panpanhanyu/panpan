/* eslint-disable no-cond-assign */
/* global $ TRTC presetting RtcClient ShareClient */
/* eslint-disable require-jsdoc */
let isCamOn = true;
let isMicOn = true;
let isScreenOn = false;
let isJoined = true;
let rtc = null;
let share = null;
let shareUserId = '';
let cameraId = '';
let micId = '';
let video=false;
let plays='t_new_video_talk_box2';



TRTC.getCameras().then((result) => {
    console.log('摄像头列表---：'+JSON.stringify(result))
//判断是否有摄像头
if(result.length==0){
    no_camera_result = 0
    $("#cameraId").append('<option >'+_lang15+'</option>')
    $(".t_is_have_camera_img").attr('src', '/Classroomstudent/img/set_fail.png');
    if(voice_or_video==1){
        $.growl.error({
            title: _lang04,
            message: _lang15
        });
    }
}else{
    no_camera_result = 1
    $(".t_is_have_camera_img").attr('src', '/Classroomstudent/img/set_success.png');
    for(var y = 0;y<result.length;y++){
        result[y].label;
        result[y].deviceId;
        $("#cameraId").append('<option value='+result[y].deviceId+' >'+result[y].label+'</option>')
    }
}
//判断视频上课还是音频上课
if(voice_or_video==0){
    //语音上课
}else if(voice_or_video==1){
    //视频上课
    // 本地从麦克风和摄像头采集本地音视频流
    if(no_camera_result==0){
        voice_or_video=0
    }
}

if(new_order_type==0){
    rtc_joinRoom();
    if(new_phone_time!=0){
        time_zheng_s("t_talk_time",new_phone_time,2)
    }
}
});
//加入房间
function rtc_joinRoom(){
    //视频上课
    if(voice_or_video==1){
        //显示本地视频模块，隐藏音频模块
        $("#t_new_video_talk_box2").show()
        $("#t_new_voice_talk_box2").hide()
        video=true;
        plays='t_new_video_talk_box2';
    }

    //语音上课
    if(voice_or_video==0){
        //显示本地音频模块，隐藏视频模块
        $("#t_new_video_talk_box2").hide()
        $("#t_new_voice_talk_box2").show()
        video=false;
        plays='t_new_voice_talk_box2';
    }


    userId_ = new_user_id;
    config_ = genTestUserSig(userId_);
    sdkAppId_ = config_.sdkAppId;
    userSig_ = config_.userSig;
    roomId_ = new_order_id;
    // rtc = new RtcClient({sdkAppId,userId,userSig,roomId});
    rtc =  new RtcClient({
        sdkAppId: sdkAppId_,
        userId: userId_,
        userSig: userSig_,
        roomId: roomId_,
        video: video,
        plays: plays
    });
    rtc.join();
    classroom_is_content=1
    $.growl.notice({
        title: _lang06,
        message: _lang07
    });
    //更换打电话按钮
    $(".t_down_yy").hide()
    $(".t_open_yy").show()
    //更换本地头像
    $("#video-img-v2").attr('src',new_student_avatar)
    $(".t_new_ispeoplein2").addClass("t_new_ispeoplein_lei")
    //更换本地文字
    $("#t_video_font2").text(_lang13)
}




//退出
function rtc_leave(){
    isJoined = true;
    // client_.unpublish(localStream);
    rtc.leave();
    // localStream.stop();
    $(".t_new_timebox").empty()
    $(".t_new_timebox").text(_lang09)
    isover=1
    is_can_join = 0
    $.ajax({
        url:ajax_url+"?s=App.WebStudent_WebStudent.Exit_room",    //请求的url地址
        dataType:"json",   //返回格式为json
        async:true,//请求是否异步，默认为异步，这也是ajax重要特性
        data:{
            "room_id":new_order_id,
            "timestamp":time,
            "sign":sign,
            "id":apiid,
            "is_web":"pc",
            "token":token
        },    //参数值
        jsonp: "jsapicallback",
        jsonpCallback: "",
        type:"POST",   //请求方式
        success:function(data){
            //请求成功时处理
            // console.log(data)
            // console.log(data.ret)
            if(data.ret==200){
                console.log('退出教室成功')
            }else{
                alert(data.msg)
            }
        },
        error:function(e){
            //请求出错处理
            alert('请求失败：'+JSON.stringify(e))
        }
    });

    $(".t_new_iscan_start").text(_lang10)
    $(".t_new_lasttime_font").text(_lang11)
    $(".t_new_timebox").show()
    $(".t_new_timebox2").hide()
    $("#t_lasttime_show").text('0:00:00')
    $(".t_new_timebox").addClass("t_new_gray_bg")
    $(".t_new_timebox").removeClass("t_new_green_bg")
    $("#t_lasttime_show").addClass("t_new_time_color_gray")
    $("#t_lasttime_show").removeClass("t_new_time_color_red")
    $("#t_lasttime_show").removeClass("t_new_time_color_white")

    classroom_is_content=0




    console.log("本地退出房间")
    $.growl.notice({
        title: _lang28,
        message: _lang12
    });
    //还原打开麦克风
    $(".t_gv").show()
    $(".t_kv").hide()
    //还原打开摄像头
    $(".t_gs").show()
    $(".t_ks").hide()
    //还原打电话按钮
    $(".t_down_yy").show()
    $(".t_open_yy").hide()
    //还原本地文字
    $("#t_video_font2").text(_lang13)
    //还原远端文字
    $("#t_video_font1").text(_lang14)
    //切断rtc关联
    other_is_coming_rtc=0;
    //还原本地头像
    $("#video-img-v2").attr('src','/Classroomstudent/img/come.png')
    $(".t_new_ispeoplein2").removeClass("t_new_ispeoplein_lei")
    //还原远端头像
    $("#video-img-v1").attr('src','/Classroomstudent/img/come.png')
    $(".t_new_ispeoplein1").removeClass("t_new_ispeoplein_lei")
    //还原本地音量
    $(".localvoice").text(0)
    //还原远端音量
    $(".remotevoice").text(0)
    //还原音量条
    $(".t_new_voice_num").css('width','0')
    //还原本地网络条
    // $(".t_view_voice_box2").find(".t_view_v").eq(0).css('background-color','#000000')
    // $(".t_view_voice_box2").find(".t_view_v").eq(1).css('background-color','#000000')
    // $(".t_view_voice_box2").find(".t_view_v").eq(2).css('background-color','#000000')
    // $(".t_view_voice_box2").find(".t_view_v").eq(3).css('background-color','#000000')
    // $(".t_view_voice_box2").find(".t_view_v").eq(4).css('background-color','#000000')
    //还原远端网络条
    // $(".t_view_voice_box1").find(".t_view_v").eq(0).css('background-color','#000000')
    // $(".t_view_voice_box1").find(".t_view_v").eq(1).css('background-color','#000000')
    // $(".t_view_voice_box1").find(".t_view_v").eq(2).css('background-color','#000000')
    // $(".t_view_voice_box1").find(".t_view_v").eq(3).css('background-color','#000000')
    // $(".t_view_voice_box1").find(".t_view_v").eq(4).css('background-color','#000000')
    //还原对方音频，视频模块
    $("#t_new_video_talk_box1").hide()
    $("#t_new_voice_talk_box1").show()
    //还原本地音频，视频模块
    $("#t_new_video_talk_box2").hide()
    $("#t_new_voice_talk_box2").show()
    //还原本地rtt
    $(".t_webspeed_test_mine_ms").text('0ms')
    $(".t_webspeed_test_mine_kb").text('0kb')
    $(".t_webspeed_test_other").text('0kb')
    //还原顶部头像
    $(".t_new_header").attr('src','/Classroomstudent/img/come.png')
    console.log('本地退出房间成功')
}



//关闭声音
function rtc_closeVoice(){
    if(classroom_is_content==1){
        $(".t_kv").show()
        $(".t_gv").hide()
        rtc.muteLocalAudio();
    }

}

//打开声音
function rtc_openVoice(){
    if(classroom_is_content==1){
        $(".t_gv").show()
        $(".t_kv").hide()
        rtc.unmuteLocalAudio();
    }
}

//关闭摄像头
function rtc_closeVideo(){
    if(classroom_is_content==1&&voice_or_video==1){
        $(".t_gs").hide()
        $(".t_ks").show()
        $("#t_new_video_talk_box2").hide()
        $("#t_new_voice_talk_box2").show()

        rtc.muteLocalVideo();
    }
}

//打开摄像头
function rtc_openVideo(){
    if(classroom_is_content==1&&voice_or_video==1){
        $(".t_gs").show()
        $(".t_ks").hide()
        $("#t_new_video_talk_box2").show()
        $("#t_new_voice_talk_box2").hide()
        rtc.unmuteLocalVideo();
    }

}

//更改摄像头

$("#cameraId").change(function(){
    var camera_devices=$(this).find("option:selected").val()

    rtc.switchDevice('video', camera_devices);
})

//更改麦克风
$("#microphoneId").change(function(){
    var mic_devices=$(this).find("option:selected").val()
    rtc.switchDevice('audio', mic_devices);
})




var audio_select="";


TRTC.getMicrophones().then((result) => {
    console.log('麦克风列表---：'+JSON.stringify(result))
// if(result.length!=0){
//   $(".t_mic_list").empty()
//   for(var i = 0;i<result.length;i++){
//     $(".t_mic_list").append('<option value="'+result[i].deviceId+'">'+result[i].label+'</option>')
//   }
// }

//判断是否有麦克风
if(result.length==0){
    $("#microphoneId").append('<option >'+_lang16+'</option>')
    $(".t_is_have_mic_img").attr('src', '/Classroomstudent/img/set_fail.png');
    $.growl.error({
        title: _lang04,
        message: _lang16
    });
    setInterval(function(){
        $.growl.error({
            title: _lang04,
            message: _lang16
        });
    },6000)
}else{
    $(".t_is_have_mic_img").attr('src', '/Classroomstudent/img/set_success.png');

    // ;
    console.log(result);
    for(var i = 0;i<result.length;i++){
        // $('#microphoneId').empty();//清空列表，只保留一个麦克风
        result[i].label;
        result[i].deviceId;
        audio_select=result[i].deviceId;
        $("#microphoneId").append('<option value='+result[i].deviceId+' >'+result[i].label+'</option>')
    }
    //   var i=(result.length)-1;
    //   $("#microphoneId").append('<option value='+result[i].deviceId+' selected>'+result[i].label+'</option>');
    //   localStream.switchDevice('audio', result[i].deviceId);
    //   $("#microphoneId").change();
}

});

TRTC.getSpeakers().then((result) => {
    console.log('扬声器列表---：'+JSON.stringify(result))
// if(result.length!=0){
//   $(".t_speaker_list").empty()
//   for(var i = 0;i<result.length;i++){
//     $(".t_speaker_list").append('<option value="'+result[i].deviceId+'">'+result[i].label+'</option>')
//   }
// }
//
//判断是否有扬声器
if(result.length==0){
    var issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    if(issafariBrowser){
        $(".t_is_have_speaker_img").attr('src', '/Classroomstudent/img/set_success.png');
        // var x=(result.length)-1;
        $("#ysq").append('<option value="" >默认扬声器</option>')
    }else{
        $("#ysq").append('<option >'+_lang17+'</option>')
        $(".t_is_have_speaker_img").attr('src', '/Classroomstudent/img/set_fail.png');
        $.growl.error({
            title: _lang04,
            message: _lang17
        });
        setInterval(function(){
            $.growl.error({
                title: _lang04,
                message: _lang17
            });
        },6000)
    }

}else{
    $(".t_is_have_speaker_img").attr('src', '/Classroomstudent/img/set_success.png');
    var x=(result.length)-1;
    $("#ysq").append('<option value='+result[x].deviceId+'  selected>'+result[x].label+'</option>')
    // for(var x = 0;x<result.length;x++){
    //   result[x].label;
    //   result[x].deviceId;
    //   if(result[x].deviceId==result.deviceId){
    //     $("#ysq").append('<option value='+result[x].deviceId+' selected >'+result[x].label+'</option>')
    //   }else{
    //     $("#ysq").append('<option value='+result[x].deviceId+' >'+result[x].label+'</option>')
    //   }
    // }
}

});



function getCameraId() {
    console.log('selected cameraId: ' + cameraId);
    return cameraId;
}

function getMicrophoneId() {
    console.log('selected microphoneId: ' + micId);
    return micId;
}

function addVideoView(id, isLocal = false) {
    let div = $('<div/>', {
        id: id,
        class: 'video-box',
        style: 'justify-content: center'
    });
    div.appendTo('#video-grid');
    //设置监听
    div.click(() => {
        let mainVideo = $('.video-box').first();
    if (div.is(mainVideo)) {
        return;
    }
    //释放main-video grid-area
    mainVideo.css('grid-area', 'auto/auto/auto/auto');
    exchangeView(div, mainVideo);
    //将video-grid中第一个div设为main-video
    $('.video-box')
        .first()
        .css('grid-area', '1/1/3/4');
    //chromeM71以下会自动暂停，手动唤醒
    if (getBroswer().broswer == 'Chrome' && getBroswer().version < '72') {
        rtc.resumeStreams();
    }
});
}
function getBroswer() {
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/))
        ? (sys.edge = s[1])
        : (s = ua.match(/rv:([\d.]+)\) like gecko/))
        ? (sys.ie = s[1])
        : (s = ua.match(/msie ([\d.]+)/))
            ? (sys.ie = s[1])
            : (s = ua.match(/firefox\/([\d.]+)/))
                ? (sys.firefox = s[1])
                : (s = ua.match(/chrome\/([\d.]+)/))
                    ? (sys.chrome = s[1])
                    : (s = ua.match(/opera.([\d.]+)/))
                        ? (sys.opera = s[1])
                        : (s = ua.match(/version\/([\d.]+).*safari/))
                            ? (sys.safari = s[1])
                            : 0;

    if (sys.edge) return { broswer: 'Edge', version: sys.edge };
    if (sys.ie) return { broswer: 'IE', version: sys.ie };
    if (sys.firefox) return { broswer: 'Firefox', version: sys.firefox };
    if (sys.chrome) return { broswer: 'Chrome', version: sys.chrome };
    if (sys.opera) return { broswer: 'Opera', version: sys.opera };
    if (sys.safari) return { broswer: 'Safari', version: sys.safari };

    return { broswer: '', version: '0' };
}
// TRTC.getCameras().then((result) => {
//   console.log('摄像头列表---：'+JSON.stringify(result))
//   if(result.length!=0){
//     $(".t_camera_list").empty()
//     for(var i = 0;i<result.length;i++){
//       $(".t_camera_list").append('<option value="'+result[i].deviceId+'">'+result[i].label+'</option>')
//     }
//   }

// });

//视频出错提示
function video_error() {
    $(".video_error").show();
}


//挂断电话弹窗
$(".video_btn").click(function(event) {
    // video_pause_bei = 0;
   rtc.videoPlay();
   $(".video_error").hide();
});




