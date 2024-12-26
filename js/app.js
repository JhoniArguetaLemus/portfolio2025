
const btMenu=document.getElementById('btMenu');
const navList=document.getElementById('navList');

const menuIcon=document.getElementById('menuIcon');

btMenu.addEventListener('click', ()=>{

    if(navList.classList.contains('nav__list-visible')){
        navList.classList.remove('nav__list-visible');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');


    }else{
        navList.classList.add('nav__list-visible');
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');

    }
   
    
})










