window.onload = function(){
	function byId(id){
		return typeof(id) === "string"?document.getElementById(id):id;
	}

	var slider_box = byId("slider_box"),
		slider = byId("slider"),
		images = slider.children, // 所有的图片

		slider_ctrl = byId("slider_ctrl"),
		slider_span = slider_ctrl.children; // 所有的span

		for (var i = 0; i<images.length; i++) {
			var span = document.createElement("span");
			span.setAttribute("class","slider-ctrl-box");
			span.innerHTML = i+1;
			slider_ctrl.insertBefore(span,slider_span[slider_span.length - 1]);
		}

		slider_span[1].className = "slider-ctrl-box current";
		
		var imagesWidth = images[0].clientWidth;
		for (var j = 1; j<images.length; j++) {
			images[j].style.left = imagesWidth + "px";
		}
	var iNow = 0;
	for(var k in slider_span){
		slider_span[k].onclick = function(){
			if (this.className == "top") 
			{
				animate(images[iNow],{left:images[iNow].clientWidth});
				--iNow < 0 ? iNow = images.length - 1: iNow;
				images[iNow].style.left = - imagesWidth + "px";
				animate(images[iNow],{left:0});
				active();
			}
			else if (this.className == "bottom") 
			{
				// alert("你点击了下一张图片");
				autoPlay();
				active();
			}
			else{
				active();
				var that = this.innerHTML -1;
				if (that > iNow) {
					animate(images[iNow],{left:-images[that].clientWidth});
					images[that].style.left = imagesWidth + "px";
				}
				else if (that < iNow) {
					animate(images[iNow],{left:images[that].clientWidth});
					images[that].style.left = -imagesWidth + "px";
				}
				iNow = that;
				animate(images[iNow],{left:0});
				active();
			}
		}
	}
	var timer = setInterval(autoPlay,3500);
	function autoPlay(){
		animate(images[iNow],{left:-images[iNow].clientWidth});
		++iNow > images.length - 1 ? iNow = 0 : iNow;
		images[iNow].style.left = imagesWidth + "px";
		animate(images[iNow],{left:0});
		active();
	}

	function active(){
		for (var i = 1; i<slider_span.length-1;i++ ) {
			slider_span[i].className = "slider-ctrl-box";
		}
			slider_span[iNow+1].className = "slider-ctrl-box current";
	}

	slider_span[0].style.display = "none";
	slider_span[slider_span.length-1].style.display = "none";

	slider_box.onmouseover = function(){
		clearInterval(timer);
		slider_span[0].style.display = "block";
		slider_span[slider_span.length-1].style.display = "block";
	}
	slider_box.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(autoPlay,3500);
		slider_span[0].style.display = "none";
		slider_span[slider_span.length-1].style.display = "none";
	}

	// var tab_box = byId("tab").getElementsByTagName("div");

	// for (var i = 0; i<tab_box.length; i++) {
	// 	tab_box[i].onmouseover = function(){
	// 		bgColor(this,"#333","#fff");
	// 	}
	// 	tab_box[i].onmouseout = function(){
	// 		bgColor(this,"#fff","#333");
	// 	}
	// }

	// var abtn = getClass("abtn","textImg");

	// for (var i = 0 ; i<abtn.length; i++) {
	// 	abtn[i].onmouseover = function(){
	// 		bgColor(this,"#333","#fff");
	// 	}
	// 	abtn[i].onmouseout = function(){
	// 		bgColor(this,"#fff","#333");
	// 	}
	// }

	// function bgColor(obj,bgc,colr){
	// 	obj.style.backgroundColor = bgc;
	// 	obj.style.color = colr;
	// }

	var btnTop = byId("btnTop");

	window.onscroll = function(){
		var scrolls = scroll().top;
		console.log(scrolls);
		if (scrolls >= 1990) {
			btnTop.style.display = "block";
		}else{
			btnTop.style.display = "none";
		}
		if (scrolls >= 1000) {
			$(".inner-content").show(1000);
		}
		if (scrolls >= 2066) {
			$(".tab").fadeIn(1000);
		}
		if (scrolls >= 3355) {
			$(".text-img").show(1000);
		}
	}

	function scroll(){
		if (window.pageYOffset != null) {
			return{
				left:window.pageXOffset,
				top:window.pageYOffset
			}
		}
		else if (document.compatMode == "CSS1Compat" ) {
			return{
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		return{
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}
	}
}