/* eslint-disable require-jsdoc */

let rtc = null;

//  进入房间
function video_enter(){
  const userId = $('#userId').val();
  const roomId = $('#roomId').val();
  const config = genTestUserSig(userId);
  rtc = new RtcClient({
    userId,
    roomId,
    sdkAppId: config.sdkAppId,
    userSig: config.userSig
  });
  rtc.join();
  video_time = 2;
    //获取声音
     t_time=setInterval(function(){
        rtc.nowVoice();
        // rtc.audioUp();
        //本地音视频流
        // rtc.localAudio();
        // rtc.localVideo();
        // //远端音视频流
        // rtc.remoteAudio()
        // rtc.remoteVideo()
     },200)
}

// 开始聊天
function start_voice(){
    if(video_time == 6){
        if(role == 2){
            alert('上课结束后不能进行通话');
            return false;
        }else{
            alert(video_state_4);
            return false;   //  过期的教室 禁通话
        }
    }
    if(role == 2){
        teacher_start();
    }
    var d = '{"type":"login","client_name":"'+client_name+'","room_id":"'+chat_room_id+'","is_mobile":4}';
    ws.send(d);
  if (!rtc) {
    Toast.error('请先加入房间！');
    return;
  }
  rtc.publish();

    //音视频流
    t_time2=setInterval(function(){
        // rtc.nowVoice();
        rtc.audioUp();
        //本地音视频流
        rtc.localAudio();
        rtc.localVideo();
        //远端音视频流
        rtc.remoteAudio()
        rtc.remoteVideo()
     },200)
}

// 挂断
function pause_voice(){

    if(role == 2) {
        if (video_pause_bei == 0) { // 没在通话中 仅当 对方挂断或无应答时 才可以挂断
            return false;
        }
    }

    if(video_pause_ju != 1){
        var d = '{"type":"login","client_name":"'+client_name+'","room_id":"'+chat_room_id+'","is_mobile":13}';
        ws.send(d);
        window.location.reload();
        video_pause_ju = 0;
    }

    video_pause_bei = 0;

  if (!rtc) {
    Toast.error('请先加入房间！');
    return;
  }
  rtc.unpublish();
  $(".t_open_yy").hide();
  $(".t_down_yy").show();
  $("#video-img-v2").attr("src", '/static/img/classroom_pc/yuyin.png');
    if(role == 2){
        $("#t_video_font2").text('教室处于连接状态');
    }else{
        $("#t_video_font2").text(video_state_1);
    }
  video_time = 5;
    $(".tong-video-div1").hide();
    $(".tong-video-div2").show();
 if(video_time_yuan == 1){
   clearTimeout(tong_time_s);
   document.getElementById('tong-time').innerHTML =  '';
 }

    $("#tong-dialing").html('');
    is_tong_p = 0;
    is_tong_x = 0;
    if(role == 2){
        voice_teacher_pause = 0;
    }
     clearInterval(t_time2)
     $(".t_videospeed_test").text('0kb');
     $(".t_audiospeed_test").text('0kb');
     $(".t_webspeed_test").text('0ms');
     $(".t_audiospeed_remote").text('0kb');
}

// 离开房间
function leave(){
 
  
  if (!rtc) {
    //Toast.error('请先加入房间！');
    return;
  }
  rtc.leave();
  //停止声音
 clearInterval(t_time)
  rtc = null;

}

//自动停止
function video_stop(){
    video_time = 6;
    $(".t_open_yy").hide();
    $(".t_down_yy").show();
    $("#video-img-v2").attr("src", '/static/img/classroom_pc/yuyin.png');
    if(role == 2){
        $("#t_video_font2").text('教室处于连接状态');
    }else{
        $("#t_video_font2").text(video_state_1);
    }
    $(".tong-video-div1").hide();
    $(".tong-video-div2").show();
    clearTimeout(tong_time_s);
    document.getElementById('tong-time').innerHTML =  '';
    document.getElementById('tong-time').innerHTML =  '';
    $(".call2").show();
    leave();
}

$('#settings').on('click', function(e) {
  e.preventDefault();
  $('#settings').toggleClass('btn-raised');
  $('#setting-collapse').collapse();
});
