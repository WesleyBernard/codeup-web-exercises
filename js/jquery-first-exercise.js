$(document).ready(function () {
    "use strict"
    $("h1").click(function (e) {
        $(this).css("background-color", "teal")
    })
    $("p").dblclick(function (e) {
        $("p").css("font-size", "18px")
    })
    $("li").hover(function (e) {
        $("li").css("background-color", "red")
    }, function (e) {
        $("li").css("background-color", "white")
    } )
});

