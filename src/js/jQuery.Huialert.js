/* =======================================================================
 * jQuery.Huialert.js alert
 * ========================================================================*/
!function($) {
	$.Huialert = function() {
		$.Huihover('.Huialert i');
		$(document).on("click",".Huialert i",function() {
			var Huialert = $(this).parents(".Huialert");
			Huialert.fadeOut("normal",function() {
				Huialert.remove();
			});
		});
	}
	$.Huialert();
} (window.jQuery);