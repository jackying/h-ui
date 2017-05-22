/* =======================================================================
 * jQuery.stopDefault.js 阻止默认浏览器动作
 * ======================================================================== */
function stopDefault(e) {
	if (e && e.preventDefault) e.preventDefault();
	//IE中阻止函数器默认动作的方式
	else window.event.returnValue = false;
	return false;
}