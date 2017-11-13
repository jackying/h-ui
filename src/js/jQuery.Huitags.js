/* =======================================================================
 * jQuery.Huitags.js v2.0 标签
 * http://www.h-ui.net/
 * Created & Modified by guojunhui
 * Date modified 2017.07.06
 *
 * Copyright 2017 北京颖杰联创科技有限公司 All rights reserved.
 * Licensed under MIT license.
 * http://opensource.org/licenses/MIT
 * ========================================================================*/
!function($) {
	$.fn.Huitags = function(options) {
		var defaults = {
			value:'Hui前端框架,H-ui,辉哥',
			maxlength : 20,
			number : 5,
			tagsDefault : ["Html","CSS","JS"],
		}
		var options = $.extend(defaults, options);
		var keyCodes = {
			Enter : 13,
			Enter2 : 108,
			Spacebar:32
		}
		this.each(function(){
			var that = $(this);
			var str = 
			'<div class="Huitags-wraper">'+
				'<div class="Huitags-editor cl"></div>'+
				'<div class="Huitags-input-wraper">'+
					'<input type="text" class="input-text Huitags-input" maxlength="'+options.maxlength+'" value="">'+
				'</div>'+
				'<div class="Huitags-list">'+
					'<div class="Huitags-notag" style="display:none">暂无常用标签</div>'+
					'<div class="Huitags-has"></div>'+
				'</div>'+
				'<input type="hidden" class="Huitags-val" name="" value="'+options.value+'">'+
			'</div>';
			that.append(str);
			var wraper = that.find(".Huitags-wraper");
			var editor = that.find(".Huitags-editor");
			var input =that.find(".Huitags-input");
			var list = that.find(".Huitags-list");
			var has = that.find(".Huitags-has");
			var val = that.find(".Huitags-val");
			

			
			if(options.tagsDefault){
				var tagsDefaultLength = (options.tagsDefault).length;
				for(var i = 0;i< tagsDefaultLength; i++){
					has.append('<span>'+options.tagsDefault[i]+'</span>');
				}
				has.find("span").on('click',function(){
					var taghasV = $(this).text();
					taghasV=taghasV.replace(/(^\s*)|(\s*$)/g,"");
					var dataStr = val.val();			
					var dataStrArr=dataStr.split(",");
					if(dataStrArr.toString().indexOf(taghasV)>-1){
						console.log("标签不能重复");
						return false;
					}
					else{
						editor.append('<span class="Huitags-token">'+taghasV+'</span>');
						gettagval(this);
						$(this).remove();
					}


					
				});
			}
			
			function gettagval(obj) {
				var str = "";
				var token = that.find(".Huitags-token");
				if (token.length < 1) {
					input.val("");
					return false;
				}
				for (var i = 0; i < token.length; i++) {
					str += token.eq(i).text() + ",";
				}
				str = unique(str, 1);
				str=str.join();
				val.val(str);
			}
			/*将字符串逗号分割成数组并去重*/
			function unique(o, type){
				//去掉前后空格
				o=o.replace(/(^\s*)|(\s*$)/g,"");
				if(type == 1) {
					//把所有的空格和中文逗号替换成英文逗号
					o=o.replace(/(\s)|(，)/g, ",");
				} else {
					//把所有的中文逗号替换成英文逗号
					o=o.replace(/(，)/g, ",");
				}
				//去掉前后英文逗号
				o=o.replace(/^,|,$/g, "");
				//去重连续的英文逗号
				o=o.replace(/,+/g,',');
				o=o.split(",");
				var n = [o[0]]; //结果数组
				for(var i = 1; i < o.length; i++){
					if (o.indexOf(o[i]) == i) {
						if(o[i] == "")
							continue;
						n.push(o[i]);
					}
				}
				return n;
			}
			
			input.on("keydown",function(e){
				var evt = e || window.event;
				if (evt.keyCode == keyCodes.Enter || evt.keyCode == keyCodes.Enter2 || evt.keyCode == keyCodes.Spacebar) {
					var v = input.val().replace(/\s+/g, "");
					var reg = /^,|,$/gi;
					v = v.replace(reg, "");
					v = $.trim(v);
					if (v != '') {
						input.change();
					}else{
						return false;
					}
				}
			});
			
			input.on("change",function(){
				var v1 = input.val();
				var v2 = val.val();
				var v = v2+','+v1;
				if(v!=''){
					var str='<i class="Huitags-icon Hui-iconfont">&#xe64b;</i>';
					var result = unique(v, 1);
					if(result.length>0){
						for(var j=0;j<result.length;j++){
							str+='<span class="Huitags-token">'+result[j]+'</span>';
						}
						val.val(result);
						editor.html(str);
						input.val("").blur();
					}
				}
			});
					
			$(document).on("click",".Huitags-token",function(){
				$(this).remove();
				var str ="";
				if(that.find(".Huitags-token").length<1){
					val.val("");
					return false;
				}else{
					for(var i = 0;i< that.find(".Huitags-token").length;i++){
						str += that.find(".Huitags-token").eq(i).text() + ",";
					}
					str = str.substring(0,str.length-1);
					val.val(str);
				}
			});						
			input.change();
		});
	}
} (window.jQuery);
