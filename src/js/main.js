$( document ).ready(function() {

	// SCROLL ANIMATION
    var $animationElements = $('.animate-element');
    var $window = $(window);

    function checkIfInView() {
      var windowHeight = $window.height();
      var windowTopPosition = $window.scrollTop();
      var windowBottomPosition = (windowTopPosition + windowHeight);
      $.each($animationElements, function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);
        //check to see if this current container is within viewport
        if ((elementBottomPosition >= windowTopPosition) &&
            (elementTopPosition <= windowBottomPosition)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
    $window.on('scroll resize', checkIfInView);
    $window.trigger('scroll');

    
   


    
    
    /// EXECUTE SCRIPTS ON MOBILE ONLY
    if (Modernizr.mq('(min-width: 992px)')) {
        // SIMPLE PARALLAX https://www.thirdandgrove.com/super-simple-parallax-effect-jquery-or-native-js

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var imgPos = scrollTop / 2 + 'px';
        $('.phone-container').find('img').css('transform', 'translateY(' + imgPos + ')');
    });


    }

    if (Modernizr.mq('(max-width: 991px)')) {
        
    }

    if (Modernizr.mq('(max-width: 767px)')) {
      
    }


});
function init() {
  $('body').removeClass('fade-out');
}
window.onload = init();