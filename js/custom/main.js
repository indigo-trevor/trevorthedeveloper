$(document).ready(function() {
// Start: Nav
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // Squeeze
      $(".hamburger--squeeze").on('click', function(){
          $(".hamburger--squeeze").toggleClass("is-active");
          $(".nav").toggleClass("is-active");
      });
// END: Nav

// START: Carousel modals

  // Digital Transformation
  $(".learn-more--digital-transformation").on('click', function(){
      Strip.show([
        {
          url: 'img/digital-transformation-1.jpg',
          caption: 'Interactive website ideated, designed and coded for Microsoft client'
        },
        {
          url: 'img/digital-transformation-2.jpg',
          caption: 'Technologies utilized: Vue.js, WordPress, Anime.js, Babylon.js'
        },
        {
          url: 'img/digital-transformation-3.jpg',
          caption: 'Showcasing 8 real-world digital transformation lessons'
        },
        {
          url: 'img/digital-transformation-4.jpg',
          caption: 'Mixed media approach including 3D and 2D assets'
        },
        {
          url: 'img/digital-transformation-5.jpg',
          caption: 'Fully repsonsive from Mobile on up and cross-browser optimized'
        }
      ], {
        afterPosition: function(position) {
          $(".content-wrapper").removeClass("modal-is-active").addClass("modal-is-active");
        },
        afterHide: function() {
          $(".content-wrapper").removeClass("modal-is-active");
        }
      });
  });

  // VMware - World of the future
  $(".learn-more--worldofthefuture").on('click', function(){
      Strip.show([
        {
          url: 'img/worldofthefuture-1.jpg',
          caption: 'Responsive web experience created for VMware client, showing how VMware is utilizing IoT to transform industries ranging from supply chain, proactive transportation, maritime, surveillance & more.'
        },
        {
          url: 'img/worldofthefuture-2.jpg',
          caption: 'Technologies utilized: Vue.js, Lottie.js, Anime.js'
        },
        {
          url: 'img/worldofthefuture-3.jpg',
          caption: 'Showcasing 8 real-world digital transformation lessons'
        },
        {
          url: 'img/worldofthefuture-4.jpg',
          caption: 'Mixed media approach including 3D and 2D assets'
        },
        {
          url: 'img/worldofthefuture-5.jpg',
          caption: 'Fully repsonsive from Mobile on up and cross-browser optimized'
        }
      ], {
        afterPosition: function(position) {
          $(".content-wrapper").removeClass("modal-is-active").addClass("modal-is-active");
        },
        afterHide: function() {
          $(".content-wrapper").removeClass("modal-is-active");
        }
      });
  });

// END: Carousel modals
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav ul li a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
