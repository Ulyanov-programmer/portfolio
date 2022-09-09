import "./swiper-bundle.min.js";
new Swiper(".works-slider", {
  spaceBetween: 25,
  slidesPerView: 4,
  grabCursor: true,
  breakpoints: {
    1500: {
      slidesPerView: 5
    },
    1100: {
      slidesPerView: 4
    },
    850: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1,
      freeMode: false
    }
  }
});
new Swiper(".reviews-slider", {
  spaceBetween: 25,
  slidesPerView: 3,
  grabCursor: true,
  breakpoints: {
    1700: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    850: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1,
      freeMode: false
    }
  }
});
