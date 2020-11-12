'use strict';


// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{

if(window.scrollY > navbarheight){
    navbar.classList.add('navbar--dark');
}else{
    navbar.classList.remove('navbar--dark');
}
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    scrollIntoView(link);
});


// Handle click on "contact me" button on home
const contactMeBtn = document.querySelector('.home__contact');

contactMeBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    home.style.opacity = 1 - window.scrollY / homeheight;
});

// Show "arrrow up" button when scrolling down

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll',()=>{
    if(window.scrollY>homeheight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

// Handle click on "arrow-up"
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}




