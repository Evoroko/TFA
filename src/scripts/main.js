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


// Greensock
if(window.matchMedia('(min-width: 992px)').matches){
    horizontalScroll('.horizontal', '-200vw');
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
