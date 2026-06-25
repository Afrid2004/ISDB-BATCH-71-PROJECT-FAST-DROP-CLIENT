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
  whyChooseSection = document.querySelector("#why_choose"),
  header = document.querySelector("#header"),
  logo = document.querySelector("#logo");

// header animation trigger
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scroll-header");
    logo.src = "/assets/images/logo_black.png";
  } else {
    header.classList.remove("scroll-header");
    logo.src = "/assets/images/logo_white.png";
  }
});

const animationTriggerFunction = (
  targetSection = "",
  activeClass = "",
  threshold = 0,
) => {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targetSection.classList.add(activeClass);
        }
      });
    },
    {
      threshold,
    },
  );
  observer.observe(targetSection);
};

// about section animation
animationTriggerFunction(aboutSection, "scroll-about", 0.5);

// why choose section animation
animationTriggerFunction(whyChooseSection, "scroll-why-choose", 0.5);
