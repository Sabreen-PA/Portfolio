function scrolldiv() {
    var elem = document.getElementById("about");
    elem.scrollIntoView();
}
function doAnimation()
{
         $(".fa-chevron-down").effect( "bounce", {times:3}, 300, doAnimation);
}