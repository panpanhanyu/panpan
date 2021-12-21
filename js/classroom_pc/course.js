$(function(){
    //课程安排
        $(".t_course_tab").click(function(event) {
            /* Act on the event */
            var tab_index=$(this).index()
            $(this).addClass('t_course_tab_lei').siblings().removeClass('t_course_tab_lei')
            $(this).parent().siblings('.t_tab_con').find(".t_course_over").eq(tab_index).show().siblings().hide()
        });
        //打开弹窗
        $(".t_open_course").click(function(event) {
            /* Act on the event */
            $(".t_course_window").addClass('t_course_window_show')
            $(".t_course_window").animate({opacity:1},300);
            $(".t_course_con").addClass('t_course_con_show')
        });
        //关闭窗口
        $(".t_course_window").click(function(event) {
            /* Act on the event */
            $(".t_course_window").animate({opacity:0},300,function(){
                $(".t_course_window").removeClass('t_course_window_show')
                $(".t_course_tab").eq(0).addClass('t_course_tab_lei').siblings().removeClass('t_course_tab_lei')
                $(".t_course_over").eq(0).show().siblings().hide()
            });
            $(".t_course_con").removeClass('t_course_con_show')
        });
        $(".t_course_close").click(function(event) {
            /* Act on the event */
            $(".t_course_window").animate({opacity:0},300,function(){
                $(".t_course_window").removeClass('t_course_window_show')
                $(".t_course_tab").eq(0).addClass('t_course_tab_lei').siblings().removeClass('t_course_tab_lei')
                $(".t_course_over").eq(0).show().siblings().hide()
            });
            $(".t_course_con").removeClass('t_course_con_show')
        });
        $(".t_course_con").click(function(event) {
            event.stopPropagation();
        });
})