$(".age-button").click(function() {
    let item = $(".your-age").val();
    $(".list").append("<li> " + "" + item + "</li>");


});
$(".feeling-button").click(function() {
    let item = $(".your-feeling").val();
    $(".list").append("<li> " + "You would be in this flim since your feeling " + item + "</li>");
});
$(".Energetic").hide();
$(".feeling-button").click(function() {
    let item = $(".Energetic").val();
    $(".Energetic").fadeToggle();
    
   
    
});
$(".Frisson").hide();



$(".Lazy").hide();

$(".Wickedness").hide();

 
    