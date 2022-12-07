

// ajax_url='https://devapi.panpanchinese.net/'
// ajax_url_2='https://dev.panpanchinese.net'
ajax_url='https://api.panpanchinese.net/'
ajax_url_2='https://www.panpanchinese.net'

// ajax_url='http://127.0.0.1:88/'
// ajax_url_2='http://127.0.0.1'
// alert(getCaption(window.location.href))
// var aaa=getCaption(window.location.href)

function getCaption(obj){
    var index=obj.lastIndexOf("\=");
    obj=obj.substring(index+1,obj.length);
  //  console.log(obj);
    return obj;
  }

//订单号，房间号，聊天号
new_order_id = getCaption(window.location.href);
// new_order_id=30066
// alert(window.location.href)
// alert(new_order_id)


new_chat_type = 1;//学生
teacher_in_classroom=0//老师是否联通教室
teacher_later=0//老师是否迟到
is_can_complain =0;//是否可以投诉
isover=0//是否上完课 0没有 1上完


var curWwwPath = window.document.location.href;
//获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
var pathName = window.document.location.pathname;
var pos = curWwwPath.indexOf(pathName);
//获取主机地址，如： http://localhost:8083
var localhostPaht = curWwwPath.substring(0, pos);
// alert(sign)
//进入页面
$.ajax({
    url:localhostPaht+"/teacher/api/find_student",    //dataType: "json",
    async: false, //是否异步
    jsonp: "jsapicallback", //服务端用于接收callback调用的function名的参数
    jsonpCallback: "success_jsonpCallback",
    type:"POST",   //请求方式
    success:(res)=>{
        apiid = res.id;
        // apiid = 2;
        token = res.token;
        // token = '3a9ac6758928144b1d0fdb31df8604f9';
        //获取时间戳
        time = Date.parse(new Date())/1000;
        sign = md5('panpan1a2yuji8dd'+time);
    },
    error:function(e){
        //请求出错处理
       
        alert('请求失败：'+e)
    }
});




