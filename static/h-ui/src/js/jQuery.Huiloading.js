/* =======================================================================
 * jQuery.Huiloading.js v1.0 Huiloading
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.07.18
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.Huiloading =  {
		show:function(messages){
			if ($(".loading-wraper").length > 0) {
				$(".loading-wraper").remove();
			}
			if( messages == null ) messages = '';  
			var htmlstr = '<div class="loading-wraper"><div class="loading-content"><i class="iconpic iconpic-loading"></i> <span>'+messages+'</span></div></div>';
			$(document.body).append(htmlstr);
			var w = $(".loading-wraper .loading-content").width()+40;
			$(".loading-wraper .loading-content").css({
				"margin-left":-(w/2)+"px",
			});
		},
		hide:function(){
			$(".loading-wraper").remove();
		}
	}
} (window.jQuery);