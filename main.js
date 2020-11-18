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
    navbarMenu.classList.remove('open');
    console.log(navbarMenu);
    scrollIntoView(link);
});

    // Navbar toggle button for small screen
    const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
    navbarToggleBtn.addEventListener('click',()=>{
        navbarMenu.classList.toggle('open');
        console.log(navbarMenu.classList);
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



// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter ;
    if(filter == null){
        return;
    }

    // Remove selection from the previous item and select the new one

        const active = document.querySelector('.category__btn.selected');
        active.classList.remove('selected');
        const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
        target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            if(filter ==='*'|| filter===project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out')
    },300);
});


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}


