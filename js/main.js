function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');
      
        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;
        
        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%'
        });
  });
}

onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".site_header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});



// Smooth scroll - Click anchor tag to smoothly scroll you to the relavant section
$(function() {
  	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
});


$('nav.site_nav a').on('click', function() {

    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
        // $('nav.site_nav').addClass('fixed');
        $('.main_content section').each(function(i) {
            if ($(this).position().top <= windscroll - 20) {
                $('nav.site_nav a.active').removeClass('active');
                $('nav.site_nav a').eq(i).addClass('active');
            }
        });

    } else {

        // $('nav.site_nav').removeClass('fixed');
        $('nav.site_nav a.active').removeClass('active');
        $('nav.site_nav a:first').addClass('active');
    }

}).scroll();







