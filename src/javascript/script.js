// импорты
import '../style/style.scss'

// логика поведения навигации
const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
menuBtn.onclick = () => {
    menu.classList.add('active');
    menuBtn.classList.add('hide');
    cancelBtn.classList.add('show');
    body.classList.add('disabledScroll');
}
cancelBtn.onclick = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('hide');
    cancelBtn.classList.remove('show');
    body.classList.remove('disabledScroll');
}

window.onscroll = () => {
    window.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

//параллакс
let scene = document.getElementById('parallax-container');
let parallax = new Parallax(scene);

// логика свайпера
new Swiper('.banner', {
    loop: true,
    autoplay: {
        delay: 10000,
    },
    speed: 1000,
    slideToClickedSlide: false,
});

// плавный скролл
const anchors = [].slice.call(document.querySelectorAll('.nav-li[href*="#"]')),
      animationTime = 700,
      framesCount = 50;

anchors.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
  
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});

// загрузка изображений в оффере
window.onload = () => {
  const uploadFile = document.getElementById('files');
  const uploadBtn = document.getElementById('upload-btn');
  const uploadText = document.getElementById('upload-txt');

  uploadBtn.addEventListener('click', function () {
    uploadFile.click();
  }) 

  uploadFile.addEventListener('change', function () {
    if (uploadFile.value) {
      uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
    } else {
      uploadText.innerText = 'Файл не выбрал';
    };
  });
};

document.getElementById('files').onchange = function () {
  let src = URL.createObjectURL(this.files[0]);
  document.getElementById('image').src = src;
}

function handleFileSelect (evt) {
  for (const file of evt.target.files) {
    const span = document.createElement('span');
    const src = URL.createObjectURL(file);
    span.innerHTML = 
      `<div class="hover-upload">
      <img class="opacity" style="height: 60px; width: 60px; border-radius: 8px; border: none; position: relative; z-index: 70; opacity: .6;"` + 
      `src="${src}" title="${escape(file.name)}"></div><img class="x-upload" src="media/x.svg">`;

    document.getElementById('list').insertBefore(span, null);
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

// защитная мера, от возможных, следующих нечестных соискателей)
console.log('Данное тестовое задание выполнил Воронов Егор')

