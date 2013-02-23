$(document).ready(function(){

/* Toggling fixed sidebar based on scroll position*/
	var $pos 			,
		$screenWidth 	,
		$breakPoint 	= 600,
		$posts 			= $(".posts");
	
	$(window).on('scroll', function() {
		if ($screenWidth >= $breakPoint) {
			if ( $(window).scrollTop() >= $pos) {
					$(".sidebar").addClass("fixed").css({
						'top' : '-' + $pos + 'px'
					});

			} else {
					$(".sidebar").removeClass("fixed");
			}			
		}
	});
	
/* Assign Active class based on page url*/

	$("#old-posts")
		.find('a[href="'+ window.location.pathname.substr(0, window.location.pathname.length -1) +'"]')
		.addClass('selected');

/* Grab the screen dimension for width and relocate "Blabber" is necessary */

	$(window).on('load resize', function() {
		$screenWidth = $(window).width();
		$pos = $(".pivot").offset().top - parseInt($(".container").css('padding-top')) + 10
		DOMManipulate($screenWidth);
	});
	
	function DOMManipulate(screenWidth) {
		if (screenWidth < $breakPoint) {
			$posts.insertAfter(".prime-content");
		} else {
			$posts.appendTo(".sidebar");
		}

		$posts.fadeIn(500);
	}
		
});
