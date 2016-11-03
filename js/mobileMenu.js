//mobile menu bar

// with zepto script (shorter ver. b/c predefined code)
var width = $(window).width();

if ( width < 500 ) {

	$("#navToggle").removeClass("hidden");
	$("#navCollapse").addClass("hidden");

	//changing attributes of nav-toggle
	$("#navToggle").attr("aria-hidden", "false");
	$("#navCollapse").attr("aria-hidden", "true");
}


$("#navToggle").click( 
	function() {
		$("#navCollapse").toggleClass("hidden");

		if ( $("#navCollapse").hasClass("hidden") ) {
			$("#navCollapse").attr("aria-hidden", "true");
		} else {
			$("#navCollapse").attr("aria-hidden", "false");
		}


	}
);