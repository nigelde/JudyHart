$(document).ready(() => {
    $(".title").hide();
        $(".title").fadeIn(2000);

    $(".welcome").hide();
        $(".welcome").delay(2000).fadeIn(2000);

    $(".bio-img").hide();
        $(".bio-img").fadeIn(1500);

    $(".painting-box").on("click", (event) => {
        $(event.currentTarget).toggleClass("painting-box-active");
    });

    
    $(".enlarge").on("click", function() {
        $(this).html() == "Exit" ? $(this).html('Enlarge') : $(this).html('Exit');
    });

        
    
})