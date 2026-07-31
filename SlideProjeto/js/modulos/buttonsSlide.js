import Slide from './slide.js';

export default class ButtonSlide extends Slide {
  activeNextSlide() {
    this.transition(true);
    super.activeNextSlide();
  }

  activePrevSlide() {
    this.transition(true);
    super.activePrevSlide();
  }

  bindArrowsEvents() {
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
  }

  addArrowsEvents() {
    ['touchstart', 'click'].forEach((item) => {
      this.selector3.addEventListener(item, this.activeNextSlide);
      this.selector4.addEventListener(item, this.activePrevSlide);
    });
  }

  activeArrows(selector3, selector4) {
    this.selector3 = document.querySelector(selector3); // next
    this.selector4 = document.querySelector(selector4); // prev

    this.bindArrowsEvents();
    this.addArrowsEvents();
    console.log('ola')
  }
}
