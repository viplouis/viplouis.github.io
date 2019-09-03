
$(".gallery>div>div").hover(function () {
    if (!$((this.children)[0]).is(":animated")) {
        $((this.children)[0]).animate({
            "opacity": 1,
        }, 200);
        $($(this.children)[0].children).css({ "top": "40%", })
    }
},
    function () {
        // if (! $((this.children)[0]).is(":animated")) {
        $((this.children)[0]).animate({
            "opacity": 0,
        }, 200);
        $($(this.children)[0].children).css({ "top": "100%", });
        // }
    })
console.log($(".gallery>div>div>div"));


$(".gallery>div>div").click(function () {
    var i = $(this).index(); //下标从1开始  
    console.log(i);
    // console.log($($(this.children)[1]).attr("src"));
    $(".img_body").html("");
    $(".img_body").append($("<img> ").attr({ "src": $($(this.children)[1]).attr("src"), "class": "img-responsive" }));
    // var this_img = this;
    // console.log($(".gallery>div>div")[i]);
    $(".img_choose").css({
        "opacity": 0,
        "z-index": -1,
    });
    $(".img_footer>button").click(function () {
        // console.log($($($(".gallery>div>div")).prev().children()[1]).attr("src"));

        if ($(this).html() == "&lt;") {
            if (i > 0) {
                $(".img_body").html("");
                $(".img_body").append($("<img> ").attr({ "src": $($($(".gallery>div>div")[i]).prev().children()[1]).attr("src"), "class": "img-responsive" }));
                i--;
            } else {
                $(".img_choose").children().css({ "transform": "translateY(0rem)" })
                $(".img_choose").animate({
                    "opacity": 1,
                    "z-index": 2,
                }, 300);
                $($(".img_choose").children()[i]).css({
                    "transform": "translateY(-0.15rem)",
                })
            }
        } else if ($(this).html() == "&gt;") {
            if (i < 8) {
                $(".img_body").html("");
                $(".img_body").append($("<img> ").attr({ "src": $($($(".gallery>div>div")[i]).next().children()[1]).attr("src"), "class": "img-responsive" }));
                i++;
            } else {
                $(".img_choose").children().css({ "transform": "translateY(0rem)" })
                $(".img_choose").animate({
                    "opacity": 1,
                    "z-index": 2,
                }, 300);
                $($(".img_choose").children()[i]).css({
                    "transform": "translateY(-0.15rem)",
                })
            }
        } else {
            $(".img_choose").children().css({ "transform": "translateY(0rem)" })
            $(".img_choose").animate({
                "opacity": 1,
                "z-index": 2,
            }, 300);
            $($(".img_choose").children()[i]).css({
                "transform": "translateY(-0.15rem)",
            })
        }
    })
    $(".img_choose>img").click(function () {
        $(".img_choose").children().css({ "transform": "translateY(0rem)" });
        $(this).css({
            "transform": "translateY(-0.15rem)",
        })
        $(".img_body").html("");
        $(".img_body").append($("<img> ").attr({ "src": $(this).attr("src"), "class": "img-responsive" }));
        i = $(this).index();
        console.log($(this).index());
    })
    $(".img_choose>button").click(function () {
        $(".img_choose").animate({
            "opacity": 0,
            "z-index": -1,
        }, 300);
    })
})


// 轮播
var img_arr = ["http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s1.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s2.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s3.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s4.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s5.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s6.jpg",
    "http://demo.cssmoban.com/cssthemes5/cpts_1511_cgc/images/s7.jpg",];
var j = 3;
var k = 0;
$(".lunbo>button").click(function () {
    console.log($(this).index())
    if ($(this).html() == "&gt;") {
        img_to_gt();
    } else {
        if (!$(".lunbo>img").is(":animated")) {
            j--;
            if (j == -1) {
                j = 6;
            }
            k--;
            if (k == -1) {
                k = 6;
            }
            // $(".lunbo>img:eq(3)").attr({ "class": "img_remove" ,});
            $(".lunbo").prepend($("<img>").attr({
                "src": img_arr[k],
                "class": "lunbo_r",
            }))
            $(".lunbo>img:nth-of-type(1)").css({ "left": "-3.373rem" })
            $(".lunbo>img:nth-of-type(2)").css({ "left": "0" })
            $(".lunbo>img:nth-of-type(3)").css({ "left": "3.373rem" })
            $(".lunbo>img:nth-of-type(4)").css({ "left": "6.746rem" })
            $(".lunbo>img:nth-of-type(5)").css({ "left": "10.119rem" })
            $(".lunbo>img").animate({ "margin-left": "3.373rem" }, function () {
                $(".lunbo>img").css({ "margin-left": "0rem", "left": "", });
                $(".lunbo>img:eq(4)").remove();
            });
        }
    }
})
function img_to_gt(){
    if (!$(".lunbo>img").is(":animated")) {
        j++;
        k++;
        if (k == 7) {
            k = 0;
        }

        if (j == 7) {
            j = 0;
        }
        $(".lunbo>img:eq(0)").attr({ "class": "img_remove" });
        $(".lunbo").append($("<img>").attr({
            "src": img_arr[j],
            "class": "lunbo_l",
        }))
        $(".lunbo>img").animate({ "margin-left": "-3.373rem" }, function () {
            $(".lunbo>img").css({ "margin-left": "0rem" });
            $(".img_remove").remove();
        });
    }
}
var on =setInterval(img_to_gt,2000);
$(".lunbo").mouseover(function(){
    clearInterval(on);
})
$(".lunbo").mouseout(function(){
    on =setInterval(img_to_gt,2000);
})


// 表单
$(".biaodan span").click(function(){
    $(".biaodan span").animate({
        "top":"0",
        "height":"100%",
        "font-size": "0.2rem",
        "padding":"0.182rem"
    },200)
    $(this).animate({
        "top":"-0.3rem",
        "height":"0.3rem",
        "font-size": "0.16rem",
        "padding":"0.07rem"
    })
    event.stopPropagation();
})
$(".biaodan").click(function(){
    $(".biaodan span").animate({
        "top":"0",
        "height":"100%",
        "font-size": "0.2rem",
        "padding":"0.182rem"
    },200)
})