const inputs = $('.js-st-stock-input');
let finalPrice;
let finalOldPrice;
inputs.each((i, el) => {
  const input = $(el);
  const name = input.attr('name').toLowerCase().replace(/\s/g, '');
  const image = input.data('small-image');
  const lastPrice = +input.data('last-price');
  const oldPrice = +input.data('old-price');

  const template = `<div class="st-product-sm" data-product-name="${name}">
		<div class="st-product-sm__bg" style="background-image: url(${image});"></div>
	</div>`;

  const container = $('.js-st-final-cost-left');
  const finalPriceContainer = $('.js-st-final-cost-price');
  const finalOldPriceContainer = $('.js-st-final-cost-old-price');
  finalPrice = +$('.js-st-final-cost-price').text();
  finalOldPrice = +$('.js-st-final-cost-old-price').text();
  console.log(finalPrice, finalOldPrice);
  input.on('change', () => {
  	if (input.is(':checked')) {
      container.append(template);

      finalPrice = finalPrice + lastPrice;
      finalPriceContainer.text(finalPrice.toFixed(2));

      finalOldPrice = finalOldPrice + oldPrice;
      finalOldPriceContainer.text(finalOldPrice.toFixed(2));
  	}
  	else {
      $(`[data-product-name="${name}"]`).remove();
      
      finalPrice = finalPrice - lastPrice;
      finalPriceContainer.text(finalPrice.toFixed(2));

      finalOldPrice = finalOldPrice - oldPrice;
      finalOldPriceContainer.text(finalOldPrice.toFixed(2));
  	}
  });
  
});
