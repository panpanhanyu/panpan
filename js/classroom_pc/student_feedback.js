$(function(){
  
        //学生端--课后反馈表单隐藏
        $(".t_student_feedback").click(function(event) {
            $(".t_feedback_content input").prop("checked",false)
            $(".t_star_sol").hide()
            $(".t_stu_feedback_con").removeClass('t_stu_feedback_con_show')
            $(".t_student_feedback").animate({opacity:0},200,function(){
            $(this).removeClass('t_student_feedback_show')
           });
            $(".t_other_thing").val('');
            $(".t_feed_change").hide()
        });
        $(".t_stu_feedback_con").click(function(event) {
             event.stopPropagation();
        });
        
        //学生端--星星评价
        //打分
        $(".t_star_input").click(function(event) {
            $(this).parent().siblings().find(".t_star_input").prop("checked",false)
            $(this).prop("checked",true)
           var x=$(this).parent().index()
           $(this).parents(".t_star_up").siblings('.t_star_solbox2').find(".t_star_sol").eq(x).show().siblings().hide()
            $(this).parents(".t_star_up").siblings('.t_star_solbox').hide()
            $(this).parents(".t_star_up").siblings('.t_star_solbox2').show()
           $(this).parents(".t_star_up").siblings('.t_feedtab_tab_box').find(".t_tab_input").prop("checked",false)
           $(this).parents(".t_star_up").siblings('.t_star_solbox').find(".t_star_sol").eq(x).show().siblings().hide()
           $(this).parents(".t_star_up").siblings('.t_feedtab_tab_box').find(".t_feed_change").eq(x).show().siblings().hide()
           for(var i=0;i<x;i++){
            $(this).parent().siblings().eq(i).find(".t_star_input").prop("checked",true)
           }
           t_c=0
        });
        //模块一--星星
        var arr=new Array()
        //模块一--标签
        var arr2=new Array()
        //模块二--星星
        var arr3=new Array()
       
        $(".t_submit").click(function(event) {
           arr.length=0;
           arr2.length=0;
           arr3.length=0;
          
           $.each($(".t_star_countone [name='it']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr.push(val.value)
            });
           $.each($(".t_tab_countone [name='it_tab']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr2.push(val.value)
            });
           $.each($(".t_star_counttwo [name='it']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                // alert("i: "+i+", 被选中的value值："+val.value);
                arr3.push(val.value)
            });
           var other_thing=$(".t_other_thing").val();
           // alert(arr.length);
           //  alert(arr2);
           //  console.log(arr2)
           // alert(arr3.length);
           // alert(other_thing);
            student_feedback(arr.length, other_thing, arr3.length, arr2);
        });
         //取消
        $(".t_reset,.t_qqclose,.t_que_reset,.t_que_submit").click(function(){
            $("body").css('overflow', 'visible');
            $(".t_feedback_content input").prop("checked",false)
            $(".t_other_thing_tea").val('');
            $(".t_other_thing").val('');
            $(".t_star_sol").hide();
             $(".t_stu_feedback_con").removeClass('t_stu_feedback_con_show')
            $(".t_student_feedback").animate({opacity:0},200,function(){
            $(this).removeClass('t_student_feedback_show')
           });
            $(".t_tea_feedback_con").removeClass('t_tea_feedback_con_show')
            $(".t_teacher_feedback").animate({opacity:0},200,function(){
            $(this).removeClass('t_teacher_feedback_show')
           });
            $(".t_feed_change").hide()
            $(".t_star_pointbox2,.t_star_point,.t_star_point2").hide()
        })

        // $(".t_star_input").click(function(event) {
        //     t_c=0
        // }
    
})