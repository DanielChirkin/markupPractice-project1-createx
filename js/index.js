import { Fancybox } from "../node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js"
import teamSlider from "./plugins/team-slider.js"
import testimSlider from "./plugins/testimonials-slider.js"
import programAccordion from "./plugins/accordion-plugin.js"
import footerAccordion from "./plugins/footer-accordion.js"
import initMap from "./utils/contacts-google-maps.js"
// import Swiper from '../node_modules/swiper/swiper-bundle.esm.js'

// checkbox
const checkboxLabel = $( '.contact-form__form-checkbox-label' )

if ( checkboxLabel.hasClass('contact-form--disabled') ) {
  checkboxLabel.children('input').attr('disabled', 'true')
}

// form validation
$( '.success' ).html("Looks good!")
$( '.danger' ).html("Please provide a valid input.")

const formBodyitems = $( '.contact-form__form-body-item' )

formBodyitems.each((k, v) => {
  if ( v.classList.contains('contact-form--disabled') ) {
    v.querySelector('.contact-form__form-input').setAttribute('disabled', 'true')
  }
})

// overlay
function overlayOn(overlay) {
  overlay.css('display', 'block')

  setTimeout(() => {
    overlay.css('opacity', '1')
  }, 1 )
}
function overlayOff(overlay) {
  overlay.css('opacity', '0')

  setTimeout(() => {
    overlay.css('display', 'none')
  }, 299 )
}


$(function() {
  // smooth scrolling
  $('a[href^=\\#]').on('click', function(event){     
    event.preventDefault()

    $('html,body').animate({scrollTop:$(this.hash).offset().top - 100}, 800);
  });

  // mixitup
  var config = {
    debug: {
      enable: true,
      showWarnings: true
    },
    animation: {
      queueLimit:5,
      animateResizeTargets: true,
    }
  }

  var mixer = mixitup('.directs__card-box-list', config)


  // google map
  initMap()
  
  // overlay
  const overlay = $('.header__overlay')
  overlay.on('click', function() {
    $('.header').toggleClass('header--open')
    if (TopScrollState) 
    $('[data-header-burger]').toggleClass('header__burger--follow')
    overlayOff(overlay)
  })

  // burger
  $('[data-header-burger], .header__nav-panel a').on('click', function(e) {
    e.preventDefault()

    $('.header').toggleClass('header--open')
    if (TopScrollState) 
    $('[data-header-burger]').toggleClass('header__burger--follow')

    if ( overlay.css('display') === 'none' ) {
      overlayOn(overlay)
      return
    }

    overlayOff(overlay)
  })

  // burger scroll efferct
  // console.log($(window).scrollTop())

  let TopScrollState = false

  setInterval(() => {
    if ( TopScrollState === false && $(window).scrollTop() > 1 ) {
      $('[data-header-burger]').addClass('header__burger--follow')

      TopScrollState = true
    } 
    else if ( (TopScrollState === true && $(window).scrollTop() === 0) ) {
      $('[data-header-burger]').removeClass('header__burger--follow')
      TopScrollState = false
    }
  }, 0)
 

  // swiper - header__top
  // const swiper = new Swiper('.header__burger');

})



/* $('.directs__categories-link').on('click', (e) => {
  if ( e.target.classList.contains('selected') ) return
  
  $('.selected').removeClass('selected')
  e.target.classList.add("selected")
  
}) */

// $('[data-slider-control]').on('mouseover', (e) => {
//   if ( !e.target.firstElementChild ) return

//   e.target.firstElementChild.setAttribute('fill', '#fff')
// })

// $('[data-slider-control]').on('mouseleave', (e) => {
//   if ( !e.target.firstElementChild ) return
   
//   e.target.firstElementChild.setAttribute('fill', '#424551')
// })

// $('[data-slider-control]').on('click', (e) => {
//   if ( !e.target.firstElementChild ) return
   
//   e.target.firstElementChild.setAttribute('fill', '#424551')
// })