/* =======================================================================
 * jQuery.Huialert.js alert
 * ========================================================================*/
!function($) {
	$.Huialert = function() {
		$.Huihover('.Huialert i');
		$(".Huialert i").on("click",
		function() {
			var Huialert = $(this).parents(".Huialert");
			Huialert.fadeOut("normal",
			function() {
				Huialert.remove();
			});
		});
	}
	$.Huialert();
} (window.jQuery);