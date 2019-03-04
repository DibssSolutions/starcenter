const number = $('.js-st-choose');
number.each(function() {
  const max_number = +($(this).attr('data-max-number'));
  const input = $(this).find('input');
  const plus = $(this).find('.js-st-plus');
  const minus = $(this).find('.js-st-minus');
  plus.on('click', function() {
    let val = +(input.val());
    if (val >= max_number) {
      return false;
    }
    else {
      val += 1;
      input.val(val);
    }
  });
  minus.on('click', function() {
    let val = +(input.val());
    if (val > 1) {
      val -= 1;
      input.val(val);
    }
    else {
      return false;
    }
  });
});
