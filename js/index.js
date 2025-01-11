const propertySwiper = new Swiper(".property-swiper", {
  pagination: {
    el: ".swiper-pagination-property",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const blogsSwiper = new Swiper(".blogs-swiper", {
  pagination: {
    el: ".swiper-pagination-blogs",
    dynamicBullets: true,
  },
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// Parent Swiper
const offers = new Swiper(".parent-slider", {
  pagination: {
    el: ".swiper-pagination-parent",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-parent",
    prevEl: ".swiper-button-prev-parent",
  },
  breakpoints: {
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// Child Swipers
document.querySelectorAll(".child-slider").forEach((childSwiperEl) => {
  new Swiper(childSwiperEl, {
    pagination: {
      el: childSwiperEl.querySelector(".swiper-pagination-child"),
      clickable: true,
    },
    navigation: {
      nextEl: childSwiperEl.querySelector(".swiper-button-next-child"),
      prevEl: childSwiperEl.querySelector(".swiper-button-prev-child"),
    },
  });
});
const citySwiper = new Swiper(".city-swiper", {
  pagination: {
    el: ".swiper-pagination-city",
    dynamicBullets: true,
  },
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
const partnerSwiper = new Swiper(".partner-swiper", {
  pagination: {
    el: ".swiper-pagination-partner",
    dynamicBullets: true,
  },
  breakpoints: {
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
