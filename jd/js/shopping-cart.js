window.onload = () => {
  let fh = document.querySelector("#fh");
  fh.addEventListener("click", () => {
    window.location.href = "../index.html";
  });


  //获取所有的复选框
  let checkbox = document.querySelectorAll(".i");
  let red = document.querySelector(".red"),
	  font_color = red.children[0],
	  font_color_num = font_color.children[0];
	  text_inner = document.querySelector('.xq-top').children[1];

	// 遍历复选框绑定事件   
  for (let i = 0; i < checkbox.length - 1; i++) {
    checkbox[i].index = i;
    checkbox[i].addEventListener("click", () => {
      let dom = checkbox[i].getAttribute("checked");
      if (dom !== null) {
		remove_attr(checkbox[i]);
		font_color.style.color = "#999";
		red.style.backgroundColor = '#ccc';
		text_inner.innerHTML = '¥0.00';
		font_color_num.innerHTML = '(0件)';
      } else {
		set_attr(checkbox[i]);
		red.style.backgroundColor = 'red';
		font_color.style.color = "#fff";
		text_inner.innerHTML = '¥4555.00';
		font_color_num.innerHTML = '(5件)';				
      }
    });
  }

  // 全选
  checkbox[6].addEventListener("click", () => {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[6].getAttribute("checked") !== null) {
		remove_attr(checkbox[i]);
		font_color.style.color = "#999";		
		red.style.backgroundColor = '#ccc';	
		text_inner.innerHTML = '¥0.00';
		font_color_num.innerHTML = '(0件)';		
      } else {
		set_attr(checkbox[i]);
		red.style.backgroundColor = 'red';
		font_color.style.color = "#fff";
		text_inner.innerHTML = '¥4555.00';
		font_color_num.innerHTML = '(5件)';		
      }
    }
  });

//   第一个京东自营，类似于全选
  checkbox[0].addEventListener("click", () => {
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].getAttribute("checked") !== null) {
        remove_attr(checkbox[i]);
        remove_attr(checkbox[0]);
      } else {
        set_attr(checkbox[i]);
        set_attr(checkbox[0]);
      }
    }
  });


	// 删除弹窗
	let deletes = document.querySelectorAll('.delete');
	for (let i = 0; i < deletes.length; i++) {
		deletes[i].addEventListener('click',()=>{
			alert('您确定删除该商品？');
		}) 
	}  
};



//  复选框函数
function remove_attr(obj){
	obj.removeAttribute("checked");
}

function set_attr(obj){
	obj.setAttribute("checked", "checked");
}