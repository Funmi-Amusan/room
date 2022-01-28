/* Navigation Control for Mobile */
const nav = document.querySelector("nav");
const openNav = document.querySelector("#close");
const closeNav = document.querySelector("#open");

openNav.addEventListener("click", () => {
    nav.classList.add ('nav-active')

})

closeNav.addEventListener("click", () => {
    nav.classList.remove ('nav-active')

})



/*------ Slider ------*/

const slide1 = document.getElementById('slide1')
const slide2 = document.getElementById('slide2')
const slide3 = document.getElementById('slide3')

const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const prevBtn2 = document.getElementById('prev2')
const nextBtn2 = document.getElementById('next2')
const prevBtn3 = document.getElementById('prev3')
const nextBtn3 = document.getElementById('next3')

nextBtn.onclick = function() {
    slide1.style.left = "-100%"
    slide2.style.left = "0%"
    slide3.style.left = "100%"
}

prevBtn.onclick = function() {
    slide1.style.left = "100vw"
    slide2.style.left = "-100%"
    slide3.style.left = "0%"
}

nextBtn2.onclick = function() {
    slide1.style.left = "-100%"
    slide2.style.left = "100%"
    slide3.style.left = "0%"
}

prevBtn2.onclick = function() {
    slide1.style.left = "0%"
    slide2.style.left = "-100%"
    slide3.style.left = "100%"
}

nextBtn3.onclick = function() {
    slide1.style.left = "0%"
    slide2.style.left = "-100%"
    slide3.style.left = "100%"
}

prevBtn3.onclick = function() {
    slide1.style.left = "-100%"
    slide2.style.left = "0%"
    slide3.style.left = "100%"
}

