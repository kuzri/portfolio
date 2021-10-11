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


function modal(id) {
    let zIndex = 9999;
    const modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    const bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

        // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
        modal.querySelector('.modal_close_btn').addEventListener('click', function() {
            bg.remove();
            modal.style.display = 'none';
        });


    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (let k in styles) this.style[k] = styles[k];
    return this;
};


// 수정이 필요할것으로 보임
document.querySelector('#yotube_project').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});
document.querySelector('#carrot_game').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});
document.querySelector('#scroll_to_rabbit').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});
document.querySelector('#chase_coordinate').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});
document.querySelector('#habit-tracker').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});
document.querySelector('#yotube_project').addEventListener('click', function() {
    modal(`${this.id}_modal`);
});