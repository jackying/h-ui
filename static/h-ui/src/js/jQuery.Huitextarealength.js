/* =======================================================================
 * jQuery.Huitextarealength.js v2.0 字数限制
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.12
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huitextarealength = function(options){
		var defaults = {
			minlength:0,
			maxlength:300,
			errorClass:"error",
			exceed:true,
		}
		var options = $.extend(defaults, options);
		this.each(function(){			
			var that = $(this);
			var v = that.val();
			var l = v.length;
			var str = '<p class="textarea-numberbar"><em class="textarea-length">'+l+'</em>/'+options.maxlength+'</p>';
			that.parent().append(str);
			
			that.on("keyup",function(){
				v = that.val();
				l = v.length;				
				if (l > options.maxlength) {
					if(options.exceed){
						that.addClass(options.errorClass);
					}else{
						v = v.substring(0, options.maxlength);
						that.val(v);
						that.removeClass(options.errorClass);
					}					
				}
				else if(l<options.minlength){
					that.addClass(options.errorClass);
				}else{
					that.removeClass(options.errorClass);
				}
				that.parent().find(".textarea-length").text(v.length);
			});		
			
		});
	}
} (window.jQuery);