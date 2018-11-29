window.onload = ()=>{
	let fh = document.querySelector('#fh');
	fh.addEventListener('click',()=>{
		window.location.href = '../index.html';
	})

	// tab 标签
	let tab_ul_parent = document.querySelector('.classify-title'),
		tab_ul = tab_ul_parent.children[0],
		tab_li = tab_ul.children;
	let tab_box = document.querySelector('.classify-content').children;

	// 获取ul 和 ul父盒子的高度然后相减
	let ul_height = tab_ul.offsetHeight + 100;
	let ul_parent = tab_ul_parent.offsetHeight;
	let min_ul = ul_parent - ul_height ;
	let max_ul = 0;
	console.log(min_ul);
	
	// tab栏制作
	tab_box[0].style.display = 'block';
	for (let i = 0; i < tab_li.length; i++) {
		tab_li[i].index = i;
		tab_li[i].addEventListener('click',(e)=>{
			for (let j = 0; j < tab_li.length; j++) {
				tab_li[j].className = '';
				tab_box[j].style.display = 'none';
			}
			tab_li[i].className = 'active';
			tab_box[i].style.display = 'block';
		});
	}




	let start_Y = null , move_Y = null , seep = null;
	let current = 150;

	// 当手指放在屏幕上的时候获取当前坐标
	tab_ul.addEventListener('touchstart',(e)=>{
		start_Y = e.touches[0].clientY;
	})

	// 
	tab_ul.addEventListener('touchmove',(e)=>{
		e.preventDefault();
		move_Y = e.touches[0].clientY - start_Y;

		if((move_Y + seep) > max_ul + current){
			move_Y = 0;
			seep = max_ul + current;
		}else if((move_Y + seep) < min_ul - current){
			move_Y = 0;
			seep = min_ul - current;
		}
		tab_ul.style.transform = 'translateY('+ (move_Y + seep) +'px)';
	})

	tab_ul.addEventListener('touchend',()=>{
		seep += move_Y;
		if(seep > max_ul){
			seep = max_ul;
		}else if(seep < min_ul){
			seep = min_ul;
		}
		tab_ul.style.transition = 'all .2s';
		tab_ul.style.transform = 'translateY('+ seep +'px)';
	})
}
