$(document).ready(function() {

// first event

$("a").click(function(event) {
    event.preventDefault();
    alert("Thanks for visiting!");

});

//second and third event

$("a").mouseover(function(event) {
    event.preventDefault();
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});

//fourth event
$(".run").dblclick(function() {
    event.preventDefault();
    $(this).toggleClass("run2");

    });

//fifth and sixth event
$("p")
.mouseup(function() {
    $(this).append("<span style='color:#ff5f22;'>A nice pair of running shoes, plenty of water, fruit, pasta, a watch to set goals and good music.</span>");
})

.mousedown(function() {
    $(this).append("<span style='color:#ffc663;'> A nice pair of running shoes, plenty of water, fruit, pasta, a watch to set goals and good music.</span>");
});

//seventh event




});
