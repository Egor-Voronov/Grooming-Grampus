// импорты
import '../style/style.scss'

// логика поведения навигации
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
    window.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// логика свайперов
new Swiper('.banner', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 1000,
})