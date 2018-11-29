function resize() {
  let slider = document.querySelector('#slider');
  let item = slider.querySelectorAll('.item');
  let resize = document.body.offsetWidth > 768;
  for (let i = 0; i < item.length; i++) {
    let big_img = item[i].getAttribute('data-big-img');
    let small_img = item[i].getAttribute('data-small-img');
    resize ? item[i].style.backgroundImage = 'url("' + big_img + '")' : item[i].style.backgroundImage = 'url("' + small_img + '")';
  }
  if (resize == false) {
    for (var i = 0; i < item.length; i++) {
      let img = document.createElement('img');
      img.setAttribute('src', item[i].getAttribute('data-small-img'));
      $(item[i]).html(img);
    }
  } else {
    $(item[i]).html('');
  }
  let body_width = document.body.offsetWidth;
  let tab_bar = document.querySelector('.tab-bar'),
    tab_child = tab_bar.children;
  let child_width = 0;
  for (var i = 0; i < tab_child.length; i++) {
    child_width += tab_child[i].offsetWidth + 35;
  }
  if (body_width < child_width) {
    tab_bar.style['width'] = child_width + 'px';
    tab_bar.parentNode.style['overflow-x'] = 'scroll';
  }
}
window.addEventListener('resize', resize);
resize();

let offset = 50;
let touch_left = null,
  touch_right = null;
let $touch_start = $('.carousel');
$touch_start.on('touchstart', function(e) {
  touch_left = e.originalEvent.touches[0].clientX;
  console.log(e);
})

$touch_start.on('touchmove', function(e) {
  touch_right = e.originalEvent.touches[0].clientX;
  // console.log(touch_right);
})

$touch_start.on('touchend', function() {
  var math_abs = Math.abs(touch_left - touch_right);
  if (math_abs > offset) {
    $(this).carousel(touch_left > touch_right ? 'next' : 'prev');
  }
})
let news_arr = ['新闻资讯', '艺术资讯', '行业动态', '综合媒体'];
let new_navbar = document.querySelectorAll('.active-header a');
let new_title = document.querySelector('.news-title div');
new_navbar.forEach((item, index, list) => {
  new_navbar[index].addEventListener('click', () => {
    new_title.innerHTML = news_arr[index];
  })
})
