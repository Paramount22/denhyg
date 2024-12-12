$(document).ready(function () {
  // Inicializácia pluginu len na väčších zariadeniach
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 20,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Funkcia na pridanie alebo odstránenie triedy na základe šírky obrazovky
  function adjustParallax() {
    const hero = document.querySelector('.hero');
    const hero2 = document.querySelector('.hero-2');
    if (window.innerWidth > 810) {
      // Pridanie triedy parallaxie, ak je šírka obrazovky väčšia ako 810px
      hero.classList.add('parallaxie');
      hero2.classList.add('parallaxie');
    } else {
      // Odstránenie triedy parallaxie, ak je šírka obrazovky menšia alebo rovná 810px
      hero.classList.remove('parallaxie');
      hero2.classList.remove('parallaxie');
    }
  }

  adjustParallax();

  // Spustenie funkcie pri zmene veľkosti okna
  window.addEventListener('resize', adjustParallax);
});

// wow init
new WOW().init();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000, // Automatický posun každých 5 sekúnd
    disableOnInteraction: false, // Pokračuje v autoplay aj po interakcii
  },

  speed: 800,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

('use strict');

// Selectors
const hamburger = document.querySelector('[data-hamburger]');
const responsiveMenu = document.querySelector('[data-responsive-menu]');
const year = document.querySelector('[data-year]');
const menuLinks = responsiveMenu.querySelectorAll('.menu-link');
const mainLinks = document.querySelectorAll('.menu .menu-link');
const tooths = document.querySelectorAll('.fa-tooth');
const subsections = document.querySelectorAll('.subsection');
const offerLinks = document.querySelectorAll('.offer-menu a');
const backToTop = document.querySelector('.fa-caret-up');

// Functions

const hideOffers = () => {
  subsections.forEach((section, index) => {
    section.classList.add('hide');
    if (index === 0) {
      section.classList.remove('hide');
    }
  });
};

const removeActive = () => {
  offerLinks.forEach((link) => link.classList.remove('active'));
};

const getYear = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  year.innerText = fullYear;
};

const toggleSections = (number) => {
  subsections.forEach((section, index) => {
    section.classList.add('hide');
    if (index === number) {
      section.classList.remove('hide');
    }
  });
};

const remeoveAddActive = (link) => {
  removeActive(link);
  link.classList.add('active');
};

// smooth scroll
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 300;
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, distance * (progress / duration) + startPosition);
    if (progress < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

// back to top - hide and show
const scroll = () => {
  if (window.scrollY > 600) {
    if (!backToTop.classList.contains('fade-in-right')) {
      backToTop.classList.remove('fade-out-right');
      backToTop.classList.add('fade-in-right');
      backToTop.style.display = 'block'; // show
    }
  } else {
    if (backToTop.classList.contains('fade-in-right')) {
      backToTop.classList.remove('fade-in-right');
      backToTop.classList.add('fade-out-right');
      setTimeout(() => {
        backToTop.style.display = 'none'; // hide
      }, 350);
    }
  }
};

// smooth scroll back to top
const smoothScrollBackTop = () => {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 300;
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, distance * (progress / duration) + startPosition);
    if (progress < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

// Listeners

window.addEventListener('scroll', scroll);
backToTop.addEventListener('click', smoothScrollBackTop);

// responsive links
menuLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

// desktop links
mainLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
    hamburger.classList.remove('is-active');
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  responsiveMenu.style.display = 'block';
  setTimeout(() => {
    responsiveMenu.classList.add('open');
  }, 100);

  if (!hamburger.classList.contains('is-active')) {
    responsiveMenu.classList.remove('open');
    setTimeout(() => {
      responsiveMenu.style.display = 'none';
      responsiveMenu.classList.remove('open');
    }, 100);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  getYear();
});

// Lightbox settings
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 200,
  imageFadeDuration: 200,
});
