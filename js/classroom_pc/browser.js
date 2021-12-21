$(function(){

    var browser_notice = "您的浏览器不完美支持音频通话,请下载最新版的谷歌浏览器.";
    var browser_notice2 = "该功能在此机型中暂时无法使用,请更新下载最新的Safari浏览器";
    var browser_notice3 = "请在微信中使用";
    var userAgent = navigator.userAgent;
    var system; // 1 Windows 2 Macintosh 3 Android 4 iPhone
    var browser; // 1 Chrome 2 Safari 3 TBS weixin QQ
    var browser_version;
    var pattern;
    if (userAgent.indexOf("Windows") > -1) {
        system = 1;
    } else if (userAgent.indexOf("Macintosh") > -1) {
        system = 2;
    } else if (userAgent.indexOf("Android") > -1) {
        system = 3;
    } else if (userAgent.indexOf("iPhone") > -1) {
        system = 4;
    } else {
        alert(browser_notice);
    }

    if (system === 1) {
        if (userAgent.indexOf("Chrome") > -1) {
            browser = 1;
            pattern = "Chrome/";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 2);
            if (Number(browser_version) < 52) {
                alert(browser_notice);
            } else {
                console.log('windows chrome 52+ QQ browser 10.2');  //  windows chrome 52+ QQ browser 10.2
            }
        }else{
            alert(browser_notice);
        }
    }

    if (system === 2) {
        if (userAgent.indexOf("Chrome") > -1) {
            browser = 1;
            pattern = "Chrome/";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 2);
            if (Number(browser_version) < 47) {
                alert(browser_notice);
            } else {
                console.log('MAC chrome 47+');  //  MAC chrome 47+
            }
        }else if (userAgent.indexOf("Safari") > -1) {
            browser = 2;
            pattern = "Mac OS X ";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 2);
            if (Number(browser_version) < 11) {
                alert(browser_notice);
            } else {
                console.log('MAC safari 11+');  //  MAC safari 11+
            }
        }else{
            alert(browser_notice);
        }
    }

    if (system === 3) {

        // 华为  SAMSUNG Galaxy A7 等机型无法使用

        if (userAgent.indexOf("Chrome") > -1) {
            browser = 1;
            pattern = "Chrome/";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 2);
            if (Number(browser_version) < 60) {
                alert(browser_notice);
            } else {
                console.log('android chrome 60+');  //  android chrome 60+
            }
        }else if (userAgent.indexOf("TBS") > -1) {
            browser = 3;
            pattern = "TBS/0";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 2);
            if (Number(browser_version) < 43600) {
                alert(browser_notice);
            } else {
                console.log('TBS 43600+');  //  TBS 43600+
            }
        }else{
            alert(browser_notice);
        }
    }

    if (system === 4) {
        if (userAgent.indexOf("Safari") > -1) {
            browser = 2;
            pattern = "OS ";
            var browser_version = userAgent.split(pattern)[1];
            var browser_version = browser_version.substring(0, 10);
            var browser_version1 = browser_version.split("_")[0];
            var browser_version2 = browser_version.split("_")[1];
            var browser_version = (Number(browser_version1)) * 10 + Number(browser_version2);
            if(browser_version >= 112){
                console.log('iOS safari 11.2+');  //  iOS safari 11.2+
            }else{
                alert(browser_notice2);
            }
        }else{
            alert(browser_notice2);
        }
    }

        //alert(userAgent);

})