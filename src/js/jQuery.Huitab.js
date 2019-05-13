/* =======================================================================
 * jQuery.Huitab.js v2.0.1 选项卡
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.10.10
 *
 * Copyright 2017 郭俊辉 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huitab = function(options, callback){
		var defaults = {
			tabBar:'.tabBar span',
			tabCon:".tabCon",
			className:"current",
			tabEvent:"click",
			index:0,
		}
		var options = $.extend(defaults, options);
		this.each(function(){
			var that = $(this);
			that.find(options.tabBar).removeClass(options.className);
			that.find(options.tabBar).eq(options.index).addClass(options.className);
			that.find(options.tabCon).hide();
			that.find(options.tabCon).eq(options.index).show();
			
			that.find(options.tabBar).on(options.tabEvent,function(){
				that.find(options.tabBar).removeClass(options.className);
				$(this).addClass(options.className);
				var index = that.find(options.tabBar).index(this);
				that.find(options.tabCon).hide();
				that.find(options.tabCon).eq(index).show();
				if (callback) {
					callback();
				}
			});
		});
	}
} (window.jQuery);