
$(function(){
    
        //综合评价
        //打开弹窗
        // $(".t_open_stu_deatial").click(function(event) {
        
            
        // });
      
        //关闭弹窗
        $(".t_overall_box,.t_add_overall_btn").click(function(event) {
            // $(".t_overall_content").removeClass('t_overall_content_show')
            $(".t_overall_box").animate({opacity:0},300,function(){
                $(".t_overall_box").removeClass('t_overall_box_show')
            });
            $(".t_dotbox").empty()
        });
        $(".t_overall_content").click(function(event) {
            event.stopPropagation();
        });
       $(window).resize(function(event) {
           
            // 底部banner
            mod_width=$(".t_module_four")[0].getBoundingClientRect().width;
            banner_count=$(".t_mod_bannerout .t_mod_banner").length
            $(".t_mod_bannerout").width(banner_count*mod_width)
            move_count=0
            $(".t_mod_bannerout").css('margin-left','0')
            $(".t_dot").eq(0).addClass('t_dotlei')
             /* 弹窗定位 */
            var win_height=$(window).height()
            var ping_height=$(".t_overall_content").height()
            $(".t_overall_content").css("margin-top",(win_height-ping_height)/2)
        });
        $(".t_mod_pointright").click(function(event) {
            /* Act on the event */
            if(move_count<banner_count-1){
                move_count++
                $(".t_mod_bannerout").animate({marginLeft:-mod_width*move_count},500);
                $(".t_dot").eq(move_count).addClass('t_dotlei').siblings().removeClass('t_dotlei')
            } 
        });
        $(".t_mod_pointleft").click(function(event) {
            /* Act on the event */
            if(move_count>0){
                move_count--
                $(".t_mod_bannerout").animate({marginLeft:-mod_width*move_count},500);
                $(".t_dot").eq(move_count).addClass('t_dotlei').siblings().removeClass('t_dotlei')
            } 
        });
       
        
   
})