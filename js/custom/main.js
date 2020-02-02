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
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), Vue.js, Anime.js, Babylon.js'
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
          url: 'https://vimeo.com/388854125',
          caption: 'Optimized for 100+ inch touchscreen monitors at conferences around the world.'
        },
        {
          url: 'img/worldofthefuture-1.jpg',
          caption: 'Ideated, designed and developed for Dell/VMware client, showing how VMware is utilizing IoT to transform industries ranging from supply chain, proactive transportation, maritime, surveillance & more'
        },
        {
          url: 'img/worldofthefuture-2.jpg',
          caption: 'Along with the event experience, we also delivered a fully responsive web-based version'
        },
        {
          url: 'img/worldofthefuture-4.jpg',
          caption: 'All animations, voice-over, illustrations and code developed in-house'
        },
        {
          url: 'img/worldofthefuture-3.jpg',
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript(ES6), Vue.js, Lottie.js, Anime.js'
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

  // Building with AI
  $(".learn-more--buildingwithai").on('click', function(){
      Strip.show([
        {
          url: 'img/buildingwithai-3.jpg',
          caption: 'A WebVR immersive experience targeting Developers and promoting the use of Microsofts suite of AI offerings. We sent direct mail with custom packaging, a QR code, and a VR headset to Developers around the world. This drove 94% engagement!'
        },
        {
          url: 'img/buildingwithai-5.jpg',
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), Vue.js, Babylon.js, Blender'
        },
        {
          url: 'img/buildingwithai-2.jpg',
          caption: 'Fully responsive experience that is optimized for Google Cardboard'
        },
        {
          url: 'img/buildingwithai-4.jpg',
          caption: 'Also optimized for Mobile, Tablet and Desktop use'
        },
        {
          url: 'img/buildingwithai-1.jpg',
          caption: 'All content, design and code developed in-house '
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

  // Pinball Lizard
  $(".learn-more--pinballlizard").on('click', function(){
      Strip.show([
        {
          url: 'img/pinballlizard-1.jpg',
          caption: 'Pinball Lizard is a demo game and full sample code to teach you how to implement key LiveOps concepts into your game using PlayFab and Unity'
        },
        {
          url: 'img/pinballlizard-2.jpg',
          caption: 'Mobile App was created using the Unity game engine for development as well as Blender for 3D asset creation'
        },
        {
          url: 'img/pinballlizard-3.jpg',
          caption: 'Landing Page was created using HTML5, CSS3, JavaScript (ES6), Vue.JS, Anime.js'
        },
        {
          url: 'img/pinballlizard-4.jpg',
          caption: 'Pinball Lizard was created to be a teaching tool to demonstrate LiveOps technique implementation while also being a fully functional mobile game'
        },
        {
          url: 'img/pinballlizard-5.jpg',
          caption: 'All content, design and code was developed in-house'
        },
        {
          url: 'img/pinballlizard-6.jpg',
          caption: 'Landing page was fully responsive and cross-browser optimized'
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
