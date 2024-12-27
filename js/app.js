
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



const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const totalSlides = carousel.children.length;
let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});






