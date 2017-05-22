/* =======================================================================
 * jQuery.Huitagsmixed.js 标签混排效果
 * ========================================================================*/
!function($) {
	$.Huitagsmixed = function(obj) {
		$(obj).each(function() {
			var x = 9;
			var y = 0;
			var rand = parseInt(Math.random() * (x - y + 1) + y);
			$(this).addClass("tags" + rand);
		});
	}
} (window.jQuery);