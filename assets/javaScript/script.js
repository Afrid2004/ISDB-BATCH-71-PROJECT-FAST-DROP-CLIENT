// menu toggler
let mobileMenuModal = document.getElementById("mobileMenuModal"),
  menuSidebar = document.getElementById("menuSidebar");

const MobileMenuToggle = () => {
  mobileMenuModal.classList.toggle("menu-toogler");
  menuSidebar.classList.toggle("menu-sidebar-toggle");
};
