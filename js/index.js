//fullpage
$(function(){
    $('#fullpage').fullpage({navigation:"true"});
});
//右上角图标
$("#pulg").on("click",function () {
    $(this).css({
        display : "none"
    });
    $("#bigPulg").css({
        display : "block"
    });
});
$(".close").on("click",function () {
   $(this).parent().css({
       display : "none"
   });
    $("#pulg").css({
        display : "block"
    });
});
//text的聚焦
$("#text").focus(function(){
    $("#hint").css({
        display : "block"
    });
    $("#warning").css({
        display : "none"
    });
});
//text的失焦
$("#text").blur(function(){
    $("#hint").css({
        display : "none"
    });
});
$(".close2").on("click",function () {
   $(this).parent().parent().css({
       display : "none"
   });
});
var b = true;
var timer = null;
$("#button").on("click", function () {
    if(b == true) {
            console.log(b);
            var value = $("#text").val();
            var reg = /^1[0-9]{10}$|^0[0-9]{3}\-[1-9][0-9]{6}$|^0[0-9]{2}\-[1-9][0-9]{7}$/g;
            if (reg.test(value) == true) {
                $("#warning").css({
                    display: "block"
                });
                $("#val").text("您好,我们正在为您拨通号码:" + $("#text").val() + ",请留意您的电话.");
                timer = setTimeout(function () {
                     b = false;
                    console.log(b);
                },1000);
            }
            else {
                $("#warning").css({
                    display: "block"
                });
                $("#val").text("请您输入正确的号码,手机号码请直接输入,座机请加区号");
            }
    }if(b == false){
            console.log(11);
            $("#warning").css({
                display: "block"
            });
            $("#val").text("您的呼叫过于频繁，休息一下再打吧。 ( code: 102 )");
            timer = setTimeout(function () {
                b = true;
                 console.log(b);
            },5000);
    }
});

//右边菜单
$(".right_big_menu img").on("click",function () {
    $(".right_big_menu").css({
        right : "-200px",
        transition: "1s"
    });
    $(".right_menu").css({
        right : "0px",
        transition : "3s"
    })
});
$(".right_menu").on("click",function () {
    $(".right_big_menu").css({
        right : "0px",
        transition: "1s"
    });
    $(".right_menu").css({
        right : "-50px",
        transition : "3s"
    })
});




//swiper 轮播图
var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationClickable :true,
        loop : true,
        autoplay : 3000,
        speed:1500
    });
//鼠标进入li标签图片出现动画效果
$("#content li").on("mouseover",function () {
   $(this).find("div").addClass("animated bounce");
});
$("#content li").on("mouseout",function () {
    $(this).find("div").removeClass("animated bounce");
});
//鼠标进入图片,图片出现动画效果
$("#content li div").on("mouseover",function () {
    $(this).addClass("animated pulse");
});
$("#content li div").on("mouseout",function () {
    $(this).removeClass("animated pulse");
});

//24个图标旋转  24个说明弹出
$(".btn_logo ul li").on("mouseover",function () {
    $(this).find("p").css({
       display : "block"
    }).addClass("slide");

    $(this).find("img").addClass("rotate");
});
$(".btn_logo ul li").on("mouseout",function () {
    $(this).find("p").css({
        display : "none"
    });
    $(this).find("img").removeClass("rotate");
});

//第六屏第一个滚动图
var content = document.getElementsByClassName("six_pic")[0];
var btn1 = document.getElementsByClassName("btn1")[0];
var btn2 = document.getElementsByClassName("btn2")[0];
var speed =230;
btn1.onclick = function () {
    console.log(content.offsetLeft);
    content.style.left = content.offsetLeft + -speed + "px";
    if(content.offsetLeft <= -2800){
        content.style.left = -920 + "px";
    }
};
btn2.onclick = function () {
    console.log(content.offsetLeft);
    content.style.left = content.offsetLeft + speed + "px";
    if(content.offsetLeft >= -100){

        content.style.left = -2070 + "px";
    }

};

//第二个滚动图
var content2 = document.getElementsByClassName("six_pic2")[0];
var oli = document.getElementsByClassName("six_only_pic_two");

content2.innerHTML = content2.innerHTML + content2.innerHTML;
content2.style.width = oli[0].offsetWidth * oli.length + "px";
var move = function () {
    // console.log(content2.style.left);
    if(content2.offsetLeft <= -2850){

        content2.style.left = -850 + "px";
    }
  content2.style.left = content2.offsetLeft -2 + "px";
};
var time=setInterval(move,30);
content2.onmouseover = function () {
  clearInterval(time);
};
content2.onmouseout = function () {
  time = setInterval(move,30);
};


// 第六屏图片放大效果
   $(".six_recommend ul li").on("mouseover",function () {
     var $index = $(this).index();
       console.log($index);
       $(".hide_content").css({
          display : "block"
       });
       $(".hide_content ul li").eq($index).css({
           display : "block",
           animation:" move2 1s ease-in",
           "transform-style":"preserve-3d",
           perspective:"500px",
           transition:"1s"
       });
   });
    $(".six_recommend ul li").on("mouseout",function () {
        $(".hide_content ul li").css({
            display : "none"
        });
        $(".hide_content").css({
            display : "none"
        });
    });
