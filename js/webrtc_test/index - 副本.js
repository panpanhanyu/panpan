"use strict";


var isWebRTCSupported = false;
['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
    if (isWebRTCSupported) {
        return;
    }
    if (item in window) {
        isWebRTCSupported = true;
    }
});

try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();
} catch (e) {
    console.log('Failed to instantiate an audio context, error: ' + e);
}
function onTitleClick(id) {
    var targetId = "#";
    if (id == "camera-title") {
        targetId += "camera-detail";
    } else if (id == "mic-title") {
        targetId += "mic-detail";
    } else if (id == "connection-title") {
        targetId += "connection-detail";
    } else if (id == "support-title") {
        targetId += "support-detail";
    } else if (id == "browser-title") {
        targetId += "browser-detail";
    } else {
        console.error("wrong id : " + id);
        return;
    }
    if ($(targetId).is(":visible")) {
        $(targetId).hide();
    } else {
        $(targetId).show();
    }
}

function resetUI() {
    var camera = $("#camera-title");
    var mic =  $("#mic-title");
    var connection =  $("#connection-title");
    var support = $("#support-title");
    var browser = $("#browser-title");

    // camera.off("click").on("click", function () {
    //     onTitleClick(this.id);
    // });
    // mic.off("click").on("click", function () {
    //     onTitleClick(this.id);
    // });
    // connection.off("click").on("click", function () {
    //     onTitleClick(this.id);
    // });
    // support.off("click").on("click", function () {
    //     onTitleClick(this.id);
    // });
    // browser.off("click").on("click", function () {
    //     onTitleClick(this.id);
    // });

    // camera[0].innerText = text.Camera;
    // mic[0].innerText = text.Mic;
    // connection[0].innerText = text.Connection;
    // support[0].innerText = text.Support;

    // camera.css("background", "#E2E2E2");
    // mic.css("background", "#E2E2E2");
    // connection.css("background", "#E2E2E2");
    // support.css("background", "#E2E2E2");

    $("#camera-detail").hide();
    $("#browser-detail").hide();
    $("#mic-detail").hide();
    $("#connection-detail").hide();
    $("#support-detail").hide();

    $("#camera-detail")[0].innerText = "";
    $("#mic-detail")[0].innerText = "";
    $("#connection-detail")[0].innerText = "";
    $("#support-detail")[0].innerText = "";
    $("#browser-detail")[0].innerText = "";
}

function checkTBSVersion(ua) {
    //ua = "Mozilla/5.0 (Linux; Android 7.1.1; vivo X9 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043501 Safari/537.36 MicroMessenger/6.5.13.1100 NetType/WIFI Language/zh_CN";
    var list = ua.split(" ");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.indexOf("TBS") !== -1 || item.indexOf("tbs") !== -1) {
            var versionStr = item.split("/")[1];
            var version = parseInt(versionStr) || 0;
            if (version <= 43600) {
                alert("您的TBS版本号(" + versionStr + ")过低，不支持WebRTC，请升级!");
            }
        }
    }
}

function init() {

    resetUI();
    // $("#us")[0].innerText = navigator.userAgent;
    $("#stunserver").val("stun:webrtc.qq.com:8800");
    $("#start-btn").off("click").on("click", function () {
        resetUI();
        startAudioTest();
        startBrowserTest();
    });
    checkTBSVersion(navigator.userAgent);
}

function startLoadingInner(text, dom, step) {
    for (var i = 0; i < step; i++) {
        text += ".";
    }
    dom.innerText = text;
}

function startLoading(text, dom) {
    intervalID = setInterval(function (text, dom) {
        startLoadingInner(text, dom, intervalStep);
        intervalStep++;
        if (intervalStep > 3) {
            intervalStep = 1;
        }
    }, 500, text, dom)
}

function stopLoading() {
    clearInterval(intervalID);
}


