class Checkout {
  constructor() {
    this.optionsContainer = $('.js-st-optionst');
    this.heroInputs = $('.js-st-optionst-hero input');
    this.inputCar = $('.js-st-optionst-car');
    this.inputPackage = $('.js-st-optionst-package');
    this.optionsWrap = $('.js-st-optionst-hero-wrap');
    this.radioOptions = $('.js-st-radio-option');
    this.radioCheckedOption = $('.js-st-radio-option:checked');
    this.finalCostWrap = $('.js-st-final-devivery-html');
    this.table = $('.js-st-product-table');
    this.templateContainer;
    this.carOpenClass = 'is-car-open';

    this.init();
  }
  allInputsReview() {
    this.heroInputs.each((i,el) => {
      const input = $(el);
      input.on('change', () => {
        if (input.is(':checked')) {
          this.optionsWrap.removeClass(this.carOpenClass);
          this.templateContainer = $('.js-st-product-field-template');
          if (this.templateContainer) this.templateContainer.remove();
          this.heroInputs.prop('checked', false);
          input.prop('checked', true);
        }
      });
    });
  }
  carInput() {
    this.inputCar.on('change', () => {
      this.carDelivery(this.inputCar);
    });
  }
  renderTemplate(name, data) {
    let template = document.getElementById(name).innerHTML;
    for (let property in data) {
      if (data.hasOwnProperty(property)) {
        const search = new RegExp('{' + property + '}', 'g');
        template = template.replace(search, data[property]);
      }
    }
    return template;
  }
  optionsCheck() {
    this.radioOptions.each((i,el) => {
      const radio = $(el);
      
    });
  }
  radioData(radio) {
    const tableContent = radio.data('table-html');
    const priceContent = radio.data('price-block-html');
    const newPrice = radio.data('table-new-price');
    const oldPrice = radio.data('table-old-price');
    console.log(tableContent);
    let htmlTemplate = this.renderTemplate('st-template', {
      title: tableContent,
      newPrice: newPrice,
      oldPrice: oldPrice
    });
    this.table.append(htmlTemplate);
  }
  carDelivery(input) {
    if (input.is(':checked')) {
      const parent = input.parents('.js-st-optionst-item');
      const img = parent.find('img').clone();
      // console.log(this.radioCheckedOption);
      this.radioData(this.radioCheckedOption);
      this.optionsWrap.addClass(this.carOpenClass);
      
    }
    else {
      this.templateContainer = $('.js-st-product-field-template');
      this.templateContainer.remove();
      this.optionsWrap.removeClass(this.carOpenClass);
    }
  }
  init() {
    this.allInputsReview();
    this.carDelivery(this.inputCar);
    this.carInput();
  }
}

new Checkout();

