import * as $ from 'jquery'

export default $('.program__accordion-heading').on('click', function() {
  const accordionItem = $(this).parent('.program__accordion-item')
  const programPanel = accordionItem.children('.program__panel')

  

  if ( accordionItem.hasClass('program--active') ) {
    accordionItem.removeClass('program--active')
    programPanel.css('max-height', 0)
    return
  }
  else {
    $('.program__accordion-item').removeClass('program--active')
    $('.program__accordion-item').children('.program__panel').css('max-height', 0)

    accordionItem.toggleClass('program--active')
    const scrollHeight = programPanel.prop('scrollHeight') + 'px'
    programPanel.css('max-height', scrollHeight)
  }

})