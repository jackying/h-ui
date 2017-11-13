/* =======================================================================
 * jQuery.Huifocusblur.js v2.0 得到失去焦点
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.09
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huifocusblur = function(options){
		var defaults = {
			className:"focus",
		}
		var options = $.extend(defaults, options);
		this.each(function(){			
			var that = $(this);
			that.focus(function() {
				that.addClass(options.className).removeClass("inputError");
			});			
			that.blur(function() {
				that.removeClass(options.className);
			});
		});
	}
} (window.jQuery);