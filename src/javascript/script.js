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
const anchors = document.querySelectorAll('.nav-li[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

// защитная мера, чтобы возможные следующие соискатели, не брали мою работу)
console.log("Данное тестовое задание выполнил Воронов Егор")

// уменьшаю шрифт
// /* Функция пересчёта размера шрифта */
// function fGummaFontSize() {
//     /* Увеличиваем размер шрифта, до появления прокрутки */
//     while (this.scrollHeight <= this.clientHeight || this.scrollWidth <= this.clientWidth) {
//       this.style.fontSize = parseFloat(getComputedStyle(this).fontSize) + 2 + 'px';
//     }
//     /* Уменьшаем размер шрифта, пока прокрутка не исчезнет */
//     while ( this.scrollHeight > this.clientHeight || this.scrollWidth > this.clientWidth ) {
//       this.style.fontSize = parseFloat(getComputedStyle(this).fontSize) - 1 + 'px';
//     }
//   }
  
//   /* Функция обхода всех элементов с нужным классом */
//   function fGummaResizeAll() {
//     document.querySelectorAll('.gumma').forEach(el => fGummaFontSize.call(el));
//   }
  
//   document.querySelectorAll('.gumma').forEach(el => el.addEventListener('input', fGummaFontSize));
//   window.onload = fGummaResizeAll; // Запуск после загрузки контента
//   window.onresize = fGummaResizeAll; // Запуск при изменении размеров окна и контейнеров