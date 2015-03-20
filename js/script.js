 $(document).ready(function() {

// Cache the Window object
    $window = $(window);

    $('a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 300
                }, 1000);
                return false;
            }
        }
    });

  //Placeholder fix IE

  $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();

    resp_tabs.responsiveTabs();

});
$(window).load(function(){

$(window).on("resize", function () {

    $.each(($(".bg")), function() {

    paneHeight = $(this).parent().height();
    paneWidth = $(this).parent().width();
    paneRatio = paneHeight/paneWidth;
    imgHeight = $(this).height();
    imgWidth = $(this).width();
    imgRatio = imgHeight/imgWidth;

    if (paneRatio>=imgRatio) {
    $(this).css({top:'0px', height:paneHeight+'px', width:'auto'});
    leftPos=(($(this).parent().width()-$(this).width())/2)
    $(this).css({left:leftPos+'px'});
    }
    else {
    $(this).css({left:'0px', width:paneWidth+'px', height:'auto'});
    topPos=(($(this).parent().height()-$(this).height())/2)
    $(this).css({top:topPos+'px'});
    }
    });

    }).resize();
});

var top_menu_height = 0;
jQuery(function($) {
		$(window).load( function() {
			$('.external-link').unbind('click');	
		});
		
        $(document).ready( function() {


        top_menu_height = $('.top-menu').height();
        // scroll spy to auto active the nav item
        $('body').scrollspy({ target: '#nav-bar', offset: top_menu_height + 10 });
		$('.external-link').unbind('click');

        // scroll to top
        $('#btn-back-to-top').click(function(e){
            e.preventDefault();
            scrollTo('#top');
        });

        // scroll to specific id when click on menu
        $('.top-menu .navbar-nav a').click(function(e){
            e.preventDefault(); 
            var linkId = $(this).attr('href');
            scrollTo(linkId);
            if($('.navbar-toggle').is(":visible") == true){
                $('.navbar-collapse').collapse('toggle');
            }
            $(this).blur();
            return false;
        });

        // to stick navbar on top
        $('.top-menu ').stickUp();

    
    });
});


// scroll animation 
function scrollTo(selectors)
{

    if(!$(selectors).size()) return;
    var selector_top = $(selectors).offset().top - top_menu_height;
    $('html,body').animate({ scrollTop: selector_top }, 'slow');

}