/* =======================================================================
 * jQuery.Huitotop.js v2.0 返回顶部
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.05
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	//bottom 距离底部高度
	$.Huitotop = function(bottom){		
		if(!bottom){
			bottom = 60;
		}
		var str ='<a href="javascript:void(0)" class="tools-right toTop Hui-iconfont" title="返回顶部" alt="返回顶部" style="display:none;bottom:'+bottom+'px">&#xe684;</a>';
		$(str).appendTo($('body')).click(function() {
			$("html, body").animate({
				scrollTop: 0
			},
			120);
		});
		var backToTopFun = function(){
			var st = $(document).scrollTop();
			var winh = $(window).height();
			console.log(st,winh);
			if(st> 0){
				$(".toTop").show();
			}else{
				$(".toTop").hide();
			}
			/*IE6下的定位*/
			if (!window.XMLHttpRequest) {
				$(".toTop").css("top", st + winh - 166);
			}
			
		}		
		$(window).on("scroll",backToTopFun);	
	}
} (window.jQuery);