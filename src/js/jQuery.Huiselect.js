/* =======================================================================
 * jQuery.Huiselect.js v1.0 选择
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.05
 *
 * Copyright 2017 郭俊辉 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huiselect = function(options){
		
	}
	$.Huiselect = function(divselectid, inputselectid) {
		var inputselect = $(inputselectid);
		$(divselectid + " cite").click(function() {
			var ul = $(divselectid + " ul");
			ul.slideToggle();
		});
		$(divselectid + " ul li a").click(function() {
			var txt = $(this).text();
			$(divselectid + " cite").html(txt);
			var value = $(this).attr("selectid");
			inputselect.val(value);
			$(divselectid + " ul").hide();
		});
		$(document).click(function() {
			$(divselectid + " ul").hide();
		});
	};
} (window.jQuery);