var audioMessage = "";
var videoMessage = "";
var supportMessage = "";
var connectionMessage = "";
var intervalID = 0;
var intervalStep = 1;
var text = {
    Mic : "{$Think.lang.t_class_pc103}",
    MicTest : "{$Think.lang.t_class_pc117}",
    Camera : "{$Think.lang.t_class_pc105}",
    CameraTest : "{$Think.lang.t_class_pc118}",
    Support : "{$Think.lang.t_class_pc106}",
    SupportTest : "{$Think.lang.t_class_pc118}",
    Connection : "{$Think.lang.t_class_pc119}",
    ConnectionTest : "{$Think.lang.t_class_pc120}",
    Browser : "{$Think.lang.t_class_pc102}"
};
init();

function onAudioTestMessage(str) {
    audioMessage += str + "\r\n";
}
function onAudioTestDone(result) {
    stopLoading();
    $("#mic-detail")[0].innerText = audioMessage;
    audioMessage = "";
    var titleText = null;
    if (result == 0) {
        $("#mic-title2").css("background", "#e9f2d6");
        $("#mic-title").css("color", "#339900");
        titleText = text.MicTest + " {$Think.lang.t_class_pc108} !!!";

        audioInputTest()
    } else {
        $("#mic-title2").css("background", "#ffe2db");
        $("#mic-title").css("color", "#ff5026");
        titleText = text.MicTest + "  {$Think.lang.t_class_pc109} !!!";
    }
    $("#mic-title")[0].innerText = titleText;
    startVideoTest();
}
function onVideoTestMessage(str) {
    videoMessage += str + "\r\n";
}
function onVideoTestDone(result) {
    stopLoading();
    $("#camera-detail")[0].innerText = videoMessage;
    videoMessage = "";
    var titleText = null;
    if (result == 0) {
        $("#camera-title2").css("background", "#e9f2d6");
        $("#camera-title").css("color", "#339900");
        titleText = text.CameraTest + " {$Think.lang.t_class_pc108}  !!!";
    } else {
        $("#camera-title2").css("background", "#ffe2db");
        $("#camera-title").css("color", "#ff5026");
        titleText = text.CameraTest + " {$Think.lang.t_class_pc109}  !!!";
    }
    $("#camera-title")[0].innerText = titleText;
    startSupportTest();
}
function onSupportTestMessage(str) {
    supportMessage += str + "\r\n";
}
function onSupportTestDone(result) {
    stopLoading();
    $("#support-detail")[0].innerText = supportMessage;
    supportMessage = "";
    var titleText = null;
    if (result == 0) {
        $("#support-title2").css("background", "#e9f2d6");
        $("#support-title").css("color", "#339900");
        titleText = text.SupportTest + " {$Think.lang.t_class_pc108}  !!!";
    } else {
        $("#support-title2").css("background", "#ffe2db");
        $("#support-title").css("color", "#ff5026");
        titleText = text.SupportTest + " {$Think.lang.t_class_pc109}  !!!";
    }
    $("#support-title")[0].innerText = titleText;

    startConnectionTest();
}
function onConnectionTestMessage(str) {
    connectionMessage += str + "\r\n";
}
function onConnectionTestDone(result) {
    stopLoading();
    $("#connection-detail")[0].innerText = connectionMessage;
    connectionMessage = "";
    var titleText = null;

    if (result == 0) {
        $("#connection-title2").css("background", "#e9f2d6");
        $("#connection-title").css("color", "#339900");
        titleText = text.ConnectionTest + " {$Think.lang.t_class_pc108}  !!!";
    } else {
        $("#connection-title2").css("background", "#ffe2db");
        $("#connection-title").css("color", "#ff5026");
        titleText = text.ConnectionTest + " {$Think.lang.t_class_pc109}  !!!";
    }
    $("#connection-title")[0].innerText = titleText;
    disableButton(false, "start-btn");
}

function disableButton(isDisable, id) {
    var queryId = "#" + id;
    $(queryId).prop("disable", isDisable);
}

