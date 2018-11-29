//  动画函数封装
function animate(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flog = true;
		for (var attr in json) {
			var setp = 0;

			if (attr == "opacity") {
				setp = Math.round(parseInt(classr(obj,attr)*100)) || 0;
			}
			else{
				setp = parseInt(classr(obj,attr));
			}

			var current = parseInt(classr(obj,attr));
			var len = (json[attr] - current)/10;
			len = len > 0 ? Math.ceil(len) : Math.floor(len);

			// 判断是否存在 opacity 和 zIndex

			if (attr == "opacity") {
				if ("opacity" in obj.style) {
					obj.style.opacity = (setp + len)/100;
				}
				else{
					obj.style.filter = "alpha(opacity = "+(setp*100)+");"
				}
			}
			else if(attr == "zIndex"){
				obj.style.zIndex = json[attr];
			}
			else{
				obj.style[attr] = current + len + "px";
			}

			//  判断位置没到该如何做

			if (current != json[attr]) {
				flog = false;
			}
		}

		//  判到位置了清楚定时器，执行回调函数
		if (flog) {
			clearInterval(obj.timer);
			if (fn) {
				fn();
			}
		}
	},30)
}

//  获取节点样式函数
function classr(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr];
	}
}