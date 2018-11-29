//  封装Ajax异步处理函数
function Ajax(data){
	//  声明创建ajax请求
	var xhr = null; 
	try{
		xhr = new XMLHttpRequest(); // 普通浏览器
	}catch(e){
		xhr = new ActiveXObject('Microsoft.HTTPXML'); // IE
	}

	var types = data.type == 'get' ? 'get' : 'post'; // 判断请求类型
	data.mode == true ? true : false;  // 判断同请求还是异步请求
	var url = '';
	if (data.url) {  // 判断url
		url = data.url;
		if (types == 'get') {  // 判断传入的是json对象还是链接类似于 ?username=1234567&password=1234567;
			url += '?' + data.str + '&_t='+ new Date().getTime();  // 解决内存问题
		}
	}
	//  准备发送
	xhr.open(data.type,url,data.mode); 

	//  发送完毕
	if (types == 'get') {  // 判断是否是get请求方式
		xhr.send(null);
	}else if (types == 'post') {  // 判断是否是post请求方式
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(data.str); // 传到后台的参数
	}
	
	//  回调函数
	xhr.onreadystatechange = function(){
		if (this.readyState == 4) {
			if (this.status == 200) {
				if (typeof data.success == 'function') { // 判断请求成功所执行的函数
					var oft = data.dataType == 'xml' ? this.responseXML : this.responseText; // 判断返回类型是否是xml
					data.success(oft); 
				}
			}else{
				if (typeof data.error == "function") { // 判断请求失败所执行的函数
					data.error();
				}
			}
		}
	}
}
//  传递参数
// var data = {url:'kuaidi_data.php',str:'username=1234567&password=1234567',type:'get', mode:true, success:function(){},failure:function(){}}
