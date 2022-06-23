export default  $('[data-testim-slider]').slick( {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  draggable: true,
  prevArrow: '.testim__slick-prev',
  nextArrow: '.testim__slick-next',
  appendDots:'.testim__slick-dots',
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
} )