/**
 * Created by zhangruoqiu on 2017/7/19.
 */
$(document).ready(function () {
    $(window).on("load", function () {
        imgLocation();
    });
});

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function (index, value) {
        var boxHeight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxHeight;
        } else {
            var minBoxHeight = Math.min.apply(null, boxArr);
            var minBoxIndex = $.inArray(minBoxHeight, boxArr);
            $(value).css({
                "position":"absolute",
                "top":minBoxHeight + 150,
                "left":box.eq(minBoxIndex).position().left,
                "width":boxWidth,
            });
            boxArr[minBoxIndex]+=box.eq(index).height();
        }
    });
    $(".foot").css({
        "position":"fixed",
        "bottom":0,
        "left":0,
        "height":80,
        "opacity": 0.3
    })
    $(".foot").mouseenter(function () {
        $(".foot").css({
            "position":"fixed",
            "bottom":0,
            "left":0,
            "height":300,
            "opacity": 0.8
        })
    }).mouseleave(function () {
        $(".foot").css({
            "position":"fixed",
            "bottom":0,
            "left":0,
            "height":80,
            "opacity": 0.3
        })
    });
}