function startAudioTest() {
    disableButton(true, "start-btn");
    startLoading(text.MicTest, $("#mic-title")[0]);

    if(!isWebRTCSupported){
        onAudioTestDone(-1);
        return;
    }
    if(false && isMobile.iOS()){
        //IOS无法遍历设备，默认认为支持
       onAudioTestDone(0);
       return;
    }
    var audioTest = new WebRTCTest();
    audioTest.setListener({
        onMessage : onAudioTestMessage,
        done : onAudioTestDone
    });
    var micTest = new MicTest(audioTest);
    micTest.run();
}

function startVideoTest() {
    if(!isWebRTCSupported){
        onVideoTestDone(-1);
        return;
    }
    startLoading(text.CameraTest, $("#camera-title")[0]);
    var videoTest = new WebRTCTest();
    videoTest.setListener({
        onMessage : onVideoTestMessage,
        done : onVideoTestDone
    });
    var camTest = new CameraTest(videoTest, [ [640,360], [640,480]]);
    camTest.run();
}

function startSupportTest() {

    if(!isWebRTCSupported || (!isMobile.safari() && isMobile.iOS() )){
        onSupportTestDone(-1);
        return;
    }
    startLoading(text.SupportTest, $("#support-title")[0]);
    var supportTest = new WebRTCTest();
    supportTest.setListener({
        onMessage : onSupportTestMessage,
        done : onSupportTestDone
    });
    var resolutionArray = [
        // [160, 120], [320, 180], [320, 240], [640, 360], [640, 480], [768, 576],
        // [1024, 576], [1280, 720], [1280, 768], [1280, 800], [1920, 1080],
        // [1920, 1200], [3840, 2160], [4096, 2160]
          [1280,720],[960,540], [640,360], [640,480], [480,264], [320,180]
    ];



    var supTest = new CameraTest(supportTest, resolutionArray);
    supTest.run();
}

var FetchSigCgi = 'https://www.qcloudtrtc.com/sxb_dev/?svc=doll&cmd=fetchsig';
function getUserSig( callback ){
    
    $.ajax({
        type: "POST",
        url: FetchSigCgi,
        dataType: 'json',
        data:JSON.stringify({
            appid: 1400027849,
            id : "neallin"
        }),
        success: function (json) {
            if(json && json.errorCode === 0 ){
                //一会儿进入房间要用到
                var url = "wss://webrtc.qq.com:8687/?userSig="+json.data.userSig+"&sdkAppid=1400027849&identifier=neallin";
                callback(url );
            }else{
                console.error(json);
            }
        },
        error: function (err){
            console.error(err);
        }
    })
}

var websocket = null;
function getRelayIp(callback ,error){
    if (websocket) {
        try {
            websocket.close();
            websocket = null;
        } catch (e) {
            console.error(e);
        }
    }
    getUserSig( function(url){
        
        websocket = new WebSocket(url);

        websocket.onmessage = callback;
        websocket.onopen = wsonopen;
        websocket.onerror = error;
        websocket.onclose = wsonclose;
    })
}
// getRelayIp();
function wsonopen(data){
    console.debug(data);
}

function wsonclose(data){
    console.debug(data);
}

function wsonclose(data){
    console.debug(data);
}
function wsonclose(data){
    console.debug(data);
}

var canPlayType = function (element, type) {
    return element.canPlayType(type) == 'probably';
};

function checkH264DecodeSupport(){
    var element = document.createElement('video')
    return !!element.canPlayType && (canPlayType(element, 'video/mp4; codecs="avc1.42E01E"') || canPlayType(element, 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))
}

function checkH264Support( callback ){
    var peer = new RTCPeerConnection(null);
    var decode = checkH264DecodeSupport()
    peer.createOffer({
        offerToReceiveAudio: 1,
        offerToReceiveVideo: 1
    }).then(function(data){
        console.debug('checkH264Support', data.sdp, data.sdp.toLowerCase().indexOf("h264") !== -1)
        var encode = data.sdp.toLowerCase().indexOf("h264") !== -1
        callback( encode , decode  )
        peer.close();
    },function(data){
        callback( false, decode )
    });
}

