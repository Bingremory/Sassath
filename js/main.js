var multipleHeader = `    <header class="site-header">
<div class="header-wrap">
  <div class="row">
    <nav class="nav container">
      <a href="index.html" class="logo">
        <img src="../img/home/logo.png" alt="" />
      </a>
      <i class="fas fa-bars header-toggle"></i>
      <ul class="navbar">
        <li class="nav-item">
          <a href="index.html" class="nav-link active">Home</a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="services.html" class="nav-link">Services</a>
        </li>
        <li class="nav-item">
          <a href="#pricing" class="nav-link">Pricing</a>
        </li>
        <li class="nav-item">
          <a href="blog.html" class="nav-link">Blogs</a>
        </li>
        <li class="nav-item has-menu">
          <a href="#!" class="nav-link"
            >Pages
            <i class="fas fa-chevron-down"></i>
          </a>
          <ul class="submenu box-shadow">
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Service</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="error.html">Error 404</a></li>
            <li><a href="faq.html">Faq</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </li>
      </ul>
      <div class="header-login">
        <a href="login.html" class="btn btn-theme">
          <span>Login</span>
        </a>
      </div>
    </nav>
  </div>
</div>
</header>`;
document.body.insertAdjacentHTML("beforeend", multipleHeader);

var multipleFooter = `    <footer class="footer">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-4 col-md-6">
      <div class="footer-logo">
        <a href="index.html">
          <img src="../img/home/logo-white.png" alt="" />
        </a>
        <p>
          Sassaht - SaaS, Startup & WebApp Prebuilt Template Is fully
          responsible, Sassaht is the Creative, Modern HTML5 Template.
          Sassaht is an the obligations of business it will frequently
          occur that pleasures have to be repudiated and annoyances
          accepted.
        </p>
      </div>
    </div>
    <div class="col-lg-4 col-md-6">
      <h4>Usefull link</h4>
      <div class="footer-list">
        <ul>
          <li><a href="#!">About Us</a></li>
          <li><a href="#!">Service</a></li>
          <li><a href="#!">Team</a></li>
          <li><a href="#!">Contact Us</a></li>
        </ul>
        <ul>
          <li><a href="#!">Blog</a></li>
          <li><a href="#!">Faq</a></li>
          <li><a href="#!">Error 404</a></li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="footer-contact">
        <h4>Get In Touch</h4>
        <ul class="media-icon">
          <li>
            <p>
              <i class="far fa-map"></i>
              <b>423B, Road Wordwide Country, USA</b>
            </p>
          </li>
          <li>
            <p>
              <i class="far fa-envelope"></i>
              <a href="mailto:duclong9a2@gmail.com">
                <b>duclong9a2@gmail.com</b>
              </a>
            </p>
          </li>
          <li>
            <p>
              <i class="far fa-phone-alt"></i>
              <a href="tel:+84348905771">
                <b>+84348905771</b>
              </a>
            </p>
          </li>
        </ul>
        <div class="social-icon">
          <ul>
            <li>
              <a href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="fab fa-skype"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</footer>`;
document.body.insertAdjacentHTML("beforeend", multipleFooter);

var multipleSidebar = `    <div class="sidebar">
<ul class="sidebar-menu">
  <li class="sidebar-item">
    <a href="index.html" class="sidebar-link">Home</a>
  </li>
  <li class="sidebar-item">
    <a href="about.html" class="sidebar-link">About</a>
  </li>
  <li class="sidebar-item">
    <a href="services.html" class="sidebar-link">Services</a>
  </li>
  <li class="sidebar-item">
    <a href="#!" class="sidebar-link">Pricing</a>
  </li>
  <li class="sidebar-item">
    <a href="blog.html" class="sidebar-link">Blogs</a>
  </li>
  <li class="sidebar-item has-dropdown">
    <a href="#!" class="sidebar-link"
      >Pages
      <i class="fas fa-chevron-down"></i>
    </a>
    <ul class="sidebar-submenu">
      <li><a href="about.html">About Us</a></li>
      <li><a href="services.html">Service</a></li>
      <li><a href="team.html">Team</a></li>
      <li><a href="blog.html">Blog</a></li>
      <li><a href="error.html">Error 404</a></li>
      <li><a href="faq.html">Faq</a></li>
      <li><a href="contact.html">Contact Us</a></li>
    </ul>
  </li>
</ul>
</div>`;
document.body.insertAdjacentHTML("beforeend", multipleSidebar);

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
