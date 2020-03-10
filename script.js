   
   
   $(function(){

    let header = $(".header"),

        introH = $(".intro").innerHeight(),

        scrollOffset = $(window).scrollTop();


    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function(){

     scrollOffset = $(this).scrollTop();

     checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
if (scrollOffset >= introH) {
    header.addClass("fixed");
} else{
    header.removeClass("fixed");
}
}

// Scroll

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let $this = $(this),
     blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html,body").animate({
        scrollTop: blockOffset
    },1000)
});

// Slider
   
   $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$(".nav-toggle").on("click", function(event){
    event.preventDefault();

   
    $(".nav__link").addClass("active");
   

});

$(".nav__link").on("click", function(){


    $(".nav__link").removeClass("active");

})

});