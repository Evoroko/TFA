import gsap from "../../node_modules/gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
if(window.matchMedia('(min-width: 768px)').matches){
    gsap.to(".horizontal", {
        x: '-200vw',
        scrollTrigger: {
            trigger: '.horizontal',
            pin: true,
            start: 'center center',
            end: '+=5000',
            scrub: true,
            toggleActions: 'play none reverse none'
        }
    });
}
