/* =======================================================================
 * jquery.HuiaddFavorite.js 添加收藏
 * <a title="收藏本站" href="javascript:;" onClick="addFavoritepage('H-ui前端框架','http://www.h-ui.net/');">收藏本站</a>
 * function shoucang(name,site){
	$.addFavorite({
		name:name,
		site:site,
	});
 * ========================================================================*/
function HuiaddFavorite(obj) {
	obj.site = obj.site || window.location.href;
	obj.name = obj.name || document.title;
	try {
		window.external.addFavorite(obj.site, obj.name);
	} catch(e) {
		try {
			window.sidebar.addPanel(name, site, "");
		} catch(e) {
			$.Huimodalalert("加入收藏失败，请使用Ctrl+D进行添加", 2000);
		}
	}
}
