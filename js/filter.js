const filter_btns = document.querySelectorAll(".btn-filter");
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").imagesLoaded(function () {
  $(".grid").isotope({
    itemSelector: ".grid-item",
    transitionDuration: ".6s",
  });
});
