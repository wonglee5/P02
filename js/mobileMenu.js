//mobile menu bar

// with zepto script (shorter ver. b/c predefined code)
var width = $(window).width();

if ( width < 500 ) {

	$("#navToggle").removeClass("hidden");
	$("#navMainItem").addClass("hidden");

	//changing attributes of nav-toggle
	$("#navToggle").attr("aria-hidden", "false");
	$("#navMainItem").attr("aria-hidden", "true");
}


$("#navToggle").click( 
	function() {
		$("#navMainItem").toggleClass("hidden");

		if ( $("#navMainItem").hasClass("hidden") ) {
			$("#navMainItem").attr("aria-hidden", "true");
		} else {
			$("#navMainItem").attr("aria-hidden", "false");
		}


	}
);