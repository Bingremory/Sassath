$("#provide-slider").owlCarousel({
  loop: true,
  nav: false,
  margin: 30,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    575: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
