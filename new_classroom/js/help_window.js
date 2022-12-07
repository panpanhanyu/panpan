$(function(){
    //帮助title切换
        $(".t_help_tit").click(function(event) {
            /* Act on the event */
            $(this).addClass('t_help_tit_line')
            $(this).siblings('.t_complain_tit').removeClass('t_complain_tit_line')
            $(".t_complain_content").hide()
            $(".t_help_content").show()
            $(".t_tab_intab_title").show()
        });
        $(".t_complain_tit").click(function(event) {
            /* Act on the event */
            $(this).addClass('t_complain_tit_line')
            $(this).siblings('.t_help_tit').removeClass('t_help_tit_line')
            $(".t_complain_content").show()
            $(".t_help_content").hide()
            $(".t_tab_intab_title").hide()
        });
        //帮助下拉
        // $(".t_ques_btn").click(function(event) {
        //     $(this).toggleClass('t_ques_btn_up');
        //     $(this).parent().siblings('.t_ans_box').slideToggle(200)
        // });
        // 
        // 
        $(".t_web_help_t").on('click','.t_type_item',function(event) {
           $(this).find(".t_ques_btn").toggleClass('t_ques_btn_up');
           $(this).find(".t_ans_box").slideToggle(200)
        });

        $(".t_web_help_s").on('click','.t_type_item',function(event) {
            $(this).find(".t_ques_btn").toggleClass('t_ques_btn_up');
            $(this).find(".t_ans_box").slideToggle(200)
         });

        // $(".t_type_item").click(function(event) {
        //    $(this).find(".t_ques_btn").toggleClass('t_ques_btn_up');
        //    $(this).find(".t_ans_box").slideToggle(200)
        // });

        //提交反馈
        var arr_complain=new Array()
        $(".t_complain_define").click(function(event) {
            //是否是预约中
            if(new_order_type==0){
                //判断是否到上课时间5分钟
                if(is_can_complain==1){
                    arr_complain.length=0
                    $.each($(".t_complain_listbox [name='comp_input']:checked"),function(i,val){//第一个参数表示索引下标，第二个参数表示当前索引元素
                        // alert("i: "+i+", 被选中的value值："+val.value);
                        arr_complain.push(val.value);
                        //console.log(i);
                    });
                    //alert(arr_complain);
                    var content = $(".t_complain_text-"+arr_complain).text();
                    // alert(content)
                    // alert($(".t_new_student_comptextarea").val())
                    // student_complaint(content);
                    //console.log(1 + content + 1)
                    var compval=content
                    var comparea=$(".t_new_student_comptextarea").val()
                    if(compval!=''&&comparea!=''){
                        $.ajax({
                            url:ajax_url+"?s=App.WebStudent_WebStudent.Student_complaint",    //请求的url地址
                            dataType:"json",   //返回格式为json
                            async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                            data:{"room_id":new_order_id,
              "timestamp":time,
              "sign":sign,
              "id":apiid,
              "is_web":"pc",
              "token":token,"content":compval,"content1":comparea},    //参数值
                            jsonp: "jsapicallback",
                            jsonpCallback: "",
                            type:"POST",   //请求方式
                            success:function(data){
                                //请求成功时处理
                                if(data.ret==200){
                                  $.growl.notice({
                                      title: _lang22,
                                      message: _lang23
                                  });
                                }else{
                                    $.growl.error({
                                        title: _lang18,
                                        message: data.msg
                                    });
                                }
                                $(".t_new_close_drawer").click();
                            },
                            error:function(e){
                                //请求出错处理
                                alert('请求失败：'+JSON.stringify(e))
                            }
                        });
                    }else{
                        $.growl.error({
                            title: _lang04,
                            message: _lang24
                        });
                    }
                }else{
                    $.growl.error({
                        title: _lang04,
                        message: _lang25
                    });
                }
            }
            
            
            

        });
        
        //关闭帮助窗口
        $(".t_help_window,.t_help_window2,.t_help_define").click(function(event) {
            /* Act on the event */
            $(".t_help_conbox").removeClass('t_help_conbox_show')
            $(".t_help_window").animate({opacity:0},300,function(){
                $(".t_help_window").removeClass('t_help_window_show')
                $(".t_help_conbox input").prop("checked",false)
                $(".t_complain_content").hide()
                $(".t_help_content").show()
                $(".t_help_tit").addClass('t_help_tit_line')
                $('.t_complain_tit').removeClass('t_complain_tit_line')
                $('.t_ans_box').slideUp()
                $(".t_ques_btn").removeClass('t_ques_btn_up')
            });
            $(".t_help_window2").animate({opacity:0},300,function(){
                $(".t_help_window2").removeClass('t_help_window_show')
                $(".t_help_conbox input").prop("checked",false)
                $(".t_complain_content").hide()
                $(".t_help_content").show()
                $(".t_help_tit").addClass('t_help_tit_line')
                $('.t_complain_tit').removeClass('t_complain_tit_line')
                $('.t_ans_box').slideUp()
                $(".t_ques_btn").removeClass('t_ques_btn_up')
            });
            $("#ch-plugin").css("display","none")
        });
         $(".t_help_conbox").click(function(event) {
             event.stopPropagation();
        });
         $(".t_help_conbox2").click(function(event) {
             event.stopPropagation();
        });
         // tab  in  tab
        $(".t_type_tit_teacher").click(function(event) {

            var tab_in_tab = $(this).index()
            $(this).addClass('t_type_tit_teacher_lei').siblings().removeClass('t_type_tit_teacher_lei')
            $(this).parent().siblings('.t_help_content').find(".t_help_tabintab").eq(tab_in_tab).show().siblings().hide()
        });
})