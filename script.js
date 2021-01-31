function start(){
    $("body").css("background-color", "peru")
    $("#menu a:first").click();
}
$(window).on("load", start)


function loadpage(e){
    e.preventDefault();
    //alert("ooo");
    $(this).addclass("active");
    $("#menu a.active").removeclass("active");
    
    var href = $(this).attr("href");    
    $("#content").load(href);
}
$(document).on("click","#menu a", loadpage)