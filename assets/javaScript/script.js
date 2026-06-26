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
  animateServices = document.querySelectorAll(".animate-services"),
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
animationTriggerFunction(aboutSection, "scroll-about", 0.4);

// why choose section animation
animationTriggerFunction(whyChooseSection, "scroll-why-choose", 0.4);

// our sercices animation
animateServices.forEach((service) => {
  animationTriggerFunction(service, "scroll-services", 0.4);
});

//video modal
let videoModal = document.getElementById("video_modal"),
  iframe = videoModal.querySelector("iframe");

const handleVideoModal = (src = "") => {
  if (videoModal.classList.contains("active-modal")) {
    videoModal.classList.remove("active-modal");
    iframe.src = "";
    return;
  }
  videoModal.classList.add("active-modal");
  iframe.src = src;
};
