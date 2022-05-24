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
