"use strict";

import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.config({nullTargetWarn: false});

// Date copyright

let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector("#year");
yr.innerText = year;


// Dark Theme persistant

const darkTheme = document.querySelector("#theme");
const ball = document.querySelector("#ball");

darkTheme.addEventListener("click", function(){
    if(document.body.dataset.theme === "dark"){
        light();
        localStorage.setItem("theme", "light");
    } else {
        dark();
        localStorage.setItem("theme", "dark");
    } 
});

const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

let theme = localStorage.getItem('theme');
if((!theme && userDark) || (theme === "dark")){
    dark();
} else if(theme === "light"){
    light();
}

function dark(){
    document.body.setAttribute("data-theme", "dark");
    ball.classList.add("btn--ballDark");
}

function light(){
    document.body.setAttribute("data-theme", "light");
    ball.classList.remove("btn--ballDark");
}


//Slider
//Inspiré par https://www.w3schools.com/howto/howto_js_slideshow.asp et modifié

var slideIndex = 1;
let slideExist = document.querySelector('.slideshow__container');
showSlides(slideIndex);

let prevButton = document.querySelector(".slideshow--prev");
if(prevButton){
    prevButton.addEventListener('click', () => {
        plusSlides(-1);
    });
}

let nextButton = document.querySelector(".slideshow--next");
if(nextButton){
    nextButton.addEventListener('click', () => {
        plusSlides(1);
    });
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if(slideExist){
        var slides = document.querySelectorAll(".slideshow__slides");
        if (n > slides.length) {
            slideIndex = 1;
        } 
    
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("hidden");
        }
    
        slides[slideIndex-1].classList.remove("hidden");
    }
}




// Greensock

var review = document.querySelector('.review--down');

if(window.matchMedia('(min-width: 992px)').matches){
    horizontalScroll('.horizontal', '-200vw');

    if(review){
        gsap.to('.review--down', {
            y: -100,
            scrollTrigger: {
                trigger: '.review',
                scrub: 0.8
            }
        })
    }
}else{
    if(review) {
        gsap.from('.review',{
            x: -100,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.review__img--tasu',
                start: 'center 80%'
            }
        })
    }
}

var sections = document.querySelectorAll('.section');
for (let section of sections){
    gsap.from(section, {
        y: 200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%'
        }
    })
}

var gallery = document.querySelector('.gallery');
if(gallery){
    gsap.to('.gallery', {
        x: -200,
        duration: 2,
        scrollTrigger: {
            trigger: '.gallery',
            scrub: 0.8
        }
    })
}

var title = document.querySelector('.topSection--title');
if(title){
    gsap.from('.content__el--top', {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })
}


function horizontalScroll(cible, length) {
    gsap.to(`${cible}`, {
        x: `${length}`,
        ease: "none",
        scrollTrigger: {
            trigger: `${cible}`,
            pin: true,
            start: 'center center',
            end: '+=3000',
            scrub: true,
            toggleActions: 'play none reverse none'
        }
    });
}
