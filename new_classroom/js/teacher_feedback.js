$(function(){
    //老师端--课后反馈表单隐藏
        $(".t_teacher_feedback,.t_reset").click(function(event) {
            $(".t_feedback_content input").prop("checked",false)
            $(".t_star_sol").hide()
            $(".t_tea_feedback_con").removeClass('t_tea_feedback_con_show')
            $(".t_teacher_feedback").animate({opacity:0},200,function(){
            $(this).removeClass('t_teacher_feedback_show')
           });
            $(".t_other_thing_tea").val('');
            $(".t_feedtab_tab_box").hide()
            $(".t_queqin_window").hide()
            $(".t_star_pointbox2,.t_star_point,.t_star_point2").hide()
        });
        $(".t_tea_feedback_con").click(function(event) {
             event.stopPropagation();
        });
         //学生端--星星评价
        //打分
        $(".t_star_input_tea").click(function(event) {
            $(this).parent().siblings().find(".t_star_input_tea").prop("checked",false)
            $(this).prop("checked",true)
            var x=$(this).parent().index()
           $(this).parents(".t_star_up").siblings('.t_feedtab_tab_box').find(".t_tab_input").prop("checked",false)
           $(this).parents(".t_star_up").siblings('.t_star_solbox2').find(".t_star_sol").eq(x).show().siblings().hide()
            $(this).parents(".t_star_up").siblings('.t_star_solbox').hide()
            $(this).parents(".t_star_up").siblings('.t_star_solbox2').show()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_pointbox2").show()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_pointbox").hide()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_point2").eq(x).show().siblings().hide()
           $(this).parents(".t_star_up").siblings('.t_feedtab_tab_box').find(".t_feed_change").eq(x).show().siblings().hide()
           $(this).parents(".t_star_up").find(".t_star_solbox, .t_star_solbox2").css('height', '16px');
          $(this).parents(".t_star_up").find(".t_star_alltab").css('min-height', '4vw');
           for(var i=0;i<x;i++){
            $(this).parent().siblings().eq(i).find(".t_star_input_tea").prop("checked",true)
           }
        });
        //模块一--星星
        var arr_tea01=new Array()

        //模块二--星星
        var arr_tea03=new Array()
        //模块三--星星
        var arr_tea04=new Array()
        //模块四--星星
        var arr_tea05=new Array()
        //模块五--星星
        var arr_tea06=new Array()
        $(".t_submit_tea").click(function(event) {
           arr_tea01.length=0;
           arr_tea03.length=0;
           arr_tea04.length=0;
           arr_tea05.length=0;
           arr_tea06.length=0;
           $.each($(".t_star_countone [name='it_teacher']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr_tea01.push(val.value)
            });
           $.each($(".t_star_counttwo [name='it_teacher']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr_tea03.push(val.value)
            });
           $.each($(".t_star_countthree [name='it_teacher']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr_tea04.push(val.value)
            });
           $.each($(".t_star_countfour [name='it_teacher']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr_tea05.push(val.value)
            });
           $.each($(".t_star_countfive [name='it_teacher']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr_tea06.push(val.value)
            });
           
           var content1 = $(".t_other_thing_1").val();
            var content2 = $(".t_other_thing_2").val();

            teacher_feedback(arr_tea01.length, arr_tea03.length, arr_tea04.length, arr_tea05.length, arr_tea06.length, content1, content2);
        });
        //点击缺勤
        $(".t_queqin").click(function(event) {
          
          $(".t_queqin_window").show();
          $(".t_tea_feedback_con").hide();
            // $.ajax({
            //     url: "/index/classroom/is_student_absence",    //请求的url地址
            //     dataType: "json",   //返回格式为json
            //     //参数值
            //     data: {
            //         order_id: c_order_id
            //     },
            //     type: "POST",   //请求方式
            //     success: function (data) {
            //         //请求成功时处理
            //         if (data.code === 0) {
            //             $(".t_queqin_window").show();
            //             $(".t_tea_feedback_con").hide();
            //         } else {
            //             console.log(data);
            //             alert(data.info);
            //         }
            //     },
            //     error: function (req) {
            //         //请求出错处理
            //         console.warn(req);
            //         alert('网络出错');
            //     }
            // });

            /* Act on the event */

        });
         $(".t_qqclose,.t_que_reset").click(function(event) {
             $(".t_queqin_window").hide()
            // $(".t_tea_feedback_con").show()
         });
    
         //打分提示
         $(".t_feedback_star").mouseenter(function(event) {
           /* Act on the event */
           var y=$(this).parent().index()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_pointbox2").hide()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_pointbox").show()
           $(this).parents(".t_star_up").siblings('.t_star_alltab').find(".t_star_point").eq(y).show().siblings().hide()
          $(this).parents(".t_star_up").siblings('.t_star_solbox').show()
          $(this).parents(".t_star_up").siblings('.t_star_solbox').find(".t_star_sol").eq(y).show().siblings().hide()
          $(this).parents(".t_star_up").siblings('.t_star_solbox2').hide()
          // $(this).parents(".t_star_up").siblings(".t_star_solbox, .t_star_solbox2").css('height', '16px');
         });
         $(".t_star_up").mouseleave(function(event) {
           /* Act on the event */
           $(this).siblings('.t_star_alltab').find(".t_star_pointbox2").show()
           $(this).siblings('.t_star_alltab').find(".t_star_point").hide()
           $(this).siblings('.t_star_solbox2').show()
           $(this).siblings('.t_star_solbox').hide()
         
         });
         //星星进入改变
         $(".t_star_countone .t_starbox").mouseenter(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countone .t_starbox").eq(h).find(".t_feedback_star").addClass('t_feedback_star_lei')
           }
         });
         $(".t_star_counttwo .t_starbox").mouseenter(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_counttwo .t_starbox").eq(h).find(".t_feedback_star").addClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countthree .t_starbox").mouseenter(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countthree .t_starbox").eq(h).find(".t_feedback_star").addClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countfour .t_starbox").mouseenter(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countfour .t_starbox").eq(h).find(".t_feedback_star").addClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countfive .t_starbox").mouseenter(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countfive .t_starbox").eq(h).find(".t_feedback_star").addClass('t_feedback_star_lei')
           }
         });
 //星星离开改变
         $(".t_star_countone .t_starbox").mouseleave(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countone .t_starbox").eq(h).find(".t_feedback_star").removeClass('t_feedback_star_lei')
           }
         });
         $(".t_star_counttwo .t_starbox").mouseleave(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_counttwo .t_starbox").eq(h).find(".t_feedback_star").removeClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countthree .t_starbox").mouseleave(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countthree .t_starbox").eq(h).find(".t_feedback_star").removeClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countfour .t_starbox").mouseleave(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countfour .t_starbox").eq(h).find(".t_feedback_star").removeClass('t_feedback_star_lei')
           }
         });
         $(".t_star_countfive .t_starbox").mouseleave(function(event) {
           /* Act on the event */
           // alert("111")
           var z=$(this).index()
           for(var h=0;h<z+1;h++){
            $(".t_star_countfive .t_starbox").eq(h).find(".t_feedback_star").removeClass('t_feedback_star_lei')
           }
         });

       
})