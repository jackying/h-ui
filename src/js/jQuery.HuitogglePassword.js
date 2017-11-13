/* =======================================================================
 * jQuery.HuitogglePassword.js v2.0 隐藏显示密码
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.05
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.HuitogglePassword = function(options) {
		var defaults = {
			//ev: "click"
		}
		var options = $.extend(defaults, options);
		this.each(function(){
			var that = $(this);
			that.on("focus",function(){
				that.attr("type", "text");
			});
			that.on("blur",function(){
				that.attr("type", "password"); 
			});
		});
	}
} (window.jQuery);