//进入页面
$.ajax({
    url:ajax_url+"?s=App.WebStudent_WebStudent.Index",    //请求的url地址
    dataType:"json",   //返回格式为json
    async:false,//请求是否异步，默认为异步，这也是ajax重要特性
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

            //配置参数
            //uerid(rtc通话，socket)
            new_user_id  = data.data.order.other_client_name;
            //对方
            new_other_id  = data.data.order.client_name;
            //聊天-uid
            new_chat_uid = data.data.student.id;
            //老师头像
            new_teacher_avatar = data.data.teacher.avatar;
            //学生头像
            new_student_avatar = data.data.student.avatar;
            //学生昵称
            new_student_nickname = data.data.student.nickName;
            //老师昵称
            new_teacher_nickname = data.data.teacher.nickName;
            //教材种类 1官方教材 2上传图片 3上传pdf
            new_material_type = data.data.order.material_status;
            //word
            new_material_word = data.data.order.filePath
            //订单状态 0预约中 1已完成 2已取消 3待评价
            new_order_type = data.data.order.state;
            //  是否到上课时间 0 没到 1 到了 ***
            // dao_time_class = 0; 
            dao_time_class = data.data.order.dao_time_class;   
            //  离上课还剩的秒数
            // dao_time_second =10;
            dao_time_second = data.data.order.dao_time_second;
            //迟到时间
            over_classroom_time = data.data.order.over_classroom_time;
            // over_classroom_time=300
            //0为语音上课，1为视频上课
            voice_or_video=data.data.order.voice_or_video;
            //已经接通时间
            new_phone_time = data.data.order.phone_time;
            //聊天记录
            new_chat_record = data.data.chat;
            //学生自定义要求
            have_other_things = data.data.order.elsedemand
            if(have_other_things!=''){
                $(".t_have_other_things").prepend('<div class="t_fa_box" >' +
                        '<div class="t_talk_content_fa t_true_font ">' +
                        '<div class="t_true_font_text">'
                        + have_other_things +
                        '</div><div></div></div></div>');
            }
            new_load_url=data.data.order.load_url;//自定义教材下载地址
            console.log(new_chat_record)
            /////////////////////////////
            //赋值
            $('.t_new_nickname').text(new_teacher_nickname)
            // $(".t_mod_name").text(new_student_nickname)
            $(".t_new_top_nickname").text(_lang01+new_teacher_nickname+_lang02)
            $(".t_new_startClass_time").text(data.data.order.day+' '+timeConvert(data.data.order.time,0))
            $(".t_new_lesson_type").text(data.data.order.course_name)
            $(".t_new_lesson_num").text(data.data.order.class)
            // $(".t_new_tiyan").text(data.data.order.coupon)
            $(".t_module_head img").attr('src',new_teacher_avatar)
            $(".t_lianxi span").text(data.data.student.wx)
            //教材赋值
            if(new_material_type==1){
                var course_link_1=data.data.order.course_link_1;
                //判断网址是否包换www.
                if(localhostPaht.includes("www.")==false){
                    course_link_1=course_link_1.replace("www.","");
                }
                //官方教材
                $(".t_new_guanfang").show()
                $("#t_jc_iframe").attr('src',course_link_1)
                // $("#t_jc_iframe").attr('src','https://www.panpanchinese.net/materials/material/model02/cy/cy.html?name=proverbs&type=t&course=1')
             }else if(new_material_type==2){
                if(data.data.order.course_link_1==''&&data.data.order.course_link_2==''&&data.data.order.course_link_3==''){
                    $(".t_material_notfind").show()
                 }else{
                    //上传图片
                    $(".t_check_view").show()
                    $(".teaching-material-6").show()
                    if(data.data.order.course_link_1!=''){
                        $(".teaching-materail-6-1 img").attr('src',data.data.order.course_link_1)
                    }else{
                        $(".teaching-materail-6-1 img").hide()
                    }
                    if(data.data.order.course_link_2!=''){
                        $(".teaching-materail-6-2 img").attr('src',data.data.order.course_link_2)
                    }else{
                        $(".teaching-materail-6-2 img").hide()
                    }
                    if(data.data.order.course_link_3!=''){
                        $(".teaching-materail-6-3 img").attr('src',data.data.order.course_link_3)
                    }else{
                        $(".teaching-materail-6-3 img").hide()
                    }
                 }
             }else if(new_material_type==3){
                if(data.data.order.course_link_1==''){
                    $(".t_material_notfind").show()
                 }else{
                    $(".t_word_download").show()
                    $(".t_word_download").attr('src',new_material_word)
                    //上传pdf
                    $(".t_check_view").show()
                    $(".teaching-material-5").show()
                    $(".teaching-material-5").attr('src',data.data.order.course_link_1)
                 }
                
             }

            //上课要求赋值
            var student_ask = data.data.order.demand
            $(".t_student_ask").append('<div class="t_student_ask_tag" >'+_lang03+'</div>')
        }else{
            alert(data.msg)
        }
    },
    error:function(e){
        //请求出错处理
        alert('请求失败：'+e)
    }
});

// timestamp:时间戳 转化为时间
        function timeConvert(timestamp,num){
        //num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss 
            timestamp = timestamp+'';
            timestamp = timestamp.length==10?timestamp*1000:timestamp;
            var date = new Date(timestamp);
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? ('0' + m) : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            var h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;  
            second = second < 10 ? ('0' + second) : second; 
            if(num==0){
                return  h +':'+ minute ;
            }else{
                return y + '-' + m + '-' + d +' '+ h +':'+ minute +':' + second;  
            }
}


// $(function(){
//     if(new_order_type==0){
//         is_can_join = 1;
//         setTimeout(function(){
//             rtc_joinRoom();
//         },10000)
//     }
// })


// $(function(){
//     //刷新进入教室
//     if(new_phone_time!=0&&new_order_type==0){
//         is_can_join = 1
//         $(".inroom").click()
//         time_zheng_s("t_talk_time",new_phone_time,2)
//     } else{
//         //上课前-随机tips
//         var random_beforeclass = parseInt(Math.random() * 100)
//         if(random_beforeclass>75){
//             $(".t_new_tips_con").text('上课前请老师确认麦克风、耳机、网络环境，保证其正常使用')
//         }else if(random_beforeclass>50){
//             $(".t_new_tips_con").text('请务必确认学生的要求事项，例：语速、有无自我介绍')
//         }else if(random_beforeclass>25){
//             $(".t_new_tips_con").text('若开课10分钟后学生还没有进入教室老师可为学生做缺勤处理，并退出教室。')
//         }else{
//             $(".t_new_tips_con").text('确认学生的信息，掌握学生的汉语水平')
//         }
//     }
   
    
    
// })


