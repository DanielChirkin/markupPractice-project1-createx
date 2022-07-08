import * as $ from 'jquery'

export default $('.footer__navigation-accordion .footer__title').on('click', function() {
  console.log('footer title pressed!');
  const accordionItem = $(this).parent('.footer__navigation-item')
  const panel = accordionItem.children('.footer__list')

  
  if ( accordionItem.hasClass('footer__item--open') ) {
    accordionItem.removeClass('footer__item--open')
    panel.css('max-height', 0)
    return
  }
  else {

    accordionItem.toggleClass('footer__item--open')
    const scrollHeight = panel.prop('scrollHeight') + 'px'
    panel.css('max-height', scrollHeight)
  }

})