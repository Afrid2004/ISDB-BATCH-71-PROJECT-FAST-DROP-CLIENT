// menu toggler
let mobileMenuModal = document.getElementById("mobileMenuModal"),
  menuSidebar = document.getElementById("menuSidebar");

const MobileMenuToggle = () => {
  mobileMenuModal.classList.toggle("menu-toogler");
  menuSidebar.classList.toggle("menu-sidebar-toggle");
};

// swipper js
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// on scroll animation scripts
let aboutSection = document.querySelector("#about"),
  header = document.querySelector("#header"),
  logo = document.querySelector("#logo");

const animationTriggerFunction = (
  targetSection,
  currentSection,
  activeClass,
) => {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentSection.classList.add(activeClass);
        logo.src = "/assets/images/logo_black.png";
      } else {
        currentSection.classList.remove(activeClass);
        logo.src = "/assets/images/logo_white.png";
      }
    });
  });
  observer.observe(targetSection);
};

animationTriggerFunction(aboutSection, header, "scroll-header");
