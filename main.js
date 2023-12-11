$(document).ready(() => {
    $(".title").hide();
        $(".title").fadeIn(2000);

    $(".bio-img").hide();
        $(".bio-img").fadeIn(1500);

    $(".painting-box").on("click", (event) => {
        $(event.currentTarget).toggleClass("painting-box-active");
        $(".click").toggle();
        $(".click-active").toggle();
    })
    
})