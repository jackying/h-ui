/* =======================================================================
 * jQuery.Huipreview.js v2.0 图片预览
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.05.05
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huipreview = function(options){
		var defaults = {
			className:"active",
			bigImgWidth: 300,
		}
		var options = $.extend(defaults, options);
		this.each(function(){
			var that = $(this);
			var timer;
			that.hover(
				function() {
					clearTimeout(timer);
					timer = setTimeout(function () {
						$("#preview-wraper").remove();
						var smallImg = that.find("img").attr("src");
						var bigImg = that.attr('data-src');
						var bigImgW = that.attr('data-width');
						var bigImgH = that.attr('data-height');
						var winW = $(window).width();
						var winW5 = winW / 2;
						var imgT = that.parent().offset().top;
						var imgL = that.parent().offset().left;
						var imgW = that.parent().width();
						var imgH = that.parent().height();
						var ww = (imgL + imgW / 2);
						var tooltipLeft = "auto",tooltipRight = "auto";
						if (ww < winW5) {
							tooltipLeft = (imgW + imgL) + "px";
						} else {
							tooltipRight = (winW - imgL) + "px";
						}
						
						that.addClass(options.className);				
						if (bigImg == '') {
							return false;
						} else {	
							var tooltip_keleyi_com = 
							'<div id="preview-wraper" style="position: absolute;width:'+options.bigImgWidth+'px;height:auto;top:' + imgT + 'px;right:' + tooltipRight + ';left:' + tooltipLeft + '">'+
								'<img src="'+smallImg+'" width="'+options.bigImgWidth+'">'+
							'</div>';
							$("body").append(tooltip_keleyi_com);
							/*图片预加载*/
							var image = new Image();
							image.src = bigImg;
							/*创建一个Image对象*/
							image.onload = function() {
								$('#preview-wraper').find("img").attr("src",bigImg).css("width",options.bigImgWidth);
							};
						}
					},500);
				},
				function() {
					clearTimeout(timer);
					that.removeClass(options.className);
					$("#preview-wraper").remove();
				}
			);
		});
	}	
} (window.jQuery);