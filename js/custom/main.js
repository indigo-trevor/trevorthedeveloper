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

// or objects
  $(".card--work--digital-transformation").on('click', function(){
      Strip.show([
        {
          url: 'img/digital-transformation-1.jpg',
          options: {
            side: 'right'
          },
          caption: 'Interactive website build built for Microsoft showcasing 8 real-world digital transformation lessons.'
        },
        {
          url: 'img/trevor-zen.jpg',
          options: {
            side: 'right'
          },
          caption: 'Caption for this image'
        },
      ]);
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
