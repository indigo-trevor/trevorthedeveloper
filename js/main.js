$(document).ready(function() {
  console.log("main.js loaded");

  // START: Nav
  // Init
  $(function () {
    $('.nav-wrapper').stickyNavbar({
    activeClass: "active",          // Class to be added to highlight nav elements
    sectionSelector: "scrollto",    // Class of the section that is interconnected with nav links
    animDuration: 250,              // Duration of jQuery animation
    startAt: 56,                     // Stick the menu at XXXpx from the top of the this() (nav container)
    easing: "linear",               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
    animateCSS: false,               // AnimateCSS effect on/off
    animateCSSRepeat: false,        // Repeat animation everytime user scrolls
    cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector
    jqueryEffects: false,           // jQuery animation on/off
    jqueryAnim: "slideDown",        // jQuery animation type: fadeIn, show or slideDown
    selector: "li",                  // Selector to which activeClass will be added, either "a" or "li"
    mobile: true,                  // If false nav will not stick under 480px width of window
    mobileWidth: 480,               // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
    zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
    stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
    unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
    });
  });

  // Reinit on resize
  $( window ).resize(function() {
    console.log("Window Resize");
    $(function () {
      $('.nav-wrapper').stickyNavbar({
      activeClass: "active",          // Class to be added to highlight nav elements
      sectionSelector: "scrollto",    // Class of the section that is interconnected with nav links
      animDuration: 250,              // Duration of jQuery animation
      startAt: 56,                     // Stick the menu at XXXpx from the top of the this() (nav container)
      easing: "linear",               // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
      animateCSS: false,               // AnimateCSS effect on/off
      animateCSSRepeat: false,        // Repeat animation everytime user scrolls
      cssAnimation: "fadeInDown",     // AnimateCSS class that will be added to selector
      jqueryEffects: false,           // jQuery animation on/off
      jqueryAnim: "slideDown",        // jQuery animation type: fadeIn, show or slideDown
      selector: "li",                  // Selector to which activeClass will be added, either "a" or "li"
      mobile: true,                  // If false nav will not stick under 480px width of window
      mobileWidth: 480,               // The viewport width (without scrollbar) under which stickyNavbar will not be applied (due usability on mobile devices)
      zindex: 9999,                   // The zindex value to apply to the element: default 9999, other option is "auto"
      stickyModeClass: "sticky",      // Class that will be applied to 'this' in sticky mode
      unstickyModeClass: "unsticky"   // Class that will be applied to 'this' in non-sticky mode
      });
    });
  });


  // Squeeze
    $(".hamburger--squeeze").click(function(){
        $(".hamburger--squeeze").toggleClass("is-active");
        $(".nav").toggleClass("is-active");
    });

  // END: Nav

});
