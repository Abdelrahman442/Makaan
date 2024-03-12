// toggle header style
const header = document.querySelector("header");
const headerContainer = document.querySelector(".header-container");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("sticky-top");
    headerContainer.classList.remove("rounded-3");
    headerContainer.classList.replace("container", "container-fluid");
  } else {
    header.classList.remove("sticky-top");
    headerContainer.classList.add("rounded-3");
    headerContainer.classList.replace("container-fluid", "container");
  }
  if (window.scrollY > window.innerHeight) {
    document.querySelector(".top-arrow").style.display = "block";
    document.querySelector(".top-arrow").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else {
    document.querySelector(".top-arrow").style.display = "none";
  }
});

// filter properties
const filterBtns = document.querySelectorAll(".filter-list button");
const properties = document.querySelectorAll(
  ".preperties-listing-content .row .prop"
);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // add active class to target btn
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    // hide all props
    properties.forEach((property) => {
      property.style.display = "none";
    });
    // show target props
    properties.forEach((property) => {
      if (btn.getAttribute("data-show") == "featured") {
        property.style.display = "block";
      } else if (
        property.getAttribute("data-show") == btn.getAttribute("data-show")
      ) {
        property.style.display = "block";
      }
    });
  });
});

// swapper slider
var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// owl carsoul
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
