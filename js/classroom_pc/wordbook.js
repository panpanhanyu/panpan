$(function(){
    //字典窗口
        //打开窗口
        // function open_wordbook(url) {
        //     /* Act on the event */

        //     $(".t_wordbook_window").addClass('t_wordbook_window_show')
        //     $(".t_wordbook_window").animate({opacity:1},300);
        //     $(".t_wordbook_con").addClass('t_wordbook_con_show')
        //     $(".t_wordbook_window").find('iframe').attr('src', 'https://fanyi.baidu.com/?aldtype=16047#zh/en/'+url);
        // };
        //关闭窗口
        $(".t_wordbook_window").click(function(event) {
            /* Act on the event */
            $(".t_wordbook_window").animate({opacity:0},300,function(){
                $(".t_wordbook_window").removeClass('t_wordbook_window_show')
            });
            $(".t_wordbook_con").removeClass('t_wordbook_con_show')
        });
        $(".t_wordbook_close").click(function(event) {
            /* Act on the event */
            $(".t_wordbook_window").animate({opacity:0},300,function(){
                $(".t_wordbook_window").removeClass('t_wordbook_window_show')
            });
            $(".t_wordbook_con").removeClass('t_wordbook_con_show')
        });
        $(".t_wordbook_con").click(function(event) {
            event.stopPropagation();
        });
})