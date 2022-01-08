$("#testimonial-slide").owlCarousel({
  loop: true,
  nav: true,
  autoplay: true,
  dots: false,
  navText: [
    '<span class="fas fa-long-arrow-alt-left"><span>',
    '<span class="fas fa-long-arrow-alt-right"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1024: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
