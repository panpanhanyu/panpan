/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */


function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
function _classCallCheck(e, t) {
    if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return ! t || "object" != typeof t && "function" != typeof t ? e: t
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}
// function init_admin_buycoin_js() {
//     $(".expiration_date_setting_btn").on("click",
//     function() {
//         var e = $(this).parent().children('select[name="year"]').val() + "-" + $(this).parent().children('select[name="month"]').val() + "-" + $(this).parent().children('select[name="date"]').val();
//         return new Date(e) < new Date ? (alert("\ub0a0\uc9dc\ub97c \ub2e4\uc2dc \ud655\uc778\ud558\uc138\uc694."), !1) : !!confirm("\ub9cc\ub8cc\uc77c\uc2dc\ub97c " + e + "(\uc73c)\ub85c \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")
//     })
// }
function init_admin_courses_js() {
    $("#admin_courses .dropdown-trigger").dropdown({
        constrainWidth: !1,
        coverTrigger: !1
    });
    var e = $("#admin_courses form .row:first").height();
    $("#content_wrapper").css("height", "calc(100% - " + e + "px)"),
    init_content_carousel(),
    bind_content_event(),
    $("#admin_courses").on("change", "#content_type_selector",
    function() {
        $("#admin_courses .content_type").removeClass("d_b"),
        $("#admin_courses").find("#" + $(this).val()).addClass("d_b")
    }),
    $("#admin_courses").on("click", ".toggle_teacher_mode_btn",
    function() {
        $("#content_wrapper").toggleClass("teacher_mode"),
        $("#content_wrapper").hasClass("teacher_mode") ? $(this).text("\ud559\uc0dd \ubaa8\ub4dc") : $(this).text("\uc120\uc0dd\ub2d8 \ubaa8\ub4dc")
    }),
    $("#admin_courses").on("paste", '[contentEditable="true"]',
    function(e) {
        e.preventDefault();
        var t = "";
        e.clipboardData || e.originalEvent.clipboardData ? t = (e.originalEvent || e).clipboardData.getData("text/plain") : window.clipboardData && (t = window.clipboardData.getData("Text")),
        document.queryCommandSupported("insertText") ? document.execCommand("insertText", !1, t) : document.execCommand("paste", !1, t)
    }),
    $("#admin_courses").on("click", '[contentEditable="true"]',
    function() {
        show_color_selector(event, $(this))
    }),
    $("#admin_courses").on("click", "#color_selector_layer",
    function() {
        hide_color_selector()
    }),
    $("#admin_courses").on("click", ".set_text_color_btn",
    function() {
        set_text_color($(this).attr("class_name"))
    }),
    $("#admin_courses").on("click", '[contentEditable="true"] span',
    function() {
        remove_text_color($(this))
    }),
    $("#admin_courses").on("click", ".add_content_data_group_btn",
    function() {
        var e = $(this).parents("[content_data]"),
        t = e.attr("content_data"),
        n = e.find("[content_data_group]").last().clone();
        n.find("[contenteditable]").html("\ud14d\uc2a4\ud2b8"),
        "script" == t && (n.removeClass("main_exp"), n.find(".main_exp_checkbox").removeAttr("checked")),
        e.find("[content_data_group]").last().after(n)
    }),
    $("#admin_courses").on("click", ".remove_content_data_group_btn",
    function() {
        var e = $(this).parents("[content_data]");
        1 != e.find("[content_data_group]").length && e.find("[content_data_group]").last().remove()
    }),
    $("#admin_courses").on("click", ".add_word_row_btn",
    function() {
        var e = $(this).parent(".word_table_btn_row").next(".word_table").find("tbody");
        e.children("tr:last").clone().appendTo(e),
        e.children("tr:last").find("input").val("")
    }),
    $("#admin_courses").on("click", ".remove_word_row_btn",
    function() {
        var e = $(this).parent(".word_table_btn_row").next(".word_table").find("tbody");
        if (1 == e.children(".word_row").length) return ! 1;
        e.children("tr:last").remove()
    }),
    $("#admin_courses").on("click", ".add_ch_letter_btn",
    function() {
        var e = $(this).siblings(".ch_letter").last().clone();
        e.find("input").val(""),
        e.find("img").attr({
            src: "",
            img_src: "",
            gif_src: ""
        }),
        $(this).parent().append(e)
    }),
    $("#admin_courses").on("click", ".remove_ch_letter_btn",
    function() {
        1 !== $(this).siblings(".ch_letter").length && $(this).siblings(".ch_letter").last().remove()
    }),
    $("#admin_courses").on("click", ".add_word_btn",
    function() {
        var e = $(this).parent().next(".word_box").find(".word").last().clone();
        e.find("input").val(""),
        $(this).parent().next(".word_box").append(e)
    }),
    $("#admin_courses").on("click", ".remove_word_btn",
    function() {
        1 !== $(this).parent().next(".word_box").find(".word").length && $(this).parent().next(".word_box").find(".word").last().remove()
    }),
    $("#admin_courses").on("click", ".add_script_btn",
    function() {
        var e = $(this).parents(".item").find(".script_box");
        e.append("<hr>").append(e.children(".script_ch:last, .script_py:last, .script_ko:last").clone()),
        e.children(".script_ch:last, .script_py:last, .script_ko:last").find("textarea").val("")
    }),
    $("#admin_courses").on("click", ".remove_script_btn",
    function() {
        var e = $(this).parents(".item").find(".script_box");
        if (1 == e.children(".script_ch").length) return ! 1;
        e.children("hr:last, .script_ch:last, .script_py:last, .script_ko:last").remove()
    }),
    $("#admin_courses").on("change", ".langdy_player_checkbox",
    function() {
        var e = $(this).parents(".langdy_player_info").find(".time_input_row");
        $(this).is(":checked") ? e.addClass("d_b") : e.removeClass("d_b")
    }),
    $("#admin_courses").on("click", ".save_content_btn",
    function() {
        confirm("\ucee8\ud150\uce20\ub97c \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?") && save_content()
    })
}

function init_classroom_dynamic_js() {
    user_status = user_signed_in ? current_user.is_teacher ? "teacher": "student": "guest",
    lesson_id = null,
    $(window).on("hashchange",
    function() {
        // switch (location.hash.slice(1)) {
        // case "classroom":
        //     $("#body").hasClass("position_fixed") && $("#body").removeClass("position_fixed"),
        //     $("#classroom").hasClass("mb_chat_mode") && ($("#classroom").removeClass("mb_chat_mode"), $("#toggle_mb_chat_btn i").text("chat"), $("#chat_box_modal_overlay").addClass("js_d"), $("#toggle_mb_dictionary_btn").show());
        //     break;
        // case "mb_chat_mode":
        //     $("#classroom").hasClass("mb_chat_mode") || show_chat_box()
        // }
    }),
    getCookie("classroom_tutorial_190730") || (setTimeout(function() {
        // $("#classroom .tap-target[step=1]").tapTarget().tapTarget("open")
    },
    300), setCookie("classroom_tutorial_190730", "done", 365));
    var e = {};
    if ($.each(location.search.slice(1).split("&"),
    function() {
        e[this.split("=")[0]] = this.split("=")[1]
    }), "guest" == user_status) e.lesson_id && (open_sign_up_modal(1, "reload"), $("#sign_up").modal("open")),
    init_lesson("4", "course_id");
    else {
        if (client && client.disconnect(), client = new Faye.Client("/faye"), e.lesson_id) init_lesson(t = e.lesson_id.substring(2, e.lesson_id.length - 4), "lesson_id");
        else if (e.admin_course_id) init_lesson(e.admin_course_id, "admin_course_id");
        else if ($("#lessons .lesson").length) {
            if ($("#scheduled_lessons .lesson").length) var t = $("#scheduled_lessons .lesson").last().attr("lesson_id");
            else t = $("#finished_lessons .lesson").first().attr("lesson_id");
            init_lesson(t, "lesson_id")
        } else init_lesson("4", "course_id");
        "teacher" == user_status && ($("#classroom").addClass("teacher_mode"), is_mobile && ($("#toggle_mb_chat_btn").hide(), $("#teacher_notice").modal("open")))
    }
    // $("#classroom").on("click", ".toggle_teacher_mode_btn",
    // function() {
    //     $("#classroom").toggleClass("teacher_mode")
    // }),
    $("#toggle_mb_chat_btn").on("click",
    function() {
        // $("#classroom").hasClass("mb_chat_mode") ? hide_chat_box(this) : (history_push_state("mb_chat_mode"), show_chat_box(this))
    }),
    $("#toggle_mb_dictionary_btn").on("click",
    function() {
        $("#body").addClass("position_fixed"),
        $("#chat_box").hide()
    }),
    $("#chat_box_modal_overlay").on("click",
    function() {
        hide_chat_box($("#toggle_mb_chat_btn"))
    }),
    $("#load_dictionary_button_layer").on("click",
    function() {
        $(this).hide()
    }),
    $("#chat_box").on("click", ".toggle_chat_and_memo_btn",
    function() {
        $("#chat_box").find(".toggle_chat_and_memo_btn, .content").toggleClass("d_b")
    }),
    $("#finish_lesson_btn").on("click",
    function() {
        "student" == user_status ? eval_lesson() : "teacher" == user_status && get_lesson_fee()
    }),
    $("#comment").on("keyup",
    function(e) {
        13 == e.keyCode && eval_lesson()
    }),
    $("#lessons").on("click", ".course",
    function() {
        init_lesson($(this).attr("course_id"), "course_id")
    }),
    $("#lessons").on("click", ".lesson",
    function() {
        init_lesson($(this).attr("lesson_id"), "lesson_id")
    }),
    bind_content_event(),
    $("#chat_input").on("keyup",
    function(e) {
        handle_chat_input(e)
    }),
    $("#send_chat_btn").on("click",
    function() {
        send_chat()
    }),
    $("#save_memo_btn").on("click",
    function() {
        save_memo()
    }),
    $("#classroom").on("click", ".open_dictionary_btn",
    function() {
        $("#dictionary").modal("open"),
        load_daum_dictionary_default()
    }),
    $("#classroom").on("mouseup", ".main_grid",
    function(e) {
        load_daum_dictionary(e)
    }),
    $("#classroom_btns").on("click",
    function() {
        $("#load_dictionary_button_layer").hide()
    }),
    $("#body").off("click", ".modal-overlay"),
    $("#body").on("click", ".modal-overlay",
    function(e) {
        $(".modal").index($(".modal.open")) >= 0 && ("chat_box_modal_overlay" != $(e.target).attr("id") ? ($("#modal-overlay-close").focus(), $(".modal.open").modal("close"), history_push_state("classroom")) : history_back())
    })
}
function init_lesson(e, t) {
    // $.ajax({
    //     url: "/classroom/init_lesson",
    //     dataType: "json",
    //     data: {
    //         record_id: e,
    //         type: t
    //     },
    //     success: function(e) {
    //         if ($("#lessons").hasClass("open") && ($("#lessons").modal("close"), replace_state_on_modal_open = !0), "english" == e.category) {
    //             $("#content_wrapper").html(e.template),
    //             $("#content_wrapper").find(".tabs").tabs();
    //             var t = $('<input id="course_rank" type="hidden">').val(e.course.rank),
    //             n = $('<input id="course_order" type="hidden">').val(e.course.order),
    //             i = $('<input id="course_content" type="hidden">').val(e.course.content);
    //             $("#content_wrapper").append(i, t, n)
    //         } else $("#content_wrapper").html($.parseHTML(unescape(e.course.content)));
    //         init_content_carousel(),
    //         dict_lang = "English" == e.course.lang ? "eng": "ch",
    //         "classroom" == crt_page && ("guest" != user_status ? (lesson_id = e.lesson.id, init_lesson_info(e), init_chatting()) : (content_carousel.goTo(2), init_guide_chatting()), set_lesson_timer(e))
    //     },
    //     error: function() {
    //         lesson_id = "error",
    //         alert("\uac15\uc758\ub97c \ubd88\ub7ec\uc624\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.\n\uc624\ub958\uac00 \ubc18\ubcf5\ub418\uba74 \ub7ad\ub514 \uce74\ud1a1\uc73c\ub85c \ubb38\uc758\ud574\uc8fc\uc138\uc694:)")
    //     }
    // })
}
function init_content_carousel() {
    $("#flip_card_content").length ? init_flip_card_content() : $("#content").hasClass("english") ? init_content_json($("#course_content").val()) : init_tv_content(),
    $(".video_box[langdy_player=true]").each(function(e) {
        langdy_player_setting(this, e)
    });
    var e = "#content_wrapper .siema";
    content_carousel = new Siema({
        selector: e,
        duration: 200,
        easing: "ease-out",
        perPage: 1,
        startIndex: 0,
        draggable: is_mobile,
        multipleDrag: !1,
        threshold: 50,
        loop: !1,
        rtl: !1,
        onChange: function() {
            switch ($(e).find(".siema_indicators .dot.active").removeClass("active"), $(e).find(".siema_indicators .dot").eq(content_carousel.currentSlide).addClass("active"), $("#content_wrapper .content_carousel_control").removeClass("disabled"), 0 == content_carousel.currentSlide && $("#content_wrapper .content_carousel_prev").addClass("disabled"), content_carousel.currentSlide == content_carousel.innerElements.length - 1 && $("#content_wrapper .content_carousel_next").addClass("disabled"), crt_page) {
            case "classroom":
                "teacher" == user_status && client.publish("/langdy_lesson_" + lesson_id, {
                    carousel_index: content_carousel.currentSlide
                });
                break;
            case "preview_and_review":
                switch (preview_and_review_category) {
                case "english_preview":
                    1 == content_carousel.currentSlide ? exec_english_preview_count_down() : init_english_preview_count_down()
                }
            }
        }
    }),
    $("#content_wrapper .content_carousel_control").removeClass("disabled"),
    0 == content_carousel.currentSlide && $("#content_wrapper .content_carousel_prev").addClass("disabled"),
    content_carousel.currentSlide == content_carousel.innerElements.length - 1 && $("#content_wrapper .content_carousel_next").addClass("disabled");
    var t = $('<div class="siema_indicators valign-wrapper"></div>'),
    n = $('<span class="dot circle pointer"></span>'),
    o = content_carousel.innerElements.length;
    for (i = 0; i < o; i++) t.append(n.clone());
    $(e).append(t),
    $(e).find(".siema_indicators .dot:first").addClass("active")
}
function init_tv_content() {
    $("#content").removeClass("carousel slide").removeAttr("data-interval data-wrap"),
    $("#content .carousel-inner").toggleClass("carousel-inner siema"),
    $("#content .glyphicon-play").each(function() {
        var e = $(this).hasClass("red") ? "red": "blue";
        $(this).replaceWith('<i class="material-icons ' + e + '">play_arrow</i>')
    }),
    $("#content .glyphicon-chevron-left").each(function() {
        var e = $(this).hasClass("red") ? "red": "blue";
        $(this).replaceWith('<i class="material-icons ' + e + '">chevron_left</i>')
    }),
    $("#content .glyphicon-chevron-right").each(function() {
        var e = $(this).hasClass("red") ? "red": "blue";
        $(this).replaceWith('<i class="material-icons ' + e + '">chevron_right</i>')
    }),
    $("#content .glyphicon-plus-sign").each(function() {
        var e = $(this).hasClass("red") ? "red": "blue";
        $(this).replaceWith('<i class="material-icons ' + e + '">add_circle</i>')
    }),
    $("#content .content_carousel_control").removeAttr("onclick"),
    $("#content .blue_radius_btn").toggleClass("blue_radius_btn btn"),
    $("#content .toggle_word_btn").removeAttr("onclick"),
    $("#content .script_box .blue_box").toggleClass("blue_box btn toggle_script_ko_btn").removeAttr("onclick").text("\ud574\uc11d \ubcf4\uae30")
}
function init_flip_card_content() {
    $("#flip_card_content").removeClass("carousel slide").removeAttr("data-interval data-wrap"),
    $("#flip_card_content .carousel-indicators").remove(),
    $("#flip_card_content .content_carousel_control").length || ($("#flip_card_content").prepend($('<span class="content_carousel_control content_carousel_prev"><i class="material-icons blue">chevron_left</i></span>')), $("#flip_card_content").prepend($('<span class="content_carousel_control content_carousel_next"><i class="material-icons blue">chevron_right</i></span>'))),
    $("#flip_card_content .carousel-inner").toggleClass("carousel-inner siema"),
    $("#flip_card_content .cover_page_arrow_image").remove(),
    $("#flip_card_content iframe").each(function() {
        $(this).addClass("video").wrap('<div class="video_box">').parent().wrap('<div class="video_box_wrapper">')
    }),
    $("#flip_card_content .blue_box").toggleClass("blue_box tag in_h6 secondary-color"),
    $("#flip_card_content .red_box").toggleClass("blue_box tag in_h6 primary-color white-color-text")
}
function pad(e) {
    for (var t = e + ""; t.length < 2;) t = "0" + t;
    return t
}
function bind_content_event() {
    $("#content_wrapper").on("click", ".content_carousel_control:not(.disabled)",
    function() {
        $(this).hasClass("content_carousel_prev") ? content_carousel.prev() : content_carousel.next()
    }),
    $("#content_wrapper").on("click", ".siema_indicators .dot",
    function() {
        content_carousel.goTo($(this).index())
    }),
    $("#content_wrapper").on("click", ".video_box[langdy_player=true] .jwplayer",
    function() {
        var e = $(this).attr("id"),
        t = jwplayer(e);
        "playing" == t.getState() ? t.pause() : t.play()
    }),
    $("#content_wrapper").on("click", ".word_table .ch_letter",
    function() {
        var e = $(this).children(".ch_img");
        $(this).hasClass("playing") ? ($(this).removeClass("playing"), e.attr("src", e.attr("img_src"))) : ($(this).addClass("playing"), e.attr("src", e.attr("gif_src")))
    }),
    $("#content_wrapper").on("click", ".toggle_word_btn",
    function() {
        $(this).parent().parent().siblings(".word_table").toggleClass("active")
    }),
    $("#content_wrapper").on("click", ".toggle_script_ko_btn",
    function() {
        $(this).parent(".script_box").find(".script_ko").toggle(),
        $(this).parents('[content_data="script"]').find(".ko").toggleClass("d_b");
        var e = $(this).parents('[content_data="script"]').find(".ko").first().hasClass("d_b") ? "remove_circle": "add_circle",
        t = $(this).parents('[content_data="script"]').find(".ko").first().hasClass("d_b") ? "\ud55c\uae00 \uc228\uae30\uae30": "\ud55c\uae00 \ubcf4\uae30";
        $(this).find("i").text(e),
        $(this).find("span").text(t)
    }),
    $("#content_wrapper").on("click", ".remove_blur_btn",
    function() {
        $(this).removeClass("blur")
    }),
    $("#content_wrapper").on("click", ".show_word_table",
    function() {
        $(this).parent().next('table, [content_data="word"]').toggle()
    }),
    $("#content_wrapper").on("click", ".show_answer",
    function() {
        $(this).parent().next(".answer, .hidden_pinyin").toggle()
    })
}
function copy_answer(e) {
    var t = $("<input>");
    $(e).append(t),
    t.val($(e).siblings(".answer").find(".desc").text()).select(),
    document.execCommand("copy"),
    t.remove(),
    $('<span class="copy_answer_btn copy_success_btn">').insertAfter($(e)),
    $(".copy_success_btn").fadeOut(3e3)
}
function langdy_player_setting(e, t) {
    var n = $(e).attr("repeat_start"),
    i = $(e).attr("repeat_end"),
    o = $(e).find(".video").attr("src").split("/"),
    s = o[o.length - 1].split("-")[0],
    r = "//content.jwplatform.com/videos/" + s + "-zWbBaYu7.mp4",
    a = "//content.jwplatform.com/thumbs/" + s + "-480.jpg";
    $(e).find(".video").remove(),
    $(e).prepend('<div class="video"><div id="video_' + t + '"></div></div>');
    var l = jwplayer("video_" + t);
    switch (l.setup({
        file: r,
        image: a
    }).once("complete",
    function() {
        repeat_exp(t, n, i)
    }), l.on("error",
    function() {
        r = "//content.jwplatform.com/videos/" + s + "-xPNIbfqp.mp4",
        a = "//content.jwplatform.com/thumbs/" + s + "-320.jpg",
        l.setup({
            file: r,
            image: a
        }).once("complete",
        function() {
            repeat_exp(t, n, i)
        })
    }), $(e).find(".video").append('<div class="video_desc repeat"><div class="video_outer"><div class="video_inner"><div class="text">\ud575\uc2ec \ud45c\ud604\uc744 \ub2e4\uc2dc \ub4e4\uc5b4\ubcf4\uc138\uc694!</div><div class="number_box"><i class="material-icons number finished">looks_one</i><i class="material-icons number ml_1rem">looks_two</i><i class="material-icons number ml_1rem">looks_3</i></div></div></div></div>'), $(e).find(".video").append('<div class="video_desc finished"><div class="video_outer"><div class="video_inner"><img class="logo_text" src="' + s3_url + '/images/logos/langdy_logo_b.png" /><div class="btn_box"><span class="btn-small mr_10" onclick="repeat_whole(' + t + ');">\uc804\uccb4 \ubcf4\uae30</span><span class="btn-small" onclick="repeat_exp(' + t + ", " + n + ", " + i + ')">\ud45c\ud604 \ubcf4\uae30</span></div></div></div></div>'), crt_page) {
    case "preview_and_review":
        switch (preview_and_review_category) {
        case "english_preview":
            $(e).find(".video").append('<div class="video_desc guide"><div class="video_outer"><div class="video_inner"><div class="text">\uba3c\uc800 \ub3d9\uc601\uc0c1\uc744 \ubcf4\uc138\uc694!</div><div class="btn_box"><span class="btn-small pulse">\ub3d9\uc601\uc0c1 \ubcf4\uae30</span></div></div></div></div>'),
            $(e).find(".video .video_desc.guide").show().one("click",
            function() {
                $(this).remove(),
                l.play()
            });
            break;
        case "english_review":
            l.off("complete"),
            $(e).find(".video .video_desc.finished").show(),
            $(e).attr("init_repeat_fin", !0)
        }
    }
}
function show_chat_box(e) {
    // $("#classroom").addClass("mb_chat_mode"),
    // $(e).removeClass("pulse").find("i").text("close"),
    // $(e).find(".alarm").removeClass("pulse d_f"),
    // $("#toggle_mb_dictionary_btn").hide(),
    // $("#chat_box").show(),
    // $("#chat_box_modal_overlay").removeClass("js_d"),
    // $("#body").addClass("position_fixed")
}
function hide_chat_box(e) {
    // $("#classroom").removeClass("mb_chat_mode"),
    // $(e).find("i").text("chat"),
    // $("#toggle_mb_dictionary_btn").show(),
    // $("#chat_box").hide(),
    // $("#chat_box_modal_overlay").addClass("js_d"),
    // $("#body").removeClass("position_fixed"),
    // history_back()
}
function handle_chat_input(e) {
    if (13 == e.keyCode) send_chat();
    else if (e.keyCode >= 48 && e.keyCode <= 90) {
        var t = document.getElementById("chat_input"),
        n = t.value,
        i = n.slice( - 2);
        if (i.length < 2) return;
        if (["a", "e", "i", "o", "u"].indexOf(i[0].toLowerCase()) >= 0 && Number(i[1]) < 5) {
            var o = intonations[i[0].toLowerCase() + i[1]];
            o && (t.value = n.slice(0, -2) + o)
        }
    }
}
function mission_complete() {
    // mission_complete_sound();
    // var e = (e = location.pathname.split("/")[3]).substring(2, e.length - 4);
    // $.ajax({
    //     method: "post",
    //     url: "/classroom/mission_complete",
    //     dataType: "json",
    //     data: {
    //         category: preview_and_review_category.split("_")[1],
    //         lesson_id: e
    //     },
    //     success: function(e) {
    //         var t = $("#mission_complete");
    //         t.modal("open"),
    //         t.find(".title").text(e.title),
    //         t.find(".detail").text(e.detail),
    //         t.find(".coin").text(e.coin)
    //     }
    // })
}
function shuffle(e) {
    for (var t = e.length; t > 0;) {
        var n = Math.floor(Math.random() * t),
        i = e[--t];
        e[t] = e[n],
        e[n] = i
    }
    return e
}
function remove_blank(e) {
    " " == e[0] && (e = e.substring(1));
    var t = e.length - 1;
    return " " == e[t] && (e = e.substring(0, t)),
    e = e.replace(/(\r\n|\n|\r)/gm, "")
}
function mission_correct_sound() {
    correct_sound.pause(),
    correct_sound.currentTime = 0,
    wrong_sound.pause(),
    wrong_sound.currentTime = 0,
    correct_sound.play()
}
function mission_wrong_sound() {
    correct_sound.pause(),
    correct_sound.currentTime = 0,
    wrong_sound.pause(),
    wrong_sound.currentTime = 0,
    wrong_sound.play()
}
function mission_complete_sound() {
    correct_sound.pause(),
    wrong_sound.pause(),
    cheer_sound.play()
}
function exec_device_js(e, t) {
    var n = e ? $("#" + e) : $("#body"); (is_mobile || t) && (n.find("[removeClass_on_mb]").each(function() {
        $(this).removeClass($(this).attr("removeClass_on_mb")),
        $(this).removeAttr("removeClass_on_mb")
    }), n.find("[addClass_on_mb]").each(function() {
        $(this).addClass($(this).attr("addClass_on_mb")),
        $(this).removeAttr("addClass_on_mb")
    }), n.find("[unwrap_on_mb]").each(function() {
        $(this).unwrap(),
        $(this).removeAttr("unwrap_on_mb")
    }), n.find("[src_on_mb]").each(function() {
        $(this).attr("src", $(this).attr("src_on_mb")),
        $(this).removeAttr("src_on_mb")
    }))
}
function init_materializecss() {
    if (M.Modal._count = 0, M.AutoInit(), $(".select-wrapper .select-wrapper").remove(), M.FloatingActionButton.init(document.querySelectorAll(".fixed-action-btn"), {
        hoverEnabled: !1
    }), $(".btn, .btn-small, .btn-large, .btn-flat, .btn-floating").addClass("waves-effect"), $("input.numbers_only").on("keyup",
    function() {
        var e = $(this).val().replace(/-/g, "").replace(/\D/g, "");
        $(this).val(e)
    }), $("form, .form").length) {
        var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        $(e).each(function() {
            $(this).val().length > 0 && $(this).next("label").addClass("active")
        }),
        $(e).on("focusin",
        function() {
            $(this).next("label").addClass("active")
        }),
        $(e).on("focusout",
        function() {
            $(this).val().length || $(this).next("label").removeClass("active")
        })
    }
}
function init_navbar() {
    var e = $("#side_navbar");
    e.sidenav({
        draggable: !1,
        onOpenStart: function(e) {
            $(e).addClass("open"),
            is_mobile && history_push_state("navbar")
        },
        onCloseStart: function(e) {
            $(e).removeClass("open")
        }
    }),
    $("#top_navbar .sidenav_trigger").on("click",
    function() {
        e.sidenav("open")
    }),
    $("#body .sidenav-overlay").on("click",
    function() {
        history_back()
    }),
    $("#side_navbar .modal-trigger").on("click",
    function() {
        is_mobile && (replace_state_on_modal_open = !0),
        e.sidenav("close")
    })
}
function init_modal() {
    var e = $(".modal");
    e.modal({
        onOpenStart: function(e) {
            // replace_state_on_modal_open ? (history_replace_state(e.getAttribute("id") + "_modal"), replace_state_on_modal_open = !1) : history_push_state(e.getAttribute("id") + "_modal")
        },
        onOpenEnd: function(e) {
            switch ($(e).find(".modal-content").scrollTop(0), $(e).find(".tabs").length && $(e).find(".tabs").tabs(), $(e).find(".carousel.carousel-slider").length && $(e).find(".carousel.carousel-slider").carousel({
                indicators: !!e.getAttribute("id").match("notice"),
                fullWidth: !0
            }), e.getAttribute("id")) {
            case "sign_up":
                $(e).find(".sign_up_tab.d_b input[type=email]").focus()
            }
        },
        dismissible: !1
    }),
    e.on("click", ".close_modal_btn",
    function() {
        history_back()
    }),
    $("#body").on("click", ".modal-overlay",
    function() {
        e.index($(".modal.open")) >= 0 && history_back()
    })
}
function init_faq() {
    $("#faq .collapsible-header").on("click",
    function() {
        var e = $(".collapsible-header.faq_title1"),
        t = $(".collapsible-header.faq_title2");
        "add" == $(this).children("i").text() ? ($(this).addClass("secondary-color").children("i").text("remove"), e.not(this).removeClass("secondary-color").children("i").text("add")) : "remove" == $(this).children("i").text() && ($(this).children("i").text("add"), $(this).removeClass("secondary-color")),
        "chevron_right" == $(this).children("i").text() ? ($(this).addClass("secondary-color-text").children("i").text("expand_more"), t.not(this).removeClass("secondary-color-text").children("i").text("chevron_right")) : "expand_more" == $(this).children("i").text() && ($(this).children("i").text("chevron_right"), $(this).removeClass("secondary-color-text"))
    })
}
function init_banner() {
    is_mobile && $('#body .banner:not([page="side_navbar"]) .event_carousel img').each(function() {
        $(this).attr("src", $(this).attr("src").replace("_pc", "_mb"))
    })
}
function init_common_carousels() {
    setTimeout(function() {
        common_intervals && common_intervals.forEach(clearInterval),
        common_intervals = [];
        var e = $("#sign_up, #side_navbar, #coin_page").find(".carousel");
        e.carousel({
            fullWidth: !0
        }),
        e.each(function() {
            auto_play_common_carousel(this, 4e3)
        });
        var t = $("#coin_page .promotion_carousel");
        t.carousel({
            dist: -150,
            numVisible: is_mobile ? 1 : 3
        }),
        auto_play_common_carousel(t, 4e3)
    },
    100)
}
function auto_play_common_carousel(e, t) {
    $(e).carousel("next"),
    common_intervals.push(setInterval(function() {
        $(e).carousel("next")
    },
    t))
}
function history_replace_state(e) {
    // history.replaceState(null, e, "#" + e)
}
function history_push_state(e) {
    history.pushState(null, e, "#" + e)
}
function history_back() {
    history.back()
}
function history_forward() {
    history.forward()
}
function reload_elem(e) {
    $.each(e,
    function() {
        $("#" + this).parent().load(location.href.split("#")[0] + " #" + this)
    })
}
function openModal(e) {
    getCookie(e) || $("#" + e).modal("open")
}
function closeModal(e, t) {
    t && setCookie(e, "done", t),
    $("#" + e).modal("close")
}
function getCookie(e) {
    for (var t = e + "=",
    n = 0; n <= document.cookie.length;) {
        var i = n + t.length;
        if (document.cookie.substring(n, i) == t) return - 1 == (endOfCookie = document.cookie.indexOf(";", i)) && (endOfCookie = document.cookie.length),
        unescape(document.cookie.substring(i, endOfCookie));
        if (0 == (n = document.cookie.indexOf(" ", n) + 1)) break
    }
    return ""
}
function setCookie(e, t, n) {
    var i = new Date;
    i.setDate(i.getDate() + n),
    document.cookie = e + "=" + escape(t) + "; path=/; expires=" + i.toGMTString() + ";"
}
function add_schedule() {
    history_back(),
    my_schd.push_schedule(schedule_modal.attr("wday"), start_time_selector.val(), end_time_selector.val()),
    my_schd.show_schedules(),
    calc_avail_hour()
}
!

 ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
        n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (pe.isFunction(t)) return pe.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) !== n
        });
        if (t.nodeType) return pe.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Ce.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e)
        }
        return pe.grep(e,
        function(e) {
            return pe.inArray(e, t) > -1 !== n
        })
    }
    function o(e, t) {
        do {
            e = e[t]
        } while ( e && 1 !== e . nodeType );
        return e
    }
    function s(e) {
        var t = {};
        return pe.each(e.match(Me) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }
    function a() { (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (r(), pe.ready())
    }
    function l(e, t, n) {
        if (n === undefined && 1 === e.nodeType) {
            var i = "data-" + t.replace(Fe, "-$1").toLowerCase();
            if ("string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Ae.test(n) ? pe.parseJSON(n) : n)
                } catch(o) {}
                pe.data(e, t, n)
            } else n = undefined
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e) if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function u(e, t, n, i) {
        if (Le(e)) {
            var o, s, r = pe.expando,
            a = e.nodeType,
            l = a ? pe.cache: e,
            c = a ? e[r] : e[r] && r;
            if (c && l[c] && (i || l[c].data) || n !== undefined || "string" != typeof t) return c || (c = a ? e[r] = ne.pop() || pe.guid++:r),
            l[c] || (l[c] = a ? {}: {
                toJSON: pe.noop
            }),
            "object" != typeof t && "function" != typeof t || (i ? l[c] = pe.extend(l[c], t) : l[c].data = pe.extend(l[c].data, t)),
            s = l[c],
            i || (s.data || (s.data = {}), s = s.data),
            n !== undefined && (s[pe.camelCase(t)] = n),
            "string" == typeof t ? null == (o = s[t]) && (o = s[pe.camelCase(t)]) : o = s,
            o
        }
    }





  
    var ge =
    /*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
    function(e) {
        function t(e, t, n, i) {
            var o, s, r, a, l, c, d, p, f = t && t.ownerDocument,
            _ = t ? t.nodeType: 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== _ && 9 !== _ && 11 !== _) return n;
            if (!i && ((t ? t.ownerDocument || t: B) !== L && D(t), t = t || L, F)) {
                if (11 !== _ && (c = ve.exec(e))) if (o = c[1]) {
                    if (9 === _) {
                        if (! (r = t.getElementById(o))) return n;
                        if (r.id === o) return n.push(r),
                        n
                    } else if (f && (r = f.getElementById(o)) && R(t, r) && r.id === o) return n.push(r),
                    n
                } else {
                    if (c[2]) return G.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (w.qsa && !z[e + " "] && (!j || !j.test(e))) {
                    if (1 !== _) f = t,
                    p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ye, "\\$&") : t.setAttribute("id", a = N), s = (d = E(e)).length, l = he.test(a) ? "#" + a: "[id='" + a + "']"; s--;) d[s] = l + " " + h(d[s]);
                        p = d.join(","),
                        f = ge.test(e) && u(t.parentNode) || t
                    }
                    if (p) try {
                        return G.apply(n, f.querySelectorAll(p)),
                        n
                    } catch(m) {} finally {
                        a === N && t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > k.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[N] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function s(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
        }
        function r(e, t) {
            var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function h(e) {
            for (var t = 0,
            n = e.length,
            i = ""; t < n; t++) i += e[t].value;
            return i
        }
        function p(e, t, n) {
            var i = t.dir,
            o = n && "parentNode" === i,
            s = q++;
            return t.first ?
            function(t, n, s) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, s)
            }: function(t, n, r) {
                var a, l, c, u = [H, s];
                if (r) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, r)) return ! 0
                } else for (; t = t[i];) if (1 === t.nodeType || o) {
                    if ((a = (l = (c = t[N] || (t[N] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === H && a[1] === s) return u[2] = a[2];
                    if (l[i] = u, u[2] = e(t, n, r)) return ! 0
                }
            }
        }
        function f(e) {
            return e.length > 1 ?
            function(t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                return ! 0
            }: e[0]
        }
        function _(e, n, i) {
            for (var o = 0,
            s = n.length; o < s; o++) t(e, n[o], i);
            return i
        }
        function m(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (n && !n(s, i, o) || (r.push(s), c && t.push(a)));
            return r
        }
        function v(e, t, n, o, s, r) {
            return o && !o[N] && (o = v(o)),
            s && !s[N] && (s = v(s, r)),
            i(function(i, r, a, l) {
                var c, u, d, h = [],
                p = [],
                f = r.length,
                v = i || _(t || "*", a.nodeType ? [a] : a, []),
                g = !e || !i && t ? v: m(v, h, e, a, l),
                y = n ? s || (i ? e: f || o) ? [] : r: g;
                if (n && n(g, y, a, l), o) for (c = m(y, p), o(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(g[p[u]] = d));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(g[u] = d);
                            s(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = s ? ee(i, d) : h[u]) > -1 && (i[c] = !(r[c] = d))
                    }
                } else y = m(y === r ? y.splice(f, y.length) : y),
                s ? s(null, r, y, l) : G.apply(r, y)
            })
        }
        function g(e) {
            for (var t, n, i, o = e.length,
            s = k.relative[e[0].type], r = s || k.relative[" "], a = s ? 1 : 0, l = p(function(e) {
                return e === t
            },
            r, !0), c = p(function(e) {
                return ee(t, e) > -1
            },
            r, !0), u = [function(e, n, i) {
                var o = !s && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                o
            }]; a < o; a++) if (n = k.relative[e[a].type]) u = [p(f(u), n)];
            else {
                if ((n = k.filter[e[a].type].apply(null, e[a].matches))[N]) {
                    for (i = ++a; i < o && !k.relative[e[i].type]; i++);
                    return v(a > 1 && f(u), a > 1 && h(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*": ""
                    })).replace(ae, "$1"), n, a < i && g(e.slice(a, i)), i < o && g(e = e.slice(i)), i < o && h(e))
                }
                u.push(n)
            }
            return f(u)
        }
        function y(e, n) {
            var o = n.length > 0,
            s = e.length > 0,
            r = function(i, r, a, l, c) {
                var u, d, h, p = 0,
                f = "0",
                _ = i && [],
                v = [],
                g = S,
                y = i || s && k.find.TAG("*", c),
                b = H += null == g ? 1 : Math.random() || .1,
                w = y.length;
                for (c && (S = r === L || r || c); f !== w && null != (u = y[f]); f++) {
                    if (s && u) {
                        for (d = 0, r || u.ownerDocument === L || (D(u), a = !F); h = e[d++];) if (h(u, r || L, a)) {
                            l.push(u);
                            break
                        }
                        c && (H = b)
                    }
                    o && ((u = !h && u) && p--, i && _.push(u))
                }
                if (p += f, o && f !== p) {
                    for (d = 0; h = n[d++];) h(_, v, r, a);
                    if (i) {
                        if (p > 0) for (; f--;) _[f] || v[f] || (v[f] = Q.call(l));
                        v = m(v)
                    }
                    G.apply(l, v),
                    c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (H = b, S = g),
                _
            };
            return o ? i(r) : r
        }
        var b, w, k, C, x, E, $, T, S, O, M, D, L, A, F, j, I, P, R, N = "sizzle" + 1 * new Date,
        B = e.document,
        H = 0,
        q = 0,
        W = n(),
        V = n(),
        z = n(),
        U = function(e, t) {
            return e === t && (M = !0),
            0
        },
        X = 1 << 31,
        Y = {}.hasOwnProperty,
        K = [],
        Q = K.pop,
        J = K.push,
        G = K.push,
        Z = K.slice,
        ee = function(e, t) {
            for (var n = 0,
            i = e.length; n < i; n++) if (e[n] === t) return n;
            return - 1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
        se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        re = new RegExp(ne + "+", "g"),
        ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        le = new RegExp("^" + ne + "*," + ne + "*"),
        ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        de = new RegExp(se),
        he = new RegExp("^" + ie + "$"),
        pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        fe = /^(?:input|select|textarea|button)$/i,
        _e = /^h\d$/i,
        me = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        ye = /'|\\/g,
        be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        we = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t: i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        ke = function() {
            D()
        };
        try {
            G.apply(K = Z.call(B.childNodes), B.childNodes),
            K[B.childNodes.length].nodeType
        } catch(Ce) {
            G = {
                apply: K.length ?
                function(e, t) {
                    J.apply(e, Z.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (b in w = t.support = {},
        x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        D = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e: B;
            return i !== L && 9 === i.nodeType && i.documentElement ? (A = (L = i).documentElement, F = !x(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), w.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = me.test(L.getElementsByClassName), w.getById = o(function(e) {
                return A.appendChild(e).id = N,
                !L.getElementsByName || !L.getElementsByName(N).length
            }), w.getById ? (k.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && F) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            },
            k.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete k.find.ID, k.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), k.find.TAG = w.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, i = [],
                o = 0,
                s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            },
            k.find.CLASS = w.getElementsByClassName &&
            function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && F) return t.getElementsByClassName(e)
            },
            I = [], j = [], (w.qsa = me.test(L.querySelectorAll)) && (o(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + N + "-]").length || j.push("~="),
                e.querySelectorAll(":checked").length || j.push(":checked"),
                e.querySelectorAll("a#" + N + "+*").length || j.push(".#.+[+~]")
            }), o(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                j.push(",.*:")
            })), (w.matchesSelector = me.test(P = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = P.call(e, "div"),
                P.call(e, "[s!='']:x"),
                I.push("!=", se)
            }), j = j.length && new RegExp(j.join("|")), I = I.length && new RegExp(I.join("|")), t = me.test(A.compareDocumentPosition), R = t || me.test(A.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            U = t ?
            function(e, t) {
                if (e === t) return M = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === B && R(B, e) ? -1 : t === L || t.ownerDocument === B && R(B, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return M = !0,
                0;
                var n, i = 0,
                o = e.parentNode,
                s = t.parentNode,
                a = [e],
                l = [t];
                if (!o || !s) return e === L ? -1 : t === L ? 1 : o ? -1 : s ? 1 : O ? ee(O, e) - ee(O, t) : 0;
                if (o === s) return r(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? r(a[i], l[i]) : a[i] === B ? -1 : l[i] === B ? 1 : 0
            },
            L) : L
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && D(e), n = n.replace(ue, "='$1']"), w.matchesSelector && F && !z[n + " "] && (!I || !I.test(n)) && (!j || !j.test(n))) try {
                var i = P.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch(Ce) {}
            return t(n, L, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            R(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== L && D(e);
            var n = k.attrHandle[t.toLowerCase()],
            i = n && Y.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !F) : undefined;
            return i !== undefined ? i: w.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            i = 0,
            o = 0;
            if (M = !w.detectDuplicates, O = !w.sortStable && e.slice(0), e.sort(U), M) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return O = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "",
            i = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += C(t);
            return n
        },
        (k = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === n: !n || (s += "", "=" === n ? s === i: "!=" === n ? s !== i: "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice( - i.length) === i: "~=" === n ? (" " + s.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3),
                    r = "last" !== e.slice( - 4),
                    a = "of-type" === t;
                    return 1 === i && 0 === o ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var c, u, d, h, p, f, _ = s !== r ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        g = !l && !a,
                        y = !1;
                        if (m) {
                            if (s) {
                                for (; _;) {
                                    for (h = t; h = h[_];) if (a ? h.nodeName.toLowerCase() === v: 1 === h.nodeType) return ! 1;
                                    f = _ = "only" === e && !f && "nextSibling"
                                }
                                return ! 0
                            }
                            if (f = [r ? m.firstChild: m.lastChild], r && g) {
                                for (y = (p = (c = (u = (d = (h = m)[N] || (h[N] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === H && c[1]) && c[2], h = p && m.childNodes[p]; h = ++p && h && h[_] || (y = p = 0) || f.pop();) if (1 === h.nodeType && ++y && h === t) {
                                    u[e] = [H, p, y];
                                    break
                                }
                            } else if (g && (y = p = (c = (u = (d = (h = t)[N] || (h[N] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === H && c[1]), !1 === y) for (; (h = ++p && h && h[_] || (y = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v: 1 !== h.nodeType) || !++y || (g && ((u = (d = h[N] || (h[N] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [H, y]), h !== t)););
                            return (y -= o) === i || y % i == 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[N] ? s(n) : s.length > 1 ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = s(e, n), r = o.length; r--;) e[i = ee(e, o[r])] = !(t[i] = o[r])
                    }) : function(e) {
                        return s(e, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    o = $(e.replace(ae, "$1"));
                    return o[N] ? i(function(e, t, n, i) {
                        for (var s, r = o(e, null, i, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                    }) : function(e, i, s) {
                        return t[0] = e,
                        o(t, null, s, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, we),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, we).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = F ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return ! 1 === e.disabled
                },
                disabled: function(e) {
                    return ! 0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! k.pseudos.empty(e)
                },
                header: function(e) {
                    return _e.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t: n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t: n; ++i < t;) e.push(i);
                    return e
                })
            }
        }).pseudos.nth = k.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) k.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) k.pseudos[b] = l(b);
        return d.prototype = k.filters = k.pseudos,
        k.setFilters = new d,
        E = t.tokenize = function(e, n) {
            var i, o, s, r, a, l, c, u = V[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = e, l = [], c = k.preFilter; a;) {
                for (r in i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = ce.exec(a)) && (i = o.shift(), s.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length)), k.filter) ! (o = pe[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length: a ? t.error(e) : V(e, l).slice(0)
        },
        $ = t.compile = function(e, t) {
            var n, i = [],
            o = [],
            s = z[e + " "];
            if (!s) {
                for (t || (t = E(e)), n = t.length; n--;)(s = g(t[n]))[N] ? i.push(s) : o.push(s); (s = z(e, y(o, i))).selector = e
            }
            return s
        },
        T = t.select = function(e, t, n, i) {
            var o, s, r, a, l, c = "function" == typeof e && e,
            d = !i && E(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && w.getById && 9 === t.nodeType && F && k.relative[s[1].type]) {
                    if (! (t = (k.find.ID(r.matches[0].replace(be, we), t) || [])[0])) return n;
                    c && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (o = pe.needsContext.test(e) ? 0 : s.length; o--&&(r = s[o], !k.relative[a = r.type]);) if ((l = k.find[a]) && (i = l(r.matches[0].replace(be, we), ge.test(s[0].type) && u(t.parentNode) || t))) {
                    if (s.splice(o, 1), !(e = i.length && h(s))) return G.apply(n, i),
                    n;
                    break
                }
            }
            return (c || $(e, d))(i, t, !F, n, !t || ge.test(e) && u(t.parentNode) || t),
            n
        },
        w.sortStable = N.split("").sort(U).join("") === N,
        w.detectDuplicates = !!M,
        D(),
        w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width",
        function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || s("value",
        function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(te,
        function(e, t, n) {
            var i;
            if (!n) return ! 0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        }),
        t
    } (e);
    pe.find = ge,
    pe.expr = ge.selectors,
    pe.expr[":"] = pe.expr.pseudos,
    pe.uniqueSort = pe.unique = ge.uniqueSort,
    pe.text = ge.getText,
    pe.isXMLDoc = ge.isXML,
    pe.contains = ge.contains;
    var ye = function(e, t, n) {
        for (var i = [], o = n !== undefined; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && pe(e).is(n)) break;
            i.push(e)
        }
        return i
    },
    be = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    },
    we = pe.expr.match.needsContext,
    ke = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [i] : [] : pe.find.matches(e, pe.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    pe.fn.extend({
        find: function(e) {
            var t, n = [],
            i = this,
            o = i.length;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < o; t++) if (pe.contains(i[t], this)) return ! 0
            }));
            for (t = 0; t < o; t++) pe.find(e, i[t], n);
            return (n = this.pushStack(o > 1 ? pe.unique(n) : n)).selector = this.selector ? this.selector + " " + e: e,
            n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !! i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length
        }
    });
    var xe, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (pe.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || xe, "string" == typeof e) {
            if (! (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !i[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t: ie, !0)), ke.test(i[1]) && pe.isPlainObject(t)) for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            if ((o = ie.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return xe.find(e);
                this.length = 1,
                this[0] = o
            }
            return this.context = ie,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : pe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(pe) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), pe.makeArray(e, this))
    }).prototype = pe.fn,
    xe = pe(ie);
    var $e = /^(?:parents|prev(?:Until|All))/,
    Te = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t, n = pe(e, this),
            i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++) if (pe.contains(this, n[t])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0,
            o = this.length,
            s = [], r = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0; i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                s.push(n);
                break
            }
            return this.pushStack(s.length > 1 ? pe.uniqueSort(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? pe.inArray(this[0], pe(e)) : pe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ye(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ye(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ye(e, "nextSibling")
        },
        prevAll: function(e) {
            return ye(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ye(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ye(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return pe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: pe.merge([], e.childNodes)
        }
    },
    function(e, t) {
        pe.fn[e] = function(n, i) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice( - 5) && (i = n),
            i && "string" == typeof i && (o = pe.filter(i, o)),
            this.length > 1 && (Te[e] || (o = pe.uniqueSort(o)), $e.test(e) && (o = o.reverse())),
            this.pushStack(o)
        }
    });
    var Se, Oe, Me = /\S+/g;
    for (Oe in pe.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : pe.extend({},
        e);
        var t, n, i, o, r = [],
        a = [],
        l = -1,
        c = function() {
            for (o = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < r.length;) ! 1 === r[l].apply(n[0], n[1]) && e.stopOnFalse && (l = r.length, n = !1);
            e.memory || (n = !1),
            t = !1,
            o && (r = n ? [] : "")
        },
        u = {
            add: function() {
                return r && (n && !t && (l = r.length - 1, a.push(n)),
                function i(t) {
                    pe.each(t,
                    function(t, n) {
                        pe.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== pe.type(n) && i(n)
                    })
                } (arguments), n && !t && c()),
                this
            },
            remove: function() {
                return pe.each(arguments,
                function(e, t) {
                    for (var n; (n = pe.inArray(t, r, n)) > -1;) r.splice(n, 1),
                    n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? pe.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return o = a = [],
                r = n = "",
                this
            },
            disabled: function() {
                return ! r
            },
            lock: function() {
                return o = !0,
                n || u.disable(),
                this
            },
            locked: function() {
                return !! o
            },
            fireWith: function(e, n) {
                return o || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! i
            }
        };
        return u
    },
    pe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", pe.Callbacks("once memory"), "resolved"], ["reject", "fail", pe.Callbacks("once memory"), "rejected"], ["notify", "progress", pe.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return pe.Deferred(function(n) {
                        pe.each(t,
                        function(t, s) {
                            var r = pe.isFunction(e[t]) && e[t];
                            o[s[1]](function() {
                                var e = r && r.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, i) : i
                }
            },
            o = {};
            return i.pipe = i.then,
            pe.each(t,
            function(e, s) {
                var r = s[2],
                a = s[3];
                i[s[1]] = r.add,
                a && r.add(function() {
                    n = a
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i: this, arguments),
                    this
                },
                o[s[0] + "With"] = r.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, i, o = 0,
            s = oe.call(arguments),
            r = s.length,
            a = 1 !== r || e && pe.isFunction(e.promise) ? r: 0,
            l = 1 === a ? e: pe.Deferred(),
            c = function(e, n, i) {
                return function(o) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? oe.call(arguments) : o,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (r > 1) for (t = new Array(r), n = new Array(r), i = new Array(r); o < r; o++) s[o] && pe.isFunction(s[o].promise) ? s[o].promise().progress(c(o, n, t)).done(c(o, i, s)).fail(l.reject) : --a;
            return a || l.resolveWith(i, s),
            l.promise()
        }
    }), pe.fn.ready = function(e) {
        return pe.ready.promise().done(e),
        this
    },
    pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++:pe.ready(!0)
        },
        ready: function(e) { (!0 === e ? --pe.readyWait: pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || (Se.resolveWith(ie, [pe]), pe.fn.triggerHandler && (pe(ie).triggerHandler("ready"), pe(ie).off("ready"))))
        }
    }), pe.ready.promise = function(t) {
        if (!Se) if (Se = pe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(pe.ready);
        else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a),
        e.addEventListener("load", a);
        else {
            ie.attachEvent("onreadystatechange", a),
            e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch(i) {}
            n && n.doScroll &&
            function t() {
                if (!pe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(i) {
                        return e.setTimeout(t, 50)
                    }
                    r(),
                    pe.ready()
                }
            } ()
        }
        return Se.promise(t)
    },
    pe.ready.promise(), pe(de)) break;
    de.ownFirst = "0" === Oe,
    de.inlineBlockNeedsLayout = !1,
    pe(function() {
        var e, t, n, i; (n = ie.getElementsByTagName("body")[0]) && n.style && (t = ie.createElement("div"), (i = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
    }),
    function() {
        var e = ie.createElement("div");
        de.deleteExpando = !0;
        try {
            delete e.test
        } catch(t) {
            de.deleteExpando = !1
        }
        e = null
    } ();
    var De, Le = function(e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    },
    Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Fe = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !! (e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]) && !c(e)
        },
        data: function(e, t, n) {
            return u(e, t, n)
        },
        removeData: function(e, t) {
            return d(e, t)
        },
        _data: function(e, t, n) {
            return u(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return d(e, t, !0)
        }
    }),
    pe.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0],
            r = s && s.attributes;
            if (e === undefined) {
                if (this.length && (o = pe.data(s), 1 === s.nodeType && !pe._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && 0 === (i = r[n].name).indexOf("data-") && l(s, i = pe.camelCase(i.slice(5)), o[i]);
                    pe._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                pe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                pe.data(this, e, t)
            }) : s ? l(s, e, pe.data(s, e)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                pe.removeData(this, e)
            })
        }
    }),
    pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue",
            i = pe._data(e, t),
            n && (!i || pe.isArray(n) ? i = pe._data(e, t, pe.makeArray(n)) : i.push(n)),
            i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t),
            i = n.length,
            o = n.shift(),
            s = pe._queueHooks(e, t),
            r = function() {
                pe.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--),
            o && ("fx" === t && n.unshift("inprogress"), delete s.stop, o.call(e, r, s)),
            !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe._data(e, n) || pe._data(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    pe._removeData(e, t + "queue"),
                    pe._removeData(e, n)
                })
            })
        }
    }),
    pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? pe.queue(this[0], e) : t === undefined ? this: this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
            o = pe.Deferred(),
            s = this,
            r = this.length,
            a = function() {--i || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; r--;)(n = pe._data(s[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(),
            o.promise(t)
        }
    }),
    de.shrinkWrapBlocks = function() {
        return null != De ? De: (De = !1, (t = ie.getElementsByTagName("body")[0]) && t.style ? (e = ie.createElement("div"), (n = ie.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ie.createElement("div")).style.width = "5px", De = 3 !== e.offsetWidth), t.removeChild(n), De) : void 0);
        var e, t, n
    };
    var je, Ie, Pe, Re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ne = new RegExp("^(?:([+-])=|)(" + Re + ")([a-z%]*)$", "i"),
    Be = ["Top", "Right", "Bottom", "Left"],
    He = function(e, t) {
        return e = t || e,
        "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
    },
    qe = function(e, t, n, i, o, s, r) {
        var a = 0,
        l = e.length,
        c = null == n;
        if ("object" === pe.type(n)) for (a in o = !0, n) qe(e, t, a, n[a], !0, s, r);
        else if (i !== undefined && (o = !0, pe.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(pe(e), n)
        })), t)) for (; a < l; a++) t(e[a], n, r ? i: i.call(e[a], a, t(e[a], n)));
        return o ? e: c ? t.call(e) : l ? t(e[0], n) : s
    },
    We = /^(?:checkbox|radio)$/i,
    Ve = /<([\w:-]+)/,
    ze = /^$|\/(?:java|ecma)script/i,
    Ue = /^\s+/,
    Xe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    je = ie.createElement("div"),
    Ie = ie.createDocumentFragment(),
    Pe = ie.createElement("input"),
    je.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    de.leadingWhitespace = 3 === je.firstChild.nodeType,
    de.tbody = !je.getElementsByTagName("tbody").length,
    de.htmlSerialize = !!je.getElementsByTagName("link").length,
    de.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML,
    Pe.type = "checkbox",
    Pe.checked = !0,
    Ie.appendChild(Pe),
    de.appendChecked = Pe.checked,
    je.innerHTML = "<textarea>x</textarea>",
    de.noCloneChecked = !!je.cloneNode(!0).lastChild.defaultValue,
    Ie.appendChild(je),
    (Pe = ie.createElement("input")).setAttribute("type", "radio"),
    Pe.setAttribute("checked", "checked"),
    Pe.setAttribute("name", "t"),
    je.appendChild(Pe),
    de.checkClone = je.cloneNode(!0).cloneNode(!0).lastChild.checked,
    de.noCloneEvent = !!je.addEventListener,
    je[pe.expando] = 1,
    de.attributes = !je.getAttribute(pe.expando);
    var Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ye.optgroup = Ye.option,
    Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
    Ye.th = Ye.td;
    var Ke = /<|&#?\w+;/,
    Qe = /<tbody/i; !
    function() {
        var t, n, i = ie.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t,
        (de[t] = n in e) || (i.setAttribute(n, "t"), de[t] = !1 === i.attributes[n].expando);
        i = null
    } ();
    var Je = /^(?:input|select|textarea)$/i,
    Ge = /^key/,
    Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    et = /^(?:focusinfocus|focusoutblur)$/,
    tt = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, c, u, d, h, p, f, _, m = pe._data(e);
            if (m) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = pe.guid++), (r = m.events) || (r = m.events = {}), (u = m.handle) || ((u = m.handle = function(e) {
                    return void 0 === pe || e && pe.event.triggered === e.type ? undefined: pe.event.dispatch.apply(u.elem, arguments)
                }).elem = e), a = (t = (t || "").match(Me) || [""]).length; a--;) p = _ = (s = tt.exec(t[a]) || [])[1],
                f = (s[2] || "").split(".").sort(),
                p && (c = pe.event.special[p] || {},
                p = (o ? c.delegateType: c.bindType) || p, c = pe.event.special[p] || {},
                d = pe.extend({
                    type: p,
                    origType: _,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && pe.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                },
                l), (h = r[p]) || ((h = r[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), pe.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, u, d, h, p, f, _, m = pe.hasData(e) && pe._data(e);
            if (m && (u = m.events)) {
                for (c = (t = (t || "").match(Me) || [""]).length; c--;) if (p = _ = (a = tt.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                    for (d = pe.event.special[p] || {},
                    h = u[p = (i ? d.delegateType: d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = h.length; s--;) r = h[s],
                    !o && _ !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(s, 1), r.selector && h.delegateCount--, d.remove && d.remove.call(e, r));
                    l && !h.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || pe.removeEvent(e, p, m.handle), delete u[p])
                } else for (p in u) pe.event.remove(e, p + t[c], n, i, !0);
                pe.isEmptyObject(u) && (delete m.handle, pe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var s, r, a, l, c, u, d, h = [i || ie],
            p = ue.call(t, "type") ? t.type: t,
            f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !et.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (f = p.split(".")).shift(), f.sort()), r = p.indexOf(":") < 0 && "on" + p, (t = t[pe.expando] ? t: new pe.Event(p, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : pe.makeArray(n, [t]), c = pe.event.special[p] || {},
            o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                if (!o && !c.noBubble && !pe.isWindow(i)) {
                    for (l = c.delegateType || p, et.test(l + p) || (a = a.parentNode); a; a = a.parentNode) h.push(a),
                    u = a;
                    u === (i.ownerDocument || ie) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0; (a = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l: c.bindType || p,
                (s = (pe._data(a, "events") || {})[t.type] && pe._data(a, "handle")) && s.apply(a, n),
                (s = r && a[r]) && s.apply && Le(a) && (t.result = s.apply(a, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && Le(i) && r && i[p] && !pe.isWindow(i)) { (u = i[r]) && (i[r] = null),
                    pe.event.triggered = p;
                    try {
                        i[p]()
                    } catch(_) {}
                    pe.event.triggered = undefined,
                    u && (i[r] = u)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = pe.event.fix(e);
            var t, n, i, o, s, r = [],
            a = oe.call(arguments),
            l = (pe._data(this, "events") || {})[e.type] || [],
            c = pe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (r = pe.event.handlers.call(this, e, l), t = 0; (o = r[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, (i = ((pe.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a)) !== undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r = [],
            a = t.delegateCount,
            l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (i = [], n = 0; n < a; n++) i[o = (s = t[n]).selector + " "] === undefined && (i[o] = s.needsContext ? pe(o, this).index(l) > -1 : pe.find(o, this, null, [l]).length),
                i[o] && i.push(s);
                i.length && r.push({
                    elem: l,
                    handlers: i
                })
            }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }),
            r
        },
        fix: function(e) {
            if (e[pe.expando]) return e;
            var t, n, i, o = e.type,
            s = e,
            r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = Ze.test(o) ? this.mouseHooks: Ge.test(o) ? this.keyHooks: {}), i = r.props ? this.props.concat(r.props) : this.props, e = new pe.Event(s), t = i.length; t--;) e[n = i[t]] = s[n];
            return e.target || (e.target = s.srcElement || ie),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, s = t.button,
                r = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (i = e.target.ownerDocument || ie).documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement: r),
                e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === b() && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (pe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                    !1
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event, n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    pe.removeEvent = ie.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }: function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    },
    pe.Event = function(e, t) {
        if (! (this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? g: y) : this.type = e,
        t && pe.extend(this, t),
        this.timeStamp = e && e.timeStamp || pe.now(),
        this[pe.expando] = !0
    },
    pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = g,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = g,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = g,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                o = e.relatedTarget,
                s = e.handleObj;
                return o && (o === i || pe.contains(i, o)) || (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    de.submit || (pe.event.special.submit = {
        setup: function() {
            if (pe.nodeName(this, "form")) return ! 1;
            pe.event.add(this, "click._submit keypress._submit",
            function(e) {
                var t = e.target,
                n = pe.nodeName(t, "input") || pe.nodeName(t, "button") ? pe.prop(t, "form") : undefined;
                n && !pe._data(n, "submit") && (pe.event.add(n, "submit._submit",
                function(e) {
                    e._submitBubble = !0
                }), pe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && pe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            if (pe.nodeName(this, "form")) return ! 1;
            pe.event.remove(this, "._submit")
        }
    }),
    de.change || (pe.event.special.change = {
        setup: function() {
            if (Je.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (pe.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), pe.event.add(this, "click._change",
            function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                pe.event.simulate("change", this, e)
            })),
            !1;
            pe.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Je.test(t.nodeName) && !pe._data(t, "change") && (pe.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || pe.event.simulate("change", this.parentNode, e)
                }), pe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return pe.event.remove(this, "._change"),
            !Je.test(this.nodeName)
        }
    }),
    de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e))
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                o = pe._data(i, t);
                o || i.addEventListener(e, n, !0),
                pe._data(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                o = pe._data(i, t) - 1;
                o ? pe._data(i, t, o) : (i.removeEventListener(e, n, !0), pe._removeData(i, t))
            }
        }
    }),
    pe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return ! 1 !== t && "function" != typeof t || (n = t, t = undefined),
            !1 === n && (n = y),
            this.each(function() {
                pe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0)
        }
    });
    var nt = / jQuery\d+="(?:null|\d+)"/g,
    it = new RegExp("<(?:" + Xe + ")[\\s/>]", "i"),
    ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    st = /<script|<style|<link/i,
    rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    at = /^true\/(.*)/,
    lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ct = p(ie).appendChild(ie.createElement("div"));
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(ot, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, s, r, a, l = pe.contains(e.ownerDocument, e);
            if (de.html5Clone || pe.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ct.innerHTML = e.outerHTML, ct.removeChild(s = ct.firstChild)), !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (i = f(s), a = f(e), r = 0; null != (o = a[r]); ++r) i[r] && $(o, i[r]);
            if (t) if (n) for (a = a || f(e), i = i || f(s), r = 0; null != (o = a[r]); r++) E(o, i[r]);
            else E(e, s);
            return (i = f(s, "script")).length > 0 && _(i, !l && f(e, "script")),
            i = a = o = null,
            s
        },
        cleanData: function(e, t) {
            for (var n, i, o, s, r = 0,
            a = pe.expando,
            l = pe.cache,
            c = de.attributes,
            u = pe.event.special; null != (n = e[r]); r++) if ((t || Le(n)) && (s = (o = n[a]) && l[o])) {
                if (s.events) for (i in s.events) u[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, s.handle);
                l[o] && (delete l[o], c || "undefined" == typeof n.removeAttribute ? n[a] = undefined: n.removeAttribute(a), ne.push(o))
            }
        }
    }),
    pe.fn.extend({
        domManip: T,
        detach: function(e) {
            return S(this, e, !0)
        },
        remove: function(e) {
            return S(this, e)
        },
        text: function(e) {
            return qe(this,
            function(e) {
                return e === undefined ? pe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return T(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && pe.cleanData(f(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && pe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return pe.clone(this, e, t)
            })
        },
        html: function(e) {
            return qe(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                i = this.length;
                if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(nt, "") : undefined;
                if ("string" == typeof e && !st.test(e) && (de.htmlSerialize || !it.test(e)) && (de.leadingWhitespace || !Ue.test(e)) && !Ye[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(f(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(o) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments,
            function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(f(this)), n && n.replaceChild(t, this))
            },
            e)
        }
    }),
    pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = 0,
            o = [], s = pe(e), r = s.length - 1; i <= r; i++) n = i === r ? this: this.clone(!0),
            pe(s[i])[t](n),
            re.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var ut, dt = {
        HTML: "block",
        BODY: "block"
    },
    ht = /^margin/,
    pt = new RegExp("^(" + Re + ")(?!px)[a-z%]+$", "i"),
    ft = function(e, t, n, i) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s],
        e.style[s] = t[s];
        for (s in o = n.apply(e, i || []), t) e.style[s] = r[s];
        return o
    },
    _t = ie.documentElement; !
    function() {
        function t() {
            var t, u, d = ie.documentElement;
            d.appendChild(l),
            c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = o = a = !1,
            i = r = !0,
            e.getComputedStyle && (u = e.getComputedStyle(c), n = "1%" !== (u || {}).top, a = "2px" === (u || {}).marginLeft, o = "4px" === (u || {
                width: "4px"
            }).width, c.style.marginRight = "50%", i = "4px" === (u || {
                marginRight: "4px"
            }).marginRight, (t = c.appendChild(ie.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", c.style.width = "1px", r = !parseFloat((e.getComputedStyle(t) || {}).marginRight), c.removeChild(t)),
            c.style.display = "none",
            (s = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (t = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", s = 0 === t[0].offsetHeight)),
            d.removeChild(l)
        }
        var n, i, o, s, r, a, l = ie.createElement("div"),
        c = ie.createElement("div");
        c.style && (c.style.cssText = "float:left;opacity:.5", de.opacity = "0.5" === c.style.opacity, de.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = ie.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), de.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, pe.extend(de, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                s
            },
            boxSizingReliable: function() {
                return null == n && t(),
                o
            },
            pixelMarginRight: function() {
                return null == n && t(),
                i
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                r
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                a
            }
        }))
    } ();
    var mt, vt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (mt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    },
    vt = function(e, t, n) {
        var i, o, s, r, a = e.style;
        return "" !== (r = (n = n || mt(e)) ? n.getPropertyValue(t) || n[t] : undefined) && r !== undefined || pe.contains(e.ownerDocument, e) || (r = pe.style(e, t)),
        n && !de.pixelMarginRight() && pt.test(r) && ht.test(t) && (i = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s),
        r === undefined ? r: r + ""
    }) : _t.currentStyle && (mt = function(e) {
        return e.currentStyle
    },
    vt = function(e, t, n) {
        var i, o, s, r, a = e.style;
        return null == (r = (n = n || mt(e)) ? n[t] : undefined) && a && a[t] && (r = a[t]),
        pt.test(r) && !gt.test(t) && (i = a.left, (s = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em": r, r = a.pixelLeft + "px", a.left = i, s && (o.left = s)),
        r === undefined ? r: r + "" || "auto"
    });
    var yt = /alpha\([^)]*\)/i,
    bt = /opacity\s*=\s*([^)]*)/i,
    wt = /^(none|table(?!-c[ea]).+)/,
    kt = new RegExp("^(" + Re + ")(.*)$", "i"),
    Ct = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    xt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Et = ["Webkit", "O", "Moz", "ms"],
    $t = ie.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = vt(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: de.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = pe.camelCase(t),
                l = e.style;
                if (t = pe.cssProps[a] || (pe.cssProps[a] = L(a) || a), r = pe.cssHooks[t] || pe.cssHooks[a], n === undefined) return r && "get" in r && (o = r.get(e, !1, i)) !== undefined ? o: l[t];
                if ("string" === (s = typeof n) && (o = Ne.exec(n)) && o[1] && (n = h(e, t, o), s = "number"), null != n && n == n && ("number" === s && (n += o && o[3] || (pe.cssNumber[a] ? "": "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(r && "set" in r && (n = r.set(e, n, i)) === undefined))) try {
                    l[t] = n
                } catch(c) {}
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = L(a) || a),
            (r = pe.cssHooks[t] || pe.cssHooks[a]) && "get" in r && (s = r.get(e, !0, n)),
            s === undefined && (s = vt(e, t, i)),
            "normal" === s && t in xt && (s = xt[t]),
            "" === n || n ? (o = parseFloat(s), !0 === n || isFinite(o) ? o || 0 : s) : s
        }
    }),
    pe.each(["height", "width"],
    function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return wt.test(pe.css(e, "display")) && 0 === e.offsetWidth ? ft(e, Ct,
                function() {
                    return I(e, t, i)
                }) : I(e, t, i)
            },
            set: function(e, n, i) {
                var o = i && mt(e);
                return F(e, n, i ? j(e, t, i, de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    de.opacity || (pe.cssHooks.opacity = {
        get: function(e, t) {
            return bt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            i = e.currentStyle,
            o = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            s = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === pe.trim(s.replace(yt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = yt.test(s) ? s.replace(yt, o) : s + " " + o)
        }
    }),
    pe.cssHooks.marginRight = D(de.reliableMarginRight,
    function(e, t) {
        if (t) return ft(e, {
            display: "inline-block"
        },
        vt, [e, "marginRight"])
    }),
    pe.cssHooks.marginLeft = D(de.reliableMarginLeft,
    function(e, t) {
        if (t) return (parseFloat(vt(e, "marginLeft")) || (pe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        },
        function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }),
    pe.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0,
                o = {},
                s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + Be[i] + t] = s[i] || s[i - 2] || s[0];
                return o
            }
        },
        ht.test(e) || (pe.cssHooks[e + t].set = F)
    }),
    pe.fn.extend({
        css: function(e, t) {
            return qe(this,
            function(e, t, n) {
                var i, o, s = {},
                r = 0;
                if (pe.isArray(t)) {
                    for (i = mt(e), o = t.length; r < o; r++) s[t[r]] = pe.css(e, t[r], !1, i);
                    return s
                }
                return n !== undefined ? pe.style(e, t, n) : pe.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                He(this) ? pe(this).show() : pe(this).hide()
            })
        }
    }),
    pe.Tween = P,
    P.prototype = {
        constructor: P,
        init: function(e, t, n, i, o, s) {
            this.elem = e,
            this.prop = n,
            this.easing = o || pe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = s || (pe.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : P.propHooks._default.set(this),
            this
        }
    },
    P.prototype.init.prototype = P.prototype,
    P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, "")) && "auto" !== t ? t: 0
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now: pe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    pe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    pe.fx = P.prototype.init,
    pe.fx.step = {};
    var Tt, St, Ot = /^(?:toggle|show|hide)$/,
    Mt = /queueHooks$/;
    pe.Animation = pe.extend(W, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Ne.exec(t), n),
                n
            }]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Me);
            for (var n, i = 0,
            o = e.length; i < o; i++) n = e[i],
            W.tweeners[n] = W.tweeners[n] || [],
            W.tweeners[n].unshift(t)
        },
        prefilters: [H],
        prefilter: function(e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e)
        }
    }),
    pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({},
        e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return i.duration = pe.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in pe.fx.speeds ? pe.fx.speeds[i.duration] : pe.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this),
            i.queue && pe.dequeue(this, i.queue)
        },
        i
    },
    pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(He).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = pe.isEmptyObject(e),
            s = pe.speed(t, n, i),
            r = function() {
                var t = W(this, pe.extend({},
                e), s); (o || pe._data(this, "finish")) && t.stop(!0)
            };
            return r.finish = r,
            o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = undefined),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                o = null != e && e + "queueHooks",
                s = pe.timers,
                r = pe._data(this);
                if (o) r[o] && r[o].stop && i(r[o]);
                else for (o in r) r[o] && r[o].stop && Mt.test(o) && i(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), t = !1, s.splice(o, 1)); ! t && n || pe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return ! 1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = pe._data(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                s = pe.timers,
                r = i ? i.length: 0;
                for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    pe.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(N(t, !0), e, i, o)
        }
    }),
    pe.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    pe.timers = [],
    pe.fx.tick = function() {
        var e, t = pe.timers,
        n = 0;
        for (Tt = pe.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || pe.fx.stop(),
        Tt = undefined
    },
    pe.fx.timer = function(e) {
        pe.timers.push(e),
        e() ? pe.fx.start() : pe.timers.pop()
    },
    pe.fx.interval = 13,
    pe.fx.start = function() {
        St || (St = e.setInterval(pe.fx.tick, pe.fx.interval))
    },
    pe.fx.stop = function() {
        e.clearInterval(St),
        St = null
    },
    pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pe.fn.delay = function(t, n) {
        return t = pe.fx && pe.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n,
        function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    },
    function() {
        var e, t = ie.createElement("input"),
        n = ie.createElement("div"),
        i = ie.createElement("select"),
        o = i.appendChild(ie.createElement("option")); (n = ie.createElement("div")).setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px",
        de.getSetAttribute = "t" !== n.className,
        de.style = /top/.test(e.getAttribute("style")),
        de.hrefNormalized = "/a" === e.getAttribute("href"),
        de.checkOn = !!t.value,
        de.optSelected = o.selected,
        de.enctype = !!ie.createElement("form").enctype,
        i.disabled = !0,
        de.optDisabled = !o.disabled,
        (t = ie.createElement("input")).setAttribute("value", ""),
        de.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        de.radioValue = "t" === t.value
    } ();
    var Dt = /\r/g,
    Lt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = pe.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, pe(this).val()) : e) ? o = "": "number" == typeof o ? o += "": pe.isArray(o) && (o = pe.map(o,
                function(e) {
                    return null == e ? "": e + ""
                })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, o, "value") !== undefined || (this.value = o))
            })) : o ? (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && (n = t.get(o, "value")) !== undefined ? n: "string" == typeof(n = o.value) ? n.replace(Dt, "") : null == n ? "": n: void 0
        }
    }),
    pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t: pe.trim(pe.text(e)).replace(Lt, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options,
                    o = e.selectedIndex,
                    s = "select-one" === e.type || o < 0,
                    r = s ? null: [], a = s ? o + 1 : i.length, l = o < 0 ? a: s ? o: 0; l < a; l++) if (((n = i[l]).selected || l === o) && (de.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = pe(n).val(), s) return t;
                        r.push(t)
                    }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, o = e.options,
                    s = pe.makeArray(t), r = o.length; r--;) if (i = o[r], pe.inArray(pe.valHooks.option.get(i), s) > -1) try {
                        i.selected = n = !0
                    } catch(a) {
                        i.scrollHeight
                    } else i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    pe.each(["radio", "checkbox"],
    function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1
            }
        },
        de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var At, Ft, jt = pe.expr.attrHandle,
    It = /^(?:checked|selected)$/i,
    Pt = de.getSetAttribute,
    Rt = de.input;
    pe.fn.extend({
        attr: function(e, t) {
            return qe(this, pe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e)
            })
        }
    }),
    pe.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return "undefined" == typeof e.getAttribute ? pe.prop(e, t, n) : (1 === s && pe.isXMLDoc(e) || (t = t.toLowerCase(), o = pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ft: At)), n !== undefined ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i: (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i: null == (i = pe.find.attr(e, t)) ? undefined: i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
            s = t && t.match(Me);
            if (s && 1 === e.nodeType) for (; n = s[o++];) i = pe.propFix[n] || n,
            pe.expr.match.bool.test(n) ? Rt && Pt || !It.test(n) ? e[i] = !1 : e[pe.camelCase("default-" + n)] = e[i] = !1 : pe.attr(e, n, ""),
            e.removeAttribute(Pt ? n: i)
        }
    }),
    Ft = {
        set: function(e, t, n) {
            return ! 1 === t ? pe.removeAttr(e, n) : Rt && Pt || !It.test(n) ? e.setAttribute(!Pt && pe.propFix[n] || n, n) : e[pe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    pe.each(pe.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = jt[t] || pe.find.attr;
        Rt && Pt || !It.test(t) ? jt[t] = function(e, t, i) {
            var o, s;
            return i || (s = jt[t], jt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, jt[t] = s),
            o
        }: jt[t] = function(e, t, n) {
            if (!n) return e[pe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Rt && Pt || (pe.attrHooks.value = {
        set: function(e, t, n) {
            if (!pe.nodeName(e, "input")) return At && At.set(e, t, n);
            e.defaultValue = t
        }
    }),
    Pt || (At = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    },
    jt.id = jt.name = jt.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value: null
    },
    pe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: At.set
    },
    pe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            At.set(e, "" !== t && t, n)
        }
    },
    pe.each(["width", "height"],
    function(e, t) {
        pe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"),
                n
            }
        }
    })),
    de.style || (pe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,
    Bt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return qe(this, pe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = pe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = undefined,
                    delete this[e]
                } catch(t) {}
            })
        }
    }),
    pe.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, o = pe.propHooks[t]),
            n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i: e[t] = n: o && "get" in o && null !== (i = o.get(e, t)) ? i: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Nt.test(e.nodeName) || Bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    de.hrefNormalized || pe.each(["href", "src"],
    function(e, t) {
        pe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    pe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        pe.propFix[this.toLowerCase()] = this
    }),
    de.enctype || (pe.propFix.enctype = "encoding");
    var Ht = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, V(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(Me) || []; n = this[l++];) if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                for (r = 0; s = t[r++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                o !== (a = pe.trim(i)) && pe.attr(n, "class", a)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, V(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Me) || []; n = this[l++];) if (o = V(n), i = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                for (r = 0; s = t[r++];) for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                o !== (a = pe.trim(i)) && pe.attr(n, "class", a)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, V(this), t), t)
            }) : this.each(function() {
                var t, i, o, s;
                if ("string" === n) for (i = 0, o = pe(this), s = e.match(Me) || []; t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else e !== undefined && "boolean" !== n || ((t = V(this)) && pe._data(this, "__className__", t), pe.attr(this, "class", t || !1 === e ? "": pe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(n) + " ").replace(Ht, " ").indexOf(t) > -1) return ! 0;
            return ! 1
        }
    }),
    pe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var qt = e.location,
    Wt = pe.now(),
    Vt = /\?/,
    zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
        o = pe.trim(t + "");
        return o && !pe.trim(o.replace(zt,
        function(e, t, o, s) {
            return n && t && (i = 0),
            0 === i ? e: (n = o || t, i += !s - !o, "")
        })) ? Function("return " + o)() : pe.error("Invalid JSON: " + t)
    },
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? n = (new e.DOMParser).parseFromString(t, "text/xml") : ((n = new e.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(t))
        } catch(i) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t),
        n
    };
    var Ut = /#.*$/,
    Xt = /([?&])_=[^&]*/,
    Yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Qt = /^(?:GET|HEAD)$/,
    Jt = /^\/\//,
    Gt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Zt = {},
    en = {},
    tn = "*/".concat("*"),
    nn = qt.href,
    on = Gt.exec(nn.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            // url: nn,
            // type: "GET",
            // isLocal: Kt.test(on[1]),
            // global: !0,
            // processData: !0,
            // async: !0,
            // contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            // accepts: {
            //     "*": tn,
            //     text: "text/plain",
            //     html: "text/html",
            //     xml: "application/xml, text/xml",
            //     json: "application/json, text/javascript"
            // },
            // contents: {
            //     xml: /\bxml\b/,
            //     html: /\bhtml/,
            //     json: /\bjson\b/
            // },
            // responseFields: {
            //     xml: "responseXML",
            //     text: "responseText",
            //     json: "responseJSON"
            // },
            // converters: {
            //     "* text": String,
            //     "text html": !0,
            //     "text json": pe.parseJSON,
            //     "text xml": pe.parseXML
            // },
            // flatOptions: {
            //     url: !0,
            //     context: !0
            // }
        },
        ajaxSetup: function(e, t) {
            // return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e)
        },
        ajaxPrefilter: z(Zt),
        ajaxTransport: z(en),
        ajax: function(t, n) {
            // function i(t, n, i, o) {
            //     var s, d, g, y, w, C = n;
            //     2 !== b && (b = 2, l && e.clearTimeout(l), u = undefined, a = o || "", k.readyState = t > 0 ? 4 : 0, s = t >= 200 && t < 300 || 304 === t, i && (y = Y(h, k, i)), y = K(h, y, k, s), s ? (h.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (pe.lastModified[r] = w), (w = k.getResponseHeader("etag")) && (pe.etag[r] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent": 304 === t ? C = "notmodified": (C = y.state, d = y.data, s = !(g = y.error))) : (g = C, !t && C || (C = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (n || C) + "", s ? _.resolveWith(p, [d, C, k]) : _.rejectWith(p, [k, C, g]), k.statusCode(v), v = undefined, c && f.trigger(s ? "ajaxSuccess": "ajaxError", [k, h, s ? d: g]), m.fireWith(p, [k, C]), c && (f.trigger("ajaxComplete", [k, h]), --pe.active || pe.event.trigger("ajaxStop")))
            // }
            // "object" == typeof t && (n = t, t = undefined),
            // n = n || {};
            // var o, s, r, a, l, c, u, d, h = pe.ajaxSetup({},
            // n),
            // p = h.context || h,
            // f = h.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
            // _ = pe.Deferred(),
            // m = pe.Callbacks("once memory"),
            // v = h.statusCode || {},
            // g = {},
            // y = {},
            // b = 0,
            // w = "canceled",
            // k = {
            //     readyState: 0,
            //     getResponseHeader: function(e) {
            //         var t;
            //         if (2 === b) {
            //             if (!d) for (d = {}; t = Yt.exec(a);) d[t[1].toLowerCase()] = t[2];
            //             t = d[e.toLowerCase()]
            //         }
            //         return null == t ? null: t
            //     },
            //     getAllResponseHeaders: function() {
            //         return 2 === b ? a: null
            //     },
            //     setRequestHeader: function(e, t) {
            //         var n = e.toLowerCase();
            //         return b || (e = y[n] = y[n] || e, g[e] = t),
            //         this
            //     },
            //     overrideMimeType: function(e) {
            //         return b || (h.mimeType = e),
            //         this
            //     },
            //     statusCode: function(e) {
            //         var t;
            //         if (e) if (b < 2) for (t in e) v[t] = [v[t], e[t]];
            //         else k.always(e[k.status]);
            //         return this
            //     },
            //     abort: function(e) {
            //         var t = e || w;
            //         return u && u.abort(t),
            //         i(0, t),
            //         this
            //     }
            // };
            // if (_.promise(k).complete = m.add, k.success = k.done, k.error = k.fail, h.url = ((t || h.url || nn) + "").replace(Ut, "").replace(Jt, on[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = pe.trim(h.dataType || "*").toLowerCase().match(Me) || [""], null == h.crossDomain && (o = Gt.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === on[1] && o[2] === on[2] && (o[3] || ("http:" === o[1] ? "80": "443")) === (on[3] || ("http:" === on[1] ? "80": "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), U(Zt, h, n, k), 2 === b) return k;
            // for (s in (c = pe.event && h.global) && 0 == pe.active++&&pe.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Qt.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (Vt.test(r) ? "&": "?") + h.data, delete h.data), !1 === h.cache && (h.url = Xt.test(r) ? r.replace(Xt, "$1_=" + Wt++) : r + (Vt.test(r) ? "&": "?") + "_=" + Wt++)), h.ifModified && (pe.lastModified[r] && k.setRequestHeader("If-Modified-Since", pe.lastModified[r]), pe.etag[r] && k.setRequestHeader("If-None-Match", pe.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + tn + "; q=0.01": "") : h.accepts["*"]), h.headers) k.setRequestHeader(s, h.headers[s]);
            // if (h.beforeSend && (!1 === h.beforeSend.call(p, k, h) || 2 === b)) return k.abort();
            // for (s in w = "abort", {
            //     success: 1,
            //     error: 1,
            //     complete: 1
            // }) k[s](h[s]);
            // if (u = U(en, h, n, k)) {
            //     if (k.readyState = 1, c && f.trigger("ajaxSend", [k, h]), 2 === b) return k;
            //     h.async && h.timeout > 0 && (l = e.setTimeout(function() {
            //         k.abort("timeout")
            //     },
            //     h.timeout));
            //     try {
            //         b = 1,
            //         u.send(g, i)
            //     } catch(C) {
            //         if (! (b < 2)) throw C;
            //         i( - 1, C)
            //     }
            // } else i( - 1, "No Transport");
            // return k
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return pe.get(e, undefined, t, "script")
        }
    }),
    pe.each(["get", "post"],
    function(e, t) {
        pe[t] = function(e, n, i, o) {
            return pe.isFunction(n) && (o = o || i, i = n, n = undefined),
            pe.ajax(pe.extend({
                // url: e,
                // type: t,
                // dataType: o,
                // data: n,
                // success: i
            },
            pe.isPlainObject(e) && e))
        }
    }),
    pe._evalUrl = function(e) {
        return pe.ajax({
            // url: e,
            // type: "GET",
            // dataType: "script",
            // cache: !0,
            // async: !1,
            // global: !1,
            // throws: !0
        })
    },
    pe.fn.extend({
        wrapAll: function(e) {
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = pe(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pe.expr.filters.hidden = function(e) {
        return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length: J(e)
    },
    pe.expr.filters.visible = function(e) {
        return ! pe.expr.filters.hidden(e)
    };
    var sn = /%20/g,
    rn = /\[\]$/,
    an = /\r?\n/g,
    ln = /^(?:submit|button|image|reset|file)$/i,
    cn = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        // var n, i = [],
        // o = function(e, t) {
        //     t = pe.isFunction(t) ? t() : null == t ? "": t,
        //     i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        // };
        // if (t === undefined && (t = pe.ajaxSettings && pe.ajaxSettings.traditional), pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e,
        // function() {
        //     o(this.name, this.value)
        // });
        // else for (n in e) G(n, e[n], t, o);
        // return i.join("&").replace(sn, "+")
    },
    pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && cn.test(this.nodeName) && !ln.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null: pe.isArray(n) ? pe.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(an, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(an, "\r\n")
                }
            }).get()
        }
    }),
    pe.ajaxSettings.xhr = e.ActiveXObject !== undefined ?
    function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }: Z;
    var un = 0,
    dn = {},
    hn = pe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload",
    function() {
        for (var e in dn) dn[e](undefined, !0)
    }),
    de.cors = !!hn && "withCredentials" in hn,
    (hn = de.ajax = !!hn) && pe.ajaxTransport(function(t) {
        var n;
        if (!t.crossDomain || de.cors) return {
            send: function(i, o) {
                var s, r = t.xhr(),
                a = ++un;
                if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) r[s] = t.xhrFields[s];
                for (s in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) i[s] !== undefined && r.setRequestHeader(s, i[s] + "");
                r.send(t.hasContent && t.data || null),
                n = function(e, i) {
                    var s, l, c;
                    // if (n && (i || 4 === r.readyState)) if (delete dn[a], n = undefined, r.onreadystatechange = pe.noop, i) 4 !== r.readyState && r.abort();
                    // else {
                    //     c = {},
                    //     s = r.status,
                    //     "string" == typeof r.responseText && (c.text = r.responseText);
                    //     try {
                    //         l = r.statusText
                    //     } catch(u) {
                    //         l = ""
                    //     }
                    //     s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                    // }
                    c && o(s, l, c, r.getAllResponseHeaders())
                },
                t.async ? 4 === r.readyState ? e.setTimeout(n) : r.onreadystatechange = dn[a] = n: n()
            },
            abort: function() {
                n && n(undefined, !0)
            }
        }
    }),
    pe.ajaxSetup({
        // accepts: {
        //     script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        // },
        // contents: {
        //     script: /\b(?:java|ecma)script\b/
        // },
        // converters: {
        //     "text script": function(e) {
        //         return pe.globalEval(e),
        //         e
        //     }
        // }
    }),
    pe.ajaxPrefilter("script",
    function(e) {
        e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    pe.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || pe("head")[0] || ie.documentElement;
            return {
                send: function(i, o) { (t = ie.createElement("script")).async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                    },
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var pn = [],
    fn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = pn.pop() || pe.expando + "_" + Wt++;
            return this[e] = !0,
            e
        }
    }),
    pe.ajaxPrefilter("json jsonp",
    function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (fn.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && fn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(fn, "$1" + o) : !1 !== t.jsonp && (t.url += (Vt.test(t.url) ? "&": "?") + t.jsonp + "=" + o),
        t.converters["script json"] = function() {
            return r || pe.error(o + " was not called"),
            r[0]
        },
        t.dataTypes[0] = "json",
        s = e[o],
        e[o] = function() {
            r = arguments
        },
        i.always(function() {
            s === undefined ? pe(e).removeProp(o) : e[o] = s,
            t[o] && (t.jsonpCallback = n.jsonpCallback, pn.push(o)),
            r && pe.isFunction(s) && s(r[0]),
            r = s = undefined
        }),
        "script"
    }),
    pe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || ie;
        var i = ke.exec(e),
        o = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && pe(o).remove(), pe.merge([], i.childNodes))
    };
    var _n = pe.fn.load;
    pe.fn.load = function(e, t, n) {
        if ("string" != typeof e && _n) return _n.apply(this, arguments);
        var i, o, s, r = this,
        a = e.indexOf(" ");
        return a > -1 && (i = pe.trim(e.slice(a, e.length)), e = e.slice(0, a)),
        pe.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"),
        r.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments,
            r.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e)
        }).always(n &&
        function(e, t) {
            r.each(function() {
                n.apply(this, s || [e.responseText, t, e])
            })
        }),
        this
    },
    pe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    pe.expr.filters.animated = function(e) {
        return pe.grep(pe.timers,
        function(t) {
            return e === t.elem
        }).length
    },
    pe.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c = pe.css(e, "position"),
            u = pe(e),
            d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            s = pe.css(e, "top"),
            l = pe.css(e, "left"),
            ("absolute" === c || "fixed" === c) && pe.inArray("auto", [s, l]) > -1 ? (r = (i = u.position()).top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0),
            pe.isFunction(t) && (t = t.call(e, n, pe.extend({},
            a))),
            null != t.top && (d.top = t.top - a.top + r),
            null != t.left && (d.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, d) : u.css(d)
        }
    },
    pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this: this.each(function(t) {
                pe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            s = o && o.ownerDocument;
            return s ? (t = s.documentElement, pe.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = te(s), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === pe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), pe.nodeName(e[0], "html") || (n = e.offset()), n.top += pe.css(e[0], "borderTopWidth", !0), n.left += pe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - pe.css(i, "marginTop", !0),
                    left: t.left - n.left - pe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");) e = e.offsetParent;
                return e || _t
            })
        }
    }),
    pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = /Y/.test(t);
        pe.fn[e] = function(i) {
            return qe(this,
            function(e, i, o) {
                var s = te(e);
                if (o === undefined) return s ? t in s ? s[t] : s.document.documentElement[i] : e[i];
                s ? s.scrollTo(n ? pe(s).scrollLeft() : o, n ? o: pe(s).scrollTop()) : e[i] = o
            },
            e, i, arguments.length, null)
        }
    }),
    pe.each(["top", "left"],
    function(e, t) {
        pe.cssHooks[t] = D(de.pixelPosition,
        function(e, n) {
            if (n) return n = vt(e, t),
            pt.test(n) ? pe(e).position()[t] + "px": n
        })
    }),
    pe.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, i) {
            pe.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                r = n || (!0 === i || !0 === o ? "margin": "border");
                return qe(this,
                function(t, n, i) {
                    var o;
                    return pe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? pe.css(t, n, r) : pe.style(t, n, i, r)
                },
                t, s ? i: undefined, s, null)
            }
        })
    }),
    pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    pe.fn.size = function() {
        return this.length
    },
    pe.fn.andSelf = pe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return pe
    });
    var mn = e.jQuery,
    vn = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = vn),
        t && e.jQuery === pe && (e.jQuery = mn),
        pe
    },
    t || (e.jQuery = e.$ = pe),
    pe
}),
/*
jQuery.Turbolinks ~ https://github.com/kossnocorp/jquery.turbolinks
jQuery plugin for drop-in fix binded events problem caused by Turbolinks
The MIT License
Copyright (c) 2012-2013 Sasha Koss & Rico Sta. Cruz
 */
function() {
    var e, t;
    e = window.jQuery || ("function" == typeof require ? require("jquery") : void 0),
    t = e(document),
    e.turbo = {
        version: "2.1.0",
        isReady: !1,
        use: function(e, n) {
            return t.off(".turbo").on(e + ".turbo", this.onLoad).on(n + ".turbo", this.onFetch)
        },
        addCallback: function(n) {
            return e.turbo.isReady && n(e),
            t.on("turbo:ready",
            function() {
                return n(e)
            })
        },
        onLoad: function() {
            return e.turbo.isReady = !0,
            t.trigger("turbo:ready")
        },
        onFetch: function() {
            return e.turbo.isReady = !1
        },
        register: function() {
            return e(this.onLoad),
            e.fn.ready = this.addCallback
        }
    },
    e.turbo.register(),
    e.turbo.use("page:load", "page:fetch")
}.call(this),
function(e, t) {
    "use strict";
    var n;
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var o = e.Event(n);
            return t.trigger(o, i),
            !1 !== o.result
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && !1 !== e.data("remote")
        },
        handleRemote: function(i) {
            var o, s, r, a, l, c;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    o = i.data("ujs:submit-button-formmethod") || i.attr("method"),
                    s = i.data("ujs:submit-button-formaction") || i.attr("action"),
                    r = e(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (r.push(u), i.data("ujs:submit-button", null)),
                    i.data("ujs:submit-button-formmethod", null),
                    i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", s = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (o = i.data("method"), s = n.href(i), r = i.data("params") || null);
                return c = {
                    type: o || "GET",
                    data: r,
                    dataType: l,
                    beforeSend: function(e, o) {
                        if (o.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !n.fire(i, "ajax:beforeSend", [e, o])) return ! 1;
                        i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(s)
                },
                a && (c.xhrFields = {
                    withCredentials: a
                }),
                s && (c.url = s),
                n.ajax(c)
            }
            return ! 1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch(i) {
                return ! 0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
            s = i.data("method"),
            r = i.attr("target"),
            a = n.csrfToken(),
            l = n.csrfParam(),
            c = e('<form method="post" action="' + o + '"></form>'),
            u = '<input name="_method" value="' + s + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            r && c.attr("target", r),
            c.hide().append(u).appendTo("body"),
            c.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html": "val",
            (i = e.data("disable-with")) !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html": "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
            o = !1;
            if (!i) return ! 0;
            if (n.fire(e, "confirm")) {
                try {
                    o = n.confirm(i)
                } catch(s) { (console.error || console.log).call(console, s.stack || s)
                }
                t = n.fire(e, "confirm:complete", [o])
            }
            return o && t
        },
        blankInputs: function(t, n, i) {
            var o, s, r, a = e(),
            l = n || "input,textarea",
            c = t.find(l),
            u = {};
            return c.each(function() { (o = e(this)).is("input[type=radio]") ? (r = o.attr("name"), u[r] || (0 === t.find('input[type=radio]:checked[name="' + r + '"]').length && (s = t.find('input[type=radio][name="' + r + '"]'), a = a.add(s)), u[r] = r)) : (o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val()) === i && (a = a.add(o))
            }),
            !!a.length && a
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)),
            e.bind("click.railsDisable",
            function(e) {
                return n.stopEverything(e)
            }),
            e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled")
        }
    },
    n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails",
    function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }),
        e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.on("ajax:complete", n.linkDisableSelector,
    function() {
        n.enableElement(e(this))
    }), i.on("ajax:complete", n.buttonDisableSelector,
    function() {
        n.enableFormElement(e(this))
    }), i.on("click.rails", n.linkClickSelector,
    function(t) {
        var i = e(this),
        o = i.data("method"),
        s = i.data("params"),
        r = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!r && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (r && (!o || "GET" === o) && !s) return ! 0;
            var a = n.handleRemote(i);
            return ! 1 === a ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }),
            !1
        }
        return o ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector,
    function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return ! 1 === o ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }),
        !1
    }), i.on("change.rails", n.inputChangeSelector,
    function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.on("submit.rails", n.formSubmitSelector,
    function(i) {
        var o, s, r = e(this),
        a = n.isRemote(r);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.attr("novalidate") === t) if (r.data("ujs:formnovalidate-button") === t) {
            if ((o = n.blankInputs(r, n.requiredInputSelector, !1)) && n.fire(r, "ajax:aborted:required", [o])) return n.stopEverything(i)
        } else r.data("ujs:formnovalidate-button", t);
        if (a) {
            if (s = n.nonBlankInputs(r, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(r)
                },
                13);
                var l = n.fire(r, "ajax:aborted:file", [s]);
                return l || setTimeout(function() {
                    n.enableFormElements(r)
                },
                13),
                l
            }
            return n.handleRemote(r),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        },
        13)
    }), i.on("click.rails", n.formInputClickSelector,
    function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var o = i.attr("name"),
        s = o ? {
            name: o,
            value: i.val()
        }: null,
        r = i.closest("form");
        0 === r.length && (r = e("#" + i.attr("form"))),
        r.data("ujs:submit-button", s),
        r.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
        r.data("ujs:submit-button-formaction", i.attr("formaction")),
        r.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector,
    function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector,
    function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
} (jQuery),
/*
Turbolinks 5.1.0
Copyright Â© 2018 Basecamp, LLC
 */
function() {
    this.Turbolinks = {
        supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
        visit: function(e, t) {
            return Turbolinks.controller.visit(e, t)
        },
        clearCache: function() {
            return Turbolinks.controller.clearCache()
        },
        setProgressBarDelay: function(e) {
            return Turbolinks.controller.setProgressBarDelay(e)
        }
    }
}.call(this),
function() {
    var e, t, n, i = [].slice;
    Turbolinks.copyObject = function(e) {
        var t, n, i;
        for (t in n = {},
        e) i = e[t],
        n[t] = i;
        return n
    },
    Turbolinks.closest = function(t, n) {
        return e.call(t, n)
    },
    e = function() {
        var e;
        return null != (e = document.documentElement.closest) ? e: function(e) {
            var n;
            for (n = this; n;) {
                if (n.nodeType === Node.ELEMENT_NODE && t.call(n, e)) return n;
                n = n.parentNode
            }
        }
    } (),
    Turbolinks.defer = function(e) {
        return setTimeout(e, 1)
    },
    Turbolinks.throttle = function(e) {
        var t;
        return t = null,
        function() {
            var n;
            return n = 1 <= arguments.length ? i.call(arguments, 0) : [],
            null != t ? t: t = requestAnimationFrame(function(i) {
                return function() {
                    return t = null,
                    e.apply(i, n)
                }
            } (this))
        }
    },
    Turbolinks.dispatch = function(e, t) {
        var i, o, s, r, a, l;
        return l = (a = null != t ? t: {}).target,
        i = a.cancelable,
        o = a.data,
        (s = document.createEvent("Events")).initEvent(e, !0, !0 === i),
        s.data = null != o ? o: {},
        s.cancelable && !n && (r = s.preventDefault, s.preventDefault = function() {
            return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                    return ! 0
                }
            }),
            r.call(this)
        }),
        (null != l ? l: document).dispatchEvent(s),
        s
    },
    n = function() {
        var e;
        return (e = document.createEvent("Events")).initEvent("test", !0, !0),
        e.preventDefault(),
        e.defaultPrevented
    } (),
    Turbolinks.match = function(e, n) {
        return t.call(e, n)
    },
    t = function() {
        var e, t, n, i;
        return null != (t = null != (n = null != (i = (e = document.documentElement).matchesSelector) ? i: e.webkitMatchesSelector) ? n: e.msMatchesSelector) ? t: e.mozMatchesSelector
    } (),
    Turbolinks.uuid = function() {
        var e, t, n;
        for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-": 15 === e ? "4": 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return n
    }
}.call(this),
function() {
    Turbolinks.Location = function() {
        function e(e) {
            var t, n;
            null == e && (e = ""),
            (n = document.createElement("a")).href = e.toString(),
            this.absoluteURL = n.href,
            2 > (t = n.hash.length) ? this.requestURL = this.absoluteURL: (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
        }
        var t, n, i, o;
        return e.wrap = function(e) {
            return e instanceof this ? e: new this(e)
        },
        e.prototype.getOrigin = function() {
            return this.absoluteURL.split("/", 3).join("/")
        },
        e.prototype.getPath = function() {
            var e, t;
            return null != (e = null != (t = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e: "/"
        },
        e.prototype.getPathComponents = function() {
            return this.getPath().split("/").slice(1)
        },
        e.prototype.getLastPathComponent = function() {
            return this.getPathComponents().slice( - 1)[0]
        },
        e.prototype.getExtension = function() {
            var e, t;
            return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e: ""
        },
        e.prototype.isHTML = function() {
            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
        },
        e.prototype.isPrefixedBy = function(e) {
            var t;
            return t = n(e),
            this.isEqualTo(e) || o(this.absoluteURL, t)
        },
        e.prototype.isEqualTo = function(e) {
            return this.absoluteURL === (null != e ? e.absoluteURL: void 0)
        },
        e.prototype.toCacheKey = function() {
            return this.requestURL
        },
        e.prototype.toJSON = function() {
            return this.absoluteURL
        },
        e.prototype.toString = function() {
            return this.absoluteURL
        },
        e.prototype.valueOf = function() {
            return this.absoluteURL
        },
        n = function(e) {
            return t(e.getOrigin() + e.getPath())
        },
        t = function(e) {
            return i(e, "/") ? e: e + "/"
        },
        o = function(e, t) {
            return e.slice(0, t.length) === t
        },
        i = function(e, t) {
            return e.slice( - t.length) === t
        },
        e
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.HttpRequest = function() {
        function t(t, n, i) {
            this.delegate = t,
            this.requestCanceled = e(this.requestCanceled, this),
            this.requestTimedOut = e(this.requestTimedOut, this),
            this.requestFailed = e(this.requestFailed, this),
            this.requestLoaded = e(this.requestLoaded, this),
            this.requestProgressed = e(this.requestProgressed, this),
            this.url = Turbolinks.Location.wrap(n).requestURL,
            this.referrer = Turbolinks.Location.wrap(i).absoluteURL,
            this.createXHR()
        }
        return t.NETWORK_FAILURE = 0,
        t.TIMEOUT_FAILURE = -1,
        t.timeout = 60,
        t.prototype.send = function() {
            var e;
            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0
        },
        // t.prototype.cancel = function() {
        //     return this.xhr && this.sent ? this.xhr.abort() : void 0
        // },
        t.prototype.requestProgressed = function(e) {
            return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0
        },
        t.prototype.requestLoaded = function() {
            return this.endRequest((e = this,
            function() {
                var t;
                return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
            }));
            var e
        }, t.prototype.requestFailed = function() {
            return this.endRequest((e = this,
            function() {
                return e.failed = !0,
                e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE)
            }));
            var e
        }, t.prototype.requestTimedOut = function() {
            return this.endRequest((e = this,
            function() {
                return e.failed = !0,
                e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE)
            }));
            var e
        }, t.prototype.requestCanceled = function() {
            return this.endRequest()
        },
        t.prototype.notifyApplicationBeforeRequestStart = function() {
            return Turbolinks.dispatch("turbolinks:request-start", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        },
        t.prototype.notifyApplicationAfterRequestEnd = function() {
            return Turbolinks.dispatch("turbolinks:request-end", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        },
        t.prototype.createXHR = function() {
            return this.xhr = new XMLHttpRequest,
            this.xhr.open("GET", this.url, !0),
            this.xhr.timeout = 1e3 * this.constructor.timeout,
            this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"),
            this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer),
            this.xhr.onprogress = this.requestProgressed,
            this.xhr.onload = this.requestLoaded,
            this.xhr.onerror = this.requestFailed,
            this.xhr.ontimeout = this.requestTimedOut,
            this.xhr.onabort = this.requestCanceled
        },
        t.prototype.endRequest = function(e) {
            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0
        },
        t.prototype.setProgress = function(e) {
            var t;
            return this.progress = e,
            "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0
        },
        t.prototype.destroy = function() {
            var e;
            return this.setProgress(1),
            "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(),
            this.delegate = null,
            this.xhr = null
        },
        t
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.ProgressBar = function() {
        function t() {
            this.trickle = e(this.trickle, this),
            this.stylesheetElement = this.createStylesheetElement(),
            this.progressElement = this.createProgressElement()
        }
        var n;
        return n = 300,
        t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",
        t.prototype.show = function() {
            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
        },
        t.prototype.hide = function() {
            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((e = this,
            function() {
                return e.uninstallProgressElement(),
                e.stopTrickling(),
                e.visible = !1,
                e.hiding = !1
            }))) : void 0;
            var e
        }, t.prototype.setValue = function(e) {
            return this.value = e,
            this.refresh()
        },
        t.prototype.installStylesheetElement = function() {
            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
        },
        t.prototype.installProgressElement = function() {
            return this.progressElement.style.width = 0,
            this.progressElement.style.opacity = 1,
            document.documentElement.insertBefore(this.progressElement, document.body),
            this.refresh()
        },
        t.prototype.fadeProgressElement = function(e) {
            return this.progressElement.style.opacity = 0,
            setTimeout(e, 1.5 * n)
        },
        t.prototype.uninstallProgressElement = function() {
            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
        },
        t.prototype.startTrickling = function() {
            return null != this.trickleInterval ? this.trickleInterval: this.trickleInterval = setInterval(this.trickle, n)
        },
        t.prototype.stopTrickling = function() {
            return clearInterval(this.trickleInterval),
            this.trickleInterval = null
        },
        t.prototype.trickle = function() {
            return this.setValue(this.value + Math.random() / 100)
        },
        t.prototype.refresh = function() {
            return requestAnimationFrame((e = this,
            function() {
                return e.progressElement.style.width = 10 + 90 * e.value + "%"
            }));
            var e
        }, t.prototype.createStylesheetElement = function() {
            var e;
            return (e = document.createElement("style")).type = "text/css",
            e.textContent = this.constructor.defaultCSS,
            e
        },
        t.prototype.createProgressElement = function() {
            var e;
            return (e = document.createElement("div")).className = "turbolinks-progress-bar",
            e
        },
        t
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.BrowserAdapter = function() {
        function t(t) {
            this.controller = t,
            this.showProgressBar = e(this.showProgressBar, this),
            this.progressBar = new Turbolinks.ProgressBar
        }
        var n, i, o;
        return o = Turbolinks.HttpRequest,
        n = o.NETWORK_FAILURE,
        i = o.TIMEOUT_FAILURE,
        t.prototype.visitProposedToLocationWithAction = function(e, t) {
            return this.controller.startVisitToLocationWithAction(e, t)
        },
        t.prototype.visitStarted = function(e) {
            return e.issueRequest(),
            e.changeHistory(),
            e.loadCachedSnapshot()
        },
        t.prototype.visitRequestStarted = function(e) {
            return this.progressBar.setValue(0),
            e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
        },
        t.prototype.visitRequestProgressed = function(e) {
            return this.progressBar.setValue(e.progress)
        },
        t.prototype.visitRequestCompleted = function(e) {
            return e.loadResponse()
        },
        t.prototype.visitRequestFailedWithStatusCode = function(e, t) {
            switch (t) {
            case n:
            case i:
                return this.reload();
            default:
                return e.loadResponse()
            }
        },
        t.prototype.visitRequestFinished = function() {
            return this.hideProgressBar()
        },
        t.prototype.visitCompleted = function(e) {
            return e.followRedirect()
        },
        t.prototype.pageInvalidated = function() {
            return this.reload()
        },
        t.prototype.showProgressBarAfterDelay = function() {
            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
        },
        t.prototype.showProgressBar = function() {
            return this.progressBar.show()
        },
        t.prototype.hideProgressBar = function() {
            return this.progressBar.hide(),
            clearTimeout(this.progressBarTimeout)
        },
        t.prototype.reload = function() {
            return window.location.reload()
        },
        t
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.History = function() {
        function t(t) {
            this.delegate = t,
            this.onPageLoad = e(this.onPageLoad, this),
            this.onPopState = e(this.onPopState, this)
        }
        return t.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
        },
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
        },
        t.prototype.push = function(e, t) {
            return e = Turbolinks.Location.wrap(e),
            this.update("push", e, t)
        },
        t.prototype.replace = function(e, t) {
            return e = Turbolinks.Location.wrap(e),
            this.update("replace", e, t)
        },
        t.prototype.onPopState = function(e) {
            var t, n, i, o;
            return this.shouldHandlePopState() && (o = null != (n = e.state) ? n.turbolinks: void 0) ? (t = Turbolinks.Location.wrap(window.location), i = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(t, i)) : void 0
        },
        t.prototype.onPageLoad = function() {
            return Turbolinks.defer(function(e) {
                return function() {
                    return e.pageLoaded = !0
                }
            } (this))
        },
        t.prototype.shouldHandlePopState = function() {
            return this.pageIsLoaded()
        },
        t.prototype.pageIsLoaded = function() {
            return this.pageLoaded || "complete" === document.readyState
        },
        t.prototype.update = function(e, t, n) {
            var i;
            return i = {
                turbolinks: {
                    restorationIdentifier: n
                }
            },
            history[e + "State"](i, null, t)
        },
        t
    } ()
}.call(this),
function() {
    Turbolinks.Snapshot = function() {
        function e(e) {
            var t, n;
            n = e.head,
            t = e.body,
            this.head = null != n ? n: document.createElement("head"),
            this.body = null != t ? t: document.createElement("body")
        }
        return e.wrap = function(e) {
            return e instanceof this ? e: this.fromHTML(e)
        },
        e.fromHTML = function(e) {
            var t;
            return (t = document.createElement("html")).innerHTML = e,
            this.fromElement(t)
        },
        e.fromElement = function(e) {
            return new this({
                head: e.querySelector("head"),
                body: e.querySelector("body")
            })
        },
        e.prototype.clone = function() {
            return new e({
                head: this.head.cloneNode(!0),
                body: this.body.cloneNode(!0)
            })
        },
        e.prototype.getRootLocation = function() {
            var e, t;
            return t = null != (e = this.getSetting("root")) ? e: "/",
            new Turbolinks.Location(t)
        },
        e.prototype.getCacheControlValue = function() {
            return this.getSetting("cache-control")
        },
        e.prototype.getElementForAnchor = function(e) {
            try {
                return this.body.querySelector("[id='" + e + "'], a[name='" + e + "']")
            } catch(t) {}
        },
        e.prototype.hasAnchor = function(e) {
            return null != this.getElementForAnchor(e)
        },
        e.prototype.isPreviewable = function() {
            return "no-preview" !== this.getCacheControlValue()
        },
        e.prototype.isCacheable = function() {
            return "no-cache" !== this.getCacheControlValue()
        },
        e.prototype.isVisitable = function() {
            return "reload" !== this.getSetting("visit-control")
        },
        e.prototype.getSetting = function(e) {
            var t, n;
            return null != (t = (n = this.head.querySelectorAll("meta[name='turbolinks-" + e + "']"))[n.length - 1]) ? t.getAttribute("content") : void 0
        },
        e
    } ()
}.call(this),
function() {
    var e = [].slice;
    Turbolinks.Renderer = function() {
        function t() {}
        var n;
        return t.render = function() {
            var t, n, i;
            return n = arguments[0],
            t = arguments[1],
            (i = function(e, t, n) {
                n.prototype = e.prototype;
                var i = new n,
                o = e.apply(i, t);
                return Object(o) === o ? o: i
            } (this, 3 <= arguments.length ? e.call(arguments, 2) : [],
            function() {})).delegate = n,
            i.render(t),
            i
        },
        t.prototype.renderView = function(e) {
            return this.delegate.viewWillRender(this.newBody),
            e(),
            this.delegate.viewRendered(this.newBody)
        },
        t.prototype.invalidateView = function() {
            return this.delegate.viewInvalidated()
        },
        t.prototype.createScriptElement = function(e) {
            var t;
            return "false" === e.getAttribute("data-turbolinks-eval") ? e: ((t = document.createElement("script")).textContent = e.textContent, t.async = !1, n(t, e), t)
        },
        n = function(e, t) {
            var n, i, o, s, r, a, l;
            for (a = [], n = 0, i = (s = t.attributes).length; i > n; n++) o = (r = s[n]).name,
            l = r.value,
            a.push(e.setAttribute(o, l));
            return a
        },
        t
    } ()
}.call(this),
function() {
    Turbolinks.HeadDetails = function() {
        function e(e) {
            var t, n, s, r, a, l;
            for (this.element = e, this.elements = {},
            s = 0, a = (l = this.element.childNodes).length; a > s; s++)(n = l[s]).nodeType === Node.ELEMENT_NODE && (r = n.outerHTML, (null != (t = this.elements)[r] ? t[r] : t[r] = {
                type: o(n),
                tracked: i(n),
                elements: []
            }).elements.push(n))
        }
        var t, n, i, o;
        return e.prototype.hasElementWithKey = function(e) {
            return e in this.elements
        },
        e.prototype.getTrackedElementSignature = function() {
            var e;
            return function() {
                var t, n;
                for (e in n = [], t = this.elements) t[e].tracked && n.push(e);
                return n
            }.call(this).join("")
        },
        e.prototype.getScriptElementsNotInDetails = function(e) {
            return this.getElementsMatchingTypeNotInDetails("script", e)
        },
        e.prototype.getStylesheetElementsNotInDetails = function(e) {
            return this.getElementsMatchingTypeNotInDetails("stylesheet", e)
        },
        e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) {
            var n, i, o, s, r, a;
            for (i in r = [], o = this.elements) a = (s = o[i]).type,
            n = s.elements,
            a !== e || t.hasElementWithKey(i) || r.push(n[0]);
            return r
        },
        e.prototype.getProvisionalElements = function() {
            var e, t, n, i, o, s, r;
            for (t in n = [], i = this.elements) r = (o = i[t]).type,
            s = o.tracked,
            e = o.elements,
            null != r || s ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
            return n
        },
        o = function(e) {
            return t(e) ? "script": n(e) ? "stylesheet": void 0
        },
        i = function(e) {
            return "reload" === e.getAttribute("data-turbolinks-track")
        },
        t = function(e) {
            return "script" === e.tagName.toLowerCase()
        },
        n = function(e) {
            var t;
            return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel")
        },
        e
    } ()
}.call(this),
function() {
    var e = function(e, n) {
        function i() {
            this.constructor = e
        }
        for (var o in n) t.call(n, o) && (e[o] = n[o]);
        return i.prototype = n.prototype,
        e.prototype = new i,
        e.__super__ = n.prototype,
        e
    },
    t = {}.hasOwnProperty;
    Turbolinks.SnapshotRenderer = function(t) {
        function n(e, t, n) {
            this.currentSnapshot = e,
            this.newSnapshot = t,
            this.isPreview = n,
            this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head),
            this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head),
            this.newBody = this.newSnapshot.body
        }
        return e(n, t),
        n.prototype.render = function(e) {
            return this.shouldRender() ? (this.mergeHead(), this.renderView((t = this,
            function() {
                return t.replaceBody(),
                t.isPreview || t.focusFirstAutofocusableElement(),
                e()
            }))) : this.invalidateView();
            var t
        }, n.prototype.mergeHead = function() {
            return this.copyNewHeadStylesheetElements(),
            this.copyNewHeadScriptElements(),
            this.removeCurrentHeadProvisionalElements(),
            this.copyNewHeadProvisionalElements()
        },
        n.prototype.replaceBody = function() {
            return this.activateBodyScriptElements(),
            this.importBodyPermanentElements(),
            this.assignNewBody()
        },
        n.prototype.shouldRender = function() {
            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
        },
        n.prototype.trackedElementsAreIdentical = function() {
            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
        },
        n.prototype.copyNewHeadStylesheetElements = function() {
            var e, t, n, i, o;
            for (o = [], t = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > t; t++) e = i[t],
            o.push(document.head.appendChild(e));
            return o
        },
        n.prototype.copyNewHeadScriptElements = function() {
            var e, t, n, i, o;
            for (o = [], t = 0, n = (i = this.getNewHeadScriptElements()).length; n > t; t++) e = i[t],
            o.push(document.head.appendChild(this.createScriptElement(e)));
            return o
        },
        n.prototype.removeCurrentHeadProvisionalElements = function() {
            var e, t, n, i, o;
            for (o = [], t = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > t; t++) e = i[t],
            o.push(document.head.removeChild(e));
            return o
        },
        n.prototype.copyNewHeadProvisionalElements = function() {
            var e, t, n, i, o;
            for (o = [], t = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > t; t++) e = i[t],
            o.push(document.head.appendChild(e));
            return o
        },
        n.prototype.importBodyPermanentElements = function() {
            var e, t, n, i, o, s;
            for (s = [], t = 0, n = (i = this.getNewBodyPermanentElements()).length; n > t; t++) o = i[t],
            (e = this.findCurrentBodyPermanentElement(o)) ? s.push(o.parentNode.replaceChild(e, o)) : s.push(void 0);
            return s
        },
        n.prototype.activateBodyScriptElements = function() {
            var e, t, n, i, o, s;
            for (s = [], t = 0, n = (i = this.getNewBodyScriptElements()).length; n > t; t++) o = i[t],
            e = this.createScriptElement(o),
            s.push(o.parentNode.replaceChild(e, o));
            return s
        },
        n.prototype.assignNewBody = function() {
            return document.body = this.newBody
        },
        n.prototype.focusFirstAutofocusableElement = function() {
            var e;
            return null != (e = this.findFirstAutofocusableElement()) ? e.focus() : void 0
        },
        n.prototype.getNewHeadStylesheetElements = function() {
            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
        },
        n.prototype.getNewHeadScriptElements = function() {
            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
        },
        n.prototype.getCurrentHeadProvisionalElements = function() {
            return this.currentHeadDetails.getProvisionalElements()
        },
        n.prototype.getNewHeadProvisionalElements = function() {
            return this.newHeadDetails.getProvisionalElements()
        },
        n.prototype.getNewBodyPermanentElements = function() {
            return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
        },
        n.prototype.findCurrentBodyPermanentElement = function(e) {
            return document.body.querySelector("#" + e.id + "[data-turbolinks-permanent]")
        },
        n.prototype.getNewBodyScriptElements = function() {
            return this.newBody.querySelectorAll("script")
        },
        n.prototype.findFirstAutofocusableElement = function() {
            return document.body.querySelector("[autofocus]")
        },
        n
    } (Turbolinks.Renderer)
}.call(this),
function() {
    var e = function(e, n) {
        function i() {
            this.constructor = e
        }
        for (var o in n) t.call(n, o) && (e[o] = n[o]);
        return i.prototype = n.prototype,
        e.prototype = new i,
        e.__super__ = n.prototype,
        e
    },
    t = {}.hasOwnProperty;
    Turbolinks.ErrorRenderer = function(t) {
        function n(e) {
            this.html = e
        }
        return e(n, t),
        n.prototype.render = function(e) {
            return this.renderView((t = this,
            function() {
                return t.replaceDocumentHTML(),
                t.activateBodyScriptElements(),
                e()
            }));
            var t
        }, n.prototype.replaceDocumentHTML = function() {
            return document.documentElement.innerHTML = this.html
        },
        n.prototype.activateBodyScriptElements = function() {
            var e, t, n, i, o, s;
            for (s = [], t = 0, n = (i = this.getScriptElements()).length; n > t; t++) o = i[t],
            e = this.createScriptElement(o),
            s.push(o.parentNode.replaceChild(e, o));
            return s
        },
        n.prototype.getScriptElements = function() {
            return document.documentElement.querySelectorAll("script")
        },
        n
    } (Turbolinks.Renderer)
}.call(this),
function() {
    Turbolinks.View = function() {
        function e(e) {
            this.delegate = e,
            this.element = document.documentElement
        }
        return e.prototype.getRootLocation = function() {
            return this.getSnapshot().getRootLocation()
        },
        e.prototype.getElementForAnchor = function(e) {
            return this.getSnapshot().getElementForAnchor(e)
        },
        e.prototype.getSnapshot = function() {
            return Turbolinks.Snapshot.fromElement(this.element)
        },
        e.prototype.render = function(e, t) {
            var n, i, o;
            return o = e.snapshot,
            n = e.error,
            i = e.isPreview,
            this.markAsPreview(i),
            null != o ? this.renderSnapshot(o, i, t) : this.renderError(n, t)
        },
        e.prototype.markAsPreview = function(e) {
            return e ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
        },
        e.prototype.renderSnapshot = function(e, t, n) {
            return Turbolinks.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), Turbolinks.Snapshot.wrap(e), t)
        },
        e.prototype.renderError = function(e, t) {
            return Turbolinks.ErrorRenderer.render(this.delegate, t, e)
        },
        e
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.ScrollManager = function() {
        function t(t) {
            this.delegate = t,
            this.onScroll = e(this.onScroll, this),
            this.onScroll = Turbolinks.throttle(this.onScroll)
        }
        return t.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
        },
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
        },
        t.prototype.scrollToElement = function(e) {
            return e.scrollIntoView()
        },
        t.prototype.scrollToPosition = function(e) {
            var t, n;
            return t = e.x,
            n = e.y,
            window.scrollTo(t, n)
        },
        t.prototype.onScroll = function() {
            return this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            })
        },
        t.prototype.updatePosition = function(e) {
            var t;
            return this.position = e,
            null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0
        },
        t
    } ()
}.call(this),
function() {
    Turbolinks.SnapshotCache = function() {
        function e(e) {
            this.size = e,
            this.keys = [],
            this.snapshots = {}
        }
        var t;
        return e.prototype.has = function(e) {
            return t(e) in this.snapshots
        },
        e.prototype.get = function(e) {
            var t;
            if (this.has(e)) return t = this.read(e),
            this.touch(e),
            t
        },
        e.prototype.put = function(e, t) {
            return this.write(e, t),
            this.touch(e),
            t
        },
        e.prototype.read = function(e) {
            var n;
            return n = t(e),
            this.snapshots[n]
        },
        e.prototype.write = function(e, n) {
            var i;
            return i = t(e),
            this.snapshots[i] = n
        },
        e.prototype.touch = function(e) {
            var n, i;
            return i = t(e),
            (n = this.keys.indexOf(i)) > -1 && this.keys.splice(n, 1),
            this.keys.unshift(i),
            this.trim()
        },
        e.prototype.trim = function() {
            var e, t, n, i, o;
            for (o = [], e = 0, n = (i = this.keys.splice(this.size)).length; n > e; e++) t = i[e],
            o.push(delete this.snapshots[t]);
            return o
        },
        t = function(e) {
            return Turbolinks.Location.wrap(e).toCacheKey()
        },
        e
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.Visit = function() {
        function t(t, n, i) {
            this.controller = t,
            this.action = i,
            this.performScroll = e(this.performScroll, this),
            this.identifier = Turbolinks.uuid(),
            this.location = Turbolinks.Location.wrap(n),
            this.adapter = this.controller.adapter,
            this.state = "initialized",
            this.timingMetrics = {}
        }
        var n;
        return t.prototype.start = function() {
            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
        },
        t.prototype.cancel = function() {
            var e;
            return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0
        },
        t.prototype.complete = function() {
            var e;
            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
        },
        t.prototype.fail = function() {
            var e;
            return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0
        },
        t.prototype.changeHistory = function() {
            var e, t;
            return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace": this.action, t = n(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0)
        },
        t.prototype.issueRequest = function() {
            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new Turbolinks.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
        },
        t.prototype.getCachedSnapshot = function() {
            var e;
            return ! (e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e
        },
        t.prototype.hasCachedSnapshot = function() {
            return null != this.getCachedSnapshot()
        },
        t.prototype.loadCachedSnapshot = function() {
            var e, t;
            return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() {
                var n;
                return this.cacheSnapshot(),
                this.controller.render({
                    snapshot: t,
                    isPreview: e
                },
                this.performScroll),
                "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this),
                e ? void 0 : this.complete()
            })) : void 0
        },
        t.prototype.loadResponse = function() {
            return null != this.response ? this.render(function() {
                var e, t;
                return this.cacheSnapshot(),
                this.request.failed ? (this.controller.render({
                    error: this.response
                },
                this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({
                    snapshot: this.response
                },
                this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete())
            }) : void 0
        },
        t.prototype.followRedirect = function() {
            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
        },
        t.prototype.requestStarted = function() {
            var e;
            return this.recordTimingMetric("requestStart"),
            "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0
        },
        t.prototype.requestProgressed = function(e) {
            var t;
            return this.progress = e,
            "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0
        },
        t.prototype.requestCompletedWithResponse = function(e, t) {
            return this.response = e,
            null != t && (this.redirectedToLocation = Turbolinks.Location.wrap(t)),
            this.adapter.visitRequestCompleted(this)
        },
        t.prototype.requestFailedWithStatusCode = function(e, t) {
            return this.response = t,
            this.adapter.visitRequestFailedWithStatusCode(this, e)
        },
        t.prototype.requestFinished = function() {
            var e;
            return this.recordTimingMetric("requestEnd"),
            "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0
        },
        t.prototype.performScroll = function() {
            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
        },
        t.prototype.scrollToRestoredPosition = function() {
            var e, t;
            return null != (e = null != (t = this.restorationData) ? t.scrollPosition: void 0) ? (this.controller.scrollToPosition(e), !0) : void 0
        },
        t.prototype.scrollToAnchor = function() {
            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
        },
        t.prototype.scrollToTop = function() {
            return this.controller.scrollToPosition({
                x: 0,
                y: 0
            })
        },
        t.prototype.recordTimingMetric = function(e) {
            var t;
            return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime()
        },
        t.prototype.getTimingMetrics = function() {
            return Turbolinks.copyObject(this.timingMetrics)
        },
        n = function(e) {
            switch (e) {
            case "replace":
                return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
                return "pushHistoryWithLocationAndRestorationIdentifier"
            }
        },
        t.prototype.shouldIssueRequest = function() {
            return "restore" !== this.action || !this.hasCachedSnapshot()
        },
        t.prototype.cacheSnapshot = function() {
            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
        },
        t.prototype.render = function(e) {
            return this.cancelRender(),
            this.frame = requestAnimationFrame((t = this,
            function() {
                return t.frame = null,
                e.call(t)
            }));
            var t
        }, t.prototype.cancelRender = function() {
            return this.frame ? cancelAnimationFrame(this.frame) : void 0
        },
        t
    } ()
}.call(this),
function() {
    var e = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    };
    Turbolinks.Controller = function() {
        function t() {
            this.clickBubbled = e(this.clickBubbled, this),
            this.clickCaptured = e(this.clickCaptured, this),
            this.pageLoaded = e(this.pageLoaded, this),
            this.history = new Turbolinks.History(this),
            this.view = new Turbolinks.View(this),
            this.scrollManager = new Turbolinks.ScrollManager(this),
            this.restorationData = {},
            this.clearCache(),
            this.setProgressBarDelay(500)
        }
        return t.prototype.start = function() {
            return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
        },
        t.prototype.disable = function() {
            return this.enabled = !1
        },
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
        },
        t.prototype.clearCache = function() {
            return this.cache = new Turbolinks.SnapshotCache(10)
        },
        t.prototype.visit = function(e, t) {
            var n, i;
            return null == t && (t = {}),
            e = Turbolinks.Location.wrap(e),
            this.applicationAllowsVisitingLocation(e) ? this.locationIsVisitable(e) ? (n = null != (i = t.action) ? i: "advance", this.adapter.visitProposedToLocationWithAction(e, n)) : window.location = e: void 0
        },
        t.prototype.startVisitToLocationWithAction = function(e, t, n) {
            var i;
            return Turbolinks.supported ? (i = this.getRestorationDataForIdentifier(n), this.startVisit(e, t, {
                restorationData: i
            })) : window.location = e
        },
        t.prototype.setProgressBarDelay = function(e) {
            return this.progressBarDelay = e
        },
        t.prototype.startHistory = function() {
            return this.location = Turbolinks.Location.wrap(window.location),
            this.restorationIdentifier = Turbolinks.uuid(),
            this.history.start(),
            this.history.replace(this.location, this.restorationIdentifier)
        },
        t.prototype.stopHistory = function() {
            return this.history.stop()
        },
        t.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(e, t) {
            return this.restorationIdentifier = t,
            this.location = Turbolinks.Location.wrap(e),
            this.history.push(this.location, this.restorationIdentifier)
        },
        t.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(e, t) {
            return this.restorationIdentifier = t,
            this.location = Turbolinks.Location.wrap(e),
            this.history.replace(this.location, this.restorationIdentifier)
        },
        t.prototype.historyPoppedToLocationWithRestorationIdentifier = function(e, t) {
            var n;
            return this.restorationIdentifier = t,
            this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(e, "restore", {
                restorationIdentifier: this.restorationIdentifier,
                restorationData: n,
                historyChanged: !0
            }), this.location = Turbolinks.Location.wrap(e)) : this.adapter.pageInvalidated()
        },
        t.prototype.getCachedSnapshotForLocation = function(e) {
            var t;
            return (t = this.cache.get(e)) ? t.clone() : void 0
        },
        t.prototype.shouldCacheSnapshot = function() {
            return this.view.getSnapshot().isCacheable()
        },
        t.prototype.cacheSnapshot = function() {
            var e;
            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, e.clone())) : void 0
        },
        t.prototype.scrollToAnchor = function(e) {
            var t;
            return (t = this.view.getElementForAnchor(e)) ? this.scrollToElement(t) : this.scrollToPosition({
                x: 0,
                y: 0
            })
        },
        t.prototype.scrollToElement = function(e) {
            return this.scrollManager.scrollToElement(e)
        },
        t.prototype.scrollToPosition = function(e) {
            return this.scrollManager.scrollToPosition(e)
        },
        t.prototype.scrollPositionChanged = function(e) {
            return this.getCurrentRestorationData().scrollPosition = e
        },
        t.prototype.render = function(e, t) {
            return this.view.render(e, t)
        },
        t.prototype.viewInvalidated = function() {
            return this.adapter.pageInvalidated()
        },
        t.prototype.viewWillRender = function(e) {
            return this.notifyApplicationBeforeRender(e)
        },
        t.prototype.viewRendered = function() {
            return this.lastRenderedLocation = this.currentVisit.location,
            this.notifyApplicationAfterRender()
        },
        t.prototype.pageLoaded = function() {
            return this.lastRenderedLocation = this.location,
            this.notifyApplicationAfterPageLoad()
        },
        t.prototype.clickCaptured = function() {
            return removeEventListener("click", this.clickBubbled, !1),
            addEventListener("click", this.clickBubbled, !1)
        },
        t.prototype.clickBubbled = function(e) {
            var t, n, i;
            return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(i, {
                action: t
            })) : void 0
        },
        t.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) {
            return ! this.notifyApplicationAfterClickingLinkToLocation(e, t).defaultPrevented
        },
        t.prototype.applicationAllowsVisitingLocation = function(e) {
            return ! this.notifyApplicationBeforeVisitingLocation(e).defaultPrevented
        },
        t.prototype.notifyApplicationAfterClickingLinkToLocation = function(e, t) {
            return Turbolinks.dispatch("turbolinks:click", {
                target: e,
                data: {
                    url: t.absoluteURL
                },
                cancelable: !0
            })
        },
        t.prototype.notifyApplicationBeforeVisitingLocation = function(e) {
            return Turbolinks.dispatch("turbolinks:before-visit", {
                data: {
                    url: e.absoluteURL
                },
                cancelable: !0
            })
        },
        t.prototype.notifyApplicationAfterVisitingLocation = function(e) {
            return Turbolinks.dispatch("turbolinks:visit", {
                data: {
                    url: e.absoluteURL
                }
            })
        },
        t.prototype.notifyApplicationBeforeCachingSnapshot = function() {
            return Turbolinks.dispatch("turbolinks:before-cache")
        },
        t.prototype.notifyApplicationBeforeRender = function(e) {
            return Turbolinks.dispatch("turbolinks:before-render", {
                data: {
                    newBody: e
                }
            })
        },
        t.prototype.notifyApplicationAfterRender = function() {
            return Turbolinks.dispatch("turbolinks:render")
        },
        t.prototype.notifyApplicationAfterPageLoad = function(e) {
            return null == e && (e = {}),
            Turbolinks.dispatch("turbolinks:load", {
                data: {
                    url: this.location.absoluteURL,
                    timing: e
                }
            })
        },
        t.prototype.startVisit = function(e, t, n) {
            var i;
            return null != (i = this.currentVisit) && i.cancel(),
            this.currentVisit = this.createVisit(e, t, n),
            this.currentVisit.start(),
            this.notifyApplicationAfterVisitingLocation(e)
        },
        t.prototype.createVisit = function(e, t, n) {
            var i, o, s, r, a;
            return r = (o = null != n ? n: {}).restorationIdentifier,
            s = o.restorationData,
            i = o.historyChanged,
            (a = new Turbolinks.Visit(this, e, t)).restorationIdentifier = null != r ? r: Turbolinks.uuid(),
            a.restorationData = Turbolinks.copyObject(s),
            a.historyChanged = i,
            a.referrer = this.location,
            a
        },
        t.prototype.visitCompleted = function(e) {
            return this.notifyApplicationAfterPageLoad(e.getTimingMetrics())
        },
        t.prototype.clickEventIsSignificant = function(e) {
            return ! (e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey)
        },
        t.prototype.getVisitableLinkForNode = function(e) {
            return this.nodeIsVisitable(e) ? Turbolinks.closest(e, "a[href]:not([target]):not([download])") : void 0
        },
        t.prototype.getVisitableLocationForLink = function(e) {
            var t;
            return t = new Turbolinks.Location(e.getAttribute("href")),
            this.locationIsVisitable(t) ? t: void 0
        },
        t.prototype.getActionForLink = function(e) {
            var t;
            return null != (t = e.getAttribute("data-turbolinks-action")) ? t: "advance"
        },
        t.prototype.nodeIsVisitable = function(e) {
            var t;
            return ! (t = Turbolinks.closest(e, "[data-turbolinks]")) || "false" !== t.getAttribute("data-turbolinks")
        },
        t.prototype.locationIsVisitable = function(e) {
            return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML()
        },
        t.prototype.getCurrentRestorationData = function() {
            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
        },
        t.prototype.getRestorationDataForIdentifier = function(e) {
            var t;
            return null != (t = this.restorationData)[e] ? t[e] : t[e] = {}
        },
        t
    } ()
}.call(this),
function() { !
    function() {
        var e, t;
        if ((e = t = document.currentScript) && !t.hasAttribute("data-turbolinks-suppress-warning")) for (; e = e.parentNode;) if (e === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", t.outerHTML)
    } ()
}.call(this),
function() {
    var e, t, n;
    Turbolinks.start = function() {
        return t() ? (null == Turbolinks.controller && (Turbolinks.controller = e()), Turbolinks.controller.start()) : void 0
    },
    t = function() {
        return null == window.Turbolinks && (window.Turbolinks = Turbolinks),
        n()
    },
    e = function() {
        var e;
        return (e = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(e),
        e
    },
    (n = function() {
        return window.Turbolinks === Turbolinks
    })() && Turbolinks.start()
}.call(this),
/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
function(e) {
    window.cash = e()
} (function() {
    function e(e, t) {
        return t = t || T,
        P.test(e) ? t.getElementsByClassName(e.slice(1)) : N.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e)
    }
    function t(e) {
        if (!$) {
            var t = ($ = T.implementation.createHTMLDocument(null)).createElement("base");
            t.href = T.location.href,
            $.head.appendChild(t)
        }
        return $.body.innerHTML = e,
        $.body.childNodes
    }
    function n(e) {
        "loading" !== T.readyState ? e() : T.addEventListener("DOMContentLoaded", e)
    }
    function i(i, o) {
        if (!i) return this;
        if (i.cash && i !== S) return i;
        var s, r = i,
        a = 0;
        if (j(i)) r = I.test(i) ? T.getElementById(i.slice(1)) : R.test(i) ? t(i) : e(i, o);
        else if (F(i)) return n(i),
        this;
        if (!r) return this;
        if (r.nodeType || r === S) this[0] = r,
        this.length = 1;
        else for (s = this.length = r.length; a < s; a++) this[a] = r[a];
        return this
    }
    function o(e, t) {
        return new i(e, t)
    }
    function s(e, t) {
        for (var n = e.length,
        i = 0; i < n && !1 !== t.call(e[i], e[i], i, e); i++);
    }
    function r(e, t) {
        var n = e && (e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector);
        return !! n && n.call(e, t)
    }
    function a(e) {
        return j(e) ? r: e.cash ?
        function(t) {
            return e.is(t)
        }: function(e, t) {
            return e === t
        }
    }
    function l(e) {
        return o(M.call(e).filter(function(e, t, n) {
            return n.indexOf(e) === t
        }))
    }
    function c(e) {
        return e[H] = e[H] || {}
    }
    function u(e, t, n) {
        return c(e)[t] = n
    }
    function d(e, t) {
        var n = c(e);
        return n[t] === undefined && (n[t] = e.dataset ? e.dataset[t] : o(e).attr("data-" + t)),
        n[t]
    }
    function h(e, t) {
        var n = c(e);
        n ? delete n[t] : e.dataset ? delete e.dataset[t] : o(e).removeAttr("data-" + name)
    }
    function p(e) {
        return j(e) && e.match(q)
    }
    function f(e, t) {
        return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
    }
    function _(e, t, n) {
        e.classList ? e.classList.add(t) : n.indexOf(" " + t + " ") && (e.className += " " + t)
    }
    function m(e, t) {
        e.classList ? e.classList.remove(t) : e.className = e.className.replace(t, "")
    }
    function v(e, t) {
        return parseInt(S.getComputedStyle(e[0], null)[t], 10) || 0
    }
    function g(e, t, n) {
        var i = d(e, "_cashEvents") || u(e, "_cashEvents", {});
        i[t] = i[t] || [],
        i[t].push(n),
        e.addEventListener(t, n)
    }
    function y(e, t, n) {
        var i, o = d(e, "_cashEvents"),
        r = o && o[t];
        r && (n ? (e.removeEventListener(t, n), (i = r.indexOf(n)) >= 0 && r.splice(i, 1)) : (s(r,
        function(n) {
            e.removeEventListener(t, n)
        }), r = []))
    }
    function b(e, t) {
        return "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t).replace(/%20/g, "+")
    }
    function w(e) {
        var t = [];
        return s(e.options,
        function(e) {
            e.selected && t.push(e.value)
        }),
        t.length ? t: null
    }
    function k(e) {
        var t = e.selectedIndex;
        return t >= 0 ? e.options[t].value: null
    }
    function C(e) {
        var t = e.type;
        if (!t) return null;
        switch (t.toLowerCase()) {
        case "select-one":
            return k(e);
        case "select-multiple":
            return w(e);
        case "radio":
        case "checkbox":
            return e.checked ? e.value: null;
        default:
            return e.value ? e.value: null
        }
    }
    function x(e, t, n) {
        if (n) {
            var i = e.childNodes[0];
            e.insertBefore(t, i)
        } else e.appendChild(t)
    }
    function E(e, t, n) {
        var i = j(t);
        i || !t.length ? s(e, i ?
        function(e) {
            return e.insertAdjacentHTML(n ? "afterbegin": "beforeend", t)
        }: function(e, i) {
            return x(e, 0 === i ? t: t.cloneNode(!0), n)
        }) : s(t,
        function(t) {
            return E(e, t, n)
        })
    }
    var $, T = document,
    S = window,
    O = Array.prototype,
    M = O.slice,
    D = O.filter,
    L = O.push,
    A = function() {},
    F = function(e) {
        return typeof e == typeof A && e.call
    },
    j = function(e) {
        return "string" == typeof e
    },
    I = /^#[\w-]*$/,
    P = /^\.[\w-]*$/,
    R = /<.+>/,
    N = /^\w+$/,
    B = o.fn = o.prototype = i.prototype = {
        cash: !0,
        length: 0,
        push: L,
        splice: O.splice,
        map: O.map,
        init: i
    };
    Object.defineProperty(B, "constructor", {
        value: o
    }),
    o.parseHTML = t,
    o.noop = A,
    o.isFunction = F,
    o.isString = j,
    o.extend = B.extend = function(e) {
        e = e || {};
        var t = M.call(arguments),
        n = t.length,
        i = 1;
        for (1 === t.length && (e = this, i = 0); i < n; i++) if (t[i]) for (var o in t[i]) t[i].hasOwnProperty(o) && (e[o] = t[i][o]);
        return e
    },
    o.extend({
        merge: function(e, t) {
            for (var n = +t.length,
            i = e.length,
            o = 0; o < n; i++, o++) e[i] = t[o];
            return e.length = i,
            e
        },
        each: s,
        matches: r,
        unique: l,
        isArray: Array.isArray,
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        }
    });
    var H = o.uid = "_cash" + Date.now();
    B.extend({
        data: function(e, t) {
            if (j(e)) return t === undefined ? d(this[0], e) : this.each(function(n) {
                return u(n, e, t)
            });
            for (var n in e) this.data(n, e[n]);
            return this
        },
        removeData: function(e) {
            return this.each(function(t) {
                return h(t, e)
            })
        }
    });
    var q = /\S+/g;
    B.extend({
        addClass: function(e) {
            var t = p(e);
            return t ? this.each(function(e) {
                var n = " " + e.className + " ";
                s(t,
                function(t) {
                    _(e, t, n)
                })
            }) : this
        },
        attr: function(e, t) {
            if (!e) return undefined;
            if (j(e)) return t === undefined ? this[0] ? this[0].getAttribute ? this[0].getAttribute(e) : this[0][e] : undefined: this.each(function(n) {
                n.setAttribute ? n.setAttribute(e, t) : n[e] = t
            });
            for (var n in e) this.attr(n, e[n]);
            return this
        },
        hasClass: function(e) {
            var t = !1,
            n = p(e);
            return n && n.length && this.each(function(e) {
                return ! (t = f(e, n[0]))
            }),
            t
        },
        prop: function(e, t) {
            if (j(e)) return t === undefined ? this[0][e] : this.each(function(n) {
                n[e] = t
            });
            for (var n in e) this.prop(n, e[n]);
            return this
        },
        removeAttr: function(e) {
            return this.each(function(t) {
                t.removeAttribute ? t.removeAttribute(e) : delete t[e]
            })
        },
        removeClass: function(e) {
            if (!arguments.length) return this.attr("class", "");
            var t = p(e);
            return t ? this.each(function(e) {
                s(t,
                function(t) {
                    m(e, t)
                })
            }) : this
        },
        removeProp: function(e) {
            return this.each(function(t) {
                delete t[e]
            })
        },
        toggleClass: function(e, t) {
            if (t !== undefined) return this[t ? "addClass": "removeClass"](e);
            var n = p(e);
            return n ? this.each(function(e) {
                var t = " " + e.className + " ";
                s(n,
                function(n) {
                    f(e, n) ? m(e, n) : _(e, n, t)
                })
            }) : this
        }
    }),
    B.extend({
        add: function(e, t) {
            return l(o.merge(this, o(e, t)))
        },
        each: function(e) {
            return s(this, e),
            this
        },
        eq: function(e) {
            return o(this.get(e))
        },
        filter: function(e) {
            if (!e) return this;
            var t = F(e) ? e: a(e);
            return o(D.call(this,
            function(n) {
                return t(n, e)
            }))
        },
        first: function() {
            return this.eq(0)
        },
        get: function(e) {
            return e === undefined ? M.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        index: function(e) {
            var t = e ? o(e)[0] : this[0],
            n = e ? this: o(t).parent().children();
            return M.call(n).indexOf(t)
        },
        last: function() {
            return this.eq( - 1)
        }
    });
    var W, V, z, U, X = (W = /(?:^\w|[A-Z]|\b\w)/g, V = /[\s-_]+/g,
    function(e) {
        return e.replace(W,
        function(e, t) {
            return e[0 === t ? "toLowerCase": "toUpperCase"]()
        }).replace(V, "")
    }),
    Y = (z = {},
    U = document.createElement("div").style,
    function(e) {
        if (e = X(e), z[e]) return z[e];
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        return s((e + " " + ["webkit", "moz", "ms", "o"].join(t + " ") + t).split(" "),
        function(t) {
            if (t in U) return z[t] = e = z[e] = t,
            !1
        }),
        z[e]
    });
    o.prefixedProp = Y,
    o.camelCase = X,
    B.extend({
        css: function(e, t) {
            if (j(e)) return e = Y(e),
            arguments.length > 1 ? this.each(function(n) {
                return n.style[e] = t
            }) : S.getComputedStyle(this[0])[e];
            for (var n in e) this.css(n, e[n]);
            return this
        }
    }),
    s(["Width", "Height"],
    function(e) {
        var t = e.toLowerCase();
        B[t] = function() {
            return this[0].getBoundingClientRect()[t]
        },
        B["inner" + e] = function() {
            return this[0]["client" + e]
        },
        B["outer" + e] = function(t) {
            return this[0]["offset" + e] + (t ? v(this, "margin" + ("Width" === e ? "Left": "Top")) + v(this, "margin" + ("Width" === e ? "Right": "Bottom")) : 0)
        }
    }),
    B.extend({
        off: function(e, t) {
            return this.each(function(n) {
                return y(n, e, t)
            })
        },
        on: function(e, t, i, o) {
            var s;
            if (!j(e)) {
                for (var a in e) this.on(a, t, e[a]);
                return this
            }
            return F(t) && (i = t, t = null),
            "ready" === e ? (n(i), this) : (t && (s = i, i = function(e) {
                for (var n = e.target; ! r(n, t);) {
                    if (n === this || null === n) return ! 1;
                    n = n.parentNode
                }
                n && s.call(n, e)
            }), this.each(function(t) {
                var n = i;
                o && (n = function() {
                    i.apply(this, arguments),
                    y(t, e, n)
                }),
                g(t, e, n)
            }))
        },
        one: function(e, t, n) {
            return this.on(e, t, n, !0)
        },
        ready: n,
        trigger: function(e, t) {
            if (document.createEvent) {
                var n = document.createEvent("HTMLEvents");
                return n.initEvent(e, !0, !1),
                n = this.extend(n, t),
                this.each(function(e) {
                    return e.dispatchEvent(n)
                })
            }
        }
    }),
    B.extend({
        serialize: function() {
            var e = "";
            return s(this[0].elements || this,
            function(t) {
                if (!t.disabled && "FIELDSET" !== t.tagName) {
                    var n = t.name;
                    switch (t.type.toLowerCase()) {
                    case "file":
                    case "reset":
                    case "submit":
                    case "button":
                        break;
                    case "select-multiple":
                        var i = C(t);
                        null !== i && s(i,
                        function(t) {
                            e += b(n, t)
                        });
                        break;
                    default:
                        var o = C(t);
                        null !== o && (e += b(n, o))
                    }
                }
            }),
            e.substr(1)
        },
        val: function(e) {
            return e === undefined ? C(this[0]) : this.each(function(t) {
                return t.value = e
            })
        }
    }),
    B.extend({
        after: function(e) {
            return o(e).insertAfter(this),
            this
        },
        append: function(e) {
            return E(this, e),
            this
        },
        appendTo: function(e) {
            return E(o(e), this),
            this
        },
        before: function(e) {
            return o(e).insertBefore(this),
            this
        },
        clone: function() {
            return o(this.map(function(e) {
                return e.cloneNode(!0)
            }))
        },
        empty: function() {
            return this.html(""),
            this
        },
        html: function(e) {
            if (e === undefined) return this[0].innerHTML;
            var t = e.nodeType ? e[0].outerHTML: e;
            return this.each(function(e) {
                return e.innerHTML = t
            })
        },
        insertAfter: function(e) {
            var t = this;
            return o(e).each(function(e, n) {
                var i = e.parentNode,
                o = e.nextSibling;
                t.each(function(e) {
                    i.insertBefore(0 === n ? e: e.cloneNode(!0), o)
                })
            }),
            this
        },
        insertBefore: function(e) {
            var t = this;
            return o(e).each(function(e, n) {
                var i = e.parentNode;
                t.each(function(t) {
                    i.insertBefore(0 === n ? t: t.cloneNode(!0), e)
                })
            }),
            this
        },
        prepend: function(e) {
            return E(this, e, !0),
            this
        },
        prependTo: function(e) {
            return E(o(e), this, !0),
            this
        },
        remove: function() {
            return this.each(function(e) {
                if (e.parentNode) return e.parentNode.removeChild(e)
            })
        },
        text: function(e) {
            return e === undefined ? this[0].textContent: this.each(function(t) {
                return t.textContent = e
            })
        }
    });
    var K = T.documentElement;
    return B.extend({
        position: function() {
            var e = this[0];
            return {
                left: e.offsetLeft,
                top: e.offsetTop
            }
        },
        offset: function() {
            var e = this[0].getBoundingClientRect();
            return {
                top: e.top + S.pageYOffset - K.clientTop,
                left: e.left + S.pageXOffset - K.clientLeft
            }
        },
        offsetParent: function() {
            return o(this[0].offsetParent)
        }
    }),
    B.extend({
        children: function(e) {
            var t = [];
            return this.each(function(e) {
                L.apply(t, e.children)
            }),
            t = l(t),
            e ? t.filter(function(t) {
                return r(t, e)
            }) : t
        },
        closest: function(e) {
            return ! e || this.length < 1 ? o() : this.is(e) ? this.filter(e) : this.parent().closest(e)
        },
        is: function(e) {
            if (!e) return ! 1;
            var t = !1,
            n = a(e);
            return this.each(function(i) {
                return ! (t = n(i, e))
            }),
            t
        },
        find: function(t) {
            if (!t || t.nodeType) return o(t && this.has(t).length ? t: null);
            var n = [];
            return this.each(function(i) {
                L.apply(n, e(t, i))
            }),
            l(n)
        },
        has: function(t) {
            var n = j(t) ?
            function(n) {
                return 0 !== e(t, n).length
            }: function(e) {
                return e.contains(t)
            };
            return this.filter(n)
        },
        next: function() {
            return o(this[0].nextElementSibling)
        },
        not: function(e) {
            if (!e) return this;
            var t = a(e);
            return this.filter(function(n) {
                return ! t(n, e)
            })
        },
        parent: function() {
            var e = [];
            return this.each(function(t) {
                t && t.parentNode && e.push(t.parentNode)
            }),
            l(e)
        },
        parents: function(e) {
            var t, n = [];
            return this.each(function(i) {
                for (t = i; t && t.parentNode && t !== T.body.parentNode;) t = t.parentNode,
                (!e || e && r(t, e)) && n.push(t)
            }),
            l(n)
        },
        prev: function() {
            return o(this[0].previousElementSibling)
        },
        siblings: function(e) {
            var t = this.parent().children(e),
            n = this[0];
            return t.filter(function(e) {
                return e !== n
            })
        }
    }),
    o
});
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
Component = function() {
    function e(t, n) {
        _classCallCheck(this, e),
        n instanceof Element || console.error(Error(n + " is not an HTML Element"));
        var i = t.getInstance(n);
        i && i.destroy(),
        this.el = n,
        this.$el = cash(n)
    }
    return _createClass(e, null, [{
        key: "init",
        value: function(e, t, n) {
            var i = null;
            if (t instanceof Element) i = new e(t, n);
            else if (t && (t.jquery || t.cash || t instanceof NodeList)) {
                for (var o = [], s = 0; s < t.length; s++) o.push(new e(t[s], n));
                i = o
            }
            return i
        }
    }]),
    e
} (); !
function(e) {
    e.Package ? M = {}: e.M = {},
    M.jQueryLoaded = !!e.jQuery
} (window),
"function" == typeof define && define.amd ? define("M", [],
function() {
    return M
}) : "undefined" == typeof exports || exports.nodeType || ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = M), exports["default"] = M),
M.version = "1.0.0",
M.keys = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    ARROW_UP: 38,
    ARROW_DOWN: 40
},
M.tabPressed = !1,
M.keyDown = !1;
var docHandleKeydown = function(e) {
    M.keyDown = !0,
    e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !0)
},
docHandleKeyup = function(e) {
    M.keyDown = !1,
    e.which !== M.keys.TAB && e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ARROW_UP || (M.tabPressed = !1)
},
docHandleFocus = function() {
    M.keyDown && document.body.classList.add("keyboard-focused")
},
docHandleBlur = function() {
    document.body.classList.remove("keyboard-focused")
};
document.addEventListener("keydown", docHandleKeydown, !0),
document.addEventListener("keyup", docHandleKeyup, !0),
document.addEventListener("focus", docHandleFocus, !0),
document.addEventListener("blur", docHandleBlur, !0),
M.initializeJqueryWrapper = function(e, t, n) {
    jQuery.fn[t] = function(i) {
        if (e.prototype[i]) {
            var o = Array.prototype.slice.call(arguments, 1);
            if ("get" === i.slice(0, 3)) {
                var s = this.first()[0][n];
                return s[i].apply(s, o)
            }
            return this.each(function() {
                var e = this[n];
                e[i].apply(e, o)
            })
        }
        if ("object" == typeof i || !i) return e.init(this, arguments[0]),
        this;
        jQuery.error("Method " + i + " does not exist on jQuery." + t)
    }
},
M.AutoInit = function(e) {
    var t = e || document.body,
    n = {
        Autocomplete: t.querySelectorAll(".autocomplete:not(.no-autoinit)"),
        Carousel: t.querySelectorAll(".carousel:not(.no-autoinit)"),
        Chips: t.querySelectorAll(".chips:not(.no-autoinit)"),
        Collapsible: t.querySelectorAll(".collapsible:not(.no-autoinit)"),
        Datepicker: t.querySelectorAll(".datepicker:not(.no-autoinit)"),
        Dropdown: t.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
        Materialbox: t.querySelectorAll(".materialboxed:not(.no-autoinit)"),
        Modal: t.querySelectorAll(".modal:not(.no-autoinit)"),
        Parallax: t.querySelectorAll(".parallax:not(.no-autoinit)"),
        Pushpin: t.querySelectorAll(".pushpin:not(.no-autoinit)"),
        ScrollSpy: t.querySelectorAll(".scrollspy:not(.no-autoinit)"),
        FormSelect: t.querySelectorAll("select:not(.no-autoinit)"),
        Sidenav: t.querySelectorAll(".sidenav:not(.no-autoinit)"),
        Tabs: t.querySelectorAll(".tabs:not(.no-autoinit)"),
        TapTarget: t.querySelectorAll(".tap-target:not(.no-autoinit)"),
        Timepicker: t.querySelectorAll(".timepicker:not(.no-autoinit)"),
        Tooltip: t.querySelectorAll(".tooltipped:not(.no-autoinit)"),
        FloatingActionButton: t.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
    };
    for (var i in n) {
        M[i].init(n[i])
    }
},
M.objectSelectorString = function(e) {
    return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
},
M.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
} (),
M.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1")
},
M.elementOrParentIsFixed = function(e) {
    var t = $(e),
    n = t.add(t.parents()),
    i = !1;
    return n.each(function() {
        if ("fixed" === $(this).css("position")) return i = !0,
        !1
    }),
    i
},
M.checkWithinContainer = function(e, t, n) {
    var i = {
        top: !1,
        right: !1,
        bottom: !1,
        left: !1
    },
    o = e.getBoundingClientRect(),
    s = e === document.body ? Math.max(o.bottom, window.innerHeight) : o.bottom,
    r = e.scrollLeft,
    a = e.scrollTop,
    l = t.left - r,
    c = t.top - a;
    return (l < o.left + n || l < n) && (i.left = !0),
    (l + t.width > o.right - n || l + t.width > window.innerWidth - n) && (i.right = !0),
    (c < o.top + n || c < n) && (i.top = !0),
    (c + t.height > s - n || c + t.height > window.innerHeight - n) && (i.bottom = !0),
    i
},
M.checkPossibleAlignments = function(e, t, n, i) {
    var o = {
        top: !0,
        right: !0,
        bottom: !0,
        left: !0,
        spaceOnTop: null,
        spaceOnRight: null,
        spaceOnBottom: null,
        spaceOnLeft: null
    },
    s = "visible" === getComputedStyle(t).overflow,
    r = t.getBoundingClientRect(),
    a = Math.min(r.height, window.innerHeight),
    l = Math.min(r.width, window.innerWidth),
    c = e.getBoundingClientRect(),
    u = t.scrollLeft,
    d = t.scrollTop,
    h = n.left - u,
    p = n.top - d,
    f = n.top + c.height - d;
    return o.spaceOnRight = s ? window.innerWidth - (c.left + n.width) : l - (h + n.width),
    o.spaceOnRight < 0 && (o.left = !1),
    o.spaceOnLeft = s ? c.right - n.width: h - n.width + c.width,
    o.spaceOnLeft < 0 && (o.right = !1),
    o.spaceOnBottom = s ? window.innerHeight - (c.top + n.height + i) : a - (p + n.height + i),
    o.spaceOnBottom < 0 && (o.top = !1),
    o.spaceOnTop = s ? c.bottom - (n.height + i) : f - (n.height - i),
    o.spaceOnTop < 0 && (o.bottom = !1),
    o
},
M.getOverflowParent = function(e) {
    return null == e ? null: e === document.body || "visible" !== getComputedStyle(e).overflow ? e: M.getOverflowParent(e.parentElement)
},
M.getIdFromTrigger = function(e) {
    var t = e.getAttribute("data-target");
    return t || (t = (t = e.getAttribute("href")) ? t.slice(1) : ""),
    t
},
M.getDocumentScrollTop = function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
},
M.getDocumentScrollLeft = function() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
};
var getTime = Date.now ||
function() {
    return (new Date).getTime()
};
M.throttle = function(e, t, n) {
    var i = void 0,
    o = void 0,
    s = void 0,
    r = null,
    a = 0;
    n || (n = {});
    var l = function() {
        a = !1 === n.leading ? 0 : getTime(),
        r = null,
        s = e.apply(i, o),
        i = o = null
    };
    return function() {
        var c = getTime();
        a || !1 !== n.leading || (a = c);
        var u = t - (c - a);
        return i = this,
        o = arguments,
        u <= 0 ? (clearTimeout(r), r = null, a = c, s = e.apply(i, o), i = o = null) : r || !1 === n.trailing || (r = setTimeout(l, u)),
        s
    }
};
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty: function(e, t, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
},
$jscomp.getGlobal = function(e) {
    return "undefined" != typeof window && window === e ? e: "undefined" != typeof global && null != global ? global: e
},
$jscomp.global = $jscomp.getGlobal(this),
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_",
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {},
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
},
$jscomp.symbolCounter_ = 0,
$jscomp.Symbol = function(e) {
    return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++
},
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var e = $jscomp.global.Symbol.iterator;
    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")),
    "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    }),
    $jscomp.initSymbolIterator = function() {}
},
$jscomp.arrayIterator = function(e) {
    var t = 0;
    return $jscomp.iteratorPrototype(function() {
        return t < e.length ? {
            done: !1,
            value: e[t++]
        }: {
            done: !0
        }
    })
},
$jscomp.iteratorPrototype = function(e) {
    return $jscomp.initSymbolIterator(),
    (e = {
        next: e
    })[$jscomp.global.Symbol.iterator] = function() {
        return this
    },
    e
},
$jscomp.array = $jscomp.array || {},
$jscomp.iteratorFromArray = function(e, t) {
    $jscomp.initSymbolIterator(),
    e instanceof String && (e += "");
    var n = 0,
    i = {
        next: function() {
            if (n < e.length) {
                var o = n++;
                return {
                    value: t(o, e[o]),
                    done: !1
                }
            }
            return i.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            },
            i.next()
        }
    };
    return i[Symbol.iterator] = function() {
        return i
    },
    i
},
$jscomp.polyfill = function(e, t, n, i) {
    if (t) {
        for (n = $jscomp.global, e = e.split("."), i = 0; i < e.length - 1; i++) {
            var o = e[i];
            o in n || (n[o] = {}),
            n = n[o]
        } (t = t(i = n[e = e[e.length - 1]])) != i && null != t && $jscomp.defineProperty(n, e, {
            configurable: !0,
            writable: !0,
            value: t
        })
    }
},
$jscomp.polyfill("Array.prototype.keys",
function(e) {
    return e ||
    function() {
        return $jscomp.iteratorFromArray(this,
        function(e) {
            return e
        })
    }
},
"es6-impl", "es3");
var $jscomp$this = this; !
function(e) {
    M.anime = e()
} (function() {
    function e(e) {
        if (!P.col(e)) try {
            return document.querySelectorAll(e)
        } catch(t) {}
    }
    function t(e, t) {
        for (var n = e.length,
        i = 2 <= arguments.length ? arguments[1] : void 0, o = [], s = 0; s < n; s++) if (s in e) {
            var r = e[s];
            t.call(i, r, s, e) && o.push(r)
        }
        return o
    }
    function n(e) {
        return e.reduce(function(e, t) {
            return e.concat(P.arr(t) ? n(t) : t)
        },
        [])
    }
    function i(t) {
        return P.arr(t) ? t: (P.str(t) && (t = e(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }
    function o(e, t) {
        return e.some(function(e) {
            return e === t
        })
    }
    function s(e) {
        var t, n = {};
        for (t in e) n[t] = e[t];
        return n
    }
    function r(e, t) {
        var n, i = s(e);
        for (n in e) i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return i
    }
    function a(e, t) {
        var n, i = s(e);
        for (n in t) i[n] = P.und(e[n]) ? t[n] : e[n];
        return i
    }
    function l(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        function(e, t, n, i) {
            return t + t + n + n + i + i
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return "rgba(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ",1)"
    }
    function c(e) {
        function t(e, t, n) {
            return 0 > n && (n += 1),
            1 < n && --n,
            n < 1 / 6 ? e + 6 * (t - e) * n: .5 > n ? t: n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
        e = parseInt(n[1]) / 360;
        var i = parseInt(n[2]) / 100,
        o = parseInt(n[3]) / 100;
        n = n[4] || 1;
        if (0 == i) o = i = e = o;
        else {
            var s = .5 > o ? o * (1 + i) : o + i - o * i,
            r = 2 * o - s;
            o = t(r, s, e + 1 / 3),
            i = t(r, s, e);
            e = t(r, s, e - 1 / 3)
        }
        return "rgba(" + 255 * o + "," + 255 * i + "," + 255 * e + "," + n + ")"
    }
    function u(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2]
    }
    function d(e) {
        return - 1 < e.indexOf("translate") || "perspective" === e ? "px": -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg": void 0
    }
    function h(e, t) {
        return P.fnc(e) ? e(t.target, t.id, t.total) : e
    }
    function p(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }
    function f(e, t) {
        return P.dom(e) && o(I, t) ? "transform": P.dom(e) && (e.getAttribute(t) || P.svg(e) && e[t]) ? "attribute": P.dom(e) && "transform" !== t && p(e, t) ? "css": null != e[t] ? "object": void 0
    }
    function _(e, n) {
        var i = d(n);
        i = -1 < n.indexOf("scale") ? 1 : 0 + i;
        if (! (e = e.style.transform)) return i;
        for (var o = [], s = [], r = [], a = /(\w+)\((.+?)\)/g; o = a.exec(e);) s.push(o[1]),
        r.push(o[2]);
        return (e = t(r,
        function(e, t) {
            return s[t] === n
        })).length ? e[0] : i
    }
    function m(e, t) {
        switch (f(e, t)) {
        case "transform":
            return _(e, t);
        case "css":
            return p(e, t);
        case "attribute":
            return e.getAttribute(t)
        }
        return e[t] || 0
    }
    function v(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var i = u(e) || 0;
        switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
        case "+":
            return t + e + i;
        case "-":
            return t - e + i;
        case "*":
            return t * e + i
        }
    }
    function g(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }
    function y(e) {
        e = e.points;
        for (var t, n = 0,
        i = 0; i < e.numberOfItems; i++) {
            var o = e.getItem(i);
            0 < i && (n += g(t, o)),
            t = o
        }
        return n
    }
    function b(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
        case "circle":
            return 2 * Math.PI * e.getAttribute("r");
        case "rect":
            return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
        case "line":
            return g({
                x:
                e.getAttribute("x1"),
                y: e.getAttribute("y1")
            },
            {
                x: e.getAttribute("x2"),
                y: e.getAttribute("y2")
            });
        case "polyline":
            return y(e);
        case "polygon":
            var t = e.points;
            return y(e) + g(t.getItem(t.numberOfItems - 1), t.getItem(0))
        }
    }
    function w(e, t) {
        function n(n) {
            return n = void 0 === n ? 0 : n,
            e.el.getPointAtLength(1 <= t + n ? t + n: 0)
        }
        var i = n(),
        o = n( - 1),
        s = n(1);
        switch (e.property) {
        case "x":
            return i.x;
        case "y":
            return i.y;
        case "angle":
            return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
        }
    }
    function k(e, t) {
        var n, i = /-?\d*\.?\d+/g;
        if (n = P.pth(e) ? e.totalLength: e, P.col(n)) if (P.rgb(n)) {
            var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);
            n = o ? "rgba(" + o[1] + ",1)": n
        } else n = P.hex(n) ? l(n) : P.hsl(n) ? c(n) : void 0;
        else o = (o = u(n)) ? n.substr(0, n.length - o.length) : n,
        n = t && !/\s/g.test(n) ? o + t: o;
        return {
            original: n += "",
            numbers: n.match(i) ? n.match(i).map(Number) : [0],
            strings: P.str(e) || t ? n.split(i) : []
        }
    }
    function C(e) {
        return t(e = e ? n(P.arr(e) ? e.map(i) : i(e)) : [],
        function(e, t, n) {
            return n.indexOf(e) === t
        })
    }
    function x(e) {
        var t = C(e);
        return t.map(function(e, n) {
            return {
                target: e,
                id: n,
                total: t.length
            }
        })
    }
    function E(e, t) {
        var n = s(t);
        if (P.arr(e)) {
            var o = e.length;
            2 !== o || P.obj(e[0]) ? P.fnc(t.duration) || (n.duration = t.duration / o) : e = {
                value: e
            }
        }
        return i(e).map(function(e, n) {
            return n = n ? 0 : t.delay,
            e = P.obj(e) && !P.pth(e) ? e: {
                value: e
            },
            P.und(e.delay) && (e.delay = n),
            e
        }).map(function(e) {
            return a(e, n)
        })
    }
    function $(e, t) {
        var n, i = {};
        for (n in e) {
            var o = h(e[n], t);
            P.arr(o) && (1 === (o = o.map(function(e) {
                return h(e, t)
            })).length && (o = o[0])),
            i[n] = o
        }
        return i.duration = parseFloat(i.duration),
        i.delay = parseFloat(i.delay),
        i
    }
    function T(e) {
        return P.arr(e) ? R.apply(this, e) : N[e]
    }
    function S(e, t) {
        var n;
        return e.tweens.map(function(i) {
            var o = (i = $(i, t)).value,
            s = m(t.target, e.name),
            r = n ? n.to.original: s,
            a = (r = P.arr(o) ? o[0] : r, v(P.arr(o) ? o[1] : o, r));
            s = u(a) || u(r) || u(s);
            return i.from = k(r, s),
            i.to = k(a, s),
            i.start = n ? n.end: e.offset,
            i.end = i.start + i.delay + i.duration,
            i.easing = T(i.easing),
            i.elasticity = (1e3 - Math.min(Math.max(i.elasticity, 1), 999)) / 1e3,
            i.isPath = P.pth(o),
            i.isColor = P.col(i.from.original),
            i.isColor && (i.round = 1),
            n = i
        })
    }
    function O(e, i) {
        return t(n(e.map(function(e) {
            return i.map(function(t) {
                var n = f(e.target, t.name);
                if (n) {
                    var i = S(t, e);
                    t = {
                        type: n,
                        property: t.name,
                        animatable: e,
                        tweens: i,
                        duration: i[i.length - 1].end,
                        delay: i[0].delay
                    }
                } else t = void 0;
                return t
            })
        })),
        function(e) {
            return ! P.und(e)
        })
    }
    function M(e, t, n, i) {
        var o = "delay" === e;
        return t.length ? (o ? Math.min: Math.max).apply(Math, t.map(function(t) {
            return t[e]
        })) : o ? i.delay: n.offset + i.delay + i.duration
    }
    function D(e) {
        var t, n = r(F, e),
        i = r(j, e),
        o = x(e.targets),
        s = [],
        l = a(n, i);
        for (t in e) l.hasOwnProperty(t) || "targets" === t || s.push({
            name: t,
            offset: l.offset,
            tweens: E(e[t], i)
        });
        return a(n, {
            children: [],
            animatables: o,
            animations: e = O(o, s),
            duration: M("duration", e, n, i),
            delay: M("delay", e, n, i)
        })
    }
    function L(e) {
        function n() {
            return window.Promise && new Promise(function(e) {
                return d = e
            })
        }
        function i(e) {
            return f.reversed ? f.duration - e: e
        }
        function o(e) {
            for (var n = 0,
            i = {},
            o = f.animations,
            s = o.length; n < s;) {
                var r = o[n],
                a = r.animatable,
                l = (c = r.tweens)[h = c.length - 1];
                h && (l = t(c,
                function(t) {
                    return e < t.end
                })[0] || l);
                for (var c = Math.min(Math.max(e - l.start - l.delay, 0), l.duration) / l.duration, u = isNaN(c) ? 1 : l.easing(c, l.elasticity), d = (c = l.to.strings, l.round), h = [], _ = void 0, m = (_ = l.to.numbers.length, 0); m < _; m++) {
                    var v = void 0,
                    g = (v = l.to.numbers[m], l.from.numbers[m]);
                    v = l.isPath ? w(l.value, u * v) : g + u * (v - g);
                    d && (l.isColor && 2 < m || (v = Math.round(v * d) / d)),
                    h.push(v)
                }
                if (l = c.length) for (_ = c[0], u = 0; u < l; u++) d = c[u + 1],
                m = h[u],
                isNaN(m) || (_ = d ? _ + (m + d) : _ + (m + " "));
                else _ = h[0];
                B[r.type](a.target, r.property, _, i, a.id),
                r.currentValue = _,
                n++
            }
            if (n = Object.keys(i).length) for (o = 0; o < n; o++) A || (A = p(document.body, "transform") ? "transform": "-webkit-transform"),
            f.animatables[o].target.style[A] = i[o].join(" ");
            f.currentTime = e,
            f.progress = e / f.duration * 100
        }
        function s(e) {
            f[e] && f[e](f)
        }
        function r() {
            f.remaining && !0 !== f.remaining && f.remaining--
        }
        function a(e) {
            var t = f.duration,
            a = f.offset,
            p = a + f.delay,
            _ = f.currentTime,
            m = f.reversed,
            v = i(e);
            if (f.children.length) {
                var g = f.children,
                y = g.length;
                if (v >= f.currentTime) for (var b = 0; b < y; b++) g[b].seek(v);
                else for (; y--;) g[y].seek(v)
            } (v >= p || !t) && (f.began || (f.began = !0, s("begin")), s("run")),
            v > a && v < t ? o(v) : (v <= a && 0 !== _ && (o(0), m && r()), (v >= t && _ !== t || !t) && (o(t), m || r())),
            s("update"),
            e >= t && (f.remaining ? (c = l, "alternate" === f.direction && (f.reversed = !f.reversed)) : (f.pause(), f.completed || (f.completed = !0, s("complete"), "Promise" in window && (d(), h = n()))), u = 0)
        }
        e = void 0 === e ? {}: e;
        var l, c, u = 0,
        d = null,
        h = n(),
        f = D(e);
        return f.reset = function() {
            var e = f.direction,
            t = f.loop;
            for (f.currentTime = 0, f.progress = 0, f.paused = !0, f.began = !1, f.completed = !1, f.reversed = "reverse" === e, f.remaining = "alternate" === e && 1 === t ? 2 : t, o(0), e = f.children.length; e--;) f.children[e].reset()
        },
        f.tick = function(e) {
            l = e,
            c || (c = l),
            a((u + l - c) * L.speed)
        },
        f.seek = function(e) {
            a(i(e))
        },
        f.pause = function() {
            var e = H.indexOf(f); - 1 < e && H.splice(e, 1),
            f.paused = !0
        },
        f.play = function() {
            f.paused && (f.paused = !1, c = 0, u = i(f.currentTime), H.push(f), q || W())
        },
        f.reverse = function() {
            f.reversed = !f.reversed,
            c = 0,
            u = i(f.currentTime)
        },
        f.restart = function() {
            f.pause(),
            f.reset(),
            f.play()
        },
        f.finished = h,
        f.reset(),
        f.autoplay && f.play(),
        f
    }
    var A, F = {
        update: void 0,
        begin: void 0,
        run: void 0,
        complete: void 0,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        offset: 0
    },
    j = {
        duration: 1e3,
        delay: 0,
        easing: "easeOutElastic",
        elasticity: 500,
        round: 0
    },
    I = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
    P = {
        arr: function(e) {
            return Array.isArray(e)
        },
        obj: function(e) {
            return - 1 < Object.prototype.toString.call(e).indexOf("Object")
        },
        pth: function(e) {
            return P.obj(e) && e.hasOwnProperty("totalLength")
        },
        svg: function(e) {
            return e instanceof SVGElement
        },
        dom: function(e) {
            return e.nodeType || P.svg(e)
        },
        str: function(e) {
            return "string" == typeof e
        },
        fnc: function(e) {
            return "function" == typeof e
        },
        und: function(e) {
            return void 0 === e
        },
        hex: function(e) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
        },
        rgb: function(e) {
            return /^rgb/.test(e)
        },
        hsl: function(e) {
            return /^hsl/.test(e)
        },
        col: function(e) {
            return P.hex(e) || P.rgb(e) || P.hsl(e)
        }
    },
    R = function() {
        function e(e, t, n) {
            return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
        }
        return function(t, n, i, o) {
            if (0 <= t && 1 >= t && 0 <= i && 1 >= i) {
                var s = new Float32Array(11);
                if (t !== n || i !== o) for (var r = 0; 11 > r; ++r) s[r] = e(.1 * r, t, i);
                return function(r) {
                    if (t === n && i === o) return r;
                    if (0 === r) return 0;
                    if (1 === r) return 1;
                    for (var a = 0,
                    l = 1; 10 !== l && s[l] <= r; ++l) a += .1;
                    l = a + (r - s[--l]) / (s[l + 1] - s[l]) * .1;
                    var c = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t;
                    if (.001 <= c) {
                        for (a = 0; 4 > a && 0 !== (c = 3 * (1 - 3 * i + 3 * t) * l * l + 2 * (3 * i - 6 * t) * l + 3 * t); ++a) {
                            var u = e(l, t, i) - r;
                            l = l - u / c
                        }
                        r = l
                    } else if (0 === c) r = l;
                    else {
                        l = a,
                        a = a + .1;
                        var d = 0;
                        do {
                            0 < (c = e(u = l + (a - l) / 2, t, i) - r) ? a = u: l = u
                        } while ( 1e-7 < Math . abs ( c ) && 10 > ++d);
                        r = u
                    }
                    return e(r, n, o)
                }
            }
        }
    } (),
    N = function() {
        function e(e, t) {
            return 0 === e || 1 === e ? e: -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
        }
        var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        i = {
            In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], e],
            Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275],
            function(t, n) {
                return 1 - e(1 - t, n)
            }],
            InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55],
            function(t, n) {
                return.5 > t ? e(2 * t, n) / 2 : 1 - e( - 2 * t + 2, n) / 2
            }]
        },
        o = {
            linear: R(.25, .25, .75, .75)
        },
        s = {};
        for (t in i) s.type = t,
        i[s.type].forEach(function(e) {
            return function(t, i) {
                o["ease" + e.type + n[i]] = P.fnc(t) ? t: R.apply($jscomp$this, t)
            }
        } (s)),
        s = {
            type: s.type
        };
        return o
    } (),
    B = {
        css: function(e, t, n) {
            return e.style[t] = n
        },
        attribute: function(e, t, n) {
            return e.setAttribute(t, n)
        },
        object: function(e, t, n) {
            return e[t] = n
        },
        transform: function(e, t, n, i, o) {
            i[o] || (i[o] = []),
            i[o].push(t + "(" + n + ")")
        }
    },
    H = [],
    q = 0,
    W = function() {
        function e() {
            q = requestAnimationFrame(t)
        }
        function t(t) {
            var n = H.length;
            if (n) {
                for (var i = 0; i < n;) H[i] && H[i].tick(t),
                i++;
                e()
            } else cancelAnimationFrame(q),
            q = 0
        }
        return e
    } ();
    return L.version = "2.2.0",
    L.speed = 1,
    L.running = H,
    L.remove = function(e) {
        e = C(e);
        for (var t = H.length; t--;) for (var n = H[t], i = n.animations, s = i.length; s--;) o(e, i[s].animatable.target) && (i.splice(s, 1), i.length || n.pause())
    },
    L.getValue = m,
    L.path = function(t, n) {
        var i = P.str(t) ? e(t)[0] : t,
        o = n || 100;
        return function(e) {
            return {
                el: i,
                property: e,
                totalLength: b(i) * (o / 100)
            }
        }
    },
    L.setDashoffset = function(e) {
        var t = b(e);
        return e.setAttribute("stroke-dasharray", t),
        t
    },
    L.bezier = R,
    L.easings = N,
    L.timeline = function(e) {
        var t = L(e);
        return t.pause(),
        t.duration = 0,
        t.add = function(n) {
            return t.children.forEach(function(e) {
                e.began = !0,
                e.completed = !0
            }),
            i(n).forEach(function(n) {
                var i = a(n, r(j, e || {}));
                i.targets = i.targets || e.targets,
                n = t.duration;
                var o = i.offset;
                i.autoplay = !1,
                i.direction = t.direction,
                i.offset = P.und(o) ? n: v(o, n),
                t.began = !0,
                t.completed = !0,
                t.seek(i.offset),
                (i = L(i)).began = !0,
                i.completed = !0,
                i.duration > n && (t.duration = i.duration),
                t.children.push(i)
            }),
            t.seek(0),
            t.reset(),
            t.autoplay && t.restart(),
            t
        },
        t
    },
    L.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    },
    L
});
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function e(t, n, i) {
    null === t && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, n);
    if (o === undefined) {
        var s = Object.getPrototypeOf(t);
        return null === s ? undefined: e(s, n, i)
    }
    if ("value" in o) return o.value;
    var r = o.get;
    return r === undefined ? undefined: r.call(i)
}; !
function(e, t) {
    "use strict";
    var n = {
        accordion: !0,
        onOpenStart: undefined,
        onOpenEnd: undefined,
        onCloseStart: undefined,
        onCloseEnd: undefined,
        inDuration: 300,
        outDuration: 300
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            o.el.M_Collapsible = o,
            o.options = e.extend({},
            i.defaults, n),
            o.$headers = o.$el.children("li").children(".collapsible-header"),
            o.$headers.attr("tabindex", 0),
            o._setupEventHandlers();
            var s = o.$el.children("li.active").children(".collapsible-body");
            return o.options.accordion ? s.first().css("display", "block") : s.css("display", "block"),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Collapsible = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this),
                this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this),
                this.el.addEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.addEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.el.removeEventListener("click", this._handleCollapsibleClickBound),
                this.$headers.each(function(t) {
                    t.removeEventListener("keydown", e._handleCollapsibleKeydownBound)
                })
            }
        },
        {
            key: "_handleCollapsibleClick",
            value: function(t) {
                var n = e(t.target).closest(".collapsible-header");
                if (t.target && n.length) {
                    var i = n.closest(".collapsible");
                    if (i[0] === this.el) {
                        var o = n.closest("li"),
                        s = i.children("li"),
                        r = o[0].classList.contains("active"),
                        a = s.index(o);
                        r ? this.close(a) : this.open(a)
                    }
                }
            }
        },
        {
            key: "_handleCollapsibleKeydown",
            value: function(e) {
                13 === e.keyCode && this._handleCollapsibleClickBound(e)
            }
        },
        {
            key: "_animateIn",
            value: function(e) {
                var n = this,
                i = this.$el.children("li").eq(e);
                if (i.length) {
                    var o = i.children(".collapsible-body");
                    t.remove(o[0]),
                    o.css({
                        display: "block",
                        overflow: "hidden",
                        height: 0,
                        paddingTop: "",
                        paddingBottom: ""
                    });
                    var s = o.css("padding-top"),
                    r = o.css("padding-bottom"),
                    a = o[0].scrollHeight;
                    o.css({
                        paddingTop: 0,
                        paddingBottom: 0
                    }),
                    t({
                        targets: o[0],
                        height: a,
                        paddingTop: s,
                        paddingBottom: r,
                        duration: this.options.inDuration,
                        easing: "easeInOutCubic",
                        complete: function() {
                            o.css({
                                overflow: "",
                                paddingTop: "",
                                paddingBottom: "",
                                height: ""
                            }),
                            "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, i[0])
                        }
                    })
                }
            }
        },
        {
            key: "_animateOut",
            value: function(e) {
                var n = this,
                i = this.$el.children("li").eq(e);
                if (i.length) {
                    var o = i.children(".collapsible-body");
                    t.remove(o[0]),
                    o.css("overflow", "hidden"),
                    t({
                        targets: o[0],
                        height: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        duration: this.options.outDuration,
                        easing: "easeInOutCubic",
                        complete: function() {
                            o.css({
                                height: "",
                                overflow: "",
                                padding: "",
                                display: ""
                            }),
                            "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, i[0])
                        }
                    })
                }
            }
        },
        {
            key: "open",
            value: function(t) {
                var n = this,
                i = this.$el.children("li").eq(t);
                if (i.length && !i[0].classList.contains("active")) {
                    if ("function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, i[0]), this.options.accordion) {
                        var o = this.$el.children("li");
                        this.$el.children("li.active").each(function(t) {
                            var i = o.index(e(t));
                            n.close(i)
                        })
                    }
                    i[0].classList.add("active"),
                    this._animateIn(t)
                }
            }
        },
        {
            key: "close",
            value: function(e) {
                var t = this.$el.children("li").eq(e);
                t.length && t[0].classList.contains("active") && ("function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, t[0]), t[0].classList.remove("active"), this._animateOut(e))
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Collapsible
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Collapsible = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "collapsible", "M_Collapsible")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function t(e, n, i) {
    null === e && (e = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(e, n);
    if (o === undefined) {
        var s = Object.getPrototypeOf(e);
        return null === s ? undefined: t(s, n, i)
    }
    if ("value" in o) return o.value;
    var r = o.get;
    return r === undefined ? undefined: r.call(i)
}; !
function(e, t) {
    "use strict";
    var n = {
        alignment: "left",
        autoFocus: !0,
        constrainWidth: !0,
        container: null,
        coverTrigger: !0,
        closeOnClick: !0,
        hover: !1,
        inDuration: 150,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onItemClick: null
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Dropdown = o,
            i._dropdowns.push(o),
            o.id = M.getIdFromTrigger(t),
            o.dropdownEl = document.getElementById(o.id),
            o.$dropdownEl = e(o.dropdownEl),
            o.options = e.extend({},
            i.defaults, n),
            o.isOpen = !1,
            o.isScrollable = !1,
            o.isTouchMoving = !1,
            o.focusedIndex = -1,
            o.filterQuery = [],
            o.options.container ? e(o.options.container).append(o.dropdownEl) : o.$el.after(o.dropdownEl),
            o._makeDropdownFocusable(),
            o._resetFilterQueryBound = o._resetFilterQuery.bind(o),
            o._handleDocumentClickBound = o._handleDocumentClick.bind(o),
            o._handleDocumentTouchmoveBound = o._handleDocumentTouchmove.bind(o),
            o._handleDropdownClickBound = o._handleDropdownClick.bind(o),
            o._handleDropdownKeydownBound = o._handleDropdownKeydown.bind(o),
            o._handleTriggerKeydownBound = o._handleTriggerKeydown.bind(o),
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._resetDropdownStyles(),
                this._removeEventHandlers(),
                i._dropdowns.splice(i._dropdowns.indexOf(this), 1),
                this.el.M_Dropdown = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this.el.addEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.addEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this._handleMouseEnterBound = this._handleMouseEnter.bind(this), this.el.addEventListener("mouseenter", this._handleMouseEnterBound), this._handleMouseLeaveBound = this._handleMouseLeave.bind(this), this.el.addEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound)) : (this._handleClickBound = this._handleClick.bind(this), this.el.addEventListener("click", this._handleClickBound))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("keydown", this._handleTriggerKeydownBound),
                this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound),
                this.options.hover ? (this.el.removeEventListener("mouseenter", this._handleMouseEnterBound), this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound), this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound)) : this.el.removeEventListener("click", this._handleClickBound)
            }
        },
        {
            key: "_setupTemporaryEventHandlers",
            value: function() {
                document.body.addEventListener("click", this._handleDocumentClickBound, !0),
                document.body.addEventListener("touchend", this._handleDocumentClickBound),
                document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound)
            }
        },
        {
            key: "_removeTemporaryEventHandlers",
            value: function() {
                document.body.removeEventListener("click", this._handleDocumentClickBound, !0),
                document.body.removeEventListener("touchend", this._handleDocumentClickBound),
                document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound),
                this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound)
            }
        },
        {
            key: "_handleClick",
            value: function(e) {
                e.preventDefault(),
                this.open()
            }
        },
        {
            key: "_handleMouseEnter",
            value: function() {
                this.open()
            }
        },
        {
            key: "_handleMouseLeave",
            value: function(t) {
                var n = t.toElement || t.relatedTarget,
                i = !!e(n).closest(".dropdown-content").length,
                o = !1,
                s = e(n).closest(".dropdown-trigger");
                s.length && s[0].M_Dropdown && s[0].M_Dropdown.isOpen && (o = !0),
                o || i || this.close()
            }
        },
        {
            key: "_handleDocumentClick",
            value: function(t) {
                var n = this,
                i = e(t.target);
                this.options.closeOnClick && i.closest(".dropdown-content").length && !this.isTouchMoving ? setTimeout(function() {
                    n.close()
                },
                0) : !i.closest(".dropdown-trigger").length && i.closest(".dropdown-content").length || setTimeout(function() {
                    n.close()
                },
                0),
                this.isTouchMoving = !1
            }
        },
        {
            key: "_handleTriggerKeydown",
            value: function(e) {
                e.which !== M.keys.ARROW_DOWN && e.which !== M.keys.ENTER || this.isOpen || (e.preventDefault(), this.open())
            }
        },
        {
            key: "_handleDocumentTouchmove",
            value: function(t) {
                e(t.target).closest(".dropdown-content").length && (this.isTouchMoving = !0)
            }
        },
        {
            key: "_handleDropdownClick",
            value: function(t) {
                if ("function" == typeof this.options.onItemClick) {
                    var n = e(t.target).closest("li")[0];
                    this.options.onItemClick.call(this, n)
                }
            }
        },
        {
            key: "_handleDropdownKeydown",
            value: function(t) {
                if (t.which === M.keys.TAB) t.preventDefault(),
                this.close();
                else if (t.which !== M.keys.ARROW_DOWN && t.which !== M.keys.ARROW_UP || !this.isOpen) if (t.which === M.keys.ENTER && this.isOpen) {
                    var n = this.dropdownEl.children[this.focusedIndex],
                    i = e(n).find("a, button").first();
                    i.length ? i[0].click() : n && n.click()
                } else t.which === M.keys.ESC && this.isOpen && (t.preventDefault(), this.close());
                else {
                    t.preventDefault();
                    var o = t.which === M.keys.ARROW_DOWN ? 1 : -1,
                    s = this.focusedIndex,
                    r = !1;
                    do {
                        if (s += o, this.dropdownEl.children[s] && -1 !== this.dropdownEl.children[s].tabIndex) {
                            r = !0;
                            break
                        }
                    } while ( s < this . dropdownEl . children . length && s >= 0 );
                    r && (this.focusedIndex = s, this._focusFocusedItem())
                }
                var a = String.fromCharCode(t.which).toLowerCase();
                if (a && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                    this.filterQuery.push(a);
                    var l = this.filterQuery.join(""),
                    c = e(this.dropdownEl).find("li").filter(function(t) {
                        return 0 === e(t).text().toLowerCase().indexOf(l)
                    })[0];
                    c && (this.focusedIndex = e(c).index(), this._focusFocusedItem())
                }
                this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3)
            }
        },
        {
            key: "_resetFilterQuery",
            value: function() {
                this.filterQuery = []
            }
        },
        {
            key: "_resetDropdownStyles",
            value: function() {
                this.$dropdownEl.css({
                    display: "",
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": "",
                    transform: "",
                    opacity: ""
                })
            }
        },
        {
            key: "_makeDropdownFocusable",
            value: function() {
                this.dropdownEl.tabIndex = 0,
                e(this.dropdownEl).children().each(function(e) {
                    e.getAttribute("tabindex") || e.setAttribute("tabindex", 0)
                })
            }
        },
        {
            key: "_focusFocusedItem",
            value: function() {
                this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus && this.dropdownEl.children[this.focusedIndex].focus()
            }
        },
        {
            key: "_getDropdownPosition",
            value: function() {
                this.el.offsetParent.getBoundingClientRect();
                var e = this.el.getBoundingClientRect(),
                t = this.dropdownEl.getBoundingClientRect(),
                n = t.height,
                i = t.width,
                o = e.left - t.left,
                s = e.top - t.top,
                r = {
                    left: o,
                    top: s,
                    height: n,
                    width: i
                },
                a = this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent: this.dropdownEl.parentNode,
                l = M.checkPossibleAlignments(this.el, a, r, this.options.coverTrigger ? 0 : e.height),
                c = "top",
                u = this.options.alignment;
                if (s += this.options.coverTrigger ? 0 : e.height, this.isScrollable = !1, l.top || (l.bottom ? c = "bottom": (this.isScrollable = !0, l.spaceOnTop > l.spaceOnBottom ? (c = "bottom", n += l.spaceOnTop, s -= l.spaceOnTop) : n += l.spaceOnBottom)), !l[u]) {
                    var d = "left" === u ? "right": "left";
                    l[d] ? u = d: l.spaceOnLeft > l.spaceOnRight ? (u = "right", i += l.spaceOnLeft, o -= l.spaceOnLeft) : (u = "left", i += l.spaceOnRight)
                }
                return "bottom" === c && (s = s - t.height + (this.options.coverTrigger ? e.height: 0)),
                "right" === u && (o = o - t.width + e.width),
                {
                    x: o,
                    y: s,
                    verticalAlignment: c,
                    horizontalAlignment: u,
                    height: n,
                    width: i
                }
            }
        },
        {
            key: "_animateIn",
            value: function() {
                var e = this;
                t.remove(this.dropdownEl),
                t({
                    targets: this.dropdownEl,
                    opacity: {
                        value: [0, 1],
                        easing: "easeOutQuad"
                    },
                    scaleX: [.3, 1],
                    scaleY: [.3, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuint",
                    complete: function() {
                        e.options.autoFocus && e.dropdownEl.focus(),
                        "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                    }
                })
            }
        },
        {
            key: "_animateOut",
            value: function() {
                var e = this;
                t.remove(this.dropdownEl),
                t({
                    targets: this.dropdownEl,
                    opacity: {
                        value: 0,
                        easing: "easeOutQuint"
                    },
                    scaleX: .3,
                    scaleY: .3,
                    duration: this.options.outDuration,
                    easing: "easeOutQuint",
                    complete: function() {
                        e._resetDropdownStyles(),
                        "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                    }
                })
            }
        },
        {
            key: "_placeDropdown",
            value: function() {
                var e = this.options.constrainWidth ? this.el.getBoundingClientRect().width: this.dropdownEl.getBoundingClientRect().width;
                this.dropdownEl.style.width = e + "px";
                var t = this._getDropdownPosition();
                this.dropdownEl.style.left = t.x + "px",
                this.dropdownEl.style.top = t.y + "px",
                this.dropdownEl.style.height = t.height + "px",
                this.dropdownEl.style.width = t.width + "px",
                this.dropdownEl.style.transformOrigin = ("left" === t.horizontalAlignment ? "0": "100%") + " " + ("top" === t.verticalAlignment ? "0": "100%")
            }
        },
        {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._resetDropdownStyles(), this.dropdownEl.style.display = "block", this._placeDropdown(), this._animateIn(), this._setupTemporaryEventHandlers())
            }
        },
        {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1, this.focusedIndex = -1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._animateOut(), this._removeTemporaryEventHandlers(), this.options.autoFocus && this.el.focus())
            }
        },
        {
            key: "recalculateDimensions",
            value: function() {
                this.isOpen && (this.$dropdownEl.css({
                    width: "",
                    height: "",
                    left: "",
                    top: "",
                    "transform-origin": ""
                }), this._placeDropdown())
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Dropdown
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    i._dropdowns = [],
    M.Dropdown = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "dropdown", "M_Dropdown")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function n(e, t, i) {
    null === e && (e = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(e, t);
    if (o === undefined) {
        var s = Object.getPrototypeOf(e);
        return null === s ? undefined: n(s, t, i)
    }
    if ("value" in o) return o.value;
    var r = o.get;
    return r === undefined ? undefined: r.call(i)
}; !
function(e, t) {
    "use strict";
    var n = {
        opacity: .5,
        inDuration: 250,
        outDuration: 250,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Modal = o,
            o.options = e.extend({},
            i.defaults, n),
            o.isOpen = !1,
            o.id = o.$el.attr("id"),
            o._openingTrigger = undefined,
            o.$overlay = e('<div class="modal-overlay"></div>'),
            o.el.tabIndex = 0,
            o._nthModalOpened = 0,
            i._count++,
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                i._count--,
                this._removeEventHandlers(),
                this.el.removeAttribute("style"),
                this.$overlay.remove(),
                this.el.M_Modal = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleOverlayClickBound = this._handleOverlayClick.bind(this),
                this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this),
                1 === i._count && document.body.addEventListener("click", this._handleTriggerClick),
                this.$overlay[0].addEventListener("click", this._handleOverlayClickBound),
                this.el.addEventListener("click", this._handleModalCloseClickBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                0 === i._count && document.body.removeEventListener("click", this._handleTriggerClick),
                this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound),
                this.el.removeEventListener("click", this._handleModalCloseClickBound)
            }
        },
        {
            key: "_handleTriggerClick",
            value: function(t) {
                var n = e(t.target).closest(".modal-trigger");
                if (n.length) {
                    var i = M.getIdFromTrigger(n[0]),
                    o = document.getElementById(i).M_Modal;
                    o && o.open(n),
                    t.preventDefault()
                }
            }
        },
        {
            key: "_handleOverlayClick",
            value: function() {
                this.options.dismissible && this.close()
            }
        },
        {
            key: "_handleModalCloseClick",
            value: function(t) {
                e(t.target).closest(".modal-close").length && this.close()
            }
        },
        {
            key: "_handleKeydown",
            value: function(e) {
                27 === e.keyCode && this.options.dismissible && this.close()
            }
        },
        {
            key: "_handleFocus",
            value: function(e) {
                this.el.contains(e.target) || this._nthModalOpened !== i._modalsOpen || this.el.focus()
            }
        },
        {
            key: "_animateIn",
            value: function() {
                var n = this;
                e.extend(this.el.style, {
                    display: "block",
                    opacity: 0
                }),
                e.extend(this.$overlay[0].style, {
                    display: "block",
                    opacity: 0
                }),
                t({
                    targets: this.$overlay[0],
                    opacity: this.options.opacity,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                });
                var i = {
                    targets: this.el,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        "function" == typeof n.options.onOpenEnd && n.options.onOpenEnd.call(n, n.el, n._openingTrigger)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? (e.extend(i, {
                    bottom: 0,
                    opacity: 1
                }), t(i)) : (e.extend(i, {
                    top: [this.options.startingTop, this.options.endingTop],
                    opacity: 1,
                    scaleX: [.8, 1],
                    scaleY: [.8, 1]
                }), t(i))
            }
        },
        {
            key: "_animateOut",
            value: function() {
                var n = this;
                t({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuart"
                });
                var i = {
                    targets: this.el,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        n.el.style.display = "none",
                        n.$overlay.remove(),
                        "function" == typeof n.options.onCloseEnd && n.options.onCloseEnd.call(n, n.el)
                    }
                };
                this.el.classList.contains("bottom-sheet") ? (e.extend(i, {
                    bottom: "-100%",
                    opacity: 0
                }), t(i)) : (e.extend(i, {
                    top: [this.options.endingTop, this.options.startingTop],
                    opacity: 0,
                    scaleX: .8,
                    scaleY: .8
                }), t(i))
            }
        },
        {
            key: "open",
            value: function(e) {
                if (!this.isOpen) return this.isOpen = !0,
                i._modalsOpen++,
                this._nthModalOpened = i._modalsOpen,
                this.$overlay[0].style.zIndex = 1e3 + 2 * i._modalsOpen,
                this.el.style.zIndex = 1e3 + 2 * i._modalsOpen + 1,
                this._openingTrigger = e ? e[0] : undefined,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el, this._openingTrigger),
                this.options.preventScrolling && (document.body.style.overflow = "hidden"),
                this.el.classList.add("open"),
                this.el.insertAdjacentElement("afterend", this.$overlay[0]),
                this.options.dismissible && (this._handleKeydownBound = this._handleKeydown.bind(this), this._handleFocusBound = this._handleFocus.bind(this), document.addEventListener("keydown", this._handleKeydownBound), document.addEventListener("focus", this._handleFocusBound, !0)),
                t.remove(this.el),
                t.remove(this.$overlay[0]),
                this._animateIn(),
                this.el.focus(),
                this
            }
        },
        {
            key: "close",
            value: function() {
                if (this.isOpen) return this.isOpen = !1,
                i._modalsOpen--,
                this._nthModalOpened = 0,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                this.el.classList.remove("open"),
                0 === i._modalsOpen && (document.body.style.overflow = ""),
                this.options.dismissible && (document.removeEventListener("keydown", this._handleKeydownBound), document.removeEventListener("focus", this._handleFocusBound, !0)),
                t.remove(this.el),
                t.remove(this.$overlay[0]),
                this._animateOut(),
                this
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Modal
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    i._modalsOpen = 0,
    i._count = 0,
    M.Modal = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "modal", "M_Modal")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function o(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var s = Object.getPrototypeOf(e);
        return null === s ? undefined: o(s, t, n)
    }
    if ("value" in i) return i.value;
    var r = i.get;
    return r === undefined ? undefined: r.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        inDuration: 275,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Materialbox = o,
            o.options = e.extend({},
            i.defaults, n),
            o.overlayActive = !1,
            o.doneAnimating = !0,
            o.placeholder = e("<div></div>").addClass("material-placeholder"),
            o.originalWidth = 0,
            o.originalHeight = 0,
            o.originInlineStyles = o.$el.attr("style"),
            o.caption = o.el.getAttribute("data-caption") || "",
            o.$el.before(o.placeholder),
            o.placeholder.append(o.$el),
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Materialbox = undefined,
                e(this.placeholder).after(this.el).remove(),
                this.$el.removeAttr("style")
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this),
                this.el.addEventListener("click", this._handleMaterialboxClickBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleMaterialboxClickBound)
            }
        },
        {
            key: "_handleMaterialboxClick",
            value: function() { ! 1 === this.doneAnimating || this.overlayActive && this.doneAnimating ? this.close() : this.open()
            }
        },
        {
            key: "_handleWindowScroll",
            value: function() {
                this.overlayActive && this.close()
            }
        },
        {
            key: "_handleWindowResize",
            value: function() {
                this.overlayActive && this.close()
            }
        },
        {
            key: "_handleWindowEscape",
            value: function(e) {
                27 === e.keyCode && this.doneAnimating && this.overlayActive && this.close()
            }
        },
        {
            key: "_makeAncestorsOverflowVisible",
            value: function() {
                this.ancestorsChanged = e();
                for (var t = this.placeholder[0].parentNode; null !== t && !e(t).is(document);) {
                    var n = e(t);
                    "visible" !== n.css("overflow") && (n.css("overflow", "visible"), this.ancestorsChanged === undefined ? this.ancestorsChanged = n: this.ancestorsChanged = this.ancestorsChanged.add(n)),
                    t = t.parentNode
                }
            }
        },
        {
            key: "_animateImageIn",
            value: function() {
                var e = this,
                n = {
                    targets: this.el,
                    height: [this.originalHeight, this.newHeight],
                    width: [this.originalWidth, this.newWidth],
                    left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                    top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        e.doneAnimating = !0,
                        "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                    }
                };
                this.maxWidth = this.$el.css("max-width"),
                this.maxHeight = this.$el.css("max-height"),
                "none" !== this.maxWidth && (n.maxWidth = this.newWidth),
                "none" !== this.maxHeight && (n.maxHeight = this.newHeight),
                t(n)
            }
        },
        {
            key: "_animateImageOut",
            value: function() {
                var e = this,
                n = {
                    targets: this.el,
                    width: this.originalWidth,
                    height: this.originalHeight,
                    left: 0,
                    top: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        e.placeholder.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        e.attrWidth && e.$el.attr("width", e.attrWidth),
                        e.attrHeight && e.$el.attr("height", e.attrHeight),
                        e.$el.removeAttr("style"),
                        e.originInlineStyles && e.$el.attr("style", e.originInlineStyles),
                        e.$el.removeClass("active"),
                        e.doneAnimating = !0,
                        e.ancestorsChanged.length && e.ancestorsChanged.css("overflow", ""),
                        "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                    }
                };
                t(n)
            }
        },
        {
            key: "_updateVars",
            value: function() {
                this.windowWidth = window.innerWidth,
                this.windowHeight = window.innerHeight,
                this.caption = this.el.getAttribute("data-caption") || ""
            }
        },
        {
            key: "open",
            value: function() {
                var n = this;
                this._updateVars(),
                this.originalWidth = this.el.getBoundingClientRect().width,
                this.originalHeight = this.el.getBoundingClientRect().height,
                this.doneAnimating = !1,
                this.$el.addClass("active"),
                this.overlayActive = !0,
                "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el),
                this.placeholder.css({
                    width: this.placeholder[0].getBoundingClientRect().width + "px",
                    height: this.placeholder[0].getBoundingClientRect().height + "px",
                    position: "relative",
                    top: 0,
                    left: 0
                }),
                this._makeAncestorsOverflowVisible(),
                this.$el.css({
                    position: "absolute",
                    "z-index": 1e3,
                    "will-change": "left, top, width, height"
                }),
                this.attrWidth = this.$el.attr("width"),
                this.attrHeight = this.$el.attr("height"),
                this.attrWidth && (this.$el.css("width", this.attrWidth + "px"), this.$el.removeAttr("width")),
                this.attrHeight && (this.$el.css("width", this.attrHeight + "px"), this.$el.removeAttr("height")),
                this.$overlay = e('<div id="materialbox-overlay"></div>').css({
                    opacity: 0
                }).one("click",
                function() {
                    n.doneAnimating && n.close()
                }),
                this.$el.before(this.$overlay);
                var i = this.$overlay[0].getBoundingClientRect();
                this.$overlay.css({
                    width: this.windowWidth + "px",
                    height: this.windowHeight + "px",
                    left: -1 * i.left + "px",
                    top: -1 * i.top + "px"
                }),
                t.remove(this.el),
                t.remove(this.$overlay[0]),
                t({
                    targets: this.$overlay[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }),
                "" !== this.caption && (this.$photocaption && t.remove(this.$photoCaption[0]), this.$photoCaption = e('<div class="materialbox-caption"></div>'), this.$photoCaption.text(this.caption), e("body").append(this.$photoCaption), this.$photoCaption.css({
                    display: "inline"
                }), t({
                    targets: this.$photoCaption[0],
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                }));
                var o = 0,
                s = this.originalWidth / this.windowWidth,
                r = this.originalHeight / this.windowHeight;
                this.newWidth = 0,
                this.newHeight = 0,
                s > r ? (o = this.originalHeight / this.originalWidth, this.newWidth = .9 * this.windowWidth, this.newHeight = .9 * this.windowWidth * o) : (o = this.originalWidth / this.originalHeight, this.newWidth = .9 * this.windowHeight * o, this.newHeight = .9 * this.windowHeight),
                this._animateImageIn(),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                this._handleWindowEscapeBound = this._handleWindowEscape.bind(this),
                window.addEventListener("scroll", this._handleWindowScrollBound),
                window.addEventListener("resize", this._handleWindowResizeBound),
                window.addEventListener("keyup", this._handleWindowEscapeBound)
            }
        },
        {
            key: "close",
            value: function() {
                var e = this;
                this._updateVars(),
                this.doneAnimating = !1,
                "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el),
                t.remove(this.el),
                t.remove(this.$overlay[0]),
                "" !== this.caption && t.remove(this.$photoCaption[0]),
                window.removeEventListener("scroll", this._handleWindowScrollBound),
                window.removeEventListener("resize", this._handleWindowResizeBound),
                window.removeEventListener("keyup", this._handleWindowEscapeBound),
                t({
                    targets: this.$overlay[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        e.overlayActive = !1,
                        e.$overlay.remove()
                    }
                }),
                this._animateImageOut(),
                "" !== this.caption && t({
                    targets: this.$photoCaption[0],
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        e.$photoCaption.remove()
                    }
                })
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Materialbox
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Materialbox = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "materialbox", "M_Materialbox")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function s(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: s(o, t, n)
    }
    if ("value" in i) return i.value;
    var r = i.get;
    return r === undefined ? undefined: r.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        responsiveThreshold: 0
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Parallax = o,
            o.options = e.extend({},
            n.defaults, i),
            o._enabled = window.innerWidth > o.options.responsiveThreshold,
            o.$img = o.$el.find("img").first(),
            o.$img.each(function() {
                var t = this;
                t.complete && e(t).trigger("load")
            }),
            o._updateParallax(),
            o._setupEventHandlers(),
            o._setupStyles(),
            n._parallaxes.push(o),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                n._parallaxes.splice(n._parallaxes.indexOf(this), 1),
                this.$img[0].style.transform = "",
                this._removeEventHandlers(),
                this.$el[0].M_Parallax = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleImageLoadBound = this._handleImageLoad.bind(this),
                this.$img[0].addEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (n._handleScrollThrottled = M.throttle(n._handleScroll, 5), window.addEventListener("scroll", n._handleScrollThrottled), n._handleWindowResizeThrottled = M.throttle(n._handleWindowResize, 5), window.addEventListener("resize", n._handleWindowResizeThrottled))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.$img[0].removeEventListener("load", this._handleImageLoadBound),
                0 === n._parallaxes.length && (window.removeEventListener("scroll", n._handleScrollThrottled), window.removeEventListener("resize", n._handleWindowResizeThrottled))
            }
        },
        {
            key: "_setupStyles",
            value: function() {
                this.$img[0].style.opacity = 1
            }
        },
        {
            key: "_handleImageLoad",
            value: function() {
                this._updateParallax()
            }
        },
        {
            key: "_updateParallax",
            value: function() {
                var e = this.$el.height() > 0 ? this.el.parentNode.offsetHeight: 500,
                t = this.$img[0].offsetHeight - e,
                n = this.$el.offset().top + e,
                i = this.$el.offset().top,
                o = M.getDocumentScrollTop(),
                s = window.innerHeight,
                r = t * ((o + s - i) / (e + s));
                this._enabled ? n > o && i < o + s && (this.$img[0].style.transform = "translate3D(-50%, " + r + "px, 0)") : this.$img[0].style.transform = ""
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Parallax
            }
        },
        {
            key: "_handleScroll",
            value: function() {
                for (var e = 0; e < n._parallaxes.length; e++) {
                    var t = n._parallaxes[e];
                    t._updateParallax.call(t)
                }
            }
        },
        {
            key: "_handleWindowResize",
            value: function() {
                for (var e = 0; e < n._parallaxes.length; e++) {
                    var t = n._parallaxes[e];
                    t._enabled = window.innerWidth > t.options.responsiveThreshold
                }
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._parallaxes = [],
    M.Parallax = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "parallax", "M_Parallax")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function r(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: r(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        duration: 300,
        onShow: null,
        swipeable: !1,
        responsiveThreshold: Infinity
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Tabs = o,
            o.options = e.extend({},
            i.defaults, n),
            o.$tabLinks = o.$el.children("li.tab").children("a"),
            o.index = 0,
            o._setupActiveTabLink(),
            o.options.swipeable ? o._setupSwipeableTabs() : o._setupNormalTabs(),
            o._setTabsAndTabWidth(),
            o._createIndicator(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._indicator.parentNode.removeChild(this._indicator),
                this.options.swipeable ? this._teardownSwipeableTabs() : this._teardownNormalTabs(),
                this.$el[0].M_Tabs = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleWindowResizeBound = this._handleWindowResize.bind(this),
                window.addEventListener("resize", this._handleWindowResizeBound),
                this._handleTabClickBound = this._handleTabClick.bind(this),
                this.el.addEventListener("click", this._handleTabClickBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                window.removeEventListener("resize", this._handleWindowResizeBound),
                this.el.removeEventListener("click", this._handleTabClickBound)
            }
        },
        {
            key: "_handleWindowResize",
            value: function() {
                this._setTabsAndTabWidth(),
                0 !== this.tabWidth && 0 !== this.tabsWidth && (this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px", this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px")
            }
        },
        {
            key: "_handleTabClick",
            value: function(t) {
                var n = this,
                i = e(t.target).closest("li.tab"),
                o = e(t.target).closest("a");
                if (o.length && o.parent().hasClass("tab")) if (i.hasClass("disabled")) t.preventDefault();
                else if (!o.attr("target")) {
                    this.$activeTabLink.removeClass("active");
                    var s = this.$content;
                    this.$activeTabLink = o,
                    this.$content = e(M.escapeHash(o[0].hash)),
                    this.$tabLinks = this.$el.children("li.tab").children("a"),
                    this.$activeTabLink.addClass("active");
                    var r = this.index;
                    this.index = Math.max(this.$tabLinks.index(o), 0),
                    this.options.swipeable ? this._tabsCarousel && this._tabsCarousel.set(this.index,
                    function() {
                        "function" == typeof n.options.onShow && n.options.onShow.call(n, n.$content[0])
                    }) : this.$content.length && (this.$content[0].style.display = "block", this.$content.addClass("active"), "function" == typeof this.options.onShow && this.options.onShow.call(this, this.$content[0]), s.length && !s.is(this.$content) && (s[0].style.display = "none", s.removeClass("active"))),
                    this._setTabsAndTabWidth(),
                    this._animateIndicator(r),
                    t.preventDefault()
                }
            }
        },
        {
            key: "_createIndicator",
            value: function() {
                var e = this,
                t = document.createElement("li");
                t.classList.add("indicator"),
                this.el.appendChild(t),
                this._indicator = t,
                setTimeout(function() {
                    e._indicator.style.left = e._calcLeftPos(e.$activeTabLink) + "px",
                    e._indicator.style.right = e._calcRightPos(e.$activeTabLink) + "px"
                },
                0)
            }
        },
        {
            key: "_setupActiveTabLink",
            value: function() {
                this.$activeTabLink = e(this.$tabLinks.filter('[href="' + location.hash + '"]')),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a.active").first()),
                0 === this.$activeTabLink.length && (this.$activeTabLink = this.$el.children("li.tab").children("a").first()),
                this.$tabLinks.removeClass("active"),
                this.$activeTabLink[0].classList.add("active"),
                this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0),
                this.$activeTabLink.length && (this.$content = e(M.escapeHash(this.$activeTabLink[0].hash)), this.$content.addClass("active"))
            }
        },
        {
            key: "_setupSwipeableTabs",
            value: function() {
                var t = this;
                window.innerWidth > this.options.responsiveThreshold && (this.options.swipeable = !1);
                var n = e();
                this.$tabLinks.each(function(t) {
                    var i = e(M.escapeHash(t.hash));
                    i.addClass("carousel-item"),
                    n = n.add(i)
                });
                var i = e('<div class="tabs-content carousel carousel-slider"></div>');
                n.first().before(i),
                i.append(n),
                n[0].style.display = "";
                var o = this.$activeTabLink.closest(".tab").index();
                this._tabsCarousel = M.Carousel.init(i[0], {
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(n) {
                        var i = t.index;
                        t.index = e(n).index(),
                        t.$activeTabLink.removeClass("active"),
                        t.$activeTabLink = t.$tabLinks.eq(t.index),
                        t.$activeTabLink.addClass("active"),
                        t._animateIndicator(i),
                        "function" == typeof t.options.onShow && t.options.onShow.call(t, t.$content[0])
                    }
                }),
                this._tabsCarousel.set(o)
            }
        },
        {
            key: "_teardownSwipeableTabs",
            value: function() {
                var e = this._tabsCarousel.$el;
                this._tabsCarousel.destroy(),
                e.after(e.children()),
                e.remove()
            }
        },
        {
            key: "_setupNormalTabs",
            value: function() {
                this.$tabLinks.not(this.$activeTabLink).each(function(t) {
                    if (t.hash) {
                        var n = e(M.escapeHash(t.hash));
                        n.length && (n[0].style.display = "none")
                    }
                })
            }
        },
        {
            key: "_teardownNormalTabs",
            value: function() {
                this.$tabLinks.each(function(t) {
                    if (t.hash) {
                        var n = e(M.escapeHash(t.hash));
                        n.length && (n[0].style.display = "")
                    }
                })
            }
        },
        {
            key: "_setTabsAndTabWidth",
            value: function() {
                this.tabsWidth = this.$el.width(),
                this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length
            }
        },
        {
            key: "_calcRightPos",
            value: function(e) {
                return Math.ceil(this.tabsWidth - e.position().left - e[0].getBoundingClientRect().width)
            }
        },
        {
            key: "_calcLeftPos",
            value: function(e) {
                return Math.floor(e.position().left)
            }
        },
        {
            key: "updateTabIndicator",
            value: function() {
                this._setTabsAndTabWidth(),
                this._animateIndicator(this.index)
            }
        },
        {
            key: "_animateIndicator",
            value: function(e) {
                var n = 0,
                i = 0;
                this.index - e >= 0 ? n = 90 : i = 90;
                var o = {
                    targets: this._indicator,
                    left: {
                        value: this._calcLeftPos(this.$activeTabLink),
                        delay: n
                    },
                    right: {
                        value: this._calcRightPos(this.$activeTabLink),
                        delay: i
                    },
                    duration: this.options.duration,
                    easing: "easeOutQuad"
                };
                t.remove(this._indicator),
                t(o)
            }
        },
        {
            key: "select",
            value: function(e) {
                var t = this.$tabLinks.filter('[href="#' + e + '"]');
                t.length && t.trigger("click")
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Tabs
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Tabs = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "tabs", "M_Tabs")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function a(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: a(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        exitDelay: 200,
        enterDelay: 0,
        html: null,
        margin: 5,
        inDuration: 250,
        outDuration: 200,
        position: "bottom",
        transitionMovement: 10
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Tooltip = o,
            o.options = e.extend({},
            i.defaults, n),
            o.isOpen = !1,
            o.isHovered = !1,
            o.isFocused = !1,
            o._appendTooltipEl(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                e(this.tooltipEl).remove(),
                this._removeEventHandlers(),
                this.el.M_Tooltip = undefined
            }
        },
        {
            key: "_appendTooltipEl",
            value: function() {
                var e = document.createElement("div");
                e.classList.add("material-tooltip"),
                this.tooltipEl = e;
                var t = document.createElement("div");
                t.classList.add("tooltip-content"),
                t.innerHTML = this.options.html,
                e.appendChild(t),
                document.body.appendChild(e)
            }
        },
        {
            key: "_updateTooltipContent",
            value: function() {
                this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleMouseEnterBound = this._handleMouseEnter.bind(this),
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this),
                this._handleFocusBound = this._handleFocus.bind(this),
                this._handleBlurBound = this._handleBlur.bind(this),
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.addEventListener("focus", this._handleFocusBound, !0),
                this.el.addEventListener("blur", this._handleBlurBound, !0)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("mouseenter", this._handleMouseEnterBound),
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound),
                this.el.removeEventListener("focus", this._handleFocusBound, !0),
                this.el.removeEventListener("blur", this._handleBlurBound, !0)
            }
        },
        {
            key: "open",
            value: function(t) {
                this.isOpen || (t = t === undefined || undefined, this.isOpen = !0, this.options = e.extend({},
                this.options, this._getAttributeOptions()), this._updateTooltipContent(), this._setEnterDelayTimeout(t))
            }
        },
        {
            key: "close",
            value: function() {
                this.isOpen && (this.isHovered = !1, this.isFocused = !1, this.isOpen = !1, this._setExitDelayTimeout())
            }
        },
        {
            key: "_setExitDelayTimeout",
            value: function() {
                var e = this;
                clearTimeout(this._exitDelayTimeout),
                this._exitDelayTimeout = setTimeout(function() {
                    e.isHovered || e.isFocused || e._animateOut()
                },
                this.options.exitDelay)
            }
        },
        {
            key: "_setEnterDelayTimeout",
            value: function(e) {
                var t = this;
                clearTimeout(this._enterDelayTimeout),
                this._enterDelayTimeout = setTimeout(function() { (t.isHovered || t.isFocused || e) && t._animateIn()
                },
                this.options.enterDelay)
            }
        },
        {
            key: "_positionTooltip",
            value: function() {
                var t = this.el,
                n = this.tooltipEl,
                i = t.offsetHeight,
                o = t.offsetWidth,
                s = n.offsetHeight,
                r = n.offsetWidth,
                a = void 0,
                l = this.options.margin,
                c = void 0,
                u = void 0;
                this.xMovement = 0,
                this.yMovement = 0,
                c = t.getBoundingClientRect().top + M.getDocumentScrollTop(),
                u = t.getBoundingClientRect().left + M.getDocumentScrollLeft(),
                "top" === this.options.position ? (c += -s - l, u += o / 2 - r / 2, this.yMovement = -this.options.transitionMovement) : "right" === this.options.position ? (c += i / 2 - s / 2, u += o + l, this.xMovement = this.options.transitionMovement) : "left" === this.options.position ? (c += i / 2 - s / 2, u += -r - l, this.xMovement = -this.options.transitionMovement) : (c += i + l, u += o / 2 - r / 2, this.yMovement = this.options.transitionMovement),
                a = this._repositionWithinScreen(u, c, r, s),
                e(n).css({
                    top: a.y + "px",
                    left: a.x + "px"
                })
            }
        },
        {
            key: "_repositionWithinScreen",
            value: function(e, t, n, i) {
                var o = M.getDocumentScrollLeft(),
                s = M.getDocumentScrollTop(),
                r = e - o,
                a = t - s,
                l = {
                    left: r,
                    top: a,
                    width: n,
                    height: i
                },
                c = this.options.margin + this.options.transitionMovement,
                u = M.checkWithinContainer(document.body, l, c);
                return u.left ? r = c: u.right && (r -= r + n - window.innerWidth),
                u.top ? a = c: u.bottom && (a -= a + i - window.innerHeight),
                {
                    x: r + o,
                    y: a + s
                }
            }
        },
        {
            key: "_animateIn",
            value: function() {
                this._positionTooltip(),
                this.tooltipEl.style.visibility = "visible",
                t.remove(this.tooltipEl),
                t({
                    targets: this.tooltipEl,
                    opacity: 1,
                    translateX: this.xMovement,
                    translateY: this.yMovement,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        },
        {
            key: "_animateOut",
            value: function() {
                t.remove(this.tooltipEl),
                t({
                    targets: this.tooltipEl,
                    opacity: 0,
                    translateX: 0,
                    translateY: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutCubic"
                })
            }
        },
        {
            key: "_handleMouseEnter",
            value: function() {
                this.isHovered = !0,
                this.isFocused = !1,
                this.open(!1)
            }
        },
        {
            key: "_handleMouseLeave",
            value: function() {
                this.isHovered = !1,
                this.isFocused = !1,
                this.close()
            }
        },
        {
            key: "_handleFocus",
            value: function() {
                M.tabPressed && (this.isFocused = !0, this.open(!1))
            }
        },
        {
            key: "_handleBlur",
            value: function() {
                this.isFocused = !1,
                this.close()
            }
        },
        {
            key: "_getAttributeOptions",
            value: function() {
                var e = {},
                t = this.el.getAttribute("data-tooltip"),
                n = this.el.getAttribute("data-position");
                return t && (e.html = t),
                n && (e.position = n),
                e
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Tooltip
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Tooltip = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "tooltip", "M_Tooltip")
} (cash, M.anime),
function(e) {
    "use strict";
    function t(e) {
        return null !== e && e === e.window
    }
    function n(e) {
        return t(e) ? e: 9 === e.nodeType && e.defaultView
    }
    function i(e) {
        var t, i, o = {
            top: 0,
            left: 0
        },
        s = e && e.ownerDocument;
        return t = s.documentElement,
        typeof e.getBoundingClientRect != typeof undefined && (o = e.getBoundingClientRect()),
        i = n(s),
        {
            top: o.top + i.pageYOffset - t.clientTop,
            left: o.left + i.pageXOffset - t.clientLeft
        }
    }
    function o(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }
    function s(e) {
        if (!1 === u.allowEvent(e)) return null;
        for (var t = null,
        n = e.target || e.srcElement; null !== n.parentNode;) {
            if (! (n instanceof SVGElement) && -1 !== n.className.indexOf("waves-effect")) {
                t = n;
                break
            }
            n = n.parentNode
        }
        return t
    }
    function r(t) {
        var n = s(t);
        null !== n && (c.show(t, n), "ontouchstart" in e && (n.addEventListener("touchend", c.hide, !1), n.addEventListener("touchcancel", c.hide, !1)), n.addEventListener("mouseup", c.hide, !1), n.addEventListener("mouseleave", c.hide, !1), n.addEventListener("dragend", c.hide, !1))
    }
    var a = a || {},
    l = document.querySelectorAll.bind(document),
    c = {
        duration: 750,
        show: function(e, t) {
            if (2 === e.button) return ! 1;
            var n = t || this,
            s = document.createElement("div");
            s.className = "waves-ripple",
            n.appendChild(s);
            var r = i(n),
            a = e.pageY - r.top,
            l = e.pageX - r.left,
            u = "scale(" + n.clientWidth / 100 * 10 + ")";
            "touches" in e && (a = e.touches[0].pageY - r.top, l = e.touches[0].pageX - r.left),
            s.setAttribute("data-hold", Date.now()),
            s.setAttribute("data-scale", u),
            s.setAttribute("data-x", l),
            s.setAttribute("data-y", a);
            var d = {
                top: a + "px",
                left: l + "px"
            };
            s.className = s.className + " waves-notransition",
            s.setAttribute("style", o(d)),
            s.className = s.className.replace("waves-notransition", ""),
            d["-webkit-transform"] = u,
            d["-moz-transform"] = u,
            d["-ms-transform"] = u,
            d["-o-transform"] = u,
            d.transform = u,
            d.opacity = "1",
            d["-webkit-transition-duration"] = c.duration + "ms",
            d["-moz-transition-duration"] = c.duration + "ms",
            d["-o-transition-duration"] = c.duration + "ms",
            d["transition-duration"] = c.duration + "ms",
            d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            s.setAttribute("style", o(d))
        },
        hide: function(e) {
            u.touchup(e);
            var t = this,
            n = (t.clientWidth, null),
            i = t.getElementsByClassName("waves-ripple");
            if (! (i.length > 0)) return ! 1;
            var s = (n = i[i.length - 1]).getAttribute("data-x"),
            r = n.getAttribute("data-y"),
            a = n.getAttribute("data-scale"),
            l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
            l < 0 && (l = 0),
            setTimeout(function() {
                var i = {
                    top: r + "px",
                    left: s + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c.duration + "ms",
                    "-moz-transition-duration": c.duration + "ms",
                    "-o-transition-duration": c.duration + "ms",
                    "transition-duration": c.duration + "ms",
                    "-webkit-transform": a,
                    "-moz-transform": a,
                    "-ms-transform": a,
                    "-o-transform": a,
                    transform: a
                };
                n.setAttribute("style", o(i)),
                setTimeout(function() {
                    try {
                        t.removeChild(n)
                    } catch(e) {
                        return ! 1
                    }
                },
                c.duration)
            },
            l)
        },
        wrapInput: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if ("input" === n.tagName.toLowerCase()) {
                    var i = n.parentNode;
                    if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect")) continue;
                    var o = document.createElement("i");
                    o.className = n.className + " waves-input-wrapper";
                    var s = n.getAttribute("style");
                    s || (s = ""),
                    o.setAttribute("style", s),
                    n.className = "waves-button-input",
                    n.removeAttribute("style"),
                    i.replaceChild(o, n),
                    o.appendChild(n)
                }
            }
        }
    },
    u = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return "touchstart" === e.type ? u.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                u.touches > 0 && (u.touches -= 1)
            },
            500) : "mousedown" === e.type && u.touches > 0 && (t = !1),
            t
        },
        touchup: function(e) {
            u.allowEvent(e)
        }
    };
    a.displayEffect = function(t) {
        "duration" in (t = t || {}) && (c.duration = t.duration),
        c.wrapInput(l(".waves-effect")),
        "ontouchstart" in e && document.body.addEventListener("touchstart", r, !1),
        document.body.addEventListener("mousedown", r, !1)
    },
    a.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (c.wrapInput([t]), t = t.parentNode),
        "ontouchstart" in e && t.addEventListener("touchstart", r, !1),
        t.addEventListener("mousedown", r, !1)
    },
    e.Waves = a,
    document.addEventListener("DOMContentLoaded",
    function() {
        a.displayEffect()
    },
    !1)
} (window);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (); !
function(e, t) {
    "use strict";
    var n = {
        html: "",
        displayLength: 4e3,
        inDuration: 300,
        outDuration: 375,
        classes: "",
        completeCallback: null,
        activationPercent: .8
    },
    i = function() {
        function i(t) {
            _classCallCheck(this, i),
            this.options = e.extend({},
            i.defaults, t),
            this.message = this.options.html,
            this.panning = !1,
            this.timeRemaining = this.options.displayLength,
            0 === i._toasts.length && i._createContainer(),
            i._toasts.push(this);
            var n = this._createToast();
            n.M_Toast = this,
            this.el = n,
            this.$el = e(n),
            this._animateIn(),
            this._setTimer()
        }
        return _createClass(i, [{
            key: "_createToast",
            value: function() {
                var t = document.createElement("div");
                return t.classList.add("toast"),
                this.options.classes.length && e(t).addClass(this.options.classes),
                ("object" == typeof HTMLElement ? this.message instanceof HTMLElement: this.message && "object" == typeof this.message && null !== this.message && 1 === this.message.nodeType && "string" == typeof this.message.nodeName) ? t.appendChild(this.message) : this.message.jquery ? e(t).append(this.message[0]) : t.innerHTML = this.message,
                i._container.appendChild(t),
                t
            }
        },
        {
            key: "_animateIn",
            value: function() {
                t({
                    targets: this.el,
                    top: 0,
                    opacity: 1,
                    duration: this.options.inDuration,
                    easing: "easeOutCubic"
                })
            }
        },
        {
            key: "_setTimer",
            value: function() {
                var e = this;
                this.timeRemaining !== Infinity && (this.counterInterval = setInterval(function() {
                    e.panning || (e.timeRemaining -= 20),
                    e.timeRemaining <= 0 && e.dismiss()
                },
                20))
            }
        },
        {
            key: "dismiss",
            value: function() {
                var e = this;
                window.clearInterval(this.counterInterval);
                var n = this.el.offsetWidth * this.options.activationPercent;
                this.wasSwiped && (this.el.style.transition = "transform .05s, opacity .05s", this.el.style.transform = "translateX(" + n + "px)", this.el.style.opacity = 0),
                t({
                    targets: this.el,
                    opacity: 0,
                    marginTop: -40,
                    duration: this.options.outDuration,
                    easing: "easeOutExpo",
                    complete: function() {
                        "function" == typeof e.options.completeCallback && e.options.completeCallback(),
                        e.$el.remove(),
                        i._toasts.splice(i._toasts.indexOf(e), 1),
                        0 === i._toasts.length && i._removeContainer()
                    }
                })
            }
        }], [{
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Toast
            }
        },
        {
            key: "_createContainer",
            value: function() {
                var e = document.createElement("div");
                e.setAttribute("id", "toast-container"),
                e.addEventListener("touchstart", i._onDragStart),
                e.addEventListener("touchmove", i._onDragMove),
                e.addEventListener("touchend", i._onDragEnd),
                e.addEventListener("mousedown", i._onDragStart),
                document.addEventListener("mousemove", i._onDragMove),
                document.addEventListener("mouseup", i._onDragEnd),
                document.body.appendChild(e),
                i._container = e
            }
        },
        {
            key: "_removeContainer",
            value: function() {
                document.removeEventListener("mousemove", i._onDragMove),
                document.removeEventListener("mouseup", i._onDragEnd),
                e(i._container).remove(),
                i._container = null
            }
        },
        {
            key: "_onDragStart",
            value: function(t) {
                if (t.target && e(t.target).closest(".toast").length) {
                    var n = e(t.target).closest(".toast")[0].M_Toast;
                    n.panning = !0,
                    i._draggedToast = n,
                    n.el.classList.add("panning"),
                    n.el.style.transition = "",
                    n.startingXPos = i._xPos(t),
                    n.time = Date.now(),
                    n.xPos = i._xPos(t)
                }
            }
        },
        {
            key: "_onDragMove",
            value: function(e) {
                if (i._draggedToast) {
                    e.preventDefault();
                    var t = i._draggedToast;
                    t.deltaX = Math.abs(t.xPos - i._xPos(e)),
                    t.xPos = i._xPos(e),
                    t.velocityX = t.deltaX / (Date.now() - t.time),
                    t.time = Date.now();
                    var n = t.xPos - t.startingXPos,
                    o = t.el.offsetWidth * t.options.activationPercent;
                    t.el.style.transform = "translateX(" + n + "px)",
                    t.el.style.opacity = 1 - Math.abs(n / o)
                }
            }
        },
        {
            key: "_onDragEnd",
            value: function() {
                if (i._draggedToast) {
                    var e = i._draggedToast;
                    e.panning = !1,
                    e.el.classList.remove("panning");
                    var t = e.xPos - e.startingXPos,
                    n = e.el.offsetWidth * e.options.activationPercent;
                    Math.abs(t) > n || e.velocityX > 1 ? (e.wasSwiped = !0, e.dismiss()) : (e.el.style.transition = "transform .2s, opacity .2s", e.el.style.transform = "", e.el.style.opacity = ""),
                    i._draggedToast = null
                }
            }
        },
        {
            key: "_xPos",
            value: function(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX: e.clientX
            }
        },
        {
            key: "dismissAll",
            value: function() {
                for (var e in i._toasts) i._toasts[e].dismiss()
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    i._toasts = [],
    i._container = null,
    i._draggedToast = null,
    M.Toast = i,
    M.toast = function(e) {
        return new i(e)
    }
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function l(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: l(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        edge: "left",
        draggable: !0,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: !0
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Sidenav = o,
            o.id = o.$el.attr("id"),
            o.options = e.extend({},
            i.defaults, n),
            o.isOpen = !1,
            o.isFixed = o.el.classList.contains("sidenav-fixed"),
            o.isDragged = !1,
            o.lastWindowWidth = window.innerWidth,
            o.lastWindowHeight = window.innerHeight,
            o._createOverlay(),
            o._createDragTarget(),
            o._setupEventHandlers(),
            o._setupClasses(),
            o._setupFixed(),
            i._sidenavs.push(o),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._enableBodyScrolling(),
                this._overlay.parentNode.removeChild(this._overlay),
                this.dragTarget.parentNode.removeChild(this.dragTarget),
                this.el.M_Sidenav = undefined,
                this.el.style.transform = "";
                var e = i._sidenavs.indexOf(this);
                e >= 0 && i._sidenavs.splice(e, 1)
            }
        },
        {
            key: "_createOverlay",
            value: function() {
                var e = document.createElement("div");
                this._closeBound = this.close.bind(this),
                e.classList.add("sidenav-overlay"),
                e.addEventListener("click", this._closeBound),
                document.body.appendChild(e),
                this._overlay = e
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                0 === i._sidenavs.length && document.body.addEventListener("click", this._handleTriggerClick),
                this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this),
                this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this),
                this._handleCloseDragBound = this._handleCloseDrag.bind(this),
                this._handleCloseReleaseBound = this._handleCloseRelease.bind(this),
                this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this),
                this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.addEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("touchmove", this._handleCloseDragBound),
                this.el.addEventListener("touchend", this._handleCloseReleaseBound),
                this.el.addEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && (this._handleWindowResizeBound = this._handleWindowResize.bind(this), window.addEventListener("resize", this._handleWindowResizeBound))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                1 === i._sidenavs.length && document.body.removeEventListener("click", this._handleTriggerClick),
                this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound),
                this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound),
                this._overlay.removeEventListener("touchmove", this._handleCloseDragBound),
                this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("touchmove", this._handleCloseDragBound),
                this.el.removeEventListener("touchend", this._handleCloseReleaseBound),
                this.el.removeEventListener("click", this._handleCloseTriggerClickBound),
                this.isFixed && window.removeEventListener("resize", this._handleWindowResizeBound)
            }
        },
        {
            key: "_handleTriggerClick",
            value: function(t) {
                var n = e(t.target).closest(".sidenav-trigger");
                if (t.target && n.length) {
                    var i = M.getIdFromTrigger(n[0]),
                    o = document.getElementById(i).M_Sidenav;
                    o && o.open(n),
                    t.preventDefault()
                }
            }
        },
        {
            key: "_startDrag",
            value: function(e) {
                var n = e.targetTouches[0].clientX;
                this.isDragged = !0,
                this._startingXpos = n,
                this._xPos = this._startingXpos,
                this._time = Date.now(),
                this._width = this.el.getBoundingClientRect().width,
                this._overlay.style.display = "block",
                this._initialScrollTop = this.isOpen ? this.el.scrollTop: M.getDocumentScrollTop(),
                this._verticallyScrolling = !1,
                t.remove(this.el),
                t.remove(this._overlay)
            }
        },
        {
            key: "_dragMoveUpdate",
            value: function(e) {
                var t = e.targetTouches[0].clientX,
                n = this.isOpen ? this.el.scrollTop: M.getDocumentScrollTop();
                this.deltaX = Math.abs(this._xPos - t),
                this._xPos = t,
                this.velocityX = this.deltaX / (Date.now() - this._time),
                this._time = Date.now(),
                this._initialScrollTop !== n && (this._verticallyScrolling = !0)
            }
        },
        {
            key: "_handleDragTargetDrag",
            value: function(e) {
                if (this.options.draggable && !this._isCurrentlyFixed() && !this._verticallyScrolling) {
                    this.isDragged || this._startDrag(e),
                    this._dragMoveUpdate(e);
                    var t = this._xPos - this._startingXpos,
                    n = t > 0 ? "right": "left";
                    t = Math.min(this._width, Math.abs(t)),
                    this.options.edge === n && (t = 0);
                    var i = t,
                    o = "translateX(-100%)";
                    "right" === this.options.edge && (o = "translateX(100%)", i = -i),
                    this.percentOpen = Math.min(1, t / this._width),
                    this.el.style.transform = o + " translateX(" + i + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        },
        {
            key: "_handleDragTargetRelease",
            value: function() {
                this.isDragged && (this.percentOpen > .2 ? this.open() : this._animateOut(), this.isDragged = !1, this._verticallyScrolling = !1)
            }
        },
        {
            key: "_handleCloseDrag",
            value: function(e) {
                if (this.isOpen) {
                    if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) return;
                    this.isDragged || this._startDrag(e),
                    this._dragMoveUpdate(e);
                    var t = this._xPos - this._startingXpos,
                    n = t > 0 ? "right": "left";
                    t = Math.min(this._width, Math.abs(t)),
                    this.options.edge !== n && (t = 0);
                    var i = -t;
                    "right" === this.options.edge && (i = -i),
                    this.percentOpen = Math.min(1, 1 - t / this._width),
                    this.el.style.transform = "translateX(" + i + "px)",
                    this._overlay.style.opacity = this.percentOpen
                }
            }
        },
        {
            key: "_handleCloseRelease",
            value: function() {
                this.isOpen && this.isDragged && (this.percentOpen > .8 ? this._animateIn() : this.close(), this.isDragged = !1, this._verticallyScrolling = !1)
            }
        },
        {
            key: "_handleCloseTriggerClick",
            value: function(t) {
                e(t.target).closest(".sidenav-close").length && !this._isCurrentlyFixed() && this.close()
            }
        },
        {
            key: "_handleWindowResize",
            value: function() {
                this.lastWindowWidth !== window.innerWidth && (window.innerWidth > 992 ? this.open() : this.close()),
                this.lastWindowWidth = window.innerWidth,
                this.lastWindowHeight = window.innerHeight
            }
        },
        {
            key: "_setupClasses",
            value: function() {
                "right" === this.options.edge && (this.el.classList.add("right-aligned"), this.dragTarget.classList.add("right-aligned"))
            }
        },
        {
            key: "_removeClasses",
            value: function() {
                this.el.classList.remove("right-aligned"),
                this.dragTarget.classList.remove("right-aligned")
            }
        },
        {
            key: "_setupFixed",
            value: function() {
                this._isCurrentlyFixed() && this.open()
            }
        },
        {
            key: "_isCurrentlyFixed",
            value: function() {
                return this.isFixed && window.innerWidth > 992
            }
        },
        {
            key: "_createDragTarget",
            value: function() {
                var e = document.createElement("div");
                e.classList.add("drag-target"),
                document.body.appendChild(e),
                this.dragTarget = e
            }
        },
        {
            key: "_preventBodyScrolling",
            value: function() {
                document.body.style.overflow = "hidden"
            }
        },
        {
            key: "_enableBodyScrolling",
            value: function() {
                document.body.style.overflow = ""
            }
        },
        {
            key: "open",
            value: function() { ! 0 !== this.isOpen && (this.isOpen = !0, "function" == typeof this.options.onOpenStart && this.options.onOpenStart.call(this, this.el), this._isCurrentlyFixed() ? (t.remove(this.el), t({
                    targets: this.el,
                    translateX: 0,
                    duration: 0,
                    easing: "easeOutQuad"
                }), this._enableBodyScrolling(), this._overlay.style.display = "none") : (this.options.preventScrolling && this._preventBodyScrolling(), this.isDragged && 1 == this.percentOpen || this._animateIn()))
            }
        },
        {
            key: "close",
            value: function() {
                if (!1 !== this.isOpen) if (this.isOpen = !1, "function" == typeof this.options.onCloseStart && this.options.onCloseStart.call(this, this.el), this._isCurrentlyFixed()) {
                    var e = "left" === this.options.edge ? "-105%": "105%";
                    this.el.style.transform = "translateX(" + e + ")"
                } else this._enableBodyScrolling(),
                this.isDragged && 0 == this.percentOpen ? this._overlay.style.display = "none": this._animateOut()
            }
        },
        {
            key: "_animateIn",
            value: function() {
                this._animateSidenavIn(),
                this._animateOverlayIn()
            }
        },
        {
            key: "_animateSidenavIn",
            value: function() {
                var e = this,
                n = "left" === this.options.edge ? -1 : 1;
                this.isDragged && (n = "left" === this.options.edge ? n + this.percentOpen: n - this.percentOpen),
                t.remove(this.el),
                t({
                    targets: this.el,
                    translateX: [100 * n + "%", 0],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof e.options.onOpenEnd && e.options.onOpenEnd.call(e, e.el)
                    }
                })
            }
        },
        {
            key: "_animateOverlayIn",
            value: function() {
                var n = 0;
                this.isDragged ? n = this.percentOpen: e(this._overlay).css({
                    display: "block"
                }),
                t.remove(this._overlay),
                t({
                    targets: this._overlay,
                    opacity: [n, 1],
                    duration: this.options.inDuration,
                    easing: "easeOutQuad"
                })
            }
        },
        {
            key: "_animateOut",
            value: function() {
                this._animateSidenavOut(),
                this._animateOverlayOut()
            }
        },
        {
            key: "_animateSidenavOut",
            value: function() {
                var e = this,
                n = "left" === this.options.edge ? -1 : 1,
                i = 0;
                this.isDragged && (i = "left" === this.options.edge ? n + this.percentOpen: n - this.percentOpen),
                t.remove(this.el),
                t({
                    targets: this.el,
                    translateX: [100 * i + "%", 105 * n + "%"],
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e, e.el)
                    }
                })
            }
        },
        {
            key: "_animateOverlayOut",
            value: function() {
                var n = this;
                t.remove(this._overlay),
                t({
                    targets: this._overlay,
                    opacity: 0,
                    duration: this.options.outDuration,
                    easing: "easeOutQuad",
                    complete: function() {
                        e(n._overlay).css("display", "none")
                    }
                })
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Sidenav
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    i._sidenavs = [],
    M.Sidenav = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "sidenav", "M_Sidenav")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function c(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: c(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        throttle: 100,
        scrollOffset: 200,
        activeClass: "active",
        getActiveElement: function(e) {
            return 'a[href="#' + e + '"]'
        }
    },
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_ScrollSpy = o,
            o.options = e.extend({},
            i.defaults, n),
            i._elements.push(o),
            i._count++,
            i._increment++,
            o.tickId = -1,
            o.id = i._increment,
            o._setupEventHandlers(),
            o._handleWindowScroll(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                i._elements.splice(i._elements.indexOf(this), 1),
                i._elementsInView.splice(i._elementsInView.indexOf(this), 1),
                i._visibleElements.splice(i._visibleElements.indexOf(this.$el), 1),
                i._count--,
                this._removeEventHandlers(),
                e(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),
                this.el.M_ScrollSpy = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                var e = M.throttle(this._handleWindowScroll, 200);
                this._handleThrottledResizeBound = e.bind(this),
                this._handleWindowScrollBound = this._handleWindowScroll.bind(this),
                1 === i._count && (window.addEventListener("scroll", this._handleWindowScrollBound), window.addEventListener("resize", this._handleThrottledResizeBound), document.body.addEventListener("click", this._handleTriggerClick))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                0 === i._count && (window.removeEventListener("scroll", this._handleWindowScrollBound), window.removeEventListener("resize", this._handleThrottledResizeBound), document.body.removeEventListener("click", this._handleTriggerClick))
            }
        },
        {
            key: "_handleTriggerClick",
            value: function(n) {
                for (var o = e(n.target), s = i._elements.length - 1; s >= 0; s--) {
                    var r = i._elements[s];
                    if (o.is('a[href="#' + r.$el.attr("id") + '"]')) {
                        n.preventDefault();
                        var a = r.$el.offset().top + 1;
                        t({
                            targets: [document.documentElement, document.body],
                            scrollTop: a - r.options.scrollOffset,
                            duration: 400,
                            easing: "easeOutCubic"
                        });
                        break
                    }
                }
            }
        },
        {
            key: "_handleWindowScroll",
            value: function() {
                i._ticks++;
                for (var e = M.getDocumentScrollTop(), t = M.getDocumentScrollLeft(), n = t + window.innerWidth, o = e + window.innerHeight, s = i._findElements(e, n, o, t), r = 0; r < s.length; r++) {
                    var a = s[r];
                    a.tickId < 0 && a._enter(),
                    a.tickId = i._ticks
                }
                for (var l = 0; l < i._elementsInView.length; l++) {
                    var c = i._elementsInView[l],
                    u = c.tickId;
                    u >= 0 && u !== i._ticks && (c._exit(), c.tickId = -1)
                }
                i._elementsInView = s
            }
        },
        {
            key: "_enter",
            value: function() {
                i._visibleElements = i._visibleElements.filter(function(e) {
                    return 0 != e.height()
                }),
                i._visibleElements[0] ? (e(this.options.getActiveElement(i._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), i._visibleElements[0][0].M_ScrollSpy && this.id < i._visibleElements[0][0].M_ScrollSpy.id ? i._visibleElements.unshift(this.$el) : i._visibleElements.push(this.$el)) : i._visibleElements.push(this.$el),
                e(this.options.getActiveElement(i._visibleElements[0].attr("id"))).addClass(this.options.activeClass)
            }
        },
        {
            key: "_exit",
            value: function() {
                var t = this;
                i._visibleElements = i._visibleElements.filter(function(e) {
                    return 0 != e.height()
                }),
                i._visibleElements[0] && (e(this.options.getActiveElement(i._visibleElements[0].attr("id"))).removeClass(this.options.activeClass), i._visibleElements = i._visibleElements.filter(function(e) {
                    return e.attr("id") != t.$el.attr("id")
                }), i._visibleElements[0] && e(this.options.getActiveElement(i._visibleElements[0].attr("id"))).addClass(this.options.activeClass))
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_ScrollSpy
            }
        },
        {
            key: "_findElements",
            value: function(e, t, n, o) {
                for (var s = [], r = 0; r < i._elements.length; r++) {
                    var a = i._elements[r],
                    l = e + a.options.scrollOffset || 200;
                    if (a.$el.height() > 0) {
                        var c = a.$el.offset().top,
                        u = a.$el.offset().left,
                        d = u + a.$el.width(),
                        h = c + a.$el.height(); ! (u > t || d < o || c > n || h < l) && s.push(a)
                    }
                }
                return s
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    i._elements = [],
    i._elementsInView = [],
    i._visibleElements = [],
    i._count = 0,
    i._increment = 0,
    i._ticks = 0,
    M.ScrollSpy = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "scrollSpy", "M_ScrollSpy")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function u(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: u(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        data: {},
        limit: Infinity,
        onAutocomplete: null,
        minLength: 1,
        sortFunction: function(e, t, n) {
            return e.indexOf(n) - t.indexOf(n)
        }
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Autocomplete = o,
            o.options = e.extend({},
            n.defaults, i),
            o.isOpen = !1,
            o.count = 0,
            o.activeIndex = -1,
            o.oldVal,
            o.$inputField = o.$el.closest(".input-field"),
            o.$active = e(),
            o._mousedown = !1,
            o._setupDropdown(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_Autocomplete = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this),
                this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this),
                this.el.addEventListener("blur", this._handleInputBlurBound),
                this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                "undefined" != typeof window.ontouchstart && (this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("blur", this._handleInputBlurBound),
                this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound),
                this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound),
                "undefined" != typeof window.ontouchstart && (this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound), this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound))
            }
        },
        {
            key: "_setupDropdown",
            value: function() {
                var t = this;
                this.container = document.createElement("ul"),
                this.container.id = "autocomplete-options-" + M.guid(),
                e(this.container).addClass("autocomplete-content dropdown-content"),
                this.$inputField.append(this.container),
                this.el.setAttribute("data-target", this.container.id),
                this.dropdown = M.Dropdown.init(this.el, {
                    autoFocus: !1,
                    closeOnClick: !1,
                    coverTrigger: !1,
                    onItemClick: function(n) {
                        t.selectOption(e(n))
                    }
                }),
                this.el.removeEventListener("click", this.dropdown._handleClickBound)
            }
        },
        {
            key: "_removeDropdown",
            value: function() {
                this.container.parentNode.removeChild(this.container)
            }
        },
        {
            key: "_handleInputBlur",
            value: function() {
                this._mousedown || (this.close(), this._resetAutocomplete())
            }
        },
        {
            key: "_handleInputKeyupAndFocus",
            value: function(e) {
                "keyup" === e.type && (n._keydown = !1),
                this.count = 0;
                var t = this.el.value.toLowerCase();
                13 !== e.keyCode && 38 !== e.keyCode && 40 !== e.keyCode && (this.oldVal === t || !M.tabPressed && "focus" === e.type || this.open(), this.oldVal = t)
            }
        },
        {
            key: "_handleInputKeydown",
            value: function(t) {
                n._keydown = !0;
                var i = t.keyCode,
                o = void 0,
                s = e(this.container).children("li").length;
                i === M.keys.ENTER && this.activeIndex >= 0 ? (o = e(this.container).children("li").eq(this.activeIndex)).length && (this.selectOption(o), t.preventDefault()) : i !== M.keys.ARROW_UP && i !== M.keys.ARROW_DOWN || (t.preventDefault(), i === M.keys.ARROW_UP && this.activeIndex > 0 && this.activeIndex--, i === M.keys.ARROW_DOWN && this.activeIndex < s - 1 && this.activeIndex++, this.$active.removeClass("active"), this.activeIndex >= 0 && (this.$active = e(this.container).children("li").eq(this.activeIndex), this.$active.addClass("active")))
            }
        },
        {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        },
        {
            key: "_handleContainerMousedownAndTouchstart",
            value: function() {
                this._mousedown = !0
            }
        },
        {
            key: "_handleContainerMouseupAndTouchend",
            value: function() {
                this._mousedown = !1
            }
        },
        {
            key: "_highlight",
            value: function(e, t) {
                var n = t.find("img"),
                i = t.text().toLowerCase().indexOf("" + e.toLowerCase()),
                o = i + e.length - 1,
                s = t.text().slice(0, i),
                r = t.text().slice(i, o + 1),
                a = t.text().slice(o + 1);
                t.html("<span>" + s + "<span class='highlight'>" + r + "</span>" + a + "</span>"),
                n.length && t.prepend(n)
            }
        },
        {
            key: "_resetCurrentElement",
            value: function() {
                this.activeIndex = -1,
                this.$active.removeClass("active")
            }
        },
        {
            key: "_resetAutocomplete",
            value: function() {
                e(this.container).empty(),
                this._resetCurrentElement(),
                this.oldVal = null,
                this.isOpen = !1,
                this._mousedown = !1
            }
        },
        {
            key: "selectOption",
            value: function(e) {
                var t = e.text().trim();
                this.el.value = t,
                this.$el.trigger("change"),
                this._resetAutocomplete(),
                this.close(),
                "function" == typeof this.options.onAutocomplete && this.options.onAutocomplete.call(this, t)
            }
        },
        {
            key: "_renderDropdown",
            value: function(t, n) {
                var i = this;
                this._resetAutocomplete();
                var o = [];
                for (var s in t) if (t.hasOwnProperty(s) && -1 !== s.toLowerCase().indexOf(n)) {
                    if (this.count >= this.options.limit) break;
                    var r = {
                        data: t[s],
                        key: s
                    };
                    o.push(r),
                    this.count++
                }
                if (this.options.sortFunction) {
                    var a = function(e, t) {
                        return i.options.sortFunction(e.key.toLowerCase(), t.key.toLowerCase(), n.toLowerCase())
                    };
                    o.sort(a)
                }
                for (var l = 0; l < o.length; l++) {
                    var c = o[l],
                    u = e("<li></li>");
                    c.data ? u.append('<img src="' + c.data + '" class="right circle"><span>' + c.key + "</span>") : u.append("<span>" + c.key + "</span>"),
                    e(this.container).append(u),
                    this._highlight(n, u)
                }
            }
        },
        {
            key: "open",
            value: function() {
                var e = this.el.value.toLowerCase();
                this._resetAutocomplete(),
                e.length >= this.options.minLength && (this.isOpen = !0, this._renderDropdown(this.options.data, e)),
                this.dropdown.isOpen ? this.dropdown.recalculateDimensions() : this.dropdown.open()
            }
        },
        {
            key: "close",
            value: function() {
                this.dropdown.close()
            }
        },
        {
            key: "updateData",
            value: function(e) {
                var t = this.el.value.toLowerCase();
                this.options.data = e,
                this.isOpen && this._renderDropdown(e, t)
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Autocomplete
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._keydown = !1,
    M.Autocomplete = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "autocomplete", "M_Autocomplete")
} (cash),
function(e) {
    M.updateTextFields = function() {
        e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t) {
            var n = e(this);
            t.value.length > 0 || e(t).is(":focus") || t.autofocus || null !== n.attr("placeholder") ? n.siblings("label").addClass("active") : t.validity ? n.siblings("label").toggleClass("active", !0 === t.validity.badInput) : n.siblings("label").removeClass("active")
        })
    },
    M.validate_field = function(e) {
        var t = null !== e.attr("data-length"),
        n = parseInt(e.attr("data-length")),
        i = e[0].value.length;
        0 !== i || !1 !== e[0].validity.badInput || e.is(":required") ? e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid"))) : e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid"))
    },
    M.textareaAutoResize = function(t) {
        if (t instanceof Element && (t = e(t)), t.length) {
            var n = e(".hiddendiv").first();
            n.length || (n = e('<div class="hiddendiv common"></div>'), e("body").append(n));
            var i = t.css("font-family"),
            o = t.css("font-size"),
            s = t.css("line-height"),
            r = t.css("padding-top"),
            a = t.css("padding-right"),
            l = t.css("padding-bottom"),
            c = t.css("padding-left");
            o && n.css("font-size", o),
            i && n.css("font-family", i),
            s && n.css("line-height", s),
            r && n.css("padding-top", r),
            a && n.css("padding-right", a),
            l && n.css("padding-bottom", l),
            c && n.css("padding-left", c),
            t.data("original-height") || t.data("original-height", t.height()),
            "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
            n.text(t[0].value + "\n");
            var u = n.html().replace(/\n/g, "<br>");
            n.html(u),
            t[0].offsetWidth > 0 && t[0].offsetHeight > 0 ? n.css("width", t.width() + "px") : n.css("width", window.innerWidth / 2 + "px"),
            t.data("original-height") <= n.innerHeight() ? t.css("height", n.innerHeight() + "px") : t[0].value.length < t.data("previous-length") && t.css("height", t.data("original-height") + "px"),
            t.data("previous-length", t[0].value.length)
        } else console.error("No textarea element found")
    },
    e(document).ready(function() {
        var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
        e(document).on("change", t,
        function() {
            0 === this.value.length && null === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"),
            M.validate_field(e(this))
        }),
        e(document).ready(function() {
            M.updateTextFields()
        }),
        e(document).on("reset",
        function(n) {
            var i = e(n.target);
            i.is("form") && (i.find(t).removeClass("valid").removeClass("invalid"), i.find(t).each(function() {
                this.value.length && e(this).siblings("label").removeClass("active")
            }), setTimeout(function() {
                i.find("select").each(function() {
                    this.M_FormSelect && e(this).trigger("change")
                })
            },
            0))
        }),
        document.addEventListener("focus",
        function(n) {
            e(n.target).is(t) && e(n.target).siblings("label, .prefix").addClass("active")
        },
        !0),
        document.addEventListener("blur",
        function(n) {
            var i = e(n.target);
            if (i.is(t)) {
                var o = ".prefix";
                0 === i[0].value.length && !0 !== i[0].validity.badInput && null === i.attr("placeholder") && (o += ", label"),
                i.siblings(o).removeClass("active"),
                M.validate_field(i)
            }
        },
        !0);
        var n = "input[type=radio], input[type=checkbox]";
        e(document).on("keyup", n,
        function(t) {
            if (t.which === M.keys.TAB) return e(this).addClass("tabbed"),
            void e(this).one("blur",
            function() {
                e(this).removeClass("tabbed")
            })
        });
        var i = ".materialize-textarea";
        e(i).each(function() {
            var t = e(this);
            t.data("original-height", t.height()),
            t.data("previous-length", this.value.length),
            M.textareaAutoResize(t)
        }),
        e(document).on("keyup", i,
        function() {
            M.textareaAutoResize(e(this))
        }),
        e(document).on("keydown", i,
        function() {
            M.textareaAutoResize(e(this))
        }),
        e(document).on("change", '.file-field input[type="file"]',
        function() {
            for (var t = e(this).closest(".file-field").find("input.file-path"), n = e(this)[0].files, i = [], o = 0; o < n.length; o++) i.push(n[o].name);
            t[0].value = i.join(", "),
            t.trigger("change")
        })
    })
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function d(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: d(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        indicators: !0,
        height: 400,
        duration: 500,
        interval: 6e3
    },
    i = function() {
        function i(n, o) {
            _classCallCheck(this, i);
            var s = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, n, o));
            return s.el.M_Slider = s,
            s.options = e.extend({},
            i.defaults, o),
            s.$slider = s.$el.find(".slides"),
            s.$slides = s.$slider.children("li"),
            s.activeIndex = s.$slides.filter(function(t) {
                return e(t).hasClass("active")
            }).first().index(),
            -1 != s.activeIndex && (s.$active = s.$slides.eq(s.activeIndex)),
            s._setSliderHeight(),
            s.$slides.find(".caption").each(function(e) {
                s._animateCaptionIn(e, 0)
            }),
            s.$slides.find("img").each(function(t) {
                var n = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                e(t).attr("src") !== n && (e(t).css("background-image", 'url("' + e(t).attr("src") + '")'), e(t).attr("src", n))
            }),
            s._setupIndicators(),
            s.$active ? s.$active.css("display", "block") : (s.$slides.first().addClass("active"), t({
                targets: s.$slides.first()[0],
                opacity: 1,
                duration: s.options.duration,
                easing: "easeOutQuad"
            }), s.activeIndex = 0, s.$active = s.$slides.eq(s.activeIndex), s.options.indicators && s.$indicators.eq(s.activeIndex).addClass("active")),
            s.$active.find("img").each(function() {
                t({
                    targets: s.$active.find(".caption")[0],
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                    duration: s.options.duration,
                    easing: "easeOutQuad"
                })
            }),
            s._setupEventHandlers(),
            s.start(),
            s
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this.pause(),
                this._removeIndicators(),
                this._removeEventHandlers(),
                this.el.M_Slider = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleIntervalBound = this._handleInterval.bind(this),
                this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this),
                this.options.indicators && this.$indicators.each(function(t) {
                    t.addEventListener("click", e._handleIndicatorClickBound)
                })
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                this.options.indicators && this.$indicators.each(function(t) {
                    t.removeEventListener("click", e._handleIndicatorClickBound)
                })
            }
        },
        {
            key: "_handleIndicatorClick",
            value: function(t) {
                var n = e(t.target).index();
                this.set(n)
            }
        },
        {
            key: "_handleInterval",
            value: function() {
                var e = this.$slider.find(".active").index();
                this.$slides.length === e + 1 ? e = 0 : e += 1,
                this.set(e)
            }
        },
        {
            key: "_animateCaptionIn",
            value: function(n, i) {
                var o = {
                    targets: n,
                    opacity: 0,
                    duration: i,
                    easing: "easeOutQuad"
                };
                e(n).hasClass("center-align") ? o.translateY = -100 : e(n).hasClass("right-align") ? o.translateX = 100 : e(n).hasClass("left-align") && (o.translateX = -100),
                t(o)
            }
        },
        {
            key: "_setSliderHeight",
            value: function() {
                this.$el.hasClass("fullscreen") || (this.options.indicators ? this.$el.css("height", this.options.height + 40 + "px") : this.$el.css("height", this.options.height + "px"), this.$slider.css("height", this.options.height + "px"))
            }
        },
        {
            key: "_setupIndicators",
            value: function() {
                var t = this;
                this.options.indicators && (this.$indicators = e('<ul class="indicators"></ul>'), this.$slides.each(function() {
                    var n = e('<li class="indicator-item"></li>');
                    t.$indicators.append(n[0])
                }), this.$el.append(this.$indicators[0]), this.$indicators = this.$indicators.children("li.indicator-item"))
            }
        },
        {
            key: "_removeIndicators",
            value: function() {
                this.$el.find("ul.indicators").remove()
            }
        },
        {
            key: "set",
            value: function(e) {
                var n = this;
                if (e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1), this.activeIndex != e) {
                    this.$active = this.$slides.eq(this.activeIndex);
                    var i = this.$active.find(".caption");
                    this.$active.removeClass("active"),
                    t({
                        targets: this.$active[0],
                        opacity: 0,
                        duration: this.options.duration,
                        easing: "easeOutQuad",
                        complete: function() {
                            n.$slides.not(".active").each(function(e) {
                                t({
                                    targets: e,
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0,
                                    duration: 0,
                                    easing: "easeOutQuad"
                                })
                            })
                        }
                    }),
                    this._animateCaptionIn(i[0], this.options.duration),
                    this.options.indicators && (this.$indicators.eq(this.activeIndex).removeClass("active"), this.$indicators.eq(e).addClass("active")),
                    t({
                        targets: this.$slides.eq(e)[0],
                        opacity: 1,
                        duration: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    t({
                        targets: this.$slides.eq(e).find(".caption")[0],
                        opacity: 1,
                        translateX: 0,
                        translateY: 0,
                        duration: this.options.duration,
                        delay: this.options.duration,
                        easing: "easeOutQuad"
                    }),
                    this.$slides.eq(e).addClass("active"),
                    this.activeIndex = e,
                    this.start()
                }
            }
        },
        {
            key: "pause",
            value: function() {
                clearInterval(this.interval)
            }
        },
        {
            key: "start",
            value: function() {
                clearInterval(this.interval),
                this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval)
            }
        },
        {
            key: "next",
            value: function() {
                var e = this.activeIndex + 1;
                e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1),
                this.set(e)
            }
        },
        {
            key: "prev",
            value: function() {
                var e = this.activeIndex - 1;
                e >= this.$slides.length ? e = 0 : e < 0 && (e = this.$slides.length - 1),
                this.set(e)
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Slider
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Slider = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "slider", "M_Slider")
} (cash, M.anime),
function(e, t) {
    e(document).on("click", ".card",
    function(n) {
        if (e(this).children(".card-reveal").length) {
            var i = e(n.target).closest(".card");
            i.data("initialOverflow") === undefined && i.data("initialOverflow", i.css("overflow") === undefined ? "": i.css("overflow"));
            var o = e(this).find(".card-reveal");
            e(n.target).is(e(".card-reveal .card-title")) || e(n.target).is(e(".card-reveal .card-title i")) ? t({
                targets: o[0],
                translateY: 0,
                duration: 225,
                easing: "easeInOutQuad",
                complete: function(t) {
                    var n = t.animatables[0].target;
                    e(n).css({
                        display: "none"
                    }),
                    i.css("overflow", i.data("initialOverflow"))
                }
            }) : (e(n.target).is(e(".card .activator")) || e(n.target).is(e(".card .activator i"))) && (i.css("overflow", "hidden"), o.css({
                display: "block"
            }), t({
                targets: o[0],
                translateY: "-100%",
                duration: 300,
                easing: "easeInOutQuad"
            }))
        }
    })
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function h(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: h(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {},
        limit: Infinity,
        onChipAdd: null,
        onChipSelect: null,
        onChipDelete: null
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Chips = o,
            o.options = e.extend({},
            n.defaults, i),
            o.$el.addClass("chips input-field"),
            o.chipsData = [],
            o.$chips = e(),
            o._setupInput(),
            o.hasAutocomplete = Object.keys(o.options.autocompleteOptions).length > 0,
            o.$input.attr("id") || o.$input.attr("id", M.guid()),
            o.options.data.length && (o.chipsData = o.options.data, o._renderChips(o.chipsData)),
            o.hasAutocomplete && o._setupAutocomplete(),
            o._setPlaceholder(),
            o._setupLabel(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "getData",
            value: function() {
                return this.chipsData
            }
        },
        {
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.$chips.remove(),
                this.el.M_Chips = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleChipClickBound = this._handleChipClick.bind(this),
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputFocusBound = this._handleInputFocus.bind(this),
                this._handleInputBlurBound = this._handleInputBlur.bind(this),
                this.el.addEventListener("click", this._handleChipClickBound),
                document.addEventListener("keydown", n._handleChipsKeydown),
                document.addEventListener("keyup", n._handleChipsKeyup),
                this.el.addEventListener("blur", n._handleChipsBlur, !0),
                this.$input[0].addEventListener("focus", this._handleInputFocusBound),
                this.$input[0].addEventListener("blur", this._handleInputBlurBound),
                this.$input[0].addEventListener("keydown", this._handleInputKeydownBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleChipClickBound),
                document.removeEventListener("keydown", n._handleChipsKeydown),
                document.removeEventListener("keyup", n._handleChipsKeyup),
                this.el.removeEventListener("blur", n._handleChipsBlur, !0),
                this.$input[0].removeEventListener("focus", this._handleInputFocusBound),
                this.$input[0].removeEventListener("blur", this._handleInputBlurBound),
                this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound)
            }
        },
        {
            key: "_handleChipClick",
            value: function(t) {
                var n = e(t.target).closest(".chip"),
                i = e(t.target).is(".close");
                if (n.length) {
                    var o = n.index();
                    i ? (this.deleteChip(o), this.$input[0].focus()) : this.selectChip(o)
                } else this.$input[0].focus()
            }
        },
        {
            key: "_handleInputFocus",
            value: function() {
                this.$el.addClass("focus")
            }
        },
        {
            key: "_handleInputBlur",
            value: function() {
                this.$el.removeClass("focus")
            }
        },
        {
            key: "_handleInputKeydown",
            value: function(e) {
                if (n._keydown = !0, 13 === e.keyCode) {
                    if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) return;
                    e.preventDefault(),
                    this.addChip({
                        tag: this.$input[0].value
                    }),
                    this.$input[0].value = ""
                } else 8 !== e.keyCode && 37 !== e.keyCode || "" !== this.$input[0].value || !this.chipsData.length || (e.preventDefault(), this.selectChip(this.chipsData.length - 1))
            }
        },
        {
            key: "_renderChip",
            value: function(t) {
                if (t.tag) {
                    var n = document.createElement("div"),
                    i = document.createElement("i");
                    if (n.classList.add("chip"), n.textContent = t.tag, n.setAttribute("tabindex", 0), e(i).addClass("material-icons close"), i.textContent = "close", t.image) {
                        var o = document.createElement("img");
                        o.setAttribute("src", t.image),
                        n.insertBefore(o, n.firstChild)
                    }
                    return n.appendChild(i),
                    n
                }
            }
        },
        {
            key: "_renderChips",
            value: function() {
                this.$chips.remove();
                for (var e = 0; e < this.chipsData.length; e++) {
                    var t = this._renderChip(this.chipsData[e]);
                    this.$el.append(t),
                    this.$chips.add(t)
                }
                this.$el.append(this.$input[0])
            }
        },
        {
            key: "_setupAutocomplete",
            value: function() {
                var e = this;
                this.options.autocompleteOptions.onAutocomplete = function(t) {
                    e.addChip({
                        tag: t
                    }),
                    e.$input[0].value = "",
                    e.$input[0].focus()
                },
                this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions)
            }
        },
        {
            key: "_setupInput",
            value: function() {
                this.$input = this.$el.find("input"),
                this.$input.length || (this.$input = e("<input></input>"), this.$el.append(this.$input)),
                this.$input.addClass("input")
            }
        },
        {
            key: "_setupLabel",
            value: function() {
                this.$label = this.$el.find("label"),
                this.$label.length && this.$label.setAttribute("for", this.$input.attr("id"))
            }
        },
        {
            key: "_setPlaceholder",
            value: function() {
                this.chipsData !== undefined && !this.chipsData.length && this.options.placeholder ? e(this.$input).prop("placeholder", this.options.placeholder) : (this.chipsData === undefined || this.chipsData.length) && this.options.secondaryPlaceholder && e(this.$input).prop("placeholder", this.options.secondaryPlaceholder)
            }
        },
        {
            key: "_isValid",
            value: function(e) {
                if (e.hasOwnProperty("tag") && "" !== e.tag) {
                    for (var t = !1,
                    n = 0; n < this.chipsData.length; n++) if (this.chipsData[n].tag === e.tag) {
                        t = !0;
                        break
                    }
                    return ! t
                }
                return ! 1
            }
        },
        {
            key: "addChip",
            value: function(t) {
                if (this._isValid(t) && !(this.chipsData.length >= this.options.limit)) {
                    var n = this._renderChip(t);
                    this.$chips.add(n),
                    this.chipsData.push(t),
                    e(this.$input).before(n),
                    this._setPlaceholder(),
                    "function" == typeof this.options.onChipAdd && this.options.onChipAdd.call(this, this.$el, n)
                }
            }
        },
        {
            key: "deleteChip",
            value: function(t) {
                var n = this.$chips.eq(t);
                this.$chips.eq(t).remove(),
                this.$chips = this.$chips.filter(function(t) {
                    return e(t).index() >= 0
                }),
                this.chipsData.splice(t, 1),
                this._setPlaceholder(),
                "function" == typeof this.options.onChipDelete && this.options.onChipDelete.call(this, this.$el, n[0])
            }
        },
        {
            key: "selectChip",
            value: function(e) {
                var t = this.$chips.eq(e);
                this._selectedChip = t,
                t[0].focus(),
                "function" == typeof this.options.onChipSelect && this.options.onChipSelect.call(this, this.$el, t[0])
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Chips
            }
        },
        {
            key: "_handleChipsKeydown",
            value: function(t) {
                n._keydown = !0;
                var i = e(t.target).closest(".chips"),
                o = t.target && i.length;
                if (!e(t.target).is("input, textarea") && o) {
                    var s = i[0].M_Chips;
                    if (8 === t.keyCode || 46 === t.keyCode) {
                        t.preventDefault();
                        var r = s.chipsData.length;
                        if (s._selectedChip) {
                            var a = s._selectedChip.index();
                            s.deleteChip(a),
                            s._selectedChip = null,
                            r = Math.max(a - 1, 0)
                        }
                        s.chipsData.length && s.selectChip(r)
                    } else if (37 === t.keyCode) {
                        if (s._selectedChip) {
                            var l = s._selectedChip.index() - 1;
                            if (l < 0) return;
                            s.selectChip(l)
                        }
                    } else if (39 === t.keyCode && s._selectedChip) {
                        var c = s._selectedChip.index() + 1;
                        c >= s.chipsData.length ? s.$input[0].focus() : s.selectChip(c)
                    }
                }
            }
        },
        {
            key: "_handleChipsKeyup",
            value: function() {
                n._keydown = !1
            }
        },
        {
            key: "_handleChipsBlur",
            value: function(t) {
                n._keydown || (e(t.target).closest(".chips")[0].M_Chips._selectedChip = null)
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._keydown = !1,
    M.Chips = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "chips", "M_Chips"),
    e(document).ready(function() {
        e(document.body).on("click", ".chip .close",
        function() {
            var t = e(this).closest(".chips");
            t.length && t[0].M_Chips || e(this).closest(".chip").remove()
        })
    })
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function p(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: p(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        top: 0,
        bottom: Infinity,
        offset: 0,
        onPositionChange: null
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Pushpin = o,
            o.options = e.extend({},
            n.defaults, i),
            o.originalOffset = o.el.offsetTop,
            n._pushpins.push(o),
            o._setupEventHandlers(),
            o._updatePosition(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this.el.style.top = null,
                this._removePinClasses(),
                this._removeEventHandlers();
                var e = n._pushpins.indexOf(this);
                n._pushpins.splice(e, 1)
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                document.addEventListener("scroll", n._updateElements)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                document.removeEventListener("scroll", n._updateElements)
            }
        },
        {
            key: "_updatePosition",
            value: function() {
                var e = M.getDocumentScrollTop() + this.options.offset;
                this.options.top <= e && this.options.bottom >= e && !this.el.classList.contains("pinned") && (this._removePinClasses(), this.el.style.top = this.options.offset + "px", this.el.classList.add("pinned"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pinned")),
                e < this.options.top && !this.el.classList.contains("pin-top") && (this._removePinClasses(), this.el.style.top = 0, this.el.classList.add("pin-top"), "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-top")),
                e > this.options.bottom && !this.el.classList.contains("pin-bottom") && (this._removePinClasses(), this.el.classList.add("pin-bottom"), this.el.style.top = this.options.bottom - this.originalOffset + "px", "function" == typeof this.options.onPositionChange && this.options.onPositionChange.call(this, "pin-bottom"))
            }
        },
        {
            key: "_removePinClasses",
            value: function() {
                this.el.classList.remove("pin-top"),
                this.el.classList.remove("pinned"),
                this.el.classList.remove("pin-bottom")
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Pushpin
            }
        },
        {
            key: "_updateElements",
            value: function() {
                for (var e in n._pushpins) {
                    n._pushpins[e]._updatePosition()
                }
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._pushpins = [],
    M.Pushpin = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "pushpin", "M_Pushpin")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function f(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: f(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {
        direction: "top",
        hoverEnabled: !0,
        toolbarEnabled: !1
    };
    e.fn.reverse = [].reverse;
    var i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_FloatingActionButton = o,
            o.options = e.extend({},
            i.defaults, n),
            o.isOpen = !1,
            o.$anchor = o.$el.children("a").first(),
            o.$menu = o.$el.children("ul").first(),
            o.$floatingBtns = o.$el.find("ul .btn-floating"),
            o.$floatingBtnsReverse = o.$el.find("ul .btn-floating").reverse(),
            o.offsetY = 0,
            o.offsetX = 0,
            o.$el.addClass("direction-" + o.options.direction),
            "top" === o.options.direction ? o.offsetY = 40 : "right" === o.options.direction ? o.offsetX = -40 : "bottom" === o.options.direction ? o.offsetY = -40 : o.offsetX = 40,
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_FloatingActionButton = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleFABClickBound = this._handleFABClick.bind(this),
                this._handleOpenBound = this.open.bind(this),
                this._handleCloseBound = this.close.bind(this),
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.addEventListener("mouseenter", this._handleOpenBound), this.el.addEventListener("mouseleave", this._handleCloseBound)) : this.el.addEventListener("click", this._handleFABClickBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.options.hoverEnabled && !this.options.toolbarEnabled ? (this.el.removeEventListener("mouseenter", this._handleOpenBound), this.el.removeEventListener("mouseleave", this._handleCloseBound)) : this.el.removeEventListener("click", this._handleFABClickBound)
            }
        },
        {
            key: "_handleFABClick",
            value: function() {
                this.isOpen ? this.close() : this.open()
            }
        },
        {
            key: "_handleDocumentClick",
            value: function(t) {
                e(t.target).closest(this.$menu).length || this.close()
            }
        },
        {
            key: "open",
            value: function() {
                this.isOpen || (this.options.toolbarEnabled ? this._animateInToolbar() : this._animateInFAB(), this.isOpen = !0)
            }
        },
        {
            key: "close",
            value: function() {
                this.isOpen && (this.options.toolbarEnabled ? (window.removeEventListener("scroll", this._handleCloseBound, !0), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), this._animateOutToolbar()) : this._animateOutFAB(), this.isOpen = !1)
            }
        },
        {
            key: "_animateInFAB",
            value: function() {
                var e = this;
                this.$el.addClass("active");
                var n = 0;
                this.$floatingBtnsReverse.each(function(i) {
                    t({
                        targets: i,
                        opacity: 1,
                        scale: [.4, 1],
                        translateY: [e.offsetY, 0],
                        translateX: [e.offsetX, 0],
                        duration: 275,
                        delay: n,
                        easing: "easeInOutQuad"
                    }),
                    n += 40
                })
            }
        },
        {
            key: "_animateOutFAB",
            value: function() {
                var e = this;
                this.$floatingBtnsReverse.each(function(n) {
                    t.remove(n),
                    t({
                        targets: n,
                        opacity: 0,
                        scale: .4,
                        translateY: e.offsetY,
                        translateX: e.offsetX,
                        duration: 175,
                        easing: "easeOutQuad",
                        complete: function() {
                            e.$el.removeClass("active")
                        }
                    })
                })
            }
        },
        {
            key: "_animateInToolbar",
            value: function() {
                var t = this,
                n = void 0,
                i = window.innerWidth,
                o = window.innerHeight,
                s = this.el.getBoundingClientRect(),
                r = e('<div class="fab-backdrop"></div>'),
                a = this.$anchor.css("background-color");
                this.$anchor.append(r),
                this.offsetX = s.left - i / 2 + s.width / 2,
                this.offsetY = o - s.bottom,
                n = i / r[0].clientWidth,
                this.btnBottom = s.bottom,
                this.btnLeft = s.left,
                this.btnWidth = s.width,
                this.$el.addClass("active"),
                this.$el.css({
                    "text-align": "center",
                    width: "100%",
                    bottom: 0,
                    left: 0,
                    transform: "translateX(" + this.offsetX + "px)",
                    transition: "none"
                }),
                this.$anchor.css({
                    transform: "translateY(" + -this.offsetY + "px)",
                    transition: "none"
                }),
                r.css({
                    "background-color": a
                }),
                setTimeout(function() {
                    t.$el.css({
                        transform: "",
                        transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                    }),
                    t.$anchor.css({
                        overflow: "visible",
                        transform: "",
                        transition: "transform .2s"
                    }),
                    setTimeout(function() {
                        t.$el.css({
                            overflow: "hidden",
                            "background-color": a
                        }),
                        r.css({
                            transform: "scale(" + n + ")",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        }),
                        t.$menu.children("li").children("a").css({
                            opacity: 1
                        }),
                        t._handleDocumentClickBound = t._handleDocumentClick.bind(t),
                        window.addEventListener("scroll", t._handleCloseBound, !0),
                        document.body.addEventListener("click", t._handleDocumentClickBound, !0)
                    },
                    100)
                },
                0)
            }
        },
        {
            key: "_animateOutToolbar",
            value: function() {
                var e = this,
                t = window.innerWidth,
                n = window.innerHeight,
                i = this.$el.find(".fab-backdrop"),
                o = this.$anchor.css("background-color");
                this.offsetX = this.btnLeft - t / 2 + this.btnWidth / 2,
                this.offsetY = n - this.btnBottom,
                this.$el.removeClass("active"),
                this.$el.css({
                    "background-color": "transparent",
                    transition: "none"
                }),
                this.$anchor.css({
                    transition: "none"
                }),
                i.css({
                    transform: "scale(0)",
                    "background-color": o
                }),
                this.$menu.children("li").children("a").css({
                    opacity: ""
                }),
                setTimeout(function() {
                    i.remove(),
                    e.$el.css({
                        "text-align": "",
                        width: "",
                        bottom: "",
                        left: "",
                        overflow: "",
                        "background-color": "",
                        transform: "translate3d(" + -e.offsetX + "px,0,0)"
                    }),
                    e.$anchor.css({
                        overflow: "",
                        transform: "translate3d(0," + e.offsetY + "px,0)"
                    }),
                    setTimeout(function() {
                        e.$el.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s"
                        }),
                        e.$anchor.css({
                            transform: "translate3d(0,0,0)",
                            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                        })
                    },
                    20)
                },
                200)
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_FloatingActionButton
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.FloatingActionButton = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "floatingActionButton", "M_FloatingActionButton")
} (cash, M.anime);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function _(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: _(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        autoClose: !1,
        format: "mmm dd, yyyy",
        parse: null,
        defaultDate: null,
        setDefaultDate: !1,
        disableWeekends: !1,
        disableDayFn: null,
        firstDay: 0,
        minDate: null,
        maxDate: null,
        yearRange: 10,
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,
        startRange: null,
        endRange: null,
        isRTL: !1,
        showMonthAfterYear: !1,
        showDaysInNextAndPreviousMonths: !1,
        container: null,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok",
            previousMonth: "\u2039",
            nextMonth: "\u203a",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
        },
        events: [],
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            o.el.M_Datepicker = o,
            o.options = e.extend({},
            n.defaults, i),
            i && i.hasOwnProperty("i18n") && "object" == typeof i.i18n && (o.options.i18n = e.extend({},
            n.defaults.i18n, i.i18n)),
            o.options.minDate && o.options.minDate.setHours(0, 0, 0, 0),
            o.options.maxDate && o.options.maxDate.setHours(0, 0, 0, 0),
            o.id = M.guid(),
            o._setupVariables(),
            o._insertHTMLIntoDOM(),
            o._setupModal(),
            o._setupEventHandlers(),
            o.options.defaultDate || (o.options.defaultDate = new Date(Date.parse(o.el.value)));
            var s = o.options.defaultDate;
            return n._isDate(s) ? o.options.setDefaultDate ? (o.setDate(s, !0), o.setInputValue()) : o.gotoDate(s) : o.gotoDate(new Date),
            o.isOpen = !1,
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                e(this.modalEl).remove(),
                this.destroySelects(),
                this.el.M_Datepicker = undefined
            }
        },
        {
            key: "destroySelects",
            value: function() {
                var e = this.calendarEl.querySelector(".orig-select-year");
                e && M.FormSelect.getInstance(e).destroy();
                var t = this.calendarEl.querySelector(".orig-select-month");
                t && M.FormSelect.getInstance(t).destroy()
            }
        },
        {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.options.showClearBtn && (e(this.clearBtn).css({
                    visibility: ""
                }), this.clearBtn.innerHTML = this.options.i18n.clear),
                this.doneBtn.innerHTML = this.options.i18n.done,
                this.cancelBtn.innerHTML = this.options.i18n.cancel,
                this.options.container ? this.$modalEl.appendTo(this.options.container) : this.$modalEl.insertBefore(this.el)
            }
        },
        {
            key: "_setupModal",
            value: function() {
                var e = this;
                this.modalEl.id = "modal-" + this.id,
                this.modal = M.Modal.init(this.modalEl, {
                    onCloseEnd: function() {
                        e.isOpen = !1
                    }
                })
            }
        },
        {
            key: "toString",
            value: function(e) {
                var t = this;
                return e = e || this.options.format,
                n._isDate(this.date) ? e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(e) {
                    return t.formats[e] ? t.formats[e]() : e
                }).join("") : ""
            }
        },
        {
            key: "setDate",
            value: function(e, t) {
                if (!e) return this.date = null,
                this._renderDateDisplay(),
                this.draw();
                if ("string" == typeof e && (e = new Date(Date.parse(e))), n._isDate(e)) {
                    var i = this.options.minDate,
                    o = this.options.maxDate;
                    n._isDate(i) && e < i ? e = i: n._isDate(o) && e > o && (e = o),
                    this.date = new Date(e.getTime()),
                    this._renderDateDisplay(),
                    n._setToStartOfDay(this.date),
                    this.gotoDate(this.date),
                    t || "function" != typeof this.options.onSelect || this.options.onSelect.call(this, this.date)
                }
            }
        },
        {
            key: "setInputValue",
            value: function() {
                this.el.value = this.toString(),
                this.$el.trigger("change", {
                    firedBy: this
                })
            }
        },
        {
            key: "_renderDateDisplay",
            value: function() {
                var e = n._isDate(this.date) ? this.date: new Date,
                t = this.options.i18n,
                i = t.weekdaysShort[e.getDay()],
                o = t.monthsShort[e.getMonth()],
                s = e.getDate();
                this.yearTextEl.innerHTML = e.getFullYear(),
                this.dateTextEl.innerHTML = i + ", " + o + " " + s
            }
        },
        {
            key: "gotoDate",
            value: function(e) {
                var t = !0;
                if (n._isDate(e)) {
                    if (this.calendars) {
                        var i = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                        o = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                        s = e.getTime();
                        o.setMonth(o.getMonth() + 1),
                        o.setDate(o.getDate() - 1),
                        t = s < i.getTime() || o.getTime() < s
                    }
                    t && (this.calendars = [{
                        month: e.getMonth(),
                        year: e.getFullYear()
                    }]),
                    this.adjustCalendars()
                }
            }
        },
        {
            key: "adjustCalendars",
            value: function() {
                this.calendars[0] = this.adjustCalendar(this.calendars[0]),
                this.draw()
            }
        },
        {
            key: "adjustCalendar",
            value: function(e) {
                return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12),
                e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12),
                e
            }
        },
        {
            key: "nextMonth",
            value: function() {
                this.calendars[0].month++,
                this.adjustCalendars()
            }
        },
        {
            key: "prevMonth",
            value: function() {
                this.calendars[0].month--,
                this.adjustCalendars()
            }
        },
        {
            key: "render",
            value: function(e, t, i) {
                var o = this.options,
                s = new Date,
                r = n._getDaysInMonth(e, t),
                a = new Date(e, t, 1).getDay(),
                l = [],
                c = [];
                n._setToStartOfDay(s),
                o.firstDay > 0 && (a -= o.firstDay) < 0 && (a += 7);
                for (var u = 0 === t ? 11 : t - 1, d = 11 === t ? 0 : t + 1, h = 0 === t ? e - 1 : e, p = 11 === t ? e + 1 : e, f = n._getDaysInMonth(h, u), _ = r + a, m = _; m > 7;) m -= 7;
                _ += 7 - m;
                for (var v = !1,
                g = 0,
                y = 0; g < _; g++) {
                    var b = new Date(e, t, g - a + 1),
                    w = !!n._isDate(this.date) && n._compareDates(b, this.date),
                    k = n._compareDates(b, s),
                    C = -1 !== o.events.indexOf(b.toDateString()),
                    x = g < a || g >= r + a,
                    E = g - a + 1,
                    $ = t,
                    T = e,
                    S = o.startRange && n._compareDates(o.startRange, b),
                    O = o.endRange && n._compareDates(o.endRange, b),
                    M = o.startRange && o.endRange && o.startRange < b && b < o.endRange;
                    x && (g < a ? (E = f + E, $ = u, T = h) : (E -= r, $ = d, T = p));
                    var D = {
                        day: E,
                        month: $,
                        year: T,
                        hasEvent: C,
                        isSelected: w,
                        isToday: k,
                        isDisabled: o.minDate && b < o.minDate || o.maxDate && b > o.maxDate || o.disableWeekends && n._isWeekend(b) || o.disableDayFn && o.disableDayFn(b),
                        isEmpty: x,
                        isStartRange: S,
                        isEndRange: O,
                        isInRange: M,
                        showDaysInNextAndPreviousMonths: o.showDaysInNextAndPreviousMonths
                    };
                    c.push(this.renderDay(D)),
                    7 == ++y && (l.push(this.renderRow(c, o.isRTL, v)), c = [], y = 0, v = !1)
                }
                return this.renderTable(o, l, i)
            }
        },
        {
            key: "renderDay",
            value: function(e) {
                var t = [],
                n = "false";
                if (e.isEmpty) {
                    if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
                    t.push("is-outside-current-month"),
                    t.push("is-selection-disabled")
                }
                return e.isDisabled && t.push("is-disabled"),
                e.isToday && t.push("is-today"),
                e.isSelected && (t.push("is-selected"), n = "true"),
                e.hasEvent && t.push("has-event"),
                e.isInRange && t.push("is-inrange"),
                e.isStartRange && t.push("is-startrange"),
                e.isEndRange && t.push("is-endrange"),
                '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="datepicker-day-button" type="button" data-year="' + e.year + '" data-month="' + e.month + '" data-day="' + e.day + '">' + e.day + "</button></td>"
            }
        },
        {
            key: "renderRow",
            value: function(e, t, n) {
                return '<tr class="datepicker-row' + (n ? " is-selected": "") + '">' + (t ? e.reverse() : e).join("") + "</tr>"
            }
        },
        {
            key: "renderTable",
            value: function(e, t, n) {
                return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + n + '">' + this.renderHead(e) + this.renderBody(t) + "</table></div>"
            }
        },
        {
            key: "renderHead",
            value: function(e) {
                var t = void 0,
                n = [];
                for (t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + this.renderDayName(e, t) + '">' + this.renderDayName(e, t, !0) + "</abbr></th>");
                return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
            }
        },
        {
            key: "renderBody",
            value: function(e) {
                return "<tbody>" + e.join("") + "</tbody>"
            }
        },
        {
            key: "renderTitle",
            value: function(t, n, i, o, s, r) {
                var a = void 0,
                l = void 0,
                c = void 0,
                u = this.options,
                d = i === u.minYear,
                h = i === u.maxYear,
                p = '<div id="' + r + '" class="datepicker-controls" role="heading" aria-live="assertive">',
                f = void 0,
                _ = void 0,
                m = !0,
                v = !0;
                for (c = [], a = 0; a < 12; a++) c.push('<option value="' + (i === s ? a - n: 12 + a - n) + '"' + (a === o ? ' selected="selected"': "") + (d && a < u.minMonth || h && a > u.maxMonth ? 'disabled="disabled"': "") + ">" + u.i18n.months[a] + "</option>");
                for (f = '<select class="datepicker-select orig-select-month" tabindex="-1">' + c.join("") + "</select>", e.isArray(u.yearRange) ? (a = u.yearRange[0], l = u.yearRange[1] + 1) : (a = i - u.yearRange, l = 1 + i + u.yearRange), c = []; a < l && a <= u.maxYear; a++) a >= u.minYear && c.push('<option value="' + a + '" ' + (a === i ? 'selected="selected"': "") + ">" + a + "</option>");
                return _ = '<select class="datepicker-select orig-select-year" tabindex="-1">' + c.join("") + "</select>",
                p += '<button class="month-prev' + (m ? "": " is-disabled") + '" type="button">' + '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>' + "</button>",
                p += '<div class="selects-container">',
                u.showMonthAfterYear ? p += _ + f: p += f + _,
                p += "</div>",
                d && (0 === o || u.minMonth >= o) && (m = !1),
                h && (11 === o || u.maxMonth <= o) && (v = !1),
                (p += '<button class="month-next' + (v ? "": " is-disabled") + '" type="button">' + '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>' + "</button>") + "</div>"
            }
        },
        {
            key: "draw",
            value: function(e) {
                if (this.isOpen || e) {
                    var t = this.options,
                    n = t.minYear,
                    i = t.maxYear,
                    o = t.minMonth,
                    s = t.maxMonth,
                    r = "",
                    a = void 0;
                    this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)),
                    this._y >= i && (this._y = i, !isNaN(s) && this._m > s && (this._m = s)),
                    a = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
                    for (var l = 0; l < 1; l++) this._renderDateDisplay(),
                    r += this.renderTitle(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, a) + this.render(this.calendars[l].year, this.calendars[l].month, a);
                    this.destroySelects(),
                    this.calendarEl.innerHTML = r;
                    var c = this.calendarEl.querySelector(".orig-select-year"),
                    u = this.calendarEl.querySelector(".orig-select-month");
                    M.FormSelect.init(c, {
                        classes: "select-year",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    M.FormSelect.init(u, {
                        classes: "select-month",
                        dropdownOptions: {
                            container: document.body,
                            constrainWidth: !1
                        }
                    }),
                    c.addEventListener("change", this._handleYearChange.bind(this)),
                    u.addEventListener("change", this._handleMonthChange.bind(this)),
                    "function" == typeof this.options.onDraw && this.options.onDraw(this)
                }
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleInputChangeBound = this._handleInputChange.bind(this),
                this._handleCalendarClickBound = this._handleCalendarClick.bind(this),
                this._finishSelectionBound = this._finishSelection.bind(this),
                this._handleMonthChange = this._handleMonthChange.bind(this),
                this._closeBound = this.close.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.el.addEventListener("change", this._handleInputChangeBound),
                this.calendarEl.addEventListener("click", this._handleCalendarClickBound),
                this.doneBtn.addEventListener("click", this._finishSelectionBound),
                this.cancelBtn.addEventListener("click", this._closeBound),
                this.options.showClearBtn && (this._handleClearClickBound = this._handleClearClick.bind(this), this.clearBtn.addEventListener("click", this._handleClearClickBound))
            }
        },
        {
            key: "_setupVariables",
            value: function() {
                var t = this;
                this.$modalEl = e(n._template),
                this.modalEl = this.$modalEl[0],
                this.calendarEl = this.modalEl.querySelector(".datepicker-calendar"),
                this.yearTextEl = this.modalEl.querySelector(".year-text"),
                this.dateTextEl = this.modalEl.querySelector(".date-text"),
                this.options.showClearBtn && (this.clearBtn = this.modalEl.querySelector(".datepicker-clear")),
                this.doneBtn = this.modalEl.querySelector(".datepicker-done"),
                this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel"),
                this.formats = {
                    d: function() {
                        return t.date.getDate()
                    },
                    dd: function() {
                        var e = t.date.getDate();
                        return (e < 10 ? "0": "") + e
                    },
                    ddd: function() {
                        return t.options.i18n.weekdaysShort[t.date.getDay()]
                    },
                    dddd: function() {
                        return t.options.i18n.weekdays[t.date.getDay()]
                    },
                    m: function() {
                        return t.date.getMonth() + 1
                    },
                    mm: function() {
                        var e = t.date.getMonth() + 1;
                        return (e < 10 ? "0": "") + e
                    },
                    mmm: function() {
                        return t.options.i18n.monthsShort[t.date.getMonth()]
                    },
                    mmmm: function() {
                        return t.options.i18n.months[t.date.getMonth()]
                    },
                    yy: function() {
                        return ("" + t.date.getFullYear()).slice(2)
                    },
                    yyyy: function() {
                        return t.date.getFullYear()
                    }
                }
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound),
                this.el.removeEventListener("change", this._handleInputChangeBound),
                this.calendarEl.removeEventListener("click", this._handleCalendarClickBound)
            }
        },
        {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        },
        {
            key: "_handleInputKeydown",
            value: function(e) {
                e.which === M.keys.ENTER && (e.preventDefault(), this.open())
            }
        },
        {
            key: "_handleCalendarClick",
            value: function(t) {
                if (this.isOpen) {
                    var n = e(t.target);
                    n.hasClass("is-disabled") || (!n.hasClass("datepicker-day-button") || n.hasClass("is-empty") || n.parent().hasClass("is-disabled") ? n.closest(".month-prev").length ? this.prevMonth() : n.closest(".month-next").length && this.nextMonth() : (this.setDate(new Date(t.target.getAttribute("data-year"), t.target.getAttribute("data-month"), t.target.getAttribute("data-day"))), this.options.autoClose && this._finishSelection()))
                }
            }
        },
        {
            key: "_handleClearClick",
            value: function() {
                this.date = null,
                this.setInputValue(),
                this.close()
            }
        },
        {
            key: "_handleMonthChange",
            value: function(e) {
                this.gotoMonth(e.target.value)
            }
        },
        {
            key: "_handleYearChange",
            value: function(e) {
                this.gotoYear(e.target.value)
            }
        },
        {
            key: "gotoMonth",
            value: function(e) {
                isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
            }
        },
        {
            key: "gotoYear",
            value: function(e) {
                isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
            }
        },
        {
            key: "_handleInputChange",
            value: function(e) {
                var t = void 0;
                e.firedBy !== this && (t = this.options.parse ? this.options.parse(this.el.value, this.options.format) : new Date(Date.parse(this.el.value)), n._isDate(t) && this.setDate(t))
            }
        },
        {
            key: "renderDayName",
            value: function(e, t, n) {
                for (t += e.firstDay; t >= 7;) t -= 7;
                return n ? e.i18n.weekdaysAbbrev[t] : e.i18n.weekdays[t]
            }
        },
        {
            key: "_finishSelection",
            value: function() {
                this.setInputValue(),
                this.close()
            }
        },
        {
            key: "open",
            value: function() {
                if (!this.isOpen) return this.isOpen = !0,
                "function" == typeof this.options.onOpen && this.options.onOpen.call(this),
                this.draw(),
                this.modal.open(),
                this
            }
        },
        {
            key: "close",
            value: function() {
                if (this.isOpen) return this.isOpen = !1,
                "function" == typeof this.options.onClose && this.options.onClose.call(this),
                this.modal.close(),
                this
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "_isDate",
            value: function(e) {
                return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
            }
        },
        {
            key: "_isWeekend",
            value: function(e) {
                var t = e.getDay();
                return 0 === t || 6 === t
            }
        },
        {
            key: "_setToStartOfDay",
            value: function(e) {
                n._isDate(e) && e.setHours(0, 0, 0, 0)
            }
        },
        {
            key: "_getDaysInMonth",
            value: function(e, t) {
                return [31, n._isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
            }
        },
        {
            key: "_isLeapYear",
            value: function(e) {
                return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
            }
        },
        {
            key: "_compareDates",
            value: function(e, t) {
                return e.getTime() === t.getTime()
            }
        },
        {
            key: "_setToStartOfDay",
            value: function(e) {
                n._isDate(e) && e.setHours(0, 0, 0, 0)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Datepicker
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join(""),
    M.Datepicker = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "datepicker", "M_Datepicker")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function m(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: m(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        dialRadius: 135,
        outerRadius: 105,
        innerRadius: 70,
        tickRadius: 20,
        duration: 350,
        container: null,
        defaultTime: "now",
        fromNow: 0,
        showClearBtn: !1,
        i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok"
        },
        autoClose: !1,
        twelveHour: !0,
        vibrate: !0,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        onSelect: null
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Timepicker = o,
            o.options = e.extend({},
            n.defaults, i),
            o.id = M.guid(),
            o._insertHTMLIntoDOM(),
            o._setupModal(),
            o._setupVariables(),
            o._setupEventHandlers(),
            o._clockSetup(),
            o._pickerSetup(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.modal.destroy(),
                e(this.modalEl).remove(),
                this.el.M_Timepicker = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleInputKeydownBound = this._handleInputKeydown.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                this._handleClockClickStartBound = this._handleClockClickStart.bind(this),
                this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this),
                this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this),
                this.el.addEventListener("click", this._handleInputClickBound),
                this.el.addEventListener("keydown", this._handleInputKeydownBound),
                this.plate.addEventListener("mousedown", this._handleClockClickStartBound),
                this.plate.addEventListener("touchstart", this._handleClockClickStartBound),
                e(this.spanHours).on("click", this.showView.bind(this, "hours")),
                e(this.spanMinutes).on("click", this.showView.bind(this, "minutes"))
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleInputClickBound),
                this.el.removeEventListener("keydown", this._handleInputKeydownBound)
            }
        },
        {
            key: "_handleInputClick",
            value: function() {
                this.open()
            }
        },
        {
            key: "_handleInputKeydown",
            value: function(e) {
                e.which === M.keys.ENTER && (e.preventDefault(), this.open())
            }
        },
        {
            key: "_handleClockClickStart",
            value: function(e) {
                e.preventDefault();
                var t = this.plate.getBoundingClientRect(),
                i = {
                    x: t.left,
                    y: t.top
                };
                this.x0 = i.x + this.options.dialRadius,
                this.y0 = i.y + this.options.dialRadius,
                this.moved = !1;
                var o = n._Pos(e);
                this.dx = o.x - this.x0,
                this.dy = o.y - this.y0,
                this.setHand(this.dx, this.dy, !1),
                document.addEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.addEventListener("touchmove", this._handleDocumentClickMoveBound),
                document.addEventListener("mouseup", this._handleDocumentClickEndBound),
                document.addEventListener("touchend", this._handleDocumentClickEndBound)
            }
        },
        {
            key: "_handleDocumentClickMove",
            value: function(e) {
                e.preventDefault();
                var t = n._Pos(e),
                i = t.x - this.x0,
                o = t.y - this.y0;
                this.moved = !0,
                this.setHand(i, o, !1, !0)
            }
        },
        {
            key: "_handleDocumentClickEnd",
            value: function(t) {
                var i = this;
                t.preventDefault(),
                document.removeEventListener("mouseup", this._handleDocumentClickEndBound),
                document.removeEventListener("touchend", this._handleDocumentClickEndBound);
                var o = n._Pos(t),
                s = o.x - this.x0,
                r = o.y - this.y0;
                this.moved && s === this.dx && r === this.dy && this.setHand(s, r),
                "hours" === this.currentView ? this.showView("minutes", this.options.duration / 2) : this.options.autoClose && (e(this.minutesView).addClass("timepicker-dial-out"), setTimeout(function() {
                    i.done()
                },
                this.options.duration / 2)),
                "function" == typeof this.options.onSelect && this.options.onSelect.call(this, this.hours, this.minutes),
                document.removeEventListener("mousemove", this._handleDocumentClickMoveBound),
                document.removeEventListener("touchmove", this._handleDocumentClickMoveBound)
            }
        },
        {
            key: "_insertHTMLIntoDOM",
            value: function() {
                this.$modalEl = e(n._template),
                this.modalEl = this.$modalEl[0],
                this.modalEl.id = "modal-" + this.id;
                var t = document.querySelector(this.options.container);
                this.options.container && t ? this.$modalEl.appendTo(t) : this.$modalEl.insertBefore(this.el)
            }
        },
        {
            key: "_setupModal",
            value: function() {
                var e = this;
                this.modal = M.Modal.init(this.modalEl, {
                    onOpenStart: this.options.onOpenStart,
                    onOpenEnd: this.options.onOpenEnd,
                    onCloseStart: this.options.onCloseStart,
                    onCloseEnd: function() {
                        "function" == typeof e.options.onCloseEnd && e.options.onCloseEnd.call(e),
                        e.isOpen = !1
                    }
                })
            }
        },
        {
            key: "_setupVariables",
            value: function() {
                this.currentView = "hours",
                this.vibrate = navigator.vibrate ? "vibrate": navigator.webkitVibrate ? "webkitVibrate": null,
                this._canvas = this.modalEl.querySelector(".timepicker-canvas"),
                this.plate = this.modalEl.querySelector(".timepicker-plate"),
                this.hoursView = this.modalEl.querySelector(".timepicker-hours"),
                this.minutesView = this.modalEl.querySelector(".timepicker-minutes"),
                this.spanHours = this.modalEl.querySelector(".timepicker-span-hours"),
                this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes"),
                this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm"),
                this.footer = this.modalEl.querySelector(".timepicker-footer"),
                this.amOrPm = "PM"
            }
        },
        {
            key: "_pickerSetup",
            value: function() {
                var t = e('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3": "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
                this.options.showClearBtn && t.css({
                    visibility: ""
                });
                var n = e('<div class="confirmation-btns"></div>');
                e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3": "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(n).on("click", this.close.bind(this)),
                e('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3": "1") + '">' + this.options.i18n.done + "</button>").appendTo(n).on("click", this.done.bind(this)),
                n.appendTo(this.footer)
            }
        },
        {
            key: "_clockSetup",
            value: function() {
                this.options.twelveHour && (this.$amBtn = e('<div class="am-btn">AM</div>'), this.$pmBtn = e('<div class="pm-btn">PM</div>'), this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm), this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),
                this._buildHoursView(),
                this._buildMinutesView(),
                this._buildSVGClock()
            }
        },
        {
            key: "_buildSVGClock",
            value: function() {
                var e = this.options.dialRadius,
                t = this.options.tickRadius,
                i = 2 * e,
                o = n._createSVGEl("svg");
                o.setAttribute("class", "timepicker-svg"),
                o.setAttribute("width", i),
                o.setAttribute("height", i);
                var s = n._createSVGEl("g");
                s.setAttribute("transform", "translate(" + e + "," + e + ")");
                var r = n._createSVGEl("circle");
                r.setAttribute("class", "timepicker-canvas-bearing"),
                r.setAttribute("cx", 0),
                r.setAttribute("cy", 0),
                r.setAttribute("r", 4);
                var a = n._createSVGEl("line");
                a.setAttribute("x1", 0),
                a.setAttribute("y1", 0);
                var l = n._createSVGEl("circle");
                l.setAttribute("class", "timepicker-canvas-bg"),
                l.setAttribute("r", t),
                s.appendChild(a),
                s.appendChild(l),
                s.appendChild(r),
                o.appendChild(s),
                this._canvas.appendChild(o),
                this.hand = a,
                this.bg = l,
                this.bearing = r,
                this.g = s
            }
        },
        {
            key: "_buildHoursView",
            value: function() {
                var t = e('<div class="timepicker-tick"></div>');
                if (this.options.twelveHour) for (var n = 1; n < 13; n += 1) {
                    var i = t.clone(),
                    o = n / 6 * Math.PI,
                    s = this.options.outerRadius;
                    i.css({
                        left: this.options.dialRadius + Math.sin(o) * s - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(o) * s - this.options.tickRadius + "px"
                    }),
                    i.html(0 === n ? "00": n),
                    this.hoursView.appendChild(i[0])
                } else for (var r = 0; r < 24; r += 1) {
                    var a = t.clone(),
                    l = r / 6 * Math.PI,
                    c = r > 0 && r < 13 ? this.options.innerRadius: this.options.outerRadius;
                    a.css({
                        left: this.options.dialRadius + Math.sin(l) * c - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(l) * c - this.options.tickRadius + "px"
                    }),
                    a.html(0 === r ? "00": r),
                    this.hoursView.appendChild(a[0])
                }
            }
        },
        {
            key: "_buildMinutesView",
            value: function() {
                for (var t = e('<div class="timepicker-tick"></div>'), i = 0; i < 60; i += 5) {
                    var o = t.clone(),
                    s = i / 30 * Math.PI;
                    o.css({
                        left: this.options.dialRadius + Math.sin(s) * this.options.outerRadius - this.options.tickRadius + "px",
                        top: this.options.dialRadius - Math.cos(s) * this.options.outerRadius - this.options.tickRadius + "px"
                    }),
                    o.html(n._addLeadingZero(i)),
                    this.minutesView.appendChild(o[0])
                }
            }
        },
        {
            key: "_handleAmPmClick",
            value: function(t) {
                var n = e(t.target);
                this.amOrPm = n.hasClass("am-btn") ? "AM": "PM",
                this._updateAmPmView()
            }
        },
        {
            key: "_updateAmPmView",
            value: function() {
                this.options.twelveHour && (this.$amBtn.toggleClass("text-primary", "AM" === this.amOrPm), this.$pmBtn.toggleClass("text-primary", "PM" === this.amOrPm))
            }
        },
        {
            key: "_updateTimeFromInput",
            value: function() {
                var e = ((this.el.value || this.options.defaultTime || "") + "").split(":");
                if (this.options.twelveHour && "undefined" != typeof e[1] && (e[1].toUpperCase().indexOf("AM") > 0 ? this.amOrPm = "AM": this.amOrPm = "PM", e[1] = e[1].replace("AM", "").replace("PM", "")), "now" === e[0]) {
                    var t = new Date( + new Date + this.options.fromNow);
                    e = [t.getHours(), t.getMinutes()],
                    this.options.twelveHour && (this.amOrPm = e[0] >= 12 && e[0] < 24 ? "PM": "AM")
                }
                this.hours = +e[0] || 0,
                this.minutes = +e[1] || 0,
                this.spanHours.innerHTML = this.hours,
                this.spanMinutes.innerHTML = n._addLeadingZero(this.minutes),
                this._updateAmPmView()
            }
        },
        {
            key: "showView",
            value: function(t, n) {
                "minutes" === t && e(this.hoursView).css("visibility");
                var i = "hours" === t,
                o = i ? this.hoursView: this.minutesView,
                s = i ? this.minutesView: this.hoursView;
                this.currentView = t,
                e(this.spanHours).toggleClass("text-primary", i),
                e(this.spanMinutes).toggleClass("text-primary", !i),
                s.classList.add("timepicker-dial-out"),
                e(o).css("visibility", "visible").removeClass("timepicker-dial-out"),
                this.resetClock(n),
                clearTimeout(this.toggleViewTimer),
                this.toggleViewTimer = setTimeout(function() {
                    e(s).css("visibility", "hidden")
                },
                this.options.duration)
            }
        },
        {
            key: "resetClock",
            value: function(t) {
                var n = this.currentView,
                i = this[n],
                o = "hours" === n,
                s = i * (Math.PI / (o ? 6 : 30)),
                r = o && i > 0 && i < 13 ? this.options.innerRadius: this.options.outerRadius,
                a = Math.sin(s) * r,
                l = -Math.cos(s) * r,
                c = this;
                t ? (e(this.canvas).addClass("timepicker-canvas-out"), setTimeout(function() {
                    e(c.canvas).removeClass("timepicker-canvas-out"),
                    c.setHand(a, l)
                },
                t)) : this.setHand(a, l)
            }
        },
        {
            key: "setHand",
            value: function(e, t, i) {
                var o = this,
                s = Math.atan2(e, -t),
                r = "hours" === this.currentView,
                a = Math.PI / (r || i ? 6 : 30),
                l = Math.sqrt(e * e + t * t),
                c = r && l < (this.options.outerRadius + this.options.innerRadius) / 2,
                u = c ? this.options.innerRadius: this.options.outerRadius;
                this.options.twelveHour && (u = this.options.outerRadius),
                s < 0 && (s = 2 * Math.PI + s);
                var d = Math.round(s / a);
                s = d * a,
                this.options.twelveHour ? r ? 0 === d && (d = 12) : (i && (d *= 5), 60 === d && (d = 0)) : r ? (12 === d && (d = 0), d = c ? 0 === d ? 12 : d: 0 === d ? 0 : d + 12) : (i && (d *= 5), 60 === d && (d = 0)),
                this[this.currentView] !== d && this.vibrate && this.options.vibrate && (this.vibrateTimer || (navigator[this.vibrate](10), this.vibrateTimer = setTimeout(function() {
                    o.vibrateTimer = null
                },
                100))),
                this[this.currentView] = d,
                r ? this.spanHours.innerHTML = d: this.spanMinutes.innerHTML = n._addLeadingZero(d);
                var h = Math.sin(s) * (u - this.options.tickRadius),
                p = -Math.cos(s) * (u - this.options.tickRadius),
                f = Math.sin(s) * u,
                _ = -Math.cos(s) * u;
                this.hand.setAttribute("x2", h),
                this.hand.setAttribute("y2", p),
                this.bg.setAttribute("cx", f),
                this.bg.setAttribute("cy", _)
            }
        },
        {
            key: "open",
            value: function() {
                this.isOpen || (this.isOpen = !0, this._updateTimeFromInput(), this.showView("hours"), this.modal.open())
            }
        },
        {
            key: "close",
            value: function() {
                this.isOpen && (this.isOpen = !1, this.modal.close())
            }
        },
        {
            key: "done",
            value: function(e, t) {
                var i = this.el.value,
                o = t ? "": n._addLeadingZero(this.hours) + ":" + n._addLeadingZero(this.minutes);
                this.time = o,
                !t && this.options.twelveHour && (o = o + " " + this.amOrPm),
                this.el.value = o,
                o !== i && this.$el.trigger("change"),
                this.close(),
                this.el.focus()
            }
        },
        {
            key: "clear",
            value: function() {
                this.done(null, !0)
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "_addLeadingZero",
            value: function(e) {
                return (e < 10 ? "0": "") + e
            }
        },
        {
            key: "_createSVGEl",
            value: function(e) {
                var t = "http://www.w3.org/2000/svg";
                return document.createElementNS(t, e)
            }
        },
        {
            key: "_Pos",
            value: function(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? {
                    x: e.targetTouches[0].clientX,
                    y: e.targetTouches[0].clientY
                }: {
                    x: e.clientX,
                    y: e.clientY
                }
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Timepicker
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    n._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join(""),
    M.Timepicker = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "timepicker", "M_Timepicker")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function v(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: v(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {},
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_CharacterCounter = o,
            o.options = e.extend({},
            n.defaults, i),
            o.isInvalid = !1,
            o.isValidLength = !1,
            o._setupCounter(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.CharacterCounter = undefined,
                this._removeCounter()
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleUpdateCounterBound = this.updateCounter.bind(this),
                this.el.addEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.addEventListener("input", this._handleUpdateCounterBound, !0)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("focus", this._handleUpdateCounterBound, !0),
                this.el.removeEventListener("input", this._handleUpdateCounterBound, !0)
            }
        },
        {
            key: "_setupCounter",
            value: function() {
                this.counterEl = document.createElement("span"),
                e(this.counterEl).addClass("character-counter").css({
                    float: "right",
                    "font-size": "12px",
                    height: 1
                }),
                this.$el.parent().append(this.counterEl)
            }
        },
        {
            key: "_removeCounter",
            value: function() {
                e(this.counterEl).remove()
            }
        },
        {
            key: "updateCounter",
            value: function() {
                var t = +this.$el.attr("data-length"),
                n = this.el.value.length;
                this.isValidLength = n <= t;
                var i = n;
                t && (i += "/" + t, this._validateInput()),
                e(this.counterEl).html(i)
            }
        },
        {
            key: "_validateInput",
            value: function() {
                this.isValidLength && this.isInvalid ? (this.isInvalid = !1, this.$el.removeClass("invalid")) : this.isValidLength || this.isInvalid || (this.isInvalid = !0, this.$el.removeClass("valid"), this.$el.addClass("invalid"))
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_CharacterCounter
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    M.CharacterCounter = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "characterCounter", "M_CharacterCounter")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function g(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: g(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        numVisible: 5,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_Carousel = o,
            o.options = e.extend({},
            n.defaults, i),
            o.hasMultipleSlides = o.$el.find(".carousel-item").length > 1,
            o.showIndicators = o.options.indicators && o.hasMultipleSlides,
            o.noWrap = o.options.noWrap || !o.hasMultipleSlides,
            o.pressed = !1,
            o.dragged = !1,
            o.offset = o.target = 0,
            o.images = [],
            o.itemWidth = o.$el.find(".carousel-item").first().innerWidth(),
            o.itemHeight = o.$el.find(".carousel-item").first().innerHeight(),
            o.dim = 2 * o.itemWidth + o.options.padding || 1,
            o._autoScrollBound = o._autoScroll.bind(o),
            o._trackBound = o._track.bind(o),
            o.options.fullWidth && (o.options.dist = 0, o._setCarouselHeight(), o.showIndicators && o.$el.find(".carousel-fixed-item").addClass("with-indicators")),
            o.$indicators = e('<ul class="indicators"></ul>'),
            o.$el.find(".carousel-item").each(function(t, n) {
                if (o.images.push(t), o.showIndicators) {
                    var i = e('<li class="indicator-item"></li>');
                    0 === n && i[0].classList.add("active"),
                    o.$indicators.append(i)
                }
            }),
            o.showIndicators && o.$el.append(o.$indicators),
            o.count = o.images.length,
            o.options.numVisible = Math.min(o.count, o.options.numVisible),
            o.xform = "transform",
            ["webkit", "Moz", "O", "ms"].every(function(e) {
                var t = e + "Transform";
                return "undefined" == typeof document.body.style[t] || (o.xform = t, !1)
            }),
            o._setupEventHandlers(),
            o._scroll(o.offset),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.M_Carousel = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                var e = this;
                this._handleCarouselTapBound = this._handleCarouselTap.bind(this),
                this._handleCarouselDragBound = this._handleCarouselDrag.bind(this),
                this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this),
                this._handleCarouselClickBound = this._handleCarouselClick.bind(this),
                "undefined" != typeof window.ontouchstart && (this.el.addEventListener("touchstart", this._handleCarouselTapBound), this.el.addEventListener("touchmove", this._handleCarouselDragBound), this.el.addEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.addEventListener("mousedown", this._handleCarouselTapBound),
                this.el.addEventListener("mousemove", this._handleCarouselDragBound),
                this.el.addEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.addEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && (this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this), this.$indicators.find(".indicator-item").each(function(t) {
                    t.addEventListener("click", e._handleIndicatorClickBound)
                }));
                var t = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = t.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                var e = this;
                "undefined" != typeof window.ontouchstart && (this.el.removeEventListener("touchstart", this._handleCarouselTapBound), this.el.removeEventListener("touchmove", this._handleCarouselDragBound), this.el.removeEventListener("touchend", this._handleCarouselReleaseBound)),
                this.el.removeEventListener("mousedown", this._handleCarouselTapBound),
                this.el.removeEventListener("mousemove", this._handleCarouselDragBound),
                this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound),
                this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound),
                this.el.removeEventListener("click", this._handleCarouselClickBound),
                this.showIndicators && this.$indicators && this.$indicators.find(".indicator-item").each(function(t) {
                    t.removeEventListener("click", e._handleIndicatorClickBound)
                }),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        },
        {
            key: "_handleCarouselTap",
            value: function(t) {
                "mousedown" === t.type && e(t.target).is("img") && t.preventDefault(),
                this.pressed = !0,
                this.dragged = !1,
                this.verticalDragged = !1,
                this.reference = this._xpos(t),
                this.referenceY = this._ypos(t),
                this.velocity = this.amplitude = 0,
                this.frame = this.offset,
                this.timestamp = Date.now(),
                clearInterval(this.ticker),
                this.ticker = setInterval(this._trackBound, 100)
            }
        },
        {
            key: "_handleCarouselDrag",
            value: function(e) {
                var t = void 0,
                n = void 0,
                i = void 0;
                if (this.pressed) if (t = this._xpos(e), n = this._ypos(e), i = this.reference - t, Math.abs(this.referenceY - n) < 30 && !this.verticalDragged)(i > 2 || i < -2) && (this.dragged = !0, this.reference = t, this._scroll(this.offset + i));
                else {
                    if (this.dragged) return e.preventDefault(),
                    e.stopPropagation(),
                    !1;
                    this.verticalDragged = !0
                }
                if (this.dragged) return e.preventDefault(),
                e.stopPropagation(),
                !1
            }
        },
        {
            key: "_handleCarouselRelease",
            value: function(e) {
                if (this.pressed) return this.pressed = !1,
                clearInterval(this.ticker),
                this.target = this.offset,
                (this.velocity > 10 || this.velocity < -10) && (this.amplitude = .9 * this.velocity, this.target = this.offset + this.amplitude),
                this.target = Math.round(this.target / this.dim) * this.dim,
                this.noWrap && (this.target >= this.dim * (this.count - 1) ? this.target = this.dim * (this.count - 1) : this.target < 0 && (this.target = 0)),
                this.amplitude = this.target - this.offset,
                this.timestamp = Date.now(),
                requestAnimationFrame(this._autoScrollBound),
                this.dragged && (e.preventDefault(), e.stopPropagation()),
                !1
            }
        },
        {
            key: "_handleCarouselClick",
            value: function(t) {
                if (this.dragged) return t.preventDefault(),
                t.stopPropagation(),
                !1;
                if (!this.options.fullWidth) {
                    var n = e(t.target).closest(".carousel-item").index();
                    0 !== this._wrap(this.center) - n && (t.preventDefault(), t.stopPropagation()),
                    this._cycleTo(n)
                }
            }
        },
        {
            key: "_handleIndicatorClick",
            value: function(t) {
                t.stopPropagation();
                var n = e(t.target).closest(".indicator-item");
                n.length && this._cycleTo(n.index())
            }
        },
        {
            key: "_handleResize",
            value: function() {
                this.options.fullWidth ? (this.itemWidth = this.$el.find(".carousel-item").first().innerWidth(), this.imageHeight = this.$el.find(".carousel-item.active").height(), this.dim = 2 * this.itemWidth + this.options.padding, this.offset = 2 * this.center * this.itemWidth, this.target = this.offset, this._setCarouselHeight(!0)) : this._scroll()
            }
        },
        {
            key: "_setCarouselHeight",
            value: function(e) {
                var t = this,
                n = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first(),
                i = n.find("img").first();
                if (i.length) if (i[0].complete) {
                    var o = i.height();
                    if (o > 0) this.$el.css("height", o + "px");
                    else {
                        var s = i[0].naturalWidth,
                        r = i[0].naturalHeight,
                        a = this.$el.width() / s * r;
                        this.$el.css("height", a + "px")
                    }
                } else i.one("load",
                function(e) {
                    t.$el.css("height", e.offsetHeight + "px")
                });
                else if (!e) {
                    var l = n.height();
                    this.$el.css("height", l + "px")
                }
            }
        },
        {
            key: "_xpos",
            value: function(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX: e.clientX
            }
        },
        {
            key: "_ypos",
            value: function(e) {
                return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY: e.clientY
            }
        },
        {
            key: "_wrap",
            value: function(e) {
                return e >= this.count ? e % this.count: e < 0 ? this._wrap(this.count + e % this.count) : e
            }
        },
        {
            key: "_track",
            value: function() {
                var e = void 0,
                t = void 0,
                n = void 0,
                i = void 0;
                t = (e = Date.now()) - this.timestamp,
                this.timestamp = e,
                n = this.offset - this.frame,
                this.frame = this.offset,
                i = 1e3 * n / (1 + t),
                this.velocity = .8 * i + .2 * this.velocity
            }
        },
        {
            key: "_autoScroll",
            value: function() {
                var e = void 0,
                t = void 0;
                this.amplitude && (e = Date.now() - this.timestamp, (t = this.amplitude * Math.exp( - e / this.options.duration)) > 2 || t < -2 ? (this._scroll(this.target - t), requestAnimationFrame(this._autoScrollBound)) : this._scroll(this.target))
            }
        },
        {
            key: "_scroll",
            value: function(t) {
                var n = this;
                this.$el.hasClass("scrolling") || this.el.classList.add("scrolling"),
                null != this.scrollingTimeout && window.clearTimeout(this.scrollingTimeout),
                this.scrollingTimeout = window.setTimeout(function() {
                    n.$el.removeClass("scrolling")
                },
                this.options.duration);
                var i = void 0,
                o = void 0,
                s = void 0,
                r = void 0,
                a = void 0,
                l = void 0,
                c = void 0,
                u = void 0,
                d = void 0,
                h = void 0,
                p = this.center,
                f = 1 / this.options.numVisible;
                if (this.offset = "number" == typeof t ? t: this.offset, this.center = Math.floor((this.offset + this.dim / 2) / this.dim), a = -(r = (s = this.offset - this.center * this.dim) < 0 ? 1 : -1) * s * 2 / this.dim, o = this.count >> 1, this.options.fullWidth ? (c = "translateX(0)", h = 1) : (c = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ", c += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)", h = 1 - f * a), this.showIndicators) {
                    var _ = this.center % this.count,
                    m = this.$indicators.find(".indicator-item.active");
                    m.index() !== _ && (m.removeClass("active"), this.$indicators.find(".indicator-item").eq(_)[0].classList.add("active"))
                }
                if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                    l = this.images[this._wrap(this.center)],
                    e(l).hasClass("active") || (this.$el.find(".carousel-item").removeClass("active"), l.classList.add("active"));
                    var v = c + " translateX(" + -s / 2 + "px) translateX(" + r * this.options.shift * a * i + "px) translateZ(" + this.options.dist * a + "px)";
                    this._updateItemStyle(l, h, 0, v)
                }
                for (i = 1; i <= o; ++i) {
                    if (this.options.fullWidth ? (u = this.options.dist, d = i === o && s < 0 ? 1 - a: 1) : (u = this.options.dist * (2 * i + a * r), d = 1 - f * (2 * i + a * r)), !this.noWrap || this.center + i < this.count) {
                        l = this.images[this._wrap(this.center + i)];
                        var g = c + " translateX(" + (this.options.shift + (this.dim * i - s) / 2) + "px) translateZ(" + u + "px)";
                        this._updateItemStyle(l, d, -i, g)
                    }
                    if (this.options.fullWidth ? (u = this.options.dist, d = i === o && s > 0 ? 1 - a: 1) : (u = this.options.dist * (2 * i - a * r), d = 1 - f * (2 * i - a * r)), !this.noWrap || this.center - i >= 0) {
                        l = this.images[this._wrap(this.center - i)];
                        var y = c + " translateX(" + ( - this.options.shift + ( - this.dim * i - s) / 2) + "px) translateZ(" + u + "px)";
                        this._updateItemStyle(l, d, -i, y)
                    }
                }
                if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                    l = this.images[this._wrap(this.center)];
                    var b = c + " translateX(" + -s / 2 + "px) translateX(" + r * this.options.shift * a + "px) translateZ(" + this.options.dist * a + "px)";
                    this._updateItemStyle(l, h, 0, b)
                }
                var w = this.$el.find(".carousel-item").eq(this._wrap(this.center));
                p !== this.center && "function" == typeof this.options.onCycleTo && this.options.onCycleTo.call(this, w[0], this.dragged),
                "function" == typeof this.oneTimeCallback && (this.oneTimeCallback.call(this, w[0], this.dragged), this.oneTimeCallback = null)
            }
        },
        {
            key: "_updateItemStyle",
            value: function(e, t, n, i) {
                e.style[this.xform] = i,
                e.style.zIndex = n,
                e.style.opacity = t,
                e.style.visibility = "visible"
            }
        },
        {
            key: "_cycleTo",
            value: function(e, t) {
                var n = this.center % this.count - e;
                this.noWrap || (n < 0 ? Math.abs(n + this.count) < Math.abs(n) && (n += this.count) : n > 0 && Math.abs(n - this.count) < n && (n -= this.count)),
                this.target = this.dim * Math.round(this.offset / this.dim),
                n < 0 ? this.target += this.dim * Math.abs(n) : n > 0 && (this.target -= this.dim * n),
                "function" == typeof t && (this.oneTimeCallback = t),
                this.offset !== this.target && (this.amplitude = this.target - this.offset, this.timestamp = Date.now(), requestAnimationFrame(this._autoScrollBound))
            }
        },
        {
            key: "next",
            value: function(e) { (e === undefined || isNaN(e)) && (e = 1);
                var t = this.center + e;
                if (t >= this.count || t < 0) {
                    if (this.noWrap) return;
                    t = this._wrap(t)
                }
                this._cycleTo(t)
            }
        },
        {
            key: "prev",
            value: function(e) { (e === undefined || isNaN(e)) && (e = 1);
                var t = this.center - e;
                if (t >= this.count || t < 0) {
                    if (this.noWrap) return;
                    t = this._wrap(t)
                }
                this._cycleTo(t)
            }
        },
        {
            key: "set",
            value: function(e, t) {
                if ((e === undefined || isNaN(e)) && (e = 0), e > this.count || e < 0) {
                    if (this.noWrap) return;
                    e = this._wrap(e)
                }
                this._cycleTo(e, t)
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Carousel
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    M.Carousel = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "carousel", "M_Carousel")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function y(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: y(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        onOpen: undefined,
        onClose: undefined
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.el.M_TapTarget = o,
            o.options = e.extend({},
            n.defaults, i),
            o.isOpen = !1,
            o.$origin = e("#" + o.$el.attr("data-target")),
            o._setup(),
            o._calculatePositioning(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this.el.TapTarget = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleDocumentClickBound = this._handleDocumentClick.bind(this),
                this._handleTargetClickBound = this._handleTargetClick.bind(this),
                this._handleOriginClickBound = this._handleOriginClick.bind(this),
                this.el.addEventListener("click", this._handleTargetClickBound),
                this.originEl.addEventListener("click", this._handleOriginClickBound);
                var e = M.throttle(this._handleResize, 200);
                this._handleThrottledResizeBound = e.bind(this),
                window.addEventListener("resize", this._handleThrottledResizeBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("click", this._handleTargetClickBound),
                this.originEl.removeEventListener("click", this._handleOriginClickBound),
                window.removeEventListener("resize", this._handleThrottledResizeBound)
            }
        },
        {
            key: "_handleTargetClick",
            value: function() {
                this.open()
            }
        },
        {
            key: "_handleOriginClick",
            value: function() {
                this.close()
            }
        },
        {
            key: "_handleResize",
            value: function() {
                this._calculatePositioning()
            }
        },
        {
            key: "_handleDocumentClick",
            value: function(t) {
                e(t.target).closest(".tap-target-wrapper").length || (this.close(), t.preventDefault(), t.stopPropagation())
            }
        },
        {
            key: "_setup",
            value: function() {
                this.wrapper = this.$el.parent()[0],
                this.waveEl = e(this.wrapper).find(".tap-target-wave")[0],
                this.originEl = e(this.wrapper).find(".tap-target-origin")[0],
                this.contentEl = this.$el.find(".tap-target-content")[0],
                e(this.wrapper).hasClass(".tap-target-wrapper") || (this.wrapper = document.createElement("div"), this.wrapper.classList.add("tap-target-wrapper"), this.$el.before(e(this.wrapper)), this.wrapper.append(this.el)),
                this.contentEl || (this.contentEl = document.createElement("div"), this.contentEl.classList.add("tap-target-content"), this.$el.append(this.contentEl)),
                this.waveEl || (this.waveEl = document.createElement("div"), this.waveEl.classList.add("tap-target-wave"), this.originEl || (this.originEl = this.$origin.clone(!0, !0), this.originEl.addClass("tap-target-origin"), this.originEl.removeAttr("id"), this.originEl.removeAttr("style"), this.originEl = this.originEl[0], this.waveEl.append(this.originEl)), this.wrapper.append(this.waveEl))
            }
        },
        {
            key: "_calculatePositioning",
            value: function() {
                var t = "fixed" === this.$origin.css("position");
                if (!t) for (var n = this.$origin.parents(), i = 0; i < n.length && !(t = "fixed" == e(n[i]).css("position")); i++);
                var o = this.$origin.outerWidth(),
                s = this.$origin.outerHeight(),
                r = t ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top,
                a = t ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left,
                l = window.innerWidth,
                c = window.innerHeight,
                u = l / 2,
                d = c / 2,
                h = a <= u,
                p = a > u,
                f = r <= d,
                _ = r > d,
                m = a >= .25 * l && a <= .75 * l,
                v = this.$el.outerWidth(),
                g = this.$el.outerHeight(),
                y = r + s / 2 - g / 2,
                b = a + o / 2 - v / 2,
                w = t ? "fixed": "absolute",
                k = m ? v: v / 2 + o,
                C = g / 2,
                x = f ? g / 2 : 0,
                E = 0,
                $ = h && !m ? v / 2 - o: 0,
                T = 0,
                S = o,
                O = _ ? "bottom": "top",
                D = 2 * o,
                L = D,
                A = g / 2 - L / 2,
                F = v / 2 - D / 2,
                j = {};
                j.top = f ? y + "px": "",
                j.right = p ? l - b - v + "px": "",
                j.bottom = _ ? c - y - g + "px": "",
                j.left = h ? b + "px": "",
                j.position = w,
                e(this.wrapper).css(j),
                e(this.contentEl).css({
                    width: k + "px",
                    height: C + "px",
                    top: x + "px",
                    right: T + "px",
                    bottom: E + "px",
                    left: $ + "px",
                    padding: S + "px",
                    verticalAlign: O
                }),
                e(this.waveEl).css({
                    top: A + "px",
                    left: F + "px",
                    width: D + "px",
                    height: L + "px"
                })
            }
        },
        {
            key: "open",
            value: function() {
                this.isOpen || ("function" == typeof this.options.onOpen && this.options.onOpen.call(this, this.$origin[0]), this.isOpen = !0, this.wrapper.classList.add("open"), document.body.addEventListener("click", this._handleDocumentClickBound, !0), document.body.addEventListener("touchend", this._handleDocumentClickBound))
            }
        },
        {
            key: "close",
            value: function() {
                this.isOpen && ("function" == typeof this.options.onClose && this.options.onClose.call(this, this.$origin[0]), this.isOpen = !1, this.wrapper.classList.remove("open"), document.body.removeEventListener("click", this._handleDocumentClickBound, !0), document.body.removeEventListener("touchend", this._handleDocumentClickBound))
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_TapTarget
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    M.TapTarget = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "tapTarget", "M_TapTarget")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function b(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: b(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e) {
    "use strict";
    var t = {
        classes: "",
        dropdownOptions: {}
    },
    n = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            var o = _possibleConstructorReturn(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n, t, i));
            return o.$el.hasClass("browser-default") ? _possibleConstructorReturn(o) : (o.el.M_FormSelect = o, o.options = e.extend({},
            n.defaults, i), o.isMultiple = o.$el.prop("multiple"), o.el.tabIndex = -1, o._keysSelected = {},
            o._valueDict = {},
            o._setupDropdown(), o._setupEventHandlers(), o)
        }
        return _inherits(n, Component),
        _createClass(n, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeDropdown(),
                this.el.M_FormSelect = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                var t = this;
                this._handleSelectChangeBound = this._handleSelectChange.bind(this),
                this._handleOptionClickBound = this._handleOptionClick.bind(this),
                this._handleInputClickBound = this._handleInputClick.bind(this),
                e(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
                    e.addEventListener("click", t._handleOptionClickBound)
                }),
                this.el.addEventListener("change", this._handleSelectChangeBound)
                // this.input.addEventListener("click", this._handleInputClickBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                var t = this;
                e(this.dropdownOptions).find("li:not(.optgroup)").each(function(e) {
                    e.removeEventListener("click", t._handleOptionClickBound)
                }),
                this.el.removeEventListener("change", this._handleSelectChangeBound),
                this.input.removeEventListener("click", this._handleInputClickBound)
            }
        },
        {
            key: "_handleSelectChange",
            value: function() {
                this._setValueToInput()
            }
        },
        {
            key: "_handleOptionClick",
            value: function(t) {
                t.preventDefault();
                var n = e(t.target).closest("li")[0],
                i = n.id;
                if (!e(n).hasClass("disabled") && !e(n).hasClass("optgroup") && i.length) {
                    var o = !0;
                    if (this.isMultiple) {
                        var s = e(this.dropdownOptions).find("li.disabled.selected");
                        s.length && (s.removeClass("selected"), s.find('input[type="checkbox"]').prop("checked", !1), this._toggleEntryFromArray(s[0].id)),
                        o = this._toggleEntryFromArray(i)
                    } else e(this.dropdownOptions).find("li").removeClass("selected"),
                    e(n).toggleClass("selected", o);
                    e(this._valueDict[i].el).prop("selected") !== o && (e(this._valueDict[i].el).prop("selected", o), this.$el.trigger("change"))
                }
                t.stopPropagation()
            }
        },
        {
            key: "_handleInputClick",
            value: function() {
                this.dropdown && this.dropdown.isOpen && (this._setValueToInput(), this._setSelectedStates())
            }
        },
        {
            key: "_setupDropdown",
            value: function() {
                var t = this;
                this.wrapper = document.createElement("div"),
                // e(this.wrapper).addClass("select-wrapper " + this.options.classes),
                this.$el.before(e(this.wrapper)),
                this.wrapper.appendChild(this.el),
                this.el.disabled && this.wrapper.classList.add("disabled"),
                this.$selectOptions = this.$el.children("option, optgroup"),
                // this.dropdownOptions = document.createElement("ul"),
                // this.dropdownOptions.id = "select-options-" + M.guid(),
                e(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown": "")),
                this.$selectOptions.length && this.$selectOptions.each(function(n) {
                    if (e(n).is("option")) {
                        var i = void 0;
                        i = t.isMultiple ? t._appendOptionWithIcon(t.$el, n, "multiple") : t._appendOptionWithIcon(t.$el, n),
                        t._addOptionToValueDict(n, i)
                    } else if (e(n).is("optgroup")) {
                        var o = e(n).children("option");
                        e(t.dropdownOptions).append(e('<li class="optgroup"><span>' + n.getAttribute("label") + "</span></li>")[0]),
                        o.each(function(e) {
                            var n = t._appendOptionWithIcon(t.$el, e, "optgroup-option");
                            t._addOptionToValueDict(e, n)
                        })
                    }
                }),
                this.$el.after(this.dropdownOptions),
                // this.input = document.createElement("input"),
                // e(this.input).addClass("select-dropdown dropdown-trigger"),
                // this.input.setAttribute("type", "text"),
                // this.input.setAttribute("readonly", "true"),
                // this.input.setAttribute("data-target", this.dropdownOptions.id),
                this.el.disabled && e(this.input).prop("disabled", "true"),
                this.$el.before(this.input),
                this._setValueToInput();
                // var n = e('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
                if (this.$el.before(n[0]), !this.el.disabled) {
                    var i = e.extend({},
                    this.options.dropdownOptions);
                    i.onOpenEnd = function() {
                        var n = e(t.dropdownOptions).find(".selected").first();
                        if (n.length && (M.keyDown = !0, t.dropdown.focusedIndex = n.index(), t.dropdown._focusFocusedItem(), M.keyDown = !1, t.dropdown.isScrollable)) {
                            var i = n[0].getBoundingClientRect().top - t.dropdownOptions.getBoundingClientRect().top;
                            i -= t.dropdownOptions.clientHeight / 2,
                            t.dropdownOptions.scrollTop = i
                        }
                    },
                    this.isMultiple && (i.closeOnClick = !1),
                    this.dropdown = M.Dropdown.init(this.input, i)
                }
                this._setSelectedStates()
            }
        },
        {
            key: "_addOptionToValueDict",
            value: function(e, t) {
                var n = Object.keys(this._valueDict).length,
                // i = this.dropdownOptions.id + n,
                o = {};
                // t.id = i,
                o.el = e,
                o.optionEl = t
                // this._valueDict[i] = o
            }
        },
        {
            key: "_removeDropdown",
            value: function() {
                e(this.wrapper).find(".caret").remove(),
                e(this.input).remove(),
                e(this.dropdownOptions).remove(),
                e(this.wrapper).before(this.$el),
                e(this.wrapper).remove()
            }
        },
        {
            key: "_appendOptionWithIcon",
            value: function(t, n, i) {
                var o = n.disabled ? "disabled ": "",
                s = "optgroup-option" === i ? "optgroup-option ": "",
                r = this.isMultiple ? '<label><input type="checkbox"' + o + '"/><span>' + n.innerHTML + "</span></label>": n.innerHTML,
                a = e("<li></li>"),
                l = e("<span></span>");
                l.html(r),
                a.addClass(o + " " + s),
                a.append(l);
                var c = n.getAttribute("data-icon");
                if (c) {
                    var u = e('<img alt="" src="' + c + '">');
                    a.prepend(u)
                }
                return e(this.dropdownOptions).append(a[0]),
                a[0]
            }
        },
        {
            key: "_toggleEntryFromArray",
            value: function(t) {
                var n = !this._keysSelected.hasOwnProperty(t),
                i = e(this._valueDict[t].optionEl);
                return n ? this._keysSelected[t] = !0 : delete this._keysSelected[t],
                i.toggleClass("selected", n),
                i.find('input[type="checkbox"]').prop("checked", n),
                i.prop("selected", n),
                n
            }
        },
        {
            key: "_setValueToInput",
            value: function() {
                var t = [];
                if (this.$el.find("option").each(function(n) {
                    if (e(n).prop("selected")) {
                        var i = e(n).text();
                        t.push(i)
                    }
                }), !t.length) {
                    var n = this.$el.find("option:disabled").eq(0);
                    n.length && "" === n[0].value && t.push(n.text())
                }
                // this.input.value = t.join(", ")
            }
        },
        {
            key: "_setSelectedStates",
            value: function() {
                for (var t in this._keysSelected = {},
                this._valueDict) {
                    var n = this._valueDict[t],
                    i = e(n.el).prop("selected");
                    e(n.optionEl).find('input[type="checkbox"]').prop("checked", i),
                    i ? (this._activateOption(e(this.dropdownOptions), e(n.optionEl)), this._keysSelected[t] = !0) : e(n.optionEl).removeClass("selected")
                }
            }
        },
        {
            key: "_activateOption",
            value: function(t, n) {
                n && (this.isMultiple || t.find("li.selected").removeClass("selected"), e(n).addClass("selected"))
            }
        },
        {
            key: "getSelectedValues",
            value: function() {
                var e = [];
                for (var t in this._keysSelected) e.push(this._valueDict[t].el.value);
                return e
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(n.__proto__ || Object.getPrototypeOf(n), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_FormSelect
            }
        },
        {
            key: "defaults",
            get: function() {
                return t
            }
        }]),
        n
    } ();
    M.FormSelect = n,
    M.jQueryLoaded && M.initializeJqueryWrapper(n, "formSelect", "M_FormSelect")
} (cash);
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n),
        i && e(t, i),
        t
    }
} (),
_get = function w(e, t, n) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === undefined) {
        var o = Object.getPrototypeOf(e);
        return null === o ? undefined: w(o, t, n)
    }
    if ("value" in i) return i.value;
    var s = i.get;
    return s === undefined ? undefined: s.call(n)
}; !
function(e, t) {
    "use strict";
    var n = {},
    i = function() {
        function i(t, n) {
            _classCallCheck(this, i);
            var o = _possibleConstructorReturn(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, i, t, n));
            return o.el.M_Range = o,
            o.options = e.extend({},
            i.defaults, n),
            o._mousedown = !1,
            o._setupThumb(),
            o._setupEventHandlers(),
            o
        }
        return _inherits(i, Component),
        _createClass(i, [{
            key: "destroy",
            value: function() {
                this._removeEventHandlers(),
                this._removeThumb(),
                this.el.M_Range = undefined
            }
        },
        {
            key: "_setupEventHandlers",
            value: function() {
                this._handleRangeChangeBound = this._handleRangeChange.bind(this),
                this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this),
                this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this),
                this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this),
                this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this),
                this.el.addEventListener("change", this._handleRangeChangeBound),
                this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        },
        {
            key: "_removeEventHandlers",
            value: function() {
                this.el.removeEventListener("change", this._handleRangeChangeBound),
                this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound),
                this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound),
                this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound),
                this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound),
                this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound)
            }
        },
        {
            key: "_handleRangeChange",
            value: function() {
                e(this.value).html(this.$el.val()),
                e(this.thumb).hasClass("active") || this._showRangeBubble();
                var t = this._calcRangeOffset();
                e(this.thumb).addClass("active").css("left", t + "px")
            }
        },
        {
            key: "_handleRangeMousedownTouchstart",
            value: function(t) {
                if (e(this.value).html(this.$el.val()), this._mousedown = !0, this.$el.addClass("active"), e(this.thumb).hasClass("active") || this._showRangeBubble(), "input" !== t.type) {
                    var n = this._calcRangeOffset();
                    e(this.thumb).addClass("active").css("left", n + "px")
                }
            }
        },
        {
            key: "_handleRangeInputMousemoveTouchmove",
            value: function() {
                if (this._mousedown) {
                    e(this.thumb).hasClass("active") || this._showRangeBubble();
                    var t = this._calcRangeOffset();
                    e(this.thumb).addClass("active").css("left", t + "px"),
                    e(this.value).html(this.$el.val())
                }
            }
        },
        {
            key: "_handleRangeMouseupTouchend",
            value: function() {
                this._mousedown = !1,
                this.$el.removeClass("active")
            }
        },
        {
            key: "_handleRangeBlurMouseoutTouchleave",
            value: function() {
                if (!this._mousedown) {
                    var n = 7 + parseInt(this.$el.css("padding-left")) + "px";
                    e(this.thumb).hasClass("active") && (t.remove(this.thumb), t({
                        targets: this.thumb,
                        height: 0,
                        width: 0,
                        top: 10,
                        easing: "easeOutQuad",
                        marginLeft: n,
                        duration: 100
                    })),
                    e(this.thumb).removeClass("active")
                }
            }
        },
        {
            key: "_setupThumb",
            value: function() {
                this.thumb = document.createElement("span"),
                this.value = document.createElement("span"),
                e(this.thumb).addClass("thumb"),
                e(this.value).addClass("value"),
                e(this.thumb).append(this.value),
                this.$el.after(this.thumb)
            }
        },
        {
            key: "_removeThumb",
            value: function() {
                e(this.thumb).remove()
            }
        },
        {
            key: "_showRangeBubble",
            value: function() {
                var n = -7 + parseInt(e(this.thumb).parent().css("padding-left")) + "px";
                t.remove(this.thumb),
                t({
                    targets: this.thumb,
                    height: 30,
                    width: 30,
                    top: -30,
                    marginLeft: n,
                    duration: 300,
                    easing: "easeOutQuint"
                })
            }
        },
        {
            key: "_calcRangeOffset",
            value: function() {
                var e = this.$el.width() - 15,
                t = parseFloat(this.$el.attr("max")) || 100,
                n = parseFloat(this.$el.attr("min")) || 0;
                return (parseFloat(this.$el.val()) - n) / (t - n) * e
            }
        }], [{
            key: "init",
            value: function(e, t) {
                return _get(i.__proto__ || Object.getPrototypeOf(i), "init", this).call(this, this, e, t)
            }
        },
        {
            key: "getInstance",
            value: function(e) {
                return (e.jquery ? e[0] : e).M_Range
            }
        },
        {
            key: "defaults",
            get: function() {
                return n
            }
        }]),
        i
    } ();
    M.Range = i,
    M.jQueryLoaded && M.initializeJqueryWrapper(i, "range", "M_Range"),
    i.init(e("input[type=range]"))
} (cash, M.anime),
function() { !
    function() {
        "use strict";
        var Faye = {
            VERSION: "1.1.2",
            BAYEUX_VERSION: "1.0",
            ID_LENGTH: 160,
            JSONP_CALLBACK: "jsonpcallback",
            CONNECTION_TYPES: ["long-polling", "cross-origin-long-polling", "callback-polling", "websocket", "eventsource", "in-process"],
            MANDATORY_CONNECTION_TYPES: ["long-polling", "callback-polling", "in-process"],
            ENV: "undefined" != typeof window ? window: global,
            extend: function(e, t, n) {
                if (!t) return e;
                for (var i in t) t.hasOwnProperty(i) && (e.hasOwnProperty(i) && !1 === n || e[i] !== t[i] && (e[i] = t[i]));
                return e
            },
            random: function(e) {
                e = e || this.ID_LENGTH;
                for (var t = Math.ceil(e * Math.log(2) / Math.log(36)), n = csprng(e, 36); n.length < t;) n = "0" + n;
                return n
            },
            validateOptions: function(e, t) {
                for (var n in e) if (this.indexOf(t, n) < 0) throw Error("Unrecognized option: " + n)
            },
            clientIdFromMessages: function(e) {
                var t = this.filter([].concat(e),
                function(e) {
                    return "/meta/connect" === e.channel
                });
                return t[0] && t[0].clientId
            },
            copyObject: function(e) {
                var t, n, i;
                if (e instanceof Array) {
                    for (t = [], n = e.length; n--;) t[n] = Faye.copyObject(e[n]);
                    return t
                }
                if ("object" == typeof e) {
                    for (i in t = null === e ? null: {},
                    e) t[i] = Faye.copyObject(e[i]);
                    return t
                }
                return e
            },
            commonElement: function(e, t) {
                for (var n = 0,
                i = e.length; i > n; n++) if ( - 1 !== this.indexOf(t, e[n])) return e[n];
                return null
            },
            indexOf: function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = 0,
                i = e.length; i > n; n++) if (e[n] === t) return n;
                return - 1
            },
            map: function(e, t, n) {
                if (e.map) return e.map(t, n);
                var i = [];
                if (e instanceof Array) for (var o = 0,
                s = e.length; s > o; o++) i.push(t.call(n || null, e[o], o));
                else for (var r in e) e.hasOwnProperty(r) && i.push(t.call(n || null, r, e[r]));
                return i
            },
            filter: function(e, t, n) {
                if (e.filter) return e.filter(t, n);
                for (var i = [], o = 0, s = e.length; s > o; o++) t.call(n || null, e[o], o) && i.push(e[o]);
                return i
            },
            asyncEach: function(e, t, n, i) {
                var o = e.length,
                s = -1,
                r = 0,
                a = !1,
                l = function() {
                    return r -= 1,
                    (s += 1) === o ? n && n.call(i) : void t(e[s], u)
                },
                c = function() {
                    if (!a) {
                        for (a = !0; r > 0;) l();
                        a = !1
                    }
                },
                u = function() {
                    r += 1,
                    c()
                };
                u()
            },
            toJSON: function(e) {
                return this.stringify ? this.stringify(e,
                function(e, t) {
                    return this[e] instanceof Array ? this[e] : t
                }) : JSON.stringify(e)
            }
        };
        "undefined" != typeof module ? module.exports = Faye: "undefined" != typeof window && (window.Faye = Faye),
        Faye.Class = function(e, t) {
            "function" != typeof e && (t = e, e = Object);
            var n = function() {
                return this.initialize && this.initialize.apply(this, arguments) || this
            },
            i = function() {};
            return i.prototype = e.prototype,
            n.prototype = new i,
            Faye.extend(n.prototype, t),
            n
        },
        function() {
            function e(e, t) {
                if (e.indexOf) return e.indexOf(t);
                for (var n = 0; n < e.length; n++) if (t === e[n]) return n;
                return - 1
            }
            var t = Faye.EventEmitter = function() {},
            n = "function" == typeof Array.isArray ? Array.isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            t.prototype.emit = function(e) {
                if ("error" === e && (!this._events || !this._events.error || n(this._events.error) && !this._events.error.length)) throw arguments[1] instanceof Error ? arguments[1] : Error("Uncaught, unspecified 'error' event.");
                if (!this._events) return ! 1;
                var t = this._events[e];
                if (!t) return ! 1;
                if ("function" == typeof t) {
                    switch (arguments.length) {
                    case 1:
                        t.call(this);
                        break;
                    case 2:
                        t.call(this, arguments[1]);
                        break;
                    case 3:
                        t.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        var i = Array.prototype.slice.call(arguments, 1);
                        t.apply(this, i)
                    }
                    return ! 0
                }
                if (n(t)) {
                    i = Array.prototype.slice.call(arguments, 1);
                    for (var o = t.slice(), s = 0, r = o.length; r > s; s++) o[s].apply(this, i);
                    return ! 0
                }
                return ! 1
            },
            t.prototype.addListener = function(e, t) {
                if ("function" != typeof t) throw Error("addListener only takes instances of Function");
                return this._events || (this._events = {}),
                this.emit("newListener", e, t),
                this._events[e] ? n(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
                this
            },
            t.prototype.on = t.prototype.addListener,
            t.prototype.once = function(e, t) {
                var n = this;
                return n.on(e,
                function i() {
                    n.removeListener(e, i),
                    t.apply(this, arguments)
                }),
                this
            },
            t.prototype.removeListener = function(t, i) {
                if ("function" != typeof i) throw Error("removeListener only takes instances of Function");
                if (!this._events || !this._events[t]) return this;
                var o = this._events[t];
                if (n(o)) {
                    var s = e(o, i);
                    if (0 > s) return this;
                    o.splice(s, 1),
                    0 == o.length && delete this._events[t]
                } else this._events[t] === i && delete this._events[t];
                return this
            },
            t.prototype.removeAllListeners = function(e) {
                return 0 === arguments.length ? (this._events = {},
                this) : (e && this._events && this._events[e] && (this._events[e] = null), this)
            },
            t.prototype.listeners = function(e) {
                return this._events || (this._events = {}),
                this._events[e] || (this._events[e] = []),
                n(this._events[e]) || (this._events[e] = [this._events[e]]),
                this._events[e]
            }
        } (),
        Faye.Namespace = Faye.Class({
            initialize: function() {
                this._used = {}
            },
            exists: function(e) {
                return this._used.hasOwnProperty(e)
            },
            generate: function() {
                for (var e = Faye.random(); this._used.hasOwnProperty(e);) e = Faye.random();
                return this._used[e] = e
            },
            release: function(e) {
                delete this._used[e]
            }
        }),
        function() {
            var e, t = setTimeout;
            e = "function" == typeof setImmediate ?
            function(e) {
                setImmediate(e)
            }: "object" == typeof process && process.nextTick ?
            function(e) {
                process.nextTick(e)
            }: function(e) {
                t(e, 0)
            };
            var n = 0,
            i = 1,
            o = 2,
            s = function(e) {
                return e
            },
            r = function(e) {
                throw e
            },
            a = function(e) {
                if (this._state = n, this._onFulfilled = [], this._onRejected = [], "function" == typeof e) {
                    var t = this;
                    e(function(e) {
                        h(t, e)
                    },
                    function(e) {
                        f(t, e)
                    })
                }
            };
            a.prototype.then = function(e, t) {
                var n = new a;
                return l(this, e, n),
                c(this, t, n),
                n
            };
            var l = function(e, t, o) {
                "function" != typeof t && (t = s);
                var r = function(e) {
                    u(t, e, o)
                };
                e._state === n ? e._onFulfilled.push(r) : e._state === i && r(e._value)
            },
            c = function(e, t, i) {
                "function" != typeof t && (t = r);
                var s = function(e) {
                    u(t, e, i)
                };
                e._state === n ? e._onRejected.push(s) : e._state === o && s(e._reason)
            },
            u = function(t, n, i) {
                e(function() {
                    d(t, n, i)
                })
            },
            d = function(e, t, n) {
                var i;
                try {
                    i = e(t)
                } catch(o) {
                    return f(n, o)
                }
                i === n ? f(n, new TypeError("Recursive promise chain detected")) : h(n, i)
            },
            h = a.fulfill = a.resolve = function(e, t) {
                var n, i, o = !1;
                try {
                    if (n = typeof t, "function" != typeof(i = null !== t && ("function" === n || "object" === n) && t.then)) return p(e, t);
                    i.call(t,
                    function(t) {
                        o ^ (o = !0) && h(e, t)
                    },
                    function(t) {
                        o ^ (o = !0) && f(e, t)
                    })
                } catch(s) {
                    if (! (o ^ (o = !0))) return;
                    f(e, s)
                }
            },
            p = function(e, t) {
                if (e._state === n) {
                    e._state = i,
                    e._value = t,
                    e._onRejected = [];
                    for (var o, s = e._onFulfilled; o = s.shift();) o(t)
                }
            },
            f = a.reject = function(e, t) {
                if (e._state === n) {
                    e._state = o,
                    e._reason = t,
                    e._onFulfilled = [];
                    for (var i, s = e._onRejected; i = s.shift();) i(t)
                }
            };
            a.all = function(e) {
                return new a(function(t, n) {
                    var i, o = [],
                    s = e.length;
                    if (0 === s) return t(o);
                    for (i = 0; s > i; i++) !
                    function(e, i) {
                        a.fulfilled(e).then(function(e) {
                            o[i] = e,
                            0 == --s && t(o)
                        },
                        n)
                    } (e[i], i)
                })
            },
            a.defer = e,
            a.deferred = a.pending = function() {
                var e = {};
                return e.promise = new a(function(t, n) {
                    e.fulfill = e.resolve = t,
                    e.reject = n
                }),
                e
            },
            a.fulfilled = a.resolved = function(e) {
                return new a(function(t) {
                    t(e)
                })
            },
            a.rejected = function(e) {
                return new a(function(t, n) {
                    n(e)
                })
            },
            void 0 === Faye ? module.exports = a: Faye.Promise = a
        } (),
        Faye.Set = Faye.Class({
            initialize: function() {
                this._index = {}
            },
            add: function(e) {
                var t = void 0 !== e.id ? e.id: e;
                return ! this._index.hasOwnProperty(t) && (this._index[t] = e, !0)
            },
            forEach: function(e, t) {
                for (var n in this._index) this._index.hasOwnProperty(n) && e.call(t, this._index[n])
            },
            isEmpty: function() {
                for (var e in this._index) if (this._index.hasOwnProperty(e)) return ! 1;
                return ! 0
            },
            member: function(e) {
                for (var t in this._index) if (this._index[t] === e) return ! 0;
                return ! 1
            },
            remove: function(e) {
                var t = void 0 !== e.id ? e.id: e,
                n = this._index[t];
                return delete this._index[t],
                n
            },
            toArray: function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }),
                e
            }
        }),
        Faye.URI = {
            isURI: function(e) {
                return e && e.protocol && e.host && e.path
            },
            isSameOrigin: function(e) {
                var t = Faye.ENV.location;
                return e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port
            },
            parse: function(e) {
                if ("string" != typeof e) return e;
                var t, n, i, o, s, r, a = {},
                l = function(t, n) {
                    e = e.replace(n,
                    function(e) {
                        return a[t] = e,
                        ""
                    }),
                    a[t] = a[t] || ""
                };
                for (l("protocol", /^[a-z]+\:/i), l("host", /^\/\/[^\/\?#]+/), /^\//.test(e) || a.host || (e = Faye.ENV.location.pathname.replace(/[^\/]*$/, "") + e), l("pathname", /^[^\?#]*/), l("search", /^\?[^#]*/), l("hash", /^#.*/), a.protocol = a.protocol || Faye.ENV.location.protocol, a.host ? (a.host = a.host.substr(2), t = a.host.split(":"), a.hostname = t[0], a.port = t[1] || "") : (a.host = Faye.ENV.location.host, a.hostname = Faye.ENV.location.hostname, a.port = Faye.ENV.location.port), a.pathname = a.pathname || "/", a.path = a.pathname + a.search, r = {},
                o = 0, s = (i = (n = a.search.replace(/^\?/, "")) ? n.split("&") : []).length; s > o; o++) t = i[o].split("="),
                r[decodeURIComponent(t[0] || "")] = decodeURIComponent(t[1] || "");
                return a.query = r,
                a.href = this.stringify(a),
                a
            },
            stringify: function(e) {
                var t = e.protocol + "//" + e.hostname;
                return e.port && (t += ":" + e.port),
                t + (e.pathname + this.queryString(e.query) + (e.hash || ""))
            },
            queryString: function(e) {
                var t = [];
                for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return 0 === t.length ? "": "?" + t.join("&")
            }
        },
        Faye.Error = Faye.Class({
            initialize: function(e, t, n) {
                this.code = e,
                this.params = Array.prototype.slice.call(t),
                this.message = n
            },
            toString: function() {
                return this.code + ":" + this.params.join(",") + ":" + this.message
            }
        }),
        Faye.Error.parse = function(e) {
            if (e = e || "", !Faye.Grammar.ERROR.test(e)) return new this(null, [], e);
            var t = e.split(":");
            return new this(parseInt(t[0]), t[1].split(","), e = t[2])
        },
        Faye.Error.versionMismatch = function() {
            return "" + new this(300, arguments, "Version mismatch")
        },
        Faye.Error.conntypeMismatch = function() {
            return "" + new this(301, arguments, "Connection types not supported")
        },
        Faye.Error.extMismatch = function() {
            return "" + new this(302, arguments, "Extension mismatch")
        },
        Faye.Error.badRequest = function() {
            return "" + new this(400, arguments, "Bad request")
        },
        Faye.Error.clientUnknown = function() {
            return "" + new this(401, arguments, "Unknown client")
        },
        Faye.Error.parameterMissing = function() {
            return "" + new this(402, arguments, "Missing required parameter")
        },
        Faye.Error.channelForbidden = function() {
            return "" + new this(403, arguments, "Forbidden channel")
        },
        Faye.Error.channelUnknown = function() {
            return "" + new this(404, arguments, "Unknown channel")
        },
        Faye.Error.channelInvalid = function() {
            return "" + new this(405, arguments, "Invalid channel")
        },
        Faye.Error.extUnknown = function() {
            return "" + new this(406, arguments, "Unknown extension")
        },
        Faye.Error.publishFailed = function() {
            return "" + new this(407, arguments, "Failed to publish")
        },
        Faye.Error.serverError = function() {
            return "" + new this(500, arguments, "Internal server error")
        },
        Faye.Deferrable = {
            then: function(e, t) {
                var n = this;
                return this._promise || (this._promise = new Faye.Promise(function(e, t) {
                    n._fulfill = e,
                    n._reject = t
                })),
                0 === arguments.length ? this._promise: this._promise.then(e, t)
            },
            callback: function(e, t) {
                return this.then(function(n) {
                    e.call(t, n)
                })
            },
            errback: function(e, t) {
                return this.then(null,
                function(n) {
                    e.call(t, n)
                })
            },
            timeout: function(e, t) {
                this.then();
                var n = this;
                this._timer = Faye.ENV.setTimeout(function() {
                    n._reject(t)
                },
                1e3 * e)
            },
            setDeferredStatus: function(e, t) {
                this._timer && Faye.ENV.clearTimeout(this._timer),
                this.then(),
                "succeeded" === e ? this._fulfill(t) : "failed" === e ? this._reject(t) : delete this._promise
            }
        },
        Faye.Publisher = {
            countListeners: function(e) {
                return this.listeners(e).length
            },
            bind: function(e, t, n) {
                var i = Array.prototype.slice,
                o = function() {
                    t.apply(n, i.call(arguments))
                };
                return this._listeners = this._listeners || [],
                this._listeners.push([e, t, n, o]),
                this.on(e, o)
            },
            unbind: function(e, t, n) {
                this._listeners = this._listeners || [];
                for (var i, o = this._listeners.length; o--;)(i = this._listeners[o])[0] === e && (!t || i[1] === t && i[2] === n) && (this._listeners.splice(o, 1), this.removeListener(e, i[3]))
            }
        },
        Faye.extend(Faye.Publisher, Faye.EventEmitter.prototype),
        Faye.Publisher.trigger = Faye.Publisher.emit,
        Faye.Timeouts = {
            addTimeout: function(e, t, n, i) {
                if (this._timeouts = this._timeouts || {},
                !this._timeouts.hasOwnProperty(e)) {
                    var o = this;
                    this._timeouts[e] = Faye.ENV.setTimeout(function() {
                        delete o._timeouts[e],
                        n.call(i)
                    },
                    1e3 * t)
                }
            },
            removeTimeout: function(e) {
                this._timeouts = this._timeouts || {};
                var t = this._timeouts[e];
                t && (Faye.ENV.clearTimeout(t), delete this._timeouts[e])
            },
            removeAllTimeouts: function() {
                for (var e in this._timeouts = this._timeouts || {},
                this._timeouts) this.removeTimeout(e)
            }
        },
        Faye.Logging = {
            LOG_LEVELS: {
                fatal: 4,
                error: 3,
                warn: 2,
                info: 1,
                debug: 0
            },
            writeLog: function(e, t) {
                if (Faye.logger) {
                    var n = Array.prototype.slice.apply(e),
                    i = "[Faye",
                    o = this.className,
                    s = n.shift().replace(/\?/g,
                    function() {
                        try {
                            return Faye.toJSON(n.shift())
                        } catch(e) {
                            return "[Object]"
                        }
                    });
                    for (var r in Faye) o || "function" == typeof Faye[r] && this instanceof Faye[r] && (o = r);
                    o && (i += "." + o),
                    i += "] ",
                    "function" == typeof Faye.logger[t] ? Faye.logger[t](i + s) : "function" == typeof Faye.logger && Faye.logger(i + s)
                }
            }
        },
        function() {
            for (var e in Faye.Logging.LOG_LEVELS) !
            function(e) {
                Faye.Logging[e] = function() {
                    this.writeLog(arguments, e)
                }
            } (e)
        } (),
        Faye.Grammar = {
            CHANNEL_NAME: /^\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+(\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+)*$/,
            CHANNEL_PATTERN: /^(\/(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)))+)*\/\*{1,2}$/,
            ERROR: /^([0-9][0-9][0-9]:(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*(,(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*)*:(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*|[0-9][0-9][0-9]::(((([a-z]|[A-Z])|[0-9])|(\-|\_|\!|\~|\(|\)|\$|\@)| |\/|\*|\.))*)$/,
            VERSION: /^([0-9])+(\.(([a-z]|[A-Z])|[0-9])(((([a-z]|[A-Z])|[0-9])|\-|\_))*)*$/
        },
        Faye.Extensible = {
            addExtension: function(e) {
                this._extensions = this._extensions || [],
                this._extensions.push(e),
                e.added && e.added(this)
            },
            removeExtension: function(e) {
                if (this._extensions) for (var t = this._extensions.length; t--;) this._extensions[t] === e && (this._extensions.splice(t, 1), e.removed && e.removed(this))
            },
            pipeThroughExtensions: function(e, t, n, i, o) {
                if (this.debug("Passing through ? extensions: ?", e, t), !this._extensions) return i.call(o, t);
                var s = this._extensions.slice(),
                r = function(t) {
                    if (!t) return i.call(o, t);
                    var a = s.shift();
                    if (!a) return i.call(o, t);
                    var l = a[e];
                    return l ? void(l.length >= 3 ? a[e](t, n, r) : a[e](t, r)) : r(t)
                };
                r(t)
            }
        },
        Faye.extend(Faye.Extensible, Faye.Logging),
        Faye.Channel = Faye.Class({
            initialize: function(e) {
                this.id = this.name = e
            },
            push: function(e) {
                this.trigger("message", e)
            },
            isUnused: function() {
                return 0 === this.countListeners("message")
            }
        }),
        Faye.extend(Faye.Channel.prototype, Faye.Publisher),
        Faye.extend(Faye.Channel, {
            HANDSHAKE: "/meta/handshake",
            CONNECT: "/meta/connect",
            SUBSCRIBE: "/meta/subscribe",
            UNSUBSCRIBE: "/meta/unsubscribe",
            DISCONNECT: "/meta/disconnect",
            META: "meta",
            SERVICE: "service",
            expand: function(e) {
                var t = this.parse(e),
                n = ["/**", e],
                i = t.slice();
                i[i.length - 1] = "*",
                n.push(this.unparse(i));
                for (var o = 1,
                s = t.length; s > o; o++)(i = t.slice(0, o)).push("**"),
                n.push(this.unparse(i));
                return n
            },
            isValid: function(e) {
                return Faye.Grammar.CHANNEL_NAME.test(e) || Faye.Grammar.CHANNEL_PATTERN.test(e)
            },
            parse: function(e) {
                return this.isValid(e) ? e.split("/").slice(1) : null
            },
            unparse: function(e) {
                return "/" + e.join("/")
            },
            isMeta: function(e) {
                var t = this.parse(e);
                return t ? t[0] === this.META: null
            },
            isService: function(e) {
                var t = this.parse(e);
                return t ? t[0] === this.SERVICE: null
            },
            isSubscribable: function(e) {
                return this.isValid(e) ? !this.isMeta(e) && !this.isService(e) : null
            },
            Set: Faye.Class({
                initialize: function() {
                    this._channels = {}
                },
                getKeys: function() {
                    var e = [];
                    for (var t in this._channels) e.push(t);
                    return e
                },
                remove: function(e) {
                    delete this._channels[e]
                },
                hasSubscription: function(e) {
                    return this._channels.hasOwnProperty(e)
                },
                subscribe: function(e, t, n) {
                    for (var i, o = 0,
                    s = e.length; s > o; o++) {
                        i = e[o];
                        var r = this._channels[i] = this._channels[i] || new Faye.Channel(i);
                        t && r.bind("message", t, n)
                    }
                },
                unsubscribe: function(e, t, n) {
                    var i = this._channels[e];
                    return !! i && (i.unbind("message", t, n), !!i.isUnused() && (this.remove(e), !0))
                },
                distributeMessage: function(e) {
                    for (var t = Faye.Channel.expand(e.channel), n = 0, i = t.length; i > n; n++) {
                        var o = this._channels[t[n]];
                        o && o.trigger("message", e.data)
                    }
                }
            })
        }),
        Faye.Publication = Faye.Class(Faye.Deferrable),
        Faye.Subscription = Faye.Class({
            initialize: function(e, t, n, i) {
                this._client = e,
                this._channels = t,
                this._callback = n,
                this._context = i,
                this._cancelled = !1
            },
            cancel: function() {
                this._cancelled || (this._client.unsubscribe(this._channels, this._callback, this._context), this._cancelled = !0)
            },
            unsubscribe: function() {
                this.cancel()
            }
        }),
        Faye.extend(Faye.Subscription.prototype, Faye.Deferrable),
        Faye.Client = Faye.Class({
            UNCONNECTED: 1,
            CONNECTING: 2,
            CONNECTED: 3,
            DISCONNECTED: 4,
            HANDSHAKE: "handshake",
            RETRY: "retry",
            NONE: "none",
            CONNECTION_TIMEOUT: 60,
            DEFAULT_ENDPOINT: "/bayeux",
            INTERVAL: 0,
            initialize: function(e, t) {
                this.info("New client created for ?", e),
                t = t || {},
                Faye.validateOptions(t, ["interval", "timeout", "endpoints", "proxy", "retry", "scheduler", "websocketExtensions", "tls", "ca"]),
                this._endpoint = e || this.DEFAULT_ENDPOINT,
                this._channels = new Faye.Channel.Set,
                this._dispatcher = new Faye.Dispatcher(this, this._endpoint, t),
                this._messageId = 0,
                this._state = this.UNCONNECTED,
                this._responseCallbacks = {},
                this._advice = {
                    reconnect: this.RETRY,
                    interval: 1e3 * (t.interval || this.INTERVAL),
                    timeout: 1e3 * (t.timeout || this.CONNECTION_TIMEOUT)
                },
                this._dispatcher.timeout = this._advice.timeout / 1e3,
                this._dispatcher.bind("message", this._receiveMessage, this),
                Faye.Event && void 0 !== Faye.ENV.onbeforeunload && Faye.Event.on(Faye.ENV, "beforeunload",
                function() {
                    Faye.indexOf(this._dispatcher._disabled, "autodisconnect") < 0 && this.disconnect()
                },
                this)
            },
            addWebsocketExtension: function(e) {
                return this._dispatcher.addWebsocketExtension(e)
            },
            disable: function(e) {
                return this._dispatcher.disable(e)
            },
            setHeader: function(e, t) {
                return this._dispatcher.setHeader(e, t)
            },
            handshake: function(e, t) {
                if (this._advice.reconnect !== this.NONE && this._state === this.UNCONNECTED) {
                    this._state = this.CONNECTING;
                    var n = this;
                    this.info("Initiating handshake with ?", Faye.URI.stringify(this._endpoint)),
                    this._dispatcher.selectTransport(Faye.MANDATORY_CONNECTION_TYPES),
                    this._sendMessage({
                        channel: Faye.Channel.HANDSHAKE,
                        version: Faye.BAYEUX_VERSION,
                        supportedConnectionTypes: this._dispatcher.getConnectionTypes()
                    },
                    {},
                    function(i) {
                        i.successful ? (this._state = this.CONNECTED, this._dispatcher.clientId = i.clientId, this._dispatcher.selectTransport(i.supportedConnectionTypes), this.info("Handshake successful: ?", this._dispatcher.clientId), this.subscribe(this._channels.getKeys(), !0), e && Faye.Promise.defer(function() {
                            e.call(t)
                        })) : (this.info("Handshake unsuccessful"), Faye.ENV.setTimeout(function() {
                            n.handshake(e, t)
                        },
                        1e3 * this._dispatcher.retry), this._state = this.UNCONNECTED)
                    },
                    this)
                }
            },
            connect: function(e, t) {
                if (this._advice.reconnect !== this.NONE && this._state !== this.DISCONNECTED) {
                    if (this._state === this.UNCONNECTED) return this.handshake(function() {
                        this.connect(e, t)
                    },
                    this);
                    this.callback(e, t),
                    this._state === this.CONNECTED && (this.info("Calling deferred actions for ?", this._dispatcher.clientId), this.setDeferredStatus("succeeded"), this.setDeferredStatus("unknown"), this._connectRequest || (this._connectRequest = !0, this.info("Initiating connection for ?", this._dispatcher.clientId), this._sendMessage({
                        channel: Faye.Channel.CONNECT,
                        clientId: this._dispatcher.clientId,
                        connectionType: this._dispatcher.connectionType
                    },
                    {},
                    this._cycleConnection, this)))
                }
            },
            disconnect: function() {
                if (this._state === this.CONNECTED) {
                    this._state = this.DISCONNECTED,
                    this.info("Disconnecting ?", this._dispatcher.clientId);
                    var e = new Faye.Publication;
                    return this._sendMessage({
                        channel: Faye.Channel.DISCONNECT,
                        clientId: this._dispatcher.clientId
                    },
                    {},
                    function(t) {
                        t.successful ? (this._dispatcher.close(), e.setDeferredStatus("succeeded")) : e.setDeferredStatus("failed", Faye.Error.parse(t.error))
                    },
                    this),
                    this.info("Clearing channel listeners for ?", this._dispatcher.clientId),
                    this._channels = new Faye.Channel.Set,
                    e
                }
            },
            subscribe: function(e, t, n) {
                if (e instanceof Array) return Faye.map(e,
                function(e) {
                    return this.subscribe(e, t, n)
                },
                this);
                var i = new Faye.Subscription(this, e, t, n),
                o = !0 === t;
                return this._channels.hasSubscription(e) && !o ? (this._channels.subscribe([e], t, n), i.setDeferredStatus("succeeded"), i) : (this.connect(function() {
                    this.info("Client ? attempting to subscribe to ?", this._dispatcher.clientId, e),
                    o || this._channels.subscribe([e], t, n),
                    this._sendMessage({
                        channel: Faye.Channel.SUBSCRIBE,
                        clientId: this._dispatcher.clientId,
                        subscription: e
                    },
                    {},
                    function(o) {
                        if (!o.successful) return i.setDeferredStatus("failed", Faye.Error.parse(o.error)),
                        this._channels.unsubscribe(e, t, n);
                        var s = [].concat(o.subscription);
                        this.info("Subscription acknowledged for ? to ?", this._dispatcher.clientId, s),
                        i.setDeferredStatus("succeeded")
                    },
                    this)
                },
                this), i)
            },
            unsubscribe: function(e, t, n) {
                if (e instanceof Array) return Faye.map(e,
                function(e) {
                    return this.unsubscribe(e, t, n)
                },
                this);
                this._channels.unsubscribe(e, t, n) && this.connect(function() {
                    this.info("Client ? attempting to unsubscribe from ?", this._dispatcher.clientId, e),
                    this._sendMessage({
                        channel: Faye.Channel.UNSUBSCRIBE,
                        clientId: this._dispatcher.clientId,
                        subscription: e
                    },
                    {},
                    function(e) {
                        if (e.successful) {
                            var t = [].concat(e.subscription);
                            this.info("Unsubscription acknowledged for ? from ?", this._dispatcher.clientId, t)
                        }
                    },
                    this)
                },
                this)
            },
            publish: function(e, t, n) {
                Faye.validateOptions(n || {},
                ["attempts", "deadline"]);
                var i = new Faye.Publication;
                return this.connect(function() {
                    this.info("Client ? queueing published message to ?: ?", this._dispatcher.clientId, e, t),
                    this._sendMessage({
                        channel: e,
                        data: t,
                        clientId: this._dispatcher.clientId
                    },
                    n,
                    function(e) {
                        e.successful ? i.setDeferredStatus("succeeded") : i.setDeferredStatus("failed", Faye.Error.parse(e.error))
                    },
                    this)
                },
                this),
                i
            },
            _sendMessage: function(e, t, n, i) {
                e.id = this._generateMessageId();
                var o = this._advice.timeout ? 1.2 * this._advice.timeout / 1e3: 1.2 * this._dispatcher.retry;
                this.pipeThroughExtensions("outgoing", e, null,
                function(e) {
                    e && (n && (this._responseCallbacks[e.id] = [n, i]), this._dispatcher.sendMessage(e, o, t || {}))
                },
                this)
            },
            _generateMessageId: function() {
                return this._messageId += 1,
                this._messageId >= Math.pow(2, 32) && (this._messageId = 0),
                this._messageId.toString(36)
            },
            _receiveMessage: function(e) {
                var t, n = e.id;
                void 0 !== e.successful && (t = this._responseCallbacks[n], delete this._responseCallbacks[n]),
                this.pipeThroughExtensions("incoming", e, null,
                function(e) {
                    e && (e.advice && this._handleAdvice(e.advice), this._deliverMessage(e), t && t[0].call(t[1], e))
                },
                this)
            },
            _handleAdvice: function(e) {
                Faye.extend(this._advice, e),
                this._dispatcher.timeout = this._advice.timeout / 1e3,
                this._advice.reconnect === this.HANDSHAKE && this._state !== this.DISCONNECTED && (this._state = this.UNCONNECTED, this._dispatcher.clientId = null, this._cycleConnection())
            },
            _deliverMessage: function(e) {
                e.channel && void 0 !== e.data && (this.info("Client ? calling listeners for ? with ?", this._dispatcher.clientId, e.channel, e.data), this._channels.distributeMessage(e))
            },
            _cycleConnection: function() {
                this._connectRequest && (this._connectRequest = null, this.info("Closed connection for ?", this._dispatcher.clientId));
                var e = this;
                Faye.ENV.setTimeout(function() {
                    e.connect()
                },
                this._advice.interval)
            }
        }),
        Faye.extend(Faye.Client.prototype, Faye.Deferrable),
        Faye.extend(Faye.Client.prototype, Faye.Publisher),
        Faye.extend(Faye.Client.prototype, Faye.Logging),
        Faye.extend(Faye.Client.prototype, Faye.Extensible),
        Faye.Dispatcher = Faye.Class({
            MAX_REQUEST_SIZE: 2048,
            DEFAULT_RETRY: 5,
            UP: 1,
            DOWN: 2,
            initialize: function(e, t, n) {
                this._client = e,
                this.endpoint = Faye.URI.parse(t),
                this._alternates = n.endpoints || {},
                this.cookies = Faye.Cookies && new Faye.Cookies.CookieJar,
                this._disabled = [],
                this._envelopes = {},
                this.headers = {},
                this.retry = n.retry || this.DEFAULT_RETRY,
                this._scheduler = n.scheduler || Faye.Scheduler,
                this._state = 0,
                this.transports = {},
                this.wsExtensions = [],
                this.proxy = n.proxy || {},
                "string" == typeof this._proxy && (this._proxy = {
                    origin: this._proxy
                });
                var i = n.websocketExtensions;
                if (i) for (var o = 0,
                s = (i = [].concat(i)).length; s > o; o++) this.addWebsocketExtension(i[o]);
                for (var r in this.tls = n.tls || {},
                this.tls.ca = this.tls.ca || n.ca,
                this._alternates) this._alternates[r] = Faye.URI.parse(this._alternates[r]);
                this.maxRequestSize = this.MAX_REQUEST_SIZE
            },
            endpointFor: function(e) {
                return this._alternates[e] || this.endpoint
            },
            addWebsocketExtension: function(e) {
                this.wsExtensions.push(e)
            },
            disable: function(e) {
                this._disabled.push(e)
            },
            setHeader: function(e, t) {
                this.headers[e] = t
            },
            close: function() {
                var e = this._transport;
                delete this._transport,
                e && e.close()
            },
            getConnectionTypes: function() {
                return Faye.Transport.getConnectionTypes()
            },
            selectTransport: function(e) {
                Faye.Transport.get(this, e, this._disabled,
                function(e) {
                    this.debug("Selected ? transport for ?", e.connectionType, Faye.URI.stringify(e.endpoint)),
                    e !== this._transport && (this._transport && this._transport.close(), this._transport = e, this.connectionType = e.connectionType)
                },
                this)
            },
            sendMessage: function(e, t, n) {
                n = n || {};
                var i, o = e.id,
                s = n.attempts,
                r = n.deadline && (new Date).getTime() + 1e3 * n.deadline,
                a = this._envelopes[o];
                a || (i = new this._scheduler(e, {
                    timeout: t,
                    interval: this.retry,
                    attempts: s,
                    deadline: r
                }), a = this._envelopes[o] = {
                    message: e,
                    scheduler: i
                }),
                this._sendEnvelope(a)
            },
            _sendEnvelope: function(e) {
                if (this._transport && !e.request && !e.timer) {
                    var t = e.message,
                    n = e.scheduler,
                    i = this;
                    // if (!n.isDeliverable()) return n.abort(),
                    void delete this._envelopes[t.id];
                    e.timer = Faye.ENV.setTimeout(function() {
                        i.handleError(t)
                    },
                    1e3 * n.getTimeout()),
                    n.send(),
                    e.request = this._transport.sendMessage(t)
                }
            },
            handleResponse: function(e) {
                var t = this._envelopes[e.id];
                void 0 !== e.successful && t && (t.scheduler.succeed(), delete this._envelopes[e.id], Faye.ENV.clearTimeout(t.timer)),
                this.trigger("message", e),
                this._state !== this.UP && (this._state = this.UP, this._client.trigger("transport:up"))
            },
            handleError: function(e, t) {
                var n = this._envelopes[e.id],
                i = n && n.request,
                o = this;
                // if (i) {
                //     i.then(function(e) {
                //         e && e.abort && e.abort()
                //     });
                //     var s = n.scheduler;
                //     s.fail(),
                //     Faye.ENV.clearTimeout(n.timer),
                //     n.request = n.timer = null,
                //     t ? this._sendEnvelope(n) : n.timer = Faye.ENV.setTimeout(function() {
                //         n.timer = null,
                //         o._sendEnvelope(n)
                //     },
                //     1e3 * s.getInterval()),
                //     this._state !== this.DOWN && (this._state = this.DOWN, this._client.trigger("transport:down"))
                // }
            }
        }),
        Faye.extend(Faye.Dispatcher.prototype, Faye.Publisher),
        Faye.extend(Faye.Dispatcher.prototype, Faye.Logging),
        Faye.Scheduler = function(e, t) {
            this.message = e,
            this.options = t,
            this.attempts = 0
        },
        Faye.extend(Faye.Scheduler.prototype, {
            getTimeout: function() {
                return this.options.timeout
            },
            getInterval: function() {
                return this.options.interval
            },
            isDeliverable: function() {
                var e = this.options.attempts,
                t = this.attempts,
                n = this.options.deadline,
                i = (new Date).getTime();
                return ! (void 0 !== e && t >= e) && !(void 0 !== n && i > n)
            },
            send: function() {
                this.attempts += 1
            },
            succeed: function() {},
            fail: function() {},
            abort: function() {}
        }),
        Faye.Transport = Faye.extend(Faye.Class({
            DEFAULT_PORTS: {
                "http:": 80,
                "https:": 443,
                "ws:": 80,
                "wss:": 443
            },
            SECURE_PROTOCOLS: ["https:", "wss:"],
            MAX_DELAY: 0,
            batching: !0,
            initialize: function(e, t) {
                this._dispatcher = e,
                this.endpoint = t,
                this._outbox = [],
                this._proxy = Faye.extend({},
                this._dispatcher.proxy),
                !this._proxy.origin && Faye.NodeAdapter && (this._proxy.origin = Faye.indexOf(this.SECURE_PROTOCOLS, this.endpoint.protocol) >= 0 ? process.env.HTTPS_PROXY || process.env.https_proxy: process.env.HTTP_PROXY || process.env.http_proxy)
            },
            close: function() {},
            encode: function() {
                return ""
            },
            sendMessage: function(e) {
                return this.debug("Client ? sending message to ?: ?", this._dispatcher.clientId, Faye.URI.stringify(this.endpoint), e),
                this.batching ? (this._outbox.push(e), this._promise = this._promise || new Faye.Promise, this._flushLargeBatch(), e.channel === Faye.Channel.HANDSHAKE ? (this.addTimeout("publish", .01, this._flush, this), this._promise) : (e.channel === Faye.Channel.CONNECT && (this._connectMessage = e), this.addTimeout("publish", this.MAX_DELAY, this._flush, this), this._promise)) : Faye.Promise.fulfilled(this.request([e]))
            },
            _flush: function() {
                this.removeTimeout("publish"),
                this._outbox.length > 1 && this._connectMessage && (this._connectMessage.advice = {
                    timeout: 0
                }),
                Faye.Promise.fulfill(this._promise, this.request(this._outbox)),
                delete this._promise,
                this._connectMessage = null,
                this._outbox = []
            },
            _flushLargeBatch: function() {
                if (! (this.encode(this._outbox).length < this._dispatcher.maxRequestSize)) {
                    var e = this._outbox.pop();
                    this._flush(),
                    e && this._outbox.push(e)
                }
            },
            _receive: function(e) {
                if (e) {
                    e = [].concat(e),
                    this.debug("Client ? received from ? via ?: ?", this._dispatcher.clientId, Faye.URI.stringify(this.endpoint), this.connectionType, e);
                    for (var t = 0,
                    n = e.length; n > t; t++) this._dispatcher.handleResponse(e[t])
                }
            },
            _handleError: function(e) {
                e = [].concat(e),
                this.debug("Client ? failed to send to ? via ?: ?", this._dispatcher.clientId, Faye.URI.stringify(this.endpoint), this.connectionType, e);
                for (var t = 0,
                n = e.length; n > t; t++) this._dispatcher.handleError(e[t])
            },
            _getCookies: function() {
                var e = this._dispatcher.cookies,
                t = Faye.URI.stringify(this.endpoint);
                return e ? Faye.map(e.getCookiesSync(t),
                function(e) {
                    return e.cookieString()
                }).join("; ") : ""
            },
            _storeCookies: function(e) {
                var t, n = this._dispatcher.cookies,
                i = Faye.URI.stringify(this.endpoint);
                if (e && n) for (var o = 0,
                s = (e = [].concat(e)).length; s > o; o++) t = Faye.Cookies.Cookie.parse(e[o]),
                n.setCookieSync(t, i)
            }
        }), {
            get: function(e, t, n, i, o) {
                var s = e.endpoint;
                Faye.asyncEach(this._transports,
                function(s, r) {
                    var a = s[0],
                    l = s[1],
                    c = e.endpointFor(a);
                    return Faye.indexOf(n, a) >= 0 ? r() : Faye.indexOf(t, a) < 0 ? (l.isUsable(e, c,
                    function() {}), r()) : void l.isUsable(e, c,
                    function(t) {
                        if (!t) return r();
                        var n = l.hasOwnProperty("create") ? l.create(e, c) : new l(e, c);
                        i.call(o, n)
                    })
                },
                function() {
                    throw Error("Could not find a usable connection type for " + Faye.URI.stringify(s))
                })
            },
            register: function(e, t) {
                this._transports.push([e, t]),
                t.prototype.connectionType = e
            },
            getConnectionTypes: function() {
                return Faye.map(this._transports,
                function(e) {
                    return e[0]
                })
            },
            _transports: []
        }),
        Faye.extend(Faye.Transport.prototype, Faye.Logging),
        Faye.extend(Faye.Transport.prototype, Faye.Timeouts),
        Faye.Event = {
            _registry: [],
            on: function(e, t, n, i) {
                var o = function() {
                    n.call(i)
                };
                e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent("on" + t, o),
                this._registry.push({
                    _element: e,
                    _type: t,
                    _callback: n,
                    _context: i,
                    _handler: o
                })
            },
            detach: function(e, t, n, i) {
                for (var o, s = this._registry.length; s--;) o = this._registry[s],
                e && e !== o._element || t && t !== o._type || n && n !== o._callback || i && i !== o._context || (o._element.removeEventListener ? o._element.removeEventListener(o._type, o._handler, !1) : o._element.detachEvent("on" + o._type, o._handler), this._registry.splice(s, 1), o = null)
            }
        },
        void 0 !== Faye.ENV.onunload && Faye.Event.on(Faye.ENV, "unload", Faye.Event.detach, Faye.Event),
        "object" != typeof JSON && (JSON = {}),
        function() {
            function f(e) {
                return 10 > e ? "0" + e: e
            }
            function quote(e) {
                return escapable.lastIndex = 0,
                escapable.test(e) ? '"' + e.replace(escapable,
                function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
                }) + '"': '"' + e + '"'
            }
            function str(e, t) {
                var n, i, o, s, r, a = gap,
                l = t[e];
                switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case "string":
                    return quote(l);
                case "number":
                    return isFinite(l) ? l + "": "null";
                case "boolean":
                case "null":
                    return l + "";
                case "object":
                    if (!l) return "null";
                    if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (s = l.length, n = 0; s > n; n += 1) r[n] = str(n, l) || "null";
                        return o = 0 === r.length ? "[]": gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + a + "]": "[" + r.join(",") + "]",
                        gap = a,
                        o
                    }
                    if (rep && "object" == typeof rep) for (s = rep.length, n = 0; s > n; n += 1)"string" == typeof rep[n] && ((o = str(i = rep[n], l)) && r.push(quote(i) + (gap ? ": ": ":") + o));
                    else for (i in l) Object.prototype.hasOwnProperty.call(l, i) && ((o = str(i, l)) && r.push(quote(i) + (gap ? ": ": ":") + o));
                    return o = 0 === r.length ? "{}": gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + a + "}": "{" + r.join(",") + "}",
                    gap = a,
                    o
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
            },
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
            Faye.stringify = function(e, t, n) {
                var i;
                if (gap = "", indent = "", "number" == typeof n) for (i = 0; n > i; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw Error("JSON.stringify");
                return str("", {
                    "": e
                })
            },
            "function" != typeof JSON.stringify && (JSON.stringify = Faye.stringify),
            "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(e, t) {
                    var n, i, o = e[t];
                    if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (i = walk(o, n)) ? o[n] = i: delete o[n]);
                    return reviver.call(e, t, o)
                }
                var j;
                if (text += "", cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx,
                function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
                })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"),
                "function" == typeof reviver ? walk({
                    "": j
                },
                "") : j;
                throw new SyntaxError("JSON.parse")
            })
        } (),
        Faye.Transport.WebSocket = Faye.extend(Faye.Class(Faye.Transport, {
            UNCONNECTED: 1,
            CONNECTING: 2,
            CONNECTED: 3,
            batching: !1,
            isUsable: function(e, t) {
                this.callback(function() {
                    e.call(t, !0)
                }),
                this.errback(function() {
                    e.call(t, !1)
                }),
                this.connect()
            },
            request: function(e) {
                this._pending = this._pending || new Faye.Set;
                for (var t = 0,
                n = e.length; n > t; t++) this._pending.add(e[t]);
                var i = new Faye.Promise;
                return this.callback(function(t) {
                    t && 1 === t.readyState && (t.send(Faye.toJSON(e)), Faye.Promise.fulfill(i, t))
                },
                this),
                this.connect(),
                {
                    abort: function() {
                        i.then(function(e) {
                            e.close()
                        })
                    }
                }
            },
            connect: function() {
                if (!Faye.Transport.WebSocket._unloaded && (this._state = this._state || this.UNCONNECTED, this._state === this.UNCONNECTED)) {
                    this._state = this.CONNECTING;
                    var e = this._createSocket();
                    if (!e) return this.setDeferredStatus("failed");
                    var t = this;
                    e.onopen = function() {
                        e.headers && t._storeCookies(e.headers["set-cookie"]),
                        t._socket = e,
                        t._state = t.CONNECTED,
                        t._everConnected = !0,
                        t._ping(),
                        t.setDeferredStatus("succeeded", e)
                    };
                    var n = !1;
                    e.onclose = e.onerror = function() {
                        if (!n) {
                            n = !0;
                            var i = t._state === t.CONNECTED;
                            e.onopen = e.onclose = e.onerror = e.onmessage = null,
                            delete t._socket,
                            t._state = t.UNCONNECTED,
                            t.removeTimeout("ping"),
                            t.setDeferredStatus("unknown");
                            var o = t._pending ? t._pending.toArray() : [];
                            delete t._pending,
                            i ? t._handleError(o, !0) : t._everConnected ? t._handleError(o) : t.setDeferredStatus("failed")
                        }
                    },
                    e.onmessage = function(e) {
                        var n = JSON.parse(e.data);
                        if (n) {
                            for (var i = 0,
                            o = (n = [].concat(n)).length; o > i; i++) void 0 !== n[i].successful && t._pending.remove(n[i]);
                            t._receive(n)
                        }
                    }
                }
            },
            close: function() {
                this._socket && this._socket.close()
            },
            _createSocket: function() {
                var e = Faye.Transport.WebSocket.getSocketUrl(this.endpoint),
                t = this._dispatcher.headers,
                n = this._dispatcher.wsExtensions,
                i = this._getCookies(),
                o = this._dispatcher.tls,
                s = {
                    extensions: n,
                    headers: t,
                    proxy: this._proxy,
                    tls: o
                };
                return "" !== i && (s.headers.Cookie = i),
                Faye.WebSocket ? new Faye.WebSocket.Client(e, [], s) : Faye.ENV.MozWebSocket ? new MozWebSocket(e) : Faye.ENV.WebSocket ? new WebSocket(e) : void 0
            },
            _ping: function() {
                this._socket && (this._socket.send("[]"), this.addTimeout("ping", this._dispatcher.timeout / 2, this._ping, this))
            }
        }), {
            PROTOCOLS: {
                "http:": "ws:",
                "https:": "wss:"
            },
            create: function(e, t) {
                var n = e.transports.websocket = e.transports.websocket || {};
                return n[t.href] = n[t.href] || new this(e, t),
                n[t.href]
            },
            getSocketUrl: function(e) {
                return (e = Faye.copyObject(e)).protocol = this.PROTOCOLS[e.protocol],
                Faye.URI.stringify(e)
            },
            isUsable: function(e, t, n, i) {
                this.create(e, t).isUsable(n, i)
            }
        }),
        Faye.extend(Faye.Transport.WebSocket.prototype, Faye.Deferrable),
        Faye.Transport.register("websocket", Faye.Transport.WebSocket),
        Faye.Event && void 0 !== Faye.ENV.onbeforeunload && Faye.Event.on(Faye.ENV, "beforeunload",
        function() {
            Faye.Transport.WebSocket._unloaded = !0
        }),
        Faye.Transport.EventSource = Faye.extend(Faye.Class(Faye.Transport, {
            initialize: function(e, t) {
                if (Faye.Transport.prototype.initialize.call(this, e, t), !Faye.ENV.EventSource) return this.setDeferredStatus("failed");
                this._xhr = new Faye.Transport.XHR(e, t),
                (t = Faye.copyObject(t)).pathname += "/" + e.clientId;
                var n = new EventSource(Faye.URI.stringify(t)),
                i = this;
                n.onopen = function() {
                    i._everConnected = !0,
                    i.setDeferredStatus("succeeded")
                },
                n.onerror = function() {
                    i._everConnected ? i._handleError([]) : (i.setDeferredStatus("failed"), n.close())
                },
                n.onmessage = function(e) {
                    i._receive(JSON.parse(e.data))
                },
                this._socket = n
            },
            close: function() {
                this._socket && (this._socket.onopen = this._socket.onerror = this._socket.onmessage = null, this._socket.close(), delete this._socket)
            },
            isUsable: function(e, t) {
                this.callback(function() {
                    e.call(t, !0)
                }),
                this.errback(function() {
                    e.call(t, !1)
                })
            },
            encode: function(e) {
                return this._xhr.encode(e)
            },
            request: function(e) {
                return this._xhr.request(e)
            }
        }), {
            isUsable: function(e, t, n, i) {
                return e.clientId ? void Faye.Transport.XHR.isUsable(e, t,
                function(o) {
                    return o ? void this.create(e, t).isUsable(n, i) : n.call(i, !1)
                },
                this) : n.call(i, !1)
            },
            create: function(e, t) {
                var n = e.transports.eventsource = e.transports.eventsource || {},
                i = e.clientId,
                o = Faye.copyObject(t);
                return o.pathname += "/" + (i || ""),
                n[o = Faye.URI.stringify(o)] = n[o] || new this(e, t),
                n[o]
            }
        }),
        Faye.extend(Faye.Transport.EventSource.prototype, Faye.Deferrable),
        Faye.Transport.register("eventsource", Faye.Transport.EventSource),
        Faye.Transport.XHR = Faye.extend(Faye.Class(Faye.Transport, {
            encode: function(e) {
                return Faye.toJSON(e)
            },
            request: function(e) {
                var t = this.endpoint.href,
                n = Faye.ENV.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest,
                i = this;
                n.open("POST", t, !0),
                n.setRequestHeader("Content-Type", "application/json"),
                n.setRequestHeader("Pragma", "no-cache"),
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                var o = this._dispatcher.headers;
                for (var s in o) o.hasOwnProperty(s) && n.setRequestHeader(s, o[s]);
                var r = function() {
                    // n.abort()
                };
                return void 0 !== Faye.ENV.onbeforeunload && Faye.Event.on(Faye.ENV, "beforeunload", r),
                n.onreadystatechange = function() {
                    if (n && 4 === n.readyState) {
                        var t = null,
                        o = n.status,
                        s = n.responseText,
                        a = o >= 200 && 300 > o || 304 === o || 1223 === o;
                        if (void 0 !== Faye.ENV.onbeforeunload && Faye.Event.detach(Faye.ENV, "beforeunload", r), n.onreadystatechange = function() {},
                        n = null, !a) return i._handleError(e);
                        try {
                            t = JSON.parse(s)
                        } catch(l) {}
                        t ? i._receive(t) : i._handleError(e)
                    }
                },
                n.send(this.encode(e)),
                n
            }
        }), {
            isUsable: function(e, t, n, i) {
                n.call(i, Faye.URI.isSameOrigin(t))
            }
        }),
        Faye.Transport.register("long-polling", Faye.Transport.XHR),
        Faye.Transport.CORS = Faye.extend(Faye.Class(Faye.Transport, {
            encode: function(e) {
                return "message=" + encodeURIComponent(Faye.toJSON(e))
            },
            request: function(e) {
                var t, n = Faye.ENV.XDomainRequest ? XDomainRequest: XMLHttpRequest,
                i = new n,
                o = ++Faye.Transport.CORS._id,
                s = this._dispatcher.headers,
                r = this;
                if (i.open("POST", Faye.URI.stringify(this.endpoint), !0), i.setRequestHeader) for (t in i.setRequestHeader("Pragma", "no-cache"), s) s.hasOwnProperty(t) && i.setRequestHeader(t, s[t]);
                var a = function() {
                    return !! i && (Faye.Transport.CORS._pending.remove(o), i.onload = i.onerror = i.ontimeout = i.onprogress = null, void(i = null))
                };
                return i.onload = function() {
                    var t = null;
                    try {
                        t = JSON.parse(i.responseText)
                    } catch(n) {}
                    a(),
                    t ? r._receive(t) : r._handleError(e)
                },
                i.onerror = i.ontimeout = function() {
                    a(),
                    r._handleError(e)
                },
                i.onprogress = function() {},
                n === Faye.ENV.XDomainRequest && Faye.Transport.CORS._pending.add({
                    id: o,
                    xhr: i
                }),
                i.send(this.encode(e)),
                i
            }
        }), {
            _id: 0,
            _pending: new Faye.Set,
            isUsable: function(e, t, n, i) {
                if (Faye.URI.isSameOrigin(t)) return n.call(i, !1);
                if (Faye.ENV.XDomainRequest) return n.call(i, t.protocol === Faye.ENV.location.protocol);
                if (Faye.ENV.XMLHttpRequest) {
                    var o = new Faye.ENV.XMLHttpRequest;
                    return n.call(i, void 0 !== o.withCredentials)
                }
                return n.call(i, !1)
            }
        }),
        Faye.Transport.register("cross-origin-long-polling", Faye.Transport.CORS),
        Faye.Transport.JSONP = Faye.extend(Faye.Class(Faye.Transport, {
            encode: function(e) {
                var t = Faye.copyObject(this.endpoint);
                return t.query.message = Faye.toJSON(e),
                t.query.jsonp = "__jsonp" + Faye.Transport.JSONP._cbCount + "__",
                Faye.URI.stringify(t)
            },
            request: function(e) {
                var t = document.getElementsByTagName("head")[0],
                n = document.createElement("script"),
                i = Faye.Transport.JSONP.getCallbackName(),
                o = Faye.copyObject(this.endpoint),
                s = this;
                o.query.message = Faye.toJSON(e),
                o.query.jsonp = i;
                var r = function() {
                    if (!Faye.ENV[i]) return ! 1;
                    Faye.ENV[i] = void 0;
                    try {
                        delete Faye.ENV[i]
                    } catch(e) {}
                    n.parentNode.removeChild(n)
                };
                return Faye.ENV[i] = function(e) {
                    r(),
                    s._receive(e)
                },
                n.type = "text/javascript",
                n.src = Faye.URI.stringify(o),
                t.appendChild(n),
                n.onerror = function() {
                    r(),
                    s._handleError(e)
                },
                {
                    abort: r
                }
            }
        }), {
            _cbCount: 0,
            getCallbackName: function() {
                return this._cbCount += 1,
                "__jsonp" + this._cbCount + "__"
            },
            isUsable: function(e, t, n, i) {
                n.call(i, !0)
            }
        }),
        Faye.Transport.register("callback-polling", Faye.Transport.JSONP)
    } ()
} (this);
var s3_url = "https://s3.ap-northeast-2.amazonaws.com/langdy",
profile_img_default_src = s3_url + "/images/characters/profile_character.png",
replace_state_on_modal_open = !1,
is_mobile = window.screen.width < 992,
content_carousel, user_signed_in, current_user;
$(document).on("turbolinks:load",
function() { (user_signed_in = "true" == $("#body").attr("user_signed_in")) && (current_user = JSON.parse($("#body").attr("current_user"))),
    $("#body").removeAttr("user_signed_in current_user"),
    user_signed_in || setCookie("local_time_zone", (new Date).getTimezoneOffset() / -60, 1)
});
var SCOPES = ["https://www.googleapis.com/auth/analytics.readonly"],
user_status,
dict_lang,
lesson_id,
client,
channel,
intonations = {
    a1: "\u0101",
    a2: "\xe1",
    a3: "\u01ce",
    a4: "\xe0",
    e1: "\u0113",
    e2: "\xe9",
    e3: "\u011b",
    e4: "\xe8",
    i1: "\u012b",
    i2: "\xed",
    i3: "\u01d0",
    i4: "\xec",
    o1: "\u014d",
    o2: "\xf3",
    o3: "\u01d2",
    o4: "\xf2",
    u1: "\u016b",
    u2: "\xfa",
    u3: "\u01d4",
    u4: "\xf9",
    v1: "\u01d6",
    v2: "\u01d8",
    v3: "\u01d4",
    v4: "\xf9"
},
coin_page,
coin_page_error,
lp_tops,
lp_intervals,
lp_timeouts,
con_01_carousel_pc,
con_01_carousel_mb_01,
con_01_carousel_mb_02,
con_02_carousel_01,
con_02_carousel_01_index,
con_02_carousel_02,
con_05_carousel;
$(window).on("scroll",
function() {
    if ($("#landing_page").length) {
        var e, t = $(document).scrollTop();
        $.each(lp_tops,
        function(n) {
            this < t && (!lp_tops[n + 1] || t < lp_tops[n + 1]) && (e = n)
        }),
        execute_animation(e)
    }
});
var lesson_page, lesson_page_process, lesson_page_carousel, content_selector = $('<div class="selector h7 valign-wrapper secondary-color white-text"><i class="material-icons h6 mr_5">check_circle</i>\uc120\ud0dd\ud558\uae30</div>'),
content_selected = $('<div class="selected h7 valign-wrapper grey-color white-text"><i class="material-icons h6 mr_5">check_circle</i>\uac15\uc758 <span class="number ml_5"></span></div>'),
inactive_teacher_layer_pc = $('<div class="inactive_teacher_layer valign-wrapper secondary-color-text"><div class="valign-wrapper-inner"><i class="material-icons medium">error</i><br>0~2\uae09 \uc218\uc5c5\uc740<br>\ud55c\uad6d\uc5b4 \uace0\uae09 \uc120\uc0dd\ub2d8\ub9cc<br>\uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4 :)</div></div>'),
inactive_teacher_layer_mb = $('<div class="inactive_teacher_layer valign-wrapper secondary-color-text"><i class="material-icons mr_10 small">error</i><div class="left-align">0~2\uae09 \uc218\uc5c5\uc740 \ud55c\uad6d\uc5b4 \uace0\uae09 \uc120\uc0dd\ub2d8\ub9cc<br>\uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4 :)</div></div>'),
init_course_preview_fin,
time_table_teachers,
time_table_1_tr,
time_table_2_tr,
empty_lesson,
preview_and_review,
preview_and_review_category,
count_down_sound,
preview_check_sound,
correct_sound,
wrong_sound,
cheer_sound,
epcd,
epcd_interval,
eppb,
crt_pathname,
crt_page,
common_intervals;
$(document).on("turbolinks:load",
function() {
    return null != window._gaq ? _gaq.push(["_trackPageview"]) : null != window.pageTracker ? pageTracker._trackPageview() : void 0
}),
$(document).on("turbolinks:before-visit",
function() {
    $("#langdy_loading_box").show(),
    client && client.disconnect(),
    channel && client.unsubscribe(channel)
}),
$(document).on("turbolinks:load",
function() {
    switch ($("#langdy_loading_box").show(), 
        crt_pathname = location.pathname, 
        history_replace_state(crt_page ='classroom'),
     $(window).on("popstate",
    function() {
        crt_pathname != location.pathname && location.reload()
    }),
     $(window).on("hashchange",
    function() {
        $(".modal.open").length && $(".modal.open").modal("close"),
        $("#side_navbar").hasClass("open") && $("#side_navbar").sidenav("close")
    }), crt_page) {
    case "preview_and_review":
        pre_init_preview_and_review_dynamic_js()
    }
    switch (exec_device_js(), init_materializecss(), init_navbar(), init_modal(), init_faq(), init_banner(), crt_page) {
    case "landing_page":
        init_landing_page_dynamic_js();
        break;
    case "mypage":
        init_mypage_dynamic_js();
        break;
    case "edit_profile_page":
        init_edit_profile_page_dynamic_js();
        break;
    case "lesson_page":
        init_lesson_page_dynamic_js();
        break;
    case "classroom":
        init_classroom_dynamic_js();
        break;
    case "preview_and_review":
        init_preview_and_review_dynamic_js();
        break;
    case "coin_page":
        init_coin_page_dynamic_js();
        break;
    case "admin_courses":
        init_admin_courses_js();
        break;
    case "admin_index":
        init_admin_index_js();
        break;
    case "admin_statistics":
        init_admin_statistics_js();
        break;
    case "admin_users":
        init_admin_users_js();
        break;
    case "admin_buycoin":
        init_admin_buycoin_js();
        break;
    case "admin_lesson":
        init_admin_lesson_js();
        break;
    case "admin_data":
        init_admin_data_js()
    }
    init_common_carousels();
    var e = $('div[id^="notice"]');
    e.length > 0 && 1 == window.location.search.split("&").length && openModal(e.eq(0).attr("id")),
    $("#body").on("click", "#toggle_pc_side_navbar_btn",
    function() {
        $("#body").toggleClass("hidden_side_navbar"),
        content_carousel && content_carousel.resizeHandler();
        var e = $("#body").hasClass("hidden_side_navbar") ? "chevron_right": "chevron_left";
        $(this).children("i").text(e)
    }),
    $("#body").on("click", ".open_sign_up_modal_btn",
    function() {
        open_sign_up_modal(Number($(this).attr("type")), $(this).attr("callback"))
    }),
    $("#sign_up").on("click", ".toggle_sign_up_tab_btn",
    function() {
        toggle_sign_up_tab(Number($(this).attr("tg_index")))
    }),
    $("#sign_up").on("click", ".toggle_contact_btn",
    function() {
        toggle_contact()
    }),
    $("#sign_up").on("click", "#sign_up_btn",
    function() {
        validate_sign_up()
    }),
    $("#sign_up").on("click", "#sign_in_btn",
    function() {
        sign_in()
    }),
    $("#sign_up").on("keyup", "#sign_in_user_email",
    function(e) {
        13 == e.keyCode && ($(this).blur(), $("#sign_in_user_password").focus())
    }),
    $("#sign_up").on("keyup", "#sign_in_user_password",
    function(e) {
        13 == e.keyCode && ($(this).blur(), sign_in())
    }),
    $("#langdy_loading_box").attr("init_fin", !0).hide()
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.CountUp = t()
} (this,
function() {
    return function(e, t, n, i, o, s) {
        function r(e) {
            var t, n, i, o, s, r, a = e < 0;
            if (e = Math.abs(e).toFixed(c.decimals), n = (t = (e += "").split("."))[0], i = t.length > 1 ? c.options.decimal + t[1] : "", c.options.useGrouping) {
                for (o = "", s = 0, r = n.length; s < r; ++s) 0 !== s && s % 3 == 0 && (o = c.options.separator + o),
                o = n[r - s - 1] + o;
                n = o
            }
            return c.options.numerals.length && (n = n.replace(/[0-9]/g,
            function(e) {
                return c.options.numerals[ + e]
            }), i = i.replace(/[0-9]/g,
            function(e) {
                return c.options.numerals[ + e]
            })),
            (a ? "-": "") + c.options.prefix + n + i + c.options.suffix
        }
        function a(e, t, n, i) {
            return n * (1 - Math.pow(2, -10 * e / i)) * 1024 / 1023 + t
        }
        function l(e) {
            return "number" == typeof e && !isNaN(e)
        }
        var c = this;
        if (c.version = function() {
            return "1.9.3"
        },
        c.options = {
            useEasing: !0,
            useGrouping: !0,
            separator: ",",
            decimal: ".",
            easingFn: a,
            formattingFn: r,
            prefix: "",
            suffix: "",
            numerals: []
        },
        s && "object" == typeof s) for (var u in c.options) s.hasOwnProperty(u) && null !== s[u] && (c.options[u] = s[u]);
        "" === c.options.separator ? c.options.useGrouping = !1 : c.options.separator = "" + c.options.separator;
        for (var d = 0,
        h = ["webkit", "moz", "ms", "o"], p = 0; p < h.length && !window.requestAnimationFrame; ++p) window.requestAnimationFrame = window[h[p] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[h[p] + "CancelAnimationFrame"] || window[h[p] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var t = (new Date).getTime(),
            n = Math.max(0, 16 - (t - d)),
            i = window.setTimeout(function() {
                e(t + n)
            },
            n);
            return d = t + n,
            i
        }),
       
        c.initialize() && c.printValue(c.startVal)
    }
}),
/*!
 * Javascript Cookie v1.5.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(e) {
   
})
