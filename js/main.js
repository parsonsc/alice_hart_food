var hamburger = $('#hamburger-icon');
hamburger.click(function() {
  hamburger.toggleClass('active');
  return false;
});

$("#hamburger-icon").click(function(){
  $("nav.site_nav").toggleClass("active fadeIn");
  $("nav.site_nav ul li").toggleClass("animated fadeInDown");
});

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
        offset: '95%'
    });
  });
}
onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container'));

$(function() {
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
          scrollTop: target.offset().top - 175
        }, 1200);
        return false;
      }
    }
	});
});

$('header.site_header.mobile nav.site_nav ul li a').click(function(e) {
  e.preventDefault();
  $('header.site_header.mobile nav.site_nav').removeClass('active');        
});  

var sticky = new Waypoint.Sticky({
  element: $('.book_sidebar')[0]
})
