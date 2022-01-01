"use strict";

var bodyStyles = window.getComputedStyle(document.body);
var gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));
"use strict";

var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__nav');
var header = document.querySelector('.header');

var disScroll = function disScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};

var enScroll = function enScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

burger.addEventListener('click', function (e) {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--open');
  header.classList.toggle('header--open');

  if (burger.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }
});
"use strict";

var search = document.querySelector('.mobile__btn');
var form = document.querySelector('.mobile__search');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.mobile-form__close');
search.addEventListener('click', function (e) {
  search.classList.toggle('mobile__btn--active');
  form.classList.toggle('mobile__search--open');
  overlay.classList.toggle('overlay--active');
});
closeBtn.addEventListener('click', function (e) {
  if (e.target == form) {
    closeForm();
  }
});

var closeForm = function closeForm() {
  modal.classList.remove('mobile__search--open');
  disableScroll();
};
"use strict";

var heroSlider = new Swiper('.hero__slider', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  }
});
"use strict";

var projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.slider-btn__next',
    prevEl: '.slider-btn__prev'
  },
  pagination: {
    el: ".swiper-bullets",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    }
  }
});
// document.addEventListener('DOMContentLoaded', () => {
//   const tabs = document.querySelector('.filter');
//   const tabsBtn = document.querySelectorAll('.filter__btn');
//   const tabsContent = document.querySelectorAll('.projects__list');
//   if (tabs) {
//     tabs.addEventListener('click', (e) => {
//       if (e.target.classList.contains('filter__btn')) {
//         const tabsPath = e.target.dataset.tabsPath;
//         tabsBtn.forEach(el => {
//           el.classList.remove('filter__btn--active')
//         });
//         document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('filter__btn--active');
//         tabsHandler(tabsPath);
//       }
//     });
//   }
//   const tabsHandler = (path) => {
//     tabsContent.forEach(el => {
//       el.classList.remove('projects__list--active')
//     });
//     document.querySelector(`[data-tabs-target="${path}"]`).classList.add('projects__list--active');
//   };
// });
"use strict";
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
