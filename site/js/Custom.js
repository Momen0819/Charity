$(document).ready(function () {

    //owl-carousel
    $('#mainSlider').owlCarousel({
        loop: true,
        rtl: true,
        smartSpeed: 750,
        // autoplayTimeout: 5000,
        responsiveClass: true,
        autoplay: true,
        margin: 0,
        dots: false,
        dotsEach: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 1,
            },
            767: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });


    // //Swiper
    // var galleryThumbs = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     slidesPerView: 4,
    //     loop: true,
    //     freeMode: true,
    //     loopedSlides: 5,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    // });
    // var galleryTop = new Swiper('.gallery-top', {
    //     spaceBetween: 10,
    //     loop: true,
    //     loopedSlides: 5,
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     thumbs: {
    //         swiper: galleryThumbs,
    //     },
    // });












});

// main slider animated
$('#mainSlider h1').addClass('fadeInRight animated');
$('#mainSlider p').addClass('fadeInLeft animated');
$('#mainSlider').on('translate.owl.carousel', function () {
    $('#mainSlider h1').removeClass('fadeInRight').addClass('fadeOutUp animated');
    $('#mainSlider p').removeClass('fadeInLeft').addClass('fadeOutDown animated');
});
$('#mainSlider').on('translated.owl.carousel', function () {
    $('#mainSlider h1').removeClass('fadeOutUp').addClass('fadeInRight animated');
    $('#mainSlider p').removeClass('fadeOutDown').addClass('fadeInLeft animated');
});

// anv button animated
$('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
});



var swiper = new Swiper('.MainSlider-container', {
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'fade',
  // speed: 750,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



var swiper = new Swiper('.project-slider', {
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});  

var swiper = new Swiper('.testimonials-slider', {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});  

var swiper = new Swiper('.MyCounter-slider', {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  speed: 800,
  // autoplay: {
  //   delay: 2400,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
});  



var swiper = new Swiper('.team-slider', {
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
});  



jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.MyCounter').offset().top,
        hH = jQuery('.MyCounter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 4000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) );
                }
            });
        });
    }
}


$('.pagination .page-item').click(function() {
  $(this).addClass('active').siblings().removeClass('active');
});


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
//////////////////  main  //////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


$(document).ready(function () {
    //loading
    $(".loading ").fadeOut("slow");

    //SmoothScroll js
    var scroll = new SmoothScroll('a[href*="#"]');

    //AOS js
    AOS.init({ 
      offset: 90, // offset (in px) from the original trigger point
      duration: 500, // values from 0 to 3000, with step 50ms
    });

    //materialSelect
    $('.mdb-select').materialSelect();

    //pickatime
    $('#input_starttime').pickatime({
        twelvehour: true,
    });

    //pickadate
    $('.datepicker').pickadate();


    $(".ex1").zoom();
    //toast
    $('.toast').toast('show');

});

// $(window).scroll(function () {
//     var appScroll = $(document).scrollTop();

//     if ((appScroll > 60) && (appScroll < 99999999999)) {
//         $(".navbar").addClass("bg-white");

//     };
//     if ((appScroll > 0) && (appScroll < 60)) {
//         $(".navbar").removeClass("bg-white");

//     };
    
// });


