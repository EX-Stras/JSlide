import Slide from './slide.js';

export default class ButtonSlide extends Slide {
  changeSlide(index) {
    super.changeSlide(index);
    if (this.controls) this.changeControlClasses();
  }

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
  }

  changeControlClasses() {
    this.controls.forEach((control) => {
      control.classList.remove(control.dataset.anime || 'active');
    });
    const control = this.controls[this.index.active];
    control.classList.add(control.dataset.anime || 'active');
  }

  addControlsEvents() {
    this.controls.forEach((control, index) => {
      control.addEventListener('click', () => {
        this.transition(true);
        this.changeSlide(index);
      });
    });
  }

  createControls(fatherElement) {
    return this.$2.map(() => {
      const button = document.createElement('button');
      button.classList.add('button-index');

      if (fatherElement) fatherElement.appendChild(button);
      else document.body.appendChild(button);

      return button;
    });
  }

  Controls(create, selector5) {
    if (selector5) {
      if (create) { // true or false
        const father = document.querySelector(selector5); // fatherSelector
        this.controls = this.createControls(father);
      } else this.controls = document.querySelectorAll(selector5); // buttonsSelector

      this.addControlsEvents();
      this.changeControlClasses();
    }
    return this;
  }
}
