  $(document).ready(function() {
      //点击打印
        $("body").on("click",".t_dybtn",function(event) {
          $(".t_dayin_box").hide()
          // $(".slider").css("width",'auto')
          // $(".slider").addClass('t_3d')
          // $(".bx-viewport").css("height",'auto')
          // $(".bx-wrapper").css("height",'auto')
          // .swiper-wrapper{
     //  height: auto
     // }
           $(".swiper-slide").css("background-color",'white')
          $(".swiper-container").css("overflow",'auto')
          $(".swiper-wrapper").css("display",'block')
          $(".swiper-wrapper").css("height",'auto')
          $(".swiper-wrapper").css("transform",'translate3d(0px, 0px, 0px)')
          // //以下是调用上面的函数
          var mb = myBrowser();
          if ("Chrome" == mb) {
             window.print();
          }else{
            history.go(0)
          }

        });
        var beforePrint = function() {

        };

        var afterPrint = function() {
            history.go(0)
        };
        window.onbeforeprint = beforePrint;
        window.onafterprint = afterPrint;

    function pagesetup_null(){                
        var hkey_root,hkey_path,hkey_key;
        hkey_root="HKEY_CURRENT_USER";
        hkey_path="\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
        try{
            var RegWsh = new ActiveXObject("WScript.Shell");
            hkey_key="header";
            RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
            hkey_key="footer";
            RegWsh.RegWrite(hkey_root+hkey_path+hkey_key,"");
        }catch(e){}
    }
    function myBrowser(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1;
        if (isOpera) {
            return "Opera"
        }; //判断是否Opera浏览器
        if (userAgent.indexOf("Firefox") > -1) {
            return "FF";
        } //判断是否Firefox浏览器
        if (userAgent.indexOf("Chrome") > -1){
      return "Chrome";
     }
        if (userAgent.indexOf("Safari") > -1) {
            return "Safari";
        } //判断是否Safari浏览器
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            return "IE";
        }; //判断是否IE浏览器
    }

    //打开打印弹窗
      $("body").on("click",".t_dayin",function(event) {
        /* Act on the event */
        $(".t_dayin_box").show()
        // var mb = myBrowser();
        //   if ("IE" == mb) {
        //       alert("ie")
        //   }else if (!!window.ActiveXObject || "ActiveXObject" in window){
        //    alert("ie")
        //   }else if("Chrome" == mb){
        //     alert("Chrome")
        //   }else{
        //     alert("...")
        //   }
      });
    //关闭打印弹窗
      $("body").on("click",".t_dayin_box",function(event) {
        /* Act on the event */
        $(".t_dayin_box").hide()
      });
      $("body").on("click",".t_dayin_window",function(event) {
        /* Act on the event */
         event.stopPropagation();
      });
      //添加打印按钮
      $(".teacherdisplay .menu").prepend("<span class='t_dayin' >打印</span>")
      $(".studentdisplay .menu").prepend("<span class='t_dayin t_ko' >인쇄하기</span><span class='t_dayin t_en' >print</span>")
      // $(".menu").prepend("<span class='t_dayin' >打印</span>")
      //添加ie控制文件
      // $("body").append('<object id="printWB" style="dispaly:none" classid="clsid:8856F961-340A-11D0-A96B-00C04FD705A2" height="0"></object>')
      //打印弹窗
       $("body").prepend('<div class="t_dayin_box">'+
      '<div class="t_dayin_window">'+

            '<div lang="ko" class="kotranslate Korea t_ko " type="none">'+
              '<p>1. 교재의 대본을 열고 인쇄하시면 '+
              '<br>한국어 번역도 포함되서 인쇄됩니다.</p>'+
              '<p>2. IE에서 인쇄하실 때 교재 양식에 오류가 있는 경우'+
              '<br>Chrome 브라우저를 이용해서 인쇄하시는 것을 권장드립니다.</p>'+
            '</div>'+
            '<div lang="en" class="kotranslate English t_en"  type="none">'+
              '<p>1. Click show button in the textbook and print it out. '+
              '<br>translation is also included and printed.</p>'+
              '<p>2. If there is an error in the textbook form when printing from IE'+
              '<br>We recommend printing using Chrome browser.</p>'+
            '</div>'+


            '<div class="t_dybtn kotranslate Korea t_ko" style="text-align:center" >인쇄하기</div>'+
            '<div class="t_dybtn kotranslate English t_en">print</div>'+
           
      '</div>')
    });