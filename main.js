$(document).ready(() => {
    $(".title").hide();
        $(".title").fadeIn(1500);

    $(".bio-img").hide();
        $(".bio-img").fadeIn(1500);

    $(".painting-box").on("click", (event) => {
        $(event.currentTarget).addClass("painting-box-active");
    }).on("mouseleave", (event) => {
        $(event.currentTarget).removeClass("painting-box-active");
    });
});