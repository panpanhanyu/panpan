$(function(){
     //通话测试
        //第一步
        $(".t_stepone_btn").click(function(event) {
            $(".t_talk_first,.t_stepone_box").hide()
            $(".t_steptwo_box,.out_view").show()
            $(".t_talk_contop").addClass('t_talk_contop_bg')
            $(".t_talk_tit").addClass('t_talk_tit_lei')
            $(".t_talk_close").attr('src','/static/img/classroom_pc/close_talk.png');
             //通话测试轮播
            var banner_count=$(".t_banner").length
            var banner_width=$(".t_banner").width()
            $(".con_box").width(banner_count*banner_width*2)
            $(".con_box").css("margin-left",-banner_width*2)
            $(".t_banner").eq(1).addClass('bannerlei').siblings().removeClass('bannerlei')
        });
        //第二步
        $(".t_steptwo_btn").click(function(event) {
            $(".t_steptwo_box").hide()
            $(".t_stepthree_box").show()
        });
        //第三步
        //重测
        $(".t_stepthree_reset").click(function(event) {
            $(".t_steptwo_box").show()
            $(".t_stepthree_box").hide()
        });
        //第四步
        $(".t_stepthree_next").click(function(event) {
           $(".t_stepthree_box").hide()
           $(".t_stepsix_box").show()
           //轮播改变
           var banner_count=$(".t_banner").length
           var banner_width=$(".t_banner").width()
           $(".con_box").width(banner_count*banner_width*2)
           $(".con_box").css("margin-left",0)
           $(".t_banner").eq(1).addClass('bannerlei').siblings().removeClass('bannerlei')
           $(".con_box").append($(".t_banner").eq(0).clone())
           $(".t_banner").eq(0).remove()
           // $(".con_box").css("margin-left",0)
           $(".con_box").animate({marginLeft:-banner_width*2},300);
           $(".t_banner").eq(1).addClass('bannerlei').siblings().removeClass('bannerlei')
        });
        //第五步
        // $(".t_stepfour_btn").click(function(event) {
        //     /* Act on the event */
        //     $(".t_stepfour_box,.out_view").hide()
        //     $(".t_stepfive_box,.t_facebox").show()
        // });
        //重测
        // $(".t_stepfive_reset").click(function(event) {
        //     $(".t_stepfour_box,.out_view").show()
        //     $(".t_stepfive_box,.t_facebox").hide()
        // });
        //第六步
        // $(".t_stepfive_next").click(function(event) {
        //     /* Act on the event */
        //     $(".t_facebox,.t_stepfive_box").hide()
        //     $(".out_view,.t_stepsix_box").show()
        //     //轮播改变
        //    // var banner_count=$(".t_banner").length
        //    // var banner_width=$(".t_banner").width()*2
        //    // $(".con_box").width(banner_count*banner_width)
        //    // $(".con_box").css("margin-left",-banner_width)
        //    // $(".t_banner").eq(1).addClass('bannerlei').siblings().removeClass('bannerlei')
        //    // $(".con_box").append($(".t_banner").eq(0).clone())
        //    // $(".t_banner").eq(0).remove()
        //    // $(".con_box").css("margin-left",0)
        //    // $(".con_box").animate({marginLeft:-banner_width},300);
        //    // $(".t_banner").eq(1).addClass('bannerlei').siblings().removeClass('bannerlei')
        // });
        //第七步
        $(".t_stepsix_btn").click(function(event) {
            $(".t_stepsix_box").hide()
            $(".t_stepseven_box").show()
        });
        //第八步
        $(".t_stepseven_btn").click(function(event) {
           $(".t_stepseven_box").hide()
           $(".t_stepeight_box").show()
        });
        //重录
        $(".t_stepeight_reset").click(function(event) {
            $(".t_stepeight_box").hide()
            $(".t_stepseven_box").show()

        });
        //第九步
        $(".t_stepeight_next").click(function(event) {
            $(".t_stepeight_box").hide()
            $(".t_stepnine_box").show()
        });
        //重录
        $(".t_stepnine_reset").click(function(event) {
            $(".t_stepnine_box").hide()
            $(".t_stepseven_box").show()

        });
        //第十步
        $(".t_stepnine_next").click(function(event) {
            $(".t_talk_titbox,.t_talk_contop,.t_talk_condown").hide()
            $(".t_test_finish").show()
        });
        //打开通话测试弹窗
        $(".t_open_talktest").click(function(event) {
            $(".t_talk_test").show()
            $(".t_talk_test").addClass("t_talk_test_show")
            $(".t_talk_test").animate({opacity:1},300)
             $(".t_talk_titbox,.t_talk_contop,.t_talk_condown").show()
            $(".t_test_finish").hide()
            $(".t_steptwo_box,.t_stepthree_box,.t_stepfour_box,.t_stepfive_box,.t_stepsix_box,.t_stepseven_box,.t_stepeight_box,.t_stepnine_box").hide()
            $(".t_stepone_box").show()
            $(".out_view,.t_facebox").hide()
            $(".t_talk_first").show()
            $(".t_talk_contop").removeClass('t_talk_contop_bg')
            $(".t_talk_tit").removeClass('t_talk_tit_lei')
            $(".t_talk_close").attr('src','/static/img/classroom_pc/close_talk_white.png');
            $(".con_box").empty()
            $(".con_box").append('<div class="t_banner bannerone ">'+
                                '<img src="/static/img/classroom_pc/mac_sm.png" alt="">'+
                            '</div>'+
                            '<div class="t_banner bannertwo">'+
                                '<img src="/static/img/classroom_pc/web_big.png" alt="">'+
                            '</div>')
        });
        //关闭
        $(".t_finish_btn,.t_talk_close").click(function(event) {
            $(".t_talk_test").animate({opacity:0},300,function(){
                $(".t_talk_test").hide()
                $(".t_talk_test").removeClass("t_talk_test_show")
            })
            
        });
  
})