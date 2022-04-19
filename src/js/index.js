/* ----------- Инциалазиця слайдера на планшетных и мобильных устройствах ---------- */

const slider = document.querySelector(".swiper");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth <= 1024 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerview: "auto",
      spaceBetween: 10,
      // effect: "fade",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      slideClass: "swiper-slide",
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });

    slider.dataset.mobile = "true";
  }

  if (window.innerWidth > 1024) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
