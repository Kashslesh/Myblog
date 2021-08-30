'use strict'

const nav = document.querySelector('.header__nav');

// Scrolling
document.querySelector('.nav__ul').addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior : 'smooth'});
    }
})

// Menu fade animation
const handleHover = function(e){
    if(e.target.classList.contains('nav__link')){
      const link = e.target;
      const siblings = link.closest('.header__nav')
      .querySelectorAll('.nav__link');
  
      siblings.forEach(sib=> {
        if(sib !== link) sib.style.opacity = this;
      });
    };
  };
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));

// Stycky navigation

const sectionMain = document.querySelector('.section__main');
const navHeight = nav.getBoundingClientRect().height;

const styckyNav = function(entries){
  const [entry] = entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
} 

const headerObserver = new IntersectionObserver(styckyNav, {
  root:null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});

headerObserver.observe(sectionMain);