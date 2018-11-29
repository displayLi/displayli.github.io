/*
 * LINK创意工作室前端支持
 */


//scroll 兼容处理
function scroll() {
  if (window.pageYOffset != null) {
    return {
      top: window.pageYOffset,
      left: window.pageXOffset
    };
  } else if (docuemnt.CompatMode == "CSS1Compat") {
    return {
      top: document.docuemntElement.scrollTop,
      left: document.docuemntElement.scrollLeft
    };
  } else {
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    };
  }
}
 

// 1.首页js部分

// 全局变量
let tab_body_new = document.querySelectorAll('.tab-body-new'),
	tabBar = document.querySelectorAll('.tab-bar'),
	tabBar_active = document.querySelectorAll('.tab-bar a'),
	tab_borBtm = document.querySelector('.border-bottom');

// tab 栏
for (let i = 0; i < tabBar.length; i++) {
	tab_body_new[0].style.display = 'block'; //先执行一次
	tabBar[i].addEventListener('click', () => {
		tab_borBtm.style.left = -51 + tab_borBtm.offsetWidth + '%';
		for (var j = 0; j < tabBar.length; j++) {
			tab_body_new[j].style.display = 'none';
			tabBar_active[j].className = '';
		}
		tab_body_new[i].style.display = 'block';
		tabBar_active[i].className = 'active';
	})
	tabBar[1].addEventListener('click', () => {
		tab_borBtm.style.left = tab_borBtm.offsetWidth - 1 + '%';
	})
}


//  2.消息js部分
let news_container = document.querySelectorAll('.news-container');

news_container[0].addEventListener('click', () => {
	window.location.href = 'news-child-page/notice.html';
})

news_container[1].addEventListener('click', () => {
	window.location.href = 'news-child-page/news-chat.html';
})
news_container[2].addEventListener('click', () => {
	window.location.href = 'news-child-page/news-chat.html';
})
