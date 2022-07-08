import * as $ from 'jquery'
import slick from 'slick-carousel'

const teamSlider =  $('[data-team-slider]').slick( {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  draggable: true,
  // appendArrows: '.team__slider-controls',
  prevArrow: '.team__slick-prev',
  nextArrow: '.team__slick-next',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
      }
    },
    // {
    //   breakpoint: 500,
    //   settings: {
    //     slidesToShow: 1,
    //   }
    // },
    {
      breakpoint: 470,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
  ]
} )

export default teamSlider