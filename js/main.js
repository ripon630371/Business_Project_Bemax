(function ($) {
"use strict";

    //slider-active active owlCarousel..................
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

     //project_active active owlCarousel..................
    $('.project_active').owlCarousel({
        loop: true,
        nav: true,
        margin:2,
        dots:false,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    //popup_video active magnificPopup..................
    $('.popup_video').magnificPopup({
          type: 'iframe'
          // other options
    });

})(jQuery);	