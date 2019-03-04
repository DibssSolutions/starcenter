import 'dotdotdot';
import { OPEN, SHOW, WIN } from './../constants';
const cards = $('.js-st-description-text');

const initDot = containers => {
  containers.each(function() {
    const dotContainer = $(this);
    const height = dotContainer.data('dot-height');
    dotContainer.dotdotdot({
      height: height,
      truncate: 'word',
      watch: true
    });
  });
};
cards.each(function() {
  const card = $(this);
  const trigger = card.find('.js-st-description-trigger');
  const triggerTextOpen = trigger.data('dot-open');
  const triggerTextClose = trigger.data('dot-close');

  const dotContainers = card.find('[data-dot-height]');
  initDot(dotContainers);
  card.addClass(SHOW);
  
  let flug = true;
  trigger
    .html(triggerTextOpen)
    .on('click', e => {
      e.preventDefault();
      if (flug === true) {
        dotContainers.trigger('destroy');
        card.addClass(OPEN);
        trigger.html(triggerTextClose);
        flug = false;
      }
      else {
        initDot(dotContainers);
        card.removeClass(OPEN);
        trigger.html(triggerTextOpen);
        flug = true;
      }
    });
});
