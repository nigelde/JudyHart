$(document).ready(() => {
    $(".title").hide();
        $(".title").fadeIn(2000);

    $(".welcome").hide();
        $(".welcome").delay(2000).fadeIn(2000);

    $(".bio-img").hide();
        $(".bio-img").fadeIn(1500);

    $(".painting-div").on("click", (event) => {
        $(event.currentTarget).toggleClass("painting-box-active");
    });
    
   

        
    
})