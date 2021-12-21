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
  $(".t_open_yy").show();
  $(".t_down_yy").hide();
  video_time = 4;
 if(video_time_yuan == 1){
     $(".tong-video-div1").show();
     $(".tong-video-div2").hide();
     $(".tong-video-div3").show();
     $(".tong-video-div4").hide();
   tong_time("tong-time", 0);
     video_pause_bei = 2;
 }else{
     $("#tong-dialing").html(video_state_3);
     //  开启5S倒计时
     is_tong_p = 1;
     is_tong_p_dao(15);
 }
  //$("#video-img-v2").attr("src", '/static/img/classroom_pc/yuyin.png'); ////
  $("#video-img-v2").attr("src", down_avatar); ////
  $("#t_video_font2").text(video_state_2);
}

// 挂断
function pause_voice(){

    if(video_pause_bei == 0){ // 没在通话中 仅当 对方挂断或无应答时 才可以挂断
        return false;
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
  $("#t_video_font2").text(video_state_1);
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
}

// 离开房间
function leave(){
  if (!rtc) {
    //Toast.error('请先加入房间！');
    return;
  }
  rtc.leave();
  rtc = null;
}

//自动停止
function video_stop(){
    video_time = 6;
    $(".t_open_yy").hide();
    $(".t_down_yy").show();
    $("#video-img-v2").attr("src", '/static/img/classroom_pc/yuyin.png');
    $("#t_video_font2").text(video_state_1);
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
