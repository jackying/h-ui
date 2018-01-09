/* =======================================================================
 * jQuery.Huimodalalert.js alert
 * ========================================================================*/
!function($) {
	$.Huimodalalert = function(info, speed) {
		if ($(".modal-alert").length > 0) {
			$(".modal-alert").remove();
		}
		if (speed == 0 || typeof(speed) == "undefined") {
			$(document.body).append('<div id="modal-alert" class="modal modal-alert radius">' + '<div class="modal-alert-info">' + info + '</div>' + '<div class="modal-footer"> <button class="btn btn-primary radius" onClick="$.Huimodal_alert.hide()">确定</button></div>' + '</div>');
			$("#modal-alert").fadeIn();
		} else {
			$(document.body).append('<div id="modal-alert" class="modal modal-alert radius">' + '<div class="modal-alert-info">' + info + '</div>' + '</div>');
			$("#modal-alert").fadeIn();
			setTimeout($.Huimodalalert.hide, speed);
		}
	}
	$.Huimodalalert.hide = function() {
		$("#modal-alert").fadeOut("normal",
		function() {
			$("#modal-alert").remove();
		});
	}
} (window.jQuery);

!function ($) {
	$.fn.Huimodalalert = function (options, callback) {
		var defaults = {
			btn: ['确定'],
			content:'弹窗内容',
			speed: "0",
			area: ['400', 'auto'],
		};
		var options = $.extend(defaults, options);
		this.each(function () {
			var that = $(this);
			var w= 0,h=0,t=0,l=0;
			if (options.area[0]=='auto'){
				w ='400px';
				l = -(400 / 2) + 'px';
			}else{
				w = options.area[0] + 'px';
				l = -(options.area[0] / 2) + 'px';
			}
			if (options.area[1] == 'auto') {
				h = 'auto';
			} else {
				h = options.area[1] + 'px';
			}
			

			var htmlstr = 
				'<div id="Huimodalalert" class="modal modal-alert radius" style="width:' + w + ';height:' + h + ';margin-left:' + l +'">' + 
				'<div class="modal-alert-info">' + options.content + '</div>' + 
				'<div class="modal-footer">'+
					'<button class="btn btn-primary radius">' + options.btn[0]+'</button>'+
				'</div>' + 
			'</div>'+
			'<div id="Huimodalmask" class="Huimodalmask"></div>';

			if ($("#Huimodalalert").length > 0) {
				$("#Huimodalalert,#Huimodalmask").remove();
			}
			if (options.speed==0){
				$(document.body).addClass("modal-open").append(htmlstr);
				$("#Huimodalalert").fadeIn();
			}else{
				$(document.body).addClass("modal-open").append(htmlstr);
				$("#Huimodalalert").find(".modal-footer").remove();
				$("#Huimodalalert").fadeIn();
				setTimeout(function(){
					$("#Huimodalalert").fadeOut("normal",function () {
						huimodalhide();
					});
				}, options.speed);
			}
			
			var button = that.find(".modal-footer .btn");
			button.on("click",function(){
				$("#Huimodalalert").fadeOut("normal", function () {
					huimodalhide();
				});
			});

			function huimodalhide(){
				$("#Huimodalalert,#Huimodalmask").remove();
				$(document.body).removeClass("modal-open");
				if (callback) {
					callback();
				}
			}
		});
	}
}(window.jQuery);