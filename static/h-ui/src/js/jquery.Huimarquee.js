/* =======================================================================
 * jQuery.Huimarquee.js 滚动
 * ========================================================================*/
!function($) {
	$.Huimarquee = function(height, speed, delay) {
		var scrollT;
		var pause = false;
		var ScrollBox = document.getElementById("marquee");
		if (document.getElementById("holder").offsetHeight <= height) return;
		var _tmp = ScrollBox.innerHTML.replace('holder', 'holder2');
		ScrollBox.innerHTML += _tmp;
		ScrollBox.onmouseover = function() {
			pause = true;
		}
		ScrollBox.onmouseout = function() {
			pause = false;
		}
		ScrollBox.scrollTop = 0;
		var start = function() {
			scrollT = setInterval(scrolling, speed);
			if (!pause) ScrollBox.scrollTop += 2;
		}
		var scrolling = function() {
			if (ScrollBox.scrollTop % height != 0) {
				ScrollBox.scrollTop += 2;
				if (ScrollBox.scrollTop >= ScrollBox.scrollHeight / 2) ScrollBox.scrollTop = 0;
			} else {
				clearInterval(scrollT);
				setTimeout(start, delay);
			}
		}
		setTimeout(start, delay);
	}
} (window.jQuery);