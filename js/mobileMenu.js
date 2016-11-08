//mobile menu bar

// with zepto script (shorter ver. b/c predefined code)
var width = $(window).width();

if ( width < 500) {
	$(".navMain").addClass("hidden");
	$(".navMainMobile").removeClass("hidden");

	$("#navToggle").attr("aria-hidden", "false");
	$("#navCollapse").attr("aria-hidden", "true");
}

$("#navToggle").click(function() {
		$("#navCollapse").toggleClass("hidden");

		if ( $("#navCollapse").hasClass("hidden") ) {
			$("#navCollapse").attr("aria-hidden", "true");
		} else {
			$("#navCollapse").attr("aria-hidden", "false");
		}


	}
);