function startConnectionTest() {
    if(!isWebRTCSupported){
        onConnectionTestDone(-1);
        return;
    }
    getRelayIp(function(data){

        //IOS默认认为支持
        if(isMobile.iOS() && isMobile.safari()){
           onConnectionTestDone(0);
           return;
        }
        var json = JSON.parse(data.data);
        var ip = json.content.relayip;
        startLoading(text.ConnectionTest, $("#connection-title")[0]);
        var connectionTest = new WebRTCTest();
        connectionTest.setListener({
            onMessage : onConnectionTestMessage,
            done : onConnectionTestDone
        });
        var conTest = new ConnectionTest(connectionTest , 'stun:'+ip+":8800");
        conTest.run();
    },function(){
        onConnectionTestDone(-1);
    });

}




function checkTBSVersion(ua) {
    var list = ua.split(" ");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.indexOf("TBS") !== -1 || item.indexOf("tbs") !== -1) {
            var versionStr = item.split("/")[1];
            var version = parseInt(versionStr) || 0;
            return version
        }
    }
    return null;
}

function startBrowserTest(){
    $("#browser-detail")[0].innerText = "";
    var titleText = null;
    $("#browser-title")[0].innerText = titleText;

    $("#browser-detail")[0].innerText = navigator.userAgent;
    var isMobileBrowser = false;
    for(var a in isMobile){
        if( isMobile[a]() ){
            isMobileBrowser = true
            titleText = a + ":";
            var version = checkTBSVersion(navigator.userAgent);
            if( a === 'Android' && version && version < 43600 ){
                $("#browser-title2").css("background", "#ffe2db");
                $("#browser-title").css("color", "#ff5026");
                titleText =  "TBS (version:"+ version + ") {$Think.lang.t_class_pc109}  !!!";
            }
            else if(!isWebRTCSupported || (!isMobile.safari() && isMobile.iOS())) {
                $("#browser-title2").css("background", "#ffe2db");
                $("#browser-title").css("color", "#ff5026");
                titleText = a + "{$Think.lang.t_class_pc102}{$Think.lang.t_class_pc109} !!!";
                onVideoTestDone(-1);
                onSupportTestDone(-1);
            }else{
                if( isMobile.safari() && isMobile.iOS()  ){
                    //ios 11 版本 11.0.3 以下不支持
                    var matches = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    if(matches && matches[1]>=11 && (matches[2]>=1 || matches[3] >= 3) ){
                        $("#browser-title2").css("background", "#e9f2d6");
                        $("#browser-title").css("color", "#339900");
                        titleText =  matches[0] + " {$Think.lang.t_class_pc102}{$Think.lang.t_class_pc108} !!!";
                    }else{
                        $("#browser-title2").css("background", "#ffe2db");
                        $("#browser-title").css("color", "#ff5026");
                        titleText =  matches[0] + "  {$Think.lang.t_class_pc109}  !!!";
                    }
                }else{
                    $("#browser-title2").css("background", "#e9f2d6");
                    $("#browser-title").css("color", "#339900");
                    titleText =  a + " {$Think.lang.t_class_pc102}{$Think.lang.t_class_pc108} !!!";
                }
            }
            $("#browser-title")[0].innerText = titleText;
            break;
        }
    }

    checkH264Support(function(encode, decode){
        titleText = "{$Think.lang.t_class_pc102} {$Think.lang.t_class_pc109} !!!"
        if( !encode || !decode ){
            isWebRTCSupported = false
            if( !encode ){
                titleText +=" (不支持H264：编码)"
            }
            if( !decode ){
                titleText +=" (不支持H264：解码)"
            }
        }
        if( !isMobileBrowser){
            if(isWebRTCSupported){
                titleText =  "{$Think.lang.t_class_pc102}  {$Think.lang.t_class_pc108}  !!!";
                $("#browser-title2").css("background", "#e9f2d6");
                $("#browser-title").css("color", "#339900");
                $("#browser-title")[0].innerText = titleText;
            }else{
    
                
                $("#browser-title2").css("background", "#ffe2db");
                 $("#browser-title").css("color", "#ff5026");
                $("#browser-title")[0].innerText = titleText;
            }
        }
    });

    
}


