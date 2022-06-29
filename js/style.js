// menu btn

let elMenuBtn = document.querySelector('#menu-btn');
let elHeader = document.querySelector('.header');

let elNavbarItem = document.querySelectorAll('.navbar a');

elMenuBtn.addEventListener('click', ()=>{
    elMenuBtn.classList.toggle('fa-times');
    elHeader.classList.toggle('active');

});
elNavbarItem.forEach(function(item){
    item.addEventListener('click', ()=>{
        elMenuBtn.classList.toggle('fa-times');
        elHeader.classList.toggle('active');
    })
})
// ====== navbar =======
var elNavItem = document.querySelectorAll('.nav-item')
elNavItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeActiveClass();
        item.classList.add("active")
    })
});
function removeActiveClass(){
    elNavItem.forEach((item)=>{
        
            item.classList.remove("active")
    
    })
}

// loader
var elLoaderBox = document.querySelector('.loader-box')

document.addEventListener("DOMContentLoaded", ()=>{
    setTimeout(()=>{
        elLoaderBox.style.display = "none";
        
    }, 2000)
})
// loader



// theme btn

let elThemeBtn = document.querySelector('#theme');

elThemeBtn.addEventListener('click', ()=>{
    elThemeBtn.classList.toggle('fa-sun')
    if(elThemeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');

    }
})
// ====== typing animation ======

var newTyping = new Typed(".home-typing",{
    strings:["Front-end Developer", "Web-Devoloper"],
    typedSpeed:200,
    backSpeed:100,
    loop:true
})



// ====== scroll js =======

var elNavbar = document.querySelector('.navbar');
var elScrollBtn = document.querySelector('.scroll-btn');
var elBody = document.querySelector('body');


document.addEventListener('scroll',function(){
    if(window.scrollY >175){
        elScrollBtn.classList.add('btn-block');
        elNavbar.classList.add('navbar-scroll');
        elBody.classList.add('body-scroll'); 
        

    }else if(window.scrollY <175){
        elScrollBtn.classList.remove('btn-block')
        elNavbar.classList.remove('navbar-scroll');
        elBody.classList.remove('body-scroll'); 

        
    }
    else{
        elScrollBtn.classList.remove('btn-fixed')
       
    }
    
})
// scroll btn click

// reveal animation

let sr = ScrollReveal({
    duration:2500,
    distance:'60px',
});
sr.reveal(".home-content",{origin:'top',delay:20});
sr.reveal(".home-share",{origin:'bottom', delay:20});

sr.reveal(".row-boxses",{origin:'left', delay:20});
sr.reveal(".row-content",{origin:'right', delay:20});
sr.reveal(".about-row__progress",{origin:'bottom', delay:20});

sr.reveal(".services-section .box-container",{origin:'bottom', delay:20});

sr.reveal(".portfolio-section .box-container",{origin:'bottom', delay:20});

sr.reveal(".contact-section form",{origin:'bottom', delay:20});


// number settime out

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

let about_box = document.querySelector(".about-row");

let about_num = document.querySelectorAll(".row-box h3");

function mlCounter(){
    if(!hasReached(about_box))return;
    console.log('ajkjakaj')
}













