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