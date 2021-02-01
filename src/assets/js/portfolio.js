$(function() {
    "use strict";
    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox();
    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

});