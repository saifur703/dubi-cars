(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {
    $('.testimonial-carousel').owlCarousel({
      items: 4,
      margin: 30,
      loop: false,
      dots: true,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      autoplay: false,
      responsiveClass: true,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        // breakpoint from 480 up
        480: {
          items: 2,
        },
        // breakpoint from 768 up
        768: {
          items: 4,
        },
      },
    });

    /*==============================
        Slick Nav
        ================================*/
    var $ourmenu = $('.main-menu');
    $ourmenu.slicknav();
  });

  jQuery(window).on('load', function () {});
})(jQuery);
