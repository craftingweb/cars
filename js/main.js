$(function () {
  $(".carousel__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slideToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
