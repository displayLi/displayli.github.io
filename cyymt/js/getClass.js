		//  自定义兼容类获取封装

		function getClass(classname,id) {

			//  支持className
			if (document.getElementsByClassName) {
				
				// 有 id 的情况下
				if (id) {
					var byId = document.getElementById(id);
					return byId.getElementsByClassName(classname);
				} else{
				 	return document.getElementsByClassName(classname);
				}
			}//  不支持className
			else{

				// 没有id的情况下
				if (id) {
					var byId = document.getElementById(id);
					var dom = byId.getElementsByTagName("*");
				} else{
					var dom = document.getElementsByTagName("*");
				}
			}

			// 声明数组利用split截取分割
			var arr = [];
			for (var i = 0; i<dom.length; i++) {
				var txt = dom[i].className.split(" ");
				for (var j = 0; j<txt.length; j++) {
					if (txt[j] == classname) {
						arr.push(dom[i]);
					}
				}
			}
			return arr;
		}