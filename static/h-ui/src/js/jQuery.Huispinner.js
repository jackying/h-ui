/* =======================================================================
 * jQuery.Huispinner.js v2.1.2 微调器
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.06.26
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {	
	$.fn.Huispinner = function(options, callback) {
		var defaults = {
			value : 1,
			minValue : 1,
			maxValue : 999,
			dis : 1,
		}
		var options = $.extend(defaults, options);
		var keyCodes = {
			up : 38,
			down : 40
		}

		this.each(function() {
			var that = $(this);
			var str = '<div class="spinner">'
					+ '<a class="subtract" href="javascript:void(0)"><i>-</i></a>'
					+ '<input class="amount input-text" value="'
					+ options.value + '" autocomplete="off">'
					+ '<a class="add" href="javascript:void(0)"><i>+</i></a>'
					+ '</div>';
			that.append(str);

			var input = that.find(".input-text"),
				subtract = that.find(".subtract"),
				add = that.find(".add"),
				value = parseInt(input.val());

			if (value <= options.minValue) {
				subtract.addClass("disabled");
				add.removeClass("disabled");
			}
			if (value >= options.maxValue) {
				subtract.removeClass("disabled");
				add.addClass("disabled");
			}

			// 输入框失去焦点
			input.on('blur', function() {
				var v = $(this).val();
				v = v.replace(/[^\d]/g, "");
				v = v.replace(/\b(0+)/gi, "");

				if (v != "") {
					if (v > options.minValue && v < options.maxValue) {
						input.val(v)
						add.removeClass("disabled");
						subtract.removeClass("disabled");
					} else {
						if (v <= options.minValue) {
							input.val(options.minValue);
							subtract.addClass("disabled");
							add.removeClass("disabled");
						} else {
							input.val(options.maxValue);
							subtract.removeClass("disabled");
							add.addClass("disabled");
						}
					}
				} else {
					$(this).val(options.minValue);
					subtract.addClass("disabled");
					add.removeClass("disabled");
				}
				if (callback) {
					callback(input.val());
				}
			});

			// 上下方向键
			input.on("keydown", function(e) {
				var evt = e || window.event;
				if (evt.keyCode === keyCodes.up) {
					subtract.trigger("click");
					evt.returnValue = false;
				}
				if (evt.keyCode === keyCodes.down) {
					add.trigger("click");
					evt.returnValue = false;
				}
			});

			// 减
			subtract.on('click', function() {
				var goodsCount = parseInt(input.val());
				input.val(goodsCount <= options.minValue
						? options.minValue
						: goodsCount - options.dis);
				add.removeClass("disabled");
				if (input.val() <= options.minValue) {
					input.val(options.minValue)
					subtract.addClass("disabled");
				}
				if (callback) {
					callback(input.val());
				}
			});

			// 加
			add.on('click', function() {
				var goodsCount = parseInt(input.val());
				input.val(goodsCount >= options.maxValue
						? options.maxValue
						: goodsCount + options.dis);
				subtract.removeClass("disabled");

				if (input.val() >= options.maxValue) {
					input.val(options.maxValue);
					add.addClass("disabled");
				}
				if (callback) {
					callback(input.val());
				}
			});
		});
	}
}(window.jQuery);