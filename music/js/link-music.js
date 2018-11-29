/*
 *  LINK创意设计版权所有
 */

// nav 导航部分
let gd_icon = document.querySelector('.gd i'),
    gd = document.querySelector('.nav-box .gd'),
    gd_ul = document.querySelector('.gdz');

//  鼠标移入
gd.addEventListener('mouseenter', function() {
    this.style.color = '#fff';
    this.style.backgroundColor = '#0c8ed9';
    gd_icon.style.transform = 'rotate(180deg)';
    gd_ul.style.display = 'block';
    gd.children[0].style.color = '#fff';
})

//  鼠标移出
gd.addEventListener('mouseleave', function() {
    this.children[0].style.color = '#ddd';
    this.style.backgroundColor = '#2c323b';
    gd_ul.style.display = 'none';
    gd_icon.style.transform = 'rotate(0deg)';

})

//  全局变量
var music = document.querySelector('.music'),
    preve = document.querySelector('.preve'),
    next = document.querySelector('.next'),
    music_title = document.querySelector('.music-title div span'),
    zj = document.querySelector('.music-title>.p>.fl>a'),
    audio_name = document.querySelector('.audio-name'),
    audio_min = document.querySelector('.audio-name .len-min'),
    current = document.querySelector('.current'),
    gs_name = document.querySelector('.p .fr a'),
    music_img = document.querySelector('.music-img a img'),
    bar_img = document.querySelector('.bar-img a img'),
    music_cont = document.querySelector('.music-container'),
    i = document.createElement('i');
play = document.querySelector('.play'),
    index = 0,
    flag = true;

// 空格键停止播放暂停
window.onkeydown = function(e) {
    if (e.keyCode == 32) {
        if (flag) {
            flag = false;
            music.play();
            play.className = 'pause';
        } else {
            flag = true;
            play.className = 'play';
            music.pause();
        }
    }
}

//  播放按钮
play.onclick = function(e) {
    if (this.className == 'play') {
        this.className = 'pause';
        music.play();
    } else {
        this.className = 'play';
        music.pause();
    }
}

//  上一曲
preve.onclick = function() {
    topMusic();
    play.className = 'pause';
    audio_name.innerHTML = arrtxt[index];
    zj.innerHTML = arrtxt[index];
    music_title.innerText = arrtxt[index];
    gs_name.innerHTML = arr_name[index];
    music_title.appendChild(i);
    music_img.setAttribute('src', arr_img[index]);
    bar_img.setAttribute('src', arr_img[index]);
    music_cont.style.backgroundImage = 'url(' + arr_img[index] + ')';
}

function fn(){
    play.className = 'pause';
    audio_name.innerHTML = arrtxt[index];
    zj.innerHTML = arrtxt[index];
    gs_name.innerHTML = arr_name[index];
    music_title.innerText = arrtxt[index];
    music_title.appendChild(i);
    music_img.setAttribute('src', arr_img[index]);
    bar_img.setAttribute('src', arr_img[index]);
    music_cont.style.backgroundImage = 'url(' + arr_img[index] + ')';
}

//  下一曲
next.onclick = function() {
    bottomMusic();
    fn();
}

//  下一曲判断函数
function topMusic() {
    index++;
    if (index >= arr.length) {
        index = 0;
    }
    music.setAttribute("src", arr[index]);
    music.play();
}

//  上一曲判断函数
function bottomMusic() {
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    music.setAttribute("src", arr[index]);
    music.play();
}

// 播放器进度条以及播放时间

let min, second, len, timer = null;

timer = setInterval(mins, 1000);

function mins() {

    //  当前播放时间
    min = music.currentTime;
    second = min;
    len = parseInt(second / 60);
    if (min % 60 < 10) {
        current.innerHTML = "0" + len + ":0" + parseInt(min % 60);
    } else {
        current.innerHTML = "0" + len + ":" + parseInt(min % 60);
    }

    // 播放总时间
    var duration = music.duration;

    // 分钟
    var minute = parseInt(duration / 60);
    if (minute < 10) {
        minute = '0' + minute;
    }

    var secon = duration % 60;
    if (secon < 10) {
        secon = '0' + secon;
    }

    var allTime = (minute + ":" + secon).substr(0, 5);

    audio_min.innerHTML = allTime;

     // 判断自动播放
    if (allTime == current.innerText) {
        topMusic();
        fn();
    }

    //  进度条 

    var jdt_color = document.querySelector('.jdt-color');
    jdt_color.style.width = parseFloat(min / duration) * 400 + 'px';
}


// 控制台输出

console.log('审查个粑粑元素，要源码就联系\n%cQQ：463961434','color:red; font-size:20px;' );
console.log('版权LINK创意工作室所有 © 2018 copyright ');