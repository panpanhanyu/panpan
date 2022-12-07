/* eslint-disable no-global-assign */
/* global $ TRTC Presetting deviceTestingInit cameraId micId */
const presetting = new Presetting();
presetting.init();
deviceTestingInit();

// check if browser is compatible with TRTC
// TRTC.checkSystemRequirements().then(result => {
//   if (!result) {
//     alert('您的浏览器不兼容此应用！\n建议下载最新版Chrome浏览器');
//     window.location.href = 'http://www.google.cn/chrome/';
//   }
// });
// v4.7.0 及其以上版本的 SDK
TRTC.checkSystemRequirements().then((checkResult) => {
    if(!checkResult.result) {
    console.log('checkResult', checkResult.result, 'checkDetail', checkResult.detail);
    // SDK 不支持当前浏览器，根据用户设备类型建议用户使用 SDK 支持的浏览器
    logError("/index/classrooms/js_log","【房间id"+new_order_id+"】:","checkResult:"+checkResult.result+"===="+"checkDetail"+ JSON.stringify(checkResult.detail));
    alert(checkResult.result);

}
});
// setup logging stuffs
TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.DEBUG);
TRTC.Logger.enableUploadLog();

TRTC.getDevices()
  .then(devices => {
    devices.forEach(item => {
      console.log('device: ' + item.kind + ' ' + item.label + ' ' + item.deviceId);
    });
  })
  .catch(error => console.error('getDevices error observed ' + error));

// populate camera options
TRTC.getCameras().then(devices => {
  devices.forEach(device => {
    if (!cameraId) {
      cameraId = device.deviceId;
    }
    let div = $('<div></div>');
    div.attr('id', device.deviceId);
    div.html(device.label);
    div.appendTo('#camera-option');
  });
});

// populate microphone options
TRTC.getMicrophones().then(devices => {
  devices.forEach(device => {
    if (!micId) {
      micId = device.deviceId;
    }
    let div = $('<div></div>');
    div.attr('id', device.deviceId);
    div.html(device.label);
    div.appendTo('#mic-option');
  });
});