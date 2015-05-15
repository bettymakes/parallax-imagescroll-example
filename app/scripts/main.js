'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    $('.img-container').imageScroll();

    var sticky = new Waypoint.Sticky({
      element: $('h1')[0]
    })

    console.log(sticky);
  });
})(jQuery);
