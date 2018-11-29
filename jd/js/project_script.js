window.onload = () => {
  //滑动导航变换部分
  let head_cont = document.querySelector(".head-conent");
  let slider = document.querySelector(".slider").offsetHeight - 50;
  window.addEventListener("scroll", () => {
    let top_val = scroll().top;
    if (top_val >= slider) {
      head_cont.style.background = "rgb(70, 31, 140)";
    } else {
      head_cont.style.background =
        "linear-gradient(to bottom,rgba(7,17,27,.4),transparent)";
    }
  });

  // 轮播图实例
  let index = 1;
  let timer = null;
  let slider_img = document.querySelector(".slider"),
    slider_ul = slider_img.children[0];
  let ctrl_li = document.querySelector('.slider-ctrl').children[0].children;
  let slider_li = slider_ul.children;
  let offsetw = slider_li[0].offsetWidth;

  // 鼠标移入停止定时器
  slider_img.addEventListener("mouseenter", () => {
    clearInterval(timer);
  });

  //  鼠标移出开始定时器
  slider_img.addEventListener("mouseleave", () => {
    slider_banner();
  });

  slider_banner();

  // 轮播图函数
  function slider_banner() {
    clearInterval(timer);
    timer = setInterval(() => {
      index++;
      slider_ul.style.transition = 'all 0.3s';
      slider_ul.style.transform = 'translateX(' + -index * offsetw + 'px)';
    }, 2500)

    // 给第一个ctrl——li当前
    ctrl_li[0].className = 'active';

    //过度结束 
    slider_ul.addEventListener('webkitTransitionEnd', () => {
      if (index > slider_li.length - 2) {
        index = 1;
        slider_ul.style.transition = '';
        slider_ul.style.transform = 'translateX(' + -index * offsetw + 'px)';
      } else if (index < 1) {
        // 跳到倒数第二张
        index = slider_li.length - 2;

        // 关闭过渡
        slider_ul.style.transition = '';

        // 瞬间 修改一下 ul 的位置
        slider_ul.style.transform = 'translateX(' + -index * offsetw + 'px)';
      }
      for (let i = 0; i < ctrl_li.length; i++) {
        ctrl_li[i].className = '';
      }
      ctrl_li[index - 1].className = 'active';
    })

    let startX = 0,
      move = 0;

    // 注册手指按下屏幕事件
    slider_img.addEventListener('touchstart', (e) => {
      e.preventDefault();      
      clearInterval(timer);
      slider_ul.style.transition = '';
      startX = e.touches[0].clientX;
    })

    // 注册手指滑动事件
    slider_img.addEventListener('touchmove', (e) => {
      e.preventDefault();
      move = e.touches[0].clientX - startX;
      slider_ul.style.transform = 'translateX('+ -index * offsetw + 'px)';
    })

    // 注册手指弹起事件
    slider_img.addEventListener('touchend', (e) => {
      e.preventDefault();      
      var maxDistance = offsetw / 8;
      // 判断 是否超过
      if (Math.abs(move) > maxDistance) {
        // 判断 到底是 往左 还是往右移动
        if (move > 0) {
          index--;
        } else {
          index++;
        }
        // 为了好看 将 过渡效果开启
        slider_ul.style.transition = 'all 0.3s';
        slider_ul.style.transform = 'translateX(' + -index * offsetw + 'px)';
      } else {
        slider_ul.style.transition = 'all 0.3s';
        slider_ul.style.transform = 'translateX(' + -index * offsetw + 'px)';
      }
    })
  }
};

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