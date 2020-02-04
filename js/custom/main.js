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
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), SCSS, Webpack, Vue.js, Anime.js, Babylon.js'
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
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript(ES6), SCSS, Webpack, Vue.js, Lottie.js, Anime.js'
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
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), SCSS, Webpack, Vue.js, Babylon.js, Blender'
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

  // Alpha Universe
  $(".learn-more--alphauniverse").on('click', function(){
      Strip.show([
        {
          url: 'img/alphauniverse-1.jpg',
          caption: 'Sony Alpha Universe is a social networking community of industry-leading photographers. We designed, developed and maintained the website for the past 2 years'
        },
        {
          url: 'img/alphauniverse-4.jpg',
          caption: 'We assisted Sony in the ideation, creation and execution of many specific campaigns and promotions including the Be Alpha campaign'
        },
        {
          url: 'img/alphauniverse-2.jpg',
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), SCSS, Webpack, Angular.js, Zesty (CMS)'
        },
        {
          url: 'img/alphauniverse-5.jpg',
          caption: 'Fully responsive website that is optimized for Mobile, Tablet and Desktop use'
        },
        {
          url: 'img/alphauniverse-3.jpg',
          caption: 'We continuously aimed to optimize and improve the platform, working around numerous technological constraints'
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

  // Concur - Guided Demos
  $(".learn-more--concurguideddemo").on('click', function(){
      Strip.show([
        {
          url: 'img/concurguideddemo-1.jpg',
          caption: 'Two interactive web-based guided demos showcasing users how to capture expenses from any device, submit an expense report to their manager, and learn what it looks like to approve a report using SAP Concur'
        },
        {
          url: 'img/concurguideddemo-3.jpg',
          caption: 'Created two seperate Guided Demos.  One showcasing Expense functionality.  One showcasing Invoicing functionality.'
        },
        {
          url: 'img/concurguideddemo-2.jpg',
          caption: 'Localized to over 25 markets globally.'
        },
        {
          url: 'img/concurguideddemo-5.jpg',
          caption: 'Technologies utilized: HTML5, CSS3, JavaScript (ES6), Webpack, SCSS, Vue.js, Greensock.js (GSAP)'
        },
        {
          url: 'img/concurguideddemo-4.jpg',
          caption: 'Fully responsive website that is optimized for Mobile, Tablet and Desktop use'
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

  // AR Scavenger Hunt App
  $(".learn-more--arscavengerhunt").on('click', function(){
      Strip.show([
        {
          url: 'img/ar-5.jpg',
          caption: 'Augmented Reality / Native Mobile app built for the Microsoft Data Insights Summit conference. Deployed in both the Apple Store and Google Play Store. '
        },
        {
          url: 'img/ar-1.jpg',
          caption: 'Created superheroes to represent featured Microsoft products for the Data Insights Summit. Product-focused superhero posters, with supporting AR hotspots, created a summit-wide scavenger hunt for attendees.'
        },
        {
          url: 'img/ar-2.jpg',
          caption: 'After downloading the app (from Apple or Google Play), attendees collected points by scanning hotspots. Each overlay included a short product message.'
        },
        {
          url: 'img/ar-3.jpg',
          caption: 'Data from the app was pulled into a Power BI dashboard which appeared as a live leaderboard in the community booth, where attendees could “cash in” their points to receive t-shirts and other promotional items.'
        },
        {
          url: 'img/ar-4.jpg',
          caption: 'Technologies utilized: Unity game engine.'
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

  // Workpalce Insights
  $(".learn-more--workplaceinsights").on('click', function(){
      Strip.show([
        {
          url: 'img/workplaceinsights-1.jpg',
          caption: 'Thought leadership blog website created for Microsoft client.  Complete custom design along will fully functional CMS infrastructure.  Architected, built and maintained prioritizing the use componentized templates and blocks so the client has complete flexibility with content and design.'
        },
        {
          url: 'img/workplaceinsights-2.jpg',
          caption: 'Continuously working with the client to create custom assets within the site.  Including custom articles, videos and thought leadership pieces.'
        },
        {
          url: 'img/workplaceinsights-3.jpg',
          caption: 'Continuously monitoring and improving the performance of the site based on Analytic reporting, SEO and user testing.'
        },
        {
          url: 'img/workplaceinsights-4.jpg',
          caption: 'Technologies utilized: HTML5, CSS3, ES6 (JavaScript), Webpack, SCSS, WordPress, Adobe Analytics, Vue.js, Particles.js.'
        },
        {
          url: 'img/workplaceinsights-5.jpg',
          caption: 'The site was created to be fully responsive from mobile, tablet, desktop-up'
        },
        {
          url: 'img/workplaceinsights-6.jpg',
          caption: 'We also charge Demand Gen efforts to help promote adoption of the site. '
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
