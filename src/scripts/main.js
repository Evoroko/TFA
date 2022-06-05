"use strict";

import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Date copyright

let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector("#year");
yr.innerText = year;

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

const review = document.querySelector('.review--down');
const horizontal = document.querySelector('.horizontal');

if(window.matchMedia('(min-width: 1050px)').matches){
    horizontalScroll('.horizontal', '-200vw');
    reviewDesktop();
}else{
    reviewMobile();
}

function horizontalScroll(cible, length) {
    if(horizontal){
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
}

function reviewDesktop(){
    if(review){
        gsap.to('.review--down', {
            y: -100,
            scrollTrigger: {
                trigger: '.review',
                scrub: 0.8
            }
        })
    }
}

function reviewMobile(){
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

const gallery = document.querySelector('.gallery');
if(gallery){
    galleryAnim();
}

function galleryAnim(){
    gsap.to('.gallery', {
        x: -200,
        duration: 2,
        scrollTrigger: {
            trigger: '.gallery',
            scrub: 0.8
        }
    })
}

const sections = document.querySelectorAll('.section');
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


var title = document.querySelector('.topSection--title');
if(title){
    titleAnim();
}

function titleAnim(){
    gsap.from('.content__el--top', {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })
}

const spoilers = document.querySelectorAll('.spoiler');
if(spoilers[0]){
    for(let spoiler of spoilers){
        spoiler.addEventListener("click", () => {
            setTimeout(function() {
                ScrollTrigger.refresh();
              }, 10);
        })
    }
}