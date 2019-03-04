import slick from 'slick-carousel';

const parent = $('.js-st-slider-parent');
parent.each((i,el) => {
  const parent = $(el);
  const mainSlider = $('.js-st-product-slider', parent);
  const navSlider = $('.js-st-product-slider-nav', parent);
  const prevButton = $('.js-st-slider-nav-prev', parent);
  const nextButton = $('.js-st-slider-nav-next', parent);
  mainSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSlider
  });
  navSlider.slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: mainSlider,
    focusOnSelect: true,
    prevArrow: prevButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});


