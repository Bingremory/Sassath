/* Scroll Header */

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header-wrap");
  if (scrollY > 0) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});

/* Sidebar Menu */

const headerToggle = document.querySelector(".header-toggle");
const sidebarMenu = document.querySelector(".sidebar");
const dropdownBtn = document.querySelector(".sidebar .has-dropdown");
const dropdownContent = document.querySelector(".sidebar-submenu");

headerToggle.addEventListener("click", () => {
  headerToggle.classList.toggle("fa-times");
  sidebarMenu.classList.toggle("active");
});

dropdownBtn.addEventListener("click", () => {
  dropdownContent.classList.toggle("active");
});

/* Custom Wow Animation */

function wowanimation() {
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: false,
    live: true,
  });
  wow.init();
}

/* Preloader */

function preloader() {
  $("#preloader").fadeOut(3000);
}

$(window).on("load", function () {
  wowanimation();
  preloader();
});
