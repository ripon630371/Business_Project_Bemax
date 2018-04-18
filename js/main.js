(function ($) {
"use strict";


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

    $('.project_active').owlCarousel({
        loop: true,
        nav: true,
        margin:2,
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

})(jQuery);	