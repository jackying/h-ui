/* =======================================================================
 * jquery.emailsuggest.js v1.0 邮箱自动提示
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function($) {
	var
	// 插件名 
	plugin = 'emailsuggest',

	// 默认参数配置
	defaults = {
		sugClass: 'emailSug',
		domains: ['163.com', '126.com', 'sohu.com', '139.com', 'sina.com', 'qq.com', 'gmail.com']
	};

	function EmailSug(elem, options) {
		this.$field = $(elem);
		this.options = $.extend(true, {},
		defaults, options);
		this._defaults = defaults;
		this._domains = this.options.domains;
		// 当前选中元素下标
		this.selectedIndex = 0;

		this.init();
	}

	EmailSug.prototype = {
		init: function() {
			this.addEvent();
		},

		addEvent: function() {
			var that = this,
			value;

			this.$field.on('keyup.ema',
			function(e) {
				value = $.trim(this.value);

				if (value) {
					that.create(this, value);
					that.doSelect(e.keyCode);
				} else {
					that.hide();
				}
			}).on('blur.ema',
			function() {
				setTimeout(function() {
					that.hide();
				},
				200);
			});
		},
		create: function(elem, value) {
			var that = this,
			arr, len, fragment, ul = [],
			offset,
			left,
			top,
			width,
			height,
			style,
			// 左右边框 
			borderWidth = 2;

			elem = $(elem);
			offset = elem.offset();
			width = elem.outerWidth(true) - borderWidth;
			height = elem.outerHeight(true);
			left = offset.left;
			top = offset.top + height;
			style = 'left: ' + left + 'px; top: ' + top + 'px; width: ' + width + 'px; border: 1px solid #e2e2e2; border-top: 0; display: none';
			fragment = $('<div class="' + this.options.sugClass + '-wrapper" style="' + style + '" />');
			ul.push('<ul class="' + this.options.sugClass + '-list">');

			arr = this.filter(value, this._domains);
			len = arr.length;
			$.each(arr,
			function(i, domain) {
				var _class = that.options.sugClass + '-item';

				if (that.selectedIndex > len - 1) {
					if (i === 0) {
						_class += ' active';
						that.selectedIndex = 0;
					}
				} else {
					if (i === that.selectedIndex) {
						_class += ' active';
					}
				}
				ul.push('<li class="' + _class + '" data-index="' + i + '">' + value.replace(/@.*/, '') + '@' + domain + '</li>');
			});

			ul.push('</ul>');
			ul = ul.join('');
			if (this.$suggest) {
				this.$suggest.empty();
				this.$suggest.append(ul);
			} else {
				fragment.append(ul);
				// 显示到页面
				$('body').append(fragment);
				this.$suggest = fragment;
				this.$suggest.on('mouseenter click', '.' + this.options.sugClass + '-item',
				function(e) {
					var lis, li;
					li = $(this);
					lis = li.parent().children();
					if (e.type === 'mouseenter') {
						li.addClass('active').siblings().removeClass('active');
						that.selectedIndex = $.inArray(this, lis);
					} else {
						// 当前选中
						that.$field.val(lis.eq(that.selectedIndex).text());
						// 隐藏email sug
						that.hide();
					}
				});
			}
			this.show();
		},

		doSelect: function(keyCode) {
			var elems = $('.' + this.options.sugClass + '-item', this.$suggest),
			min = 0,
			max = elems.length - 1;
			switch (keyCode) {
			case 13:
				// 回车选中当前已选项
				$('li.active', this.$suggest).trigger('click');

				// 下标重置
				this.selectedIndex = 0;

				break;
				// 向上
			case 38:
				this.selectedIndex--;

				if (this.selectedIndex < min) {
					this.selectedIndex = max;
				}

				elems.removeClass('active').eq(this.selectedIndex).addClass('active');
				break;
				// 向下 
			case 40:
				this.selectedIndex++;

				if (this.selectedIndex > max) {
					this.selectedIndex = min;
				}

				elems.removeClass('active').eq(this.selectedIndex).addClass('active');
				break;
			default:
				break;
			}
		},
		filter: function(value, arr) {
			var start, suffix, r = [];

			start = value.indexOf('@');
			if (start > -1) {
				suffix = value.substring(start + 1);
				$.each(arr,
				function(i, str) {
					if (str.indexOf(suffix) > -1) {
						r.push(str);
					}
				});
			} else {
				r = arr;
			}
			return r;
		},
		show: function() {
			if (this.$suggest) {
				this.$suggest.show();
			}
		},

		hide: function() {
			if (this.$suggest) {
				this.$suggest.hide();
			}
		}
	}

	$.fn[plugin] = function(options) {
		return this.each(function() {
			if (!$.data(this, plugin)) {
				$.data(this, plugin, new EmailSug(this, options));
			}
		});
	}
} (window.jQuery);