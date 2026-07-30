export default class Slide {
  constructor(selector1, selector2) {
    this.selector1 = document.querySelector(selector1); // slide
    this.selector2 = document.querySelector(selector2); // wrapper
    this.$ = { finalPosition: 0, startX: 0, movement: 0 };
    this.$2 = [];
  }

  addEvents() {
    this.selector2.addEventListener('mousedown', this.handleDown);
    this.selector2.addEventListener('touchstart', this.handleDown);

    return this;
  }

  moveSlide() {
    this.selector1.setAttribute('style', `transform: translate3d(${(this.$.finalPosition + this.$.movement) * -1}px, 0, 0)`);

    return this;
  }

  updatePosition(x) {
    this.$.movement = (this.$.startX - x) * 1.6;

    return this;
  }

  handleUp(event) {
    const type = (event.type === 'mouseup') ? ['mousemove', 'mouseup'] : ['touchmove', 'touchend'];
    this.selector1.removeEventListener(type[0], this.handleMove);
    window.removeEventListener(type[1], this.handleUp);

    this.$.finalPosition += this.$.movement;

    return this;
  }

  handleMove(event) {
    const type = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    this.updatePosition(type);
    this.moveSlide();

    return this;
  }

  handleDown(event) {
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.$.startX = event.clientX;
      this.selector1.addEventListener('mousemove', this.handleMove);
      window.addEventListener('mouseup', this.handleUp);
    } else {
      this.$.startX = event.changedTouches[0].clientX;
      this.selector1.addEventListener('touchmove', this.handleMove);
      window.addEventListener('touchend', this.handleUp);
    }

    return this;
  }

  bindEvents() {
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleUp = this.handleUp.bind(this);

    return this;
  }

  slidePosition(slide) {
    const margin = (this.selector2.offsetWidth - slide.offsetWidth) / 2;
    return (slide.offsetLeft - margin);
  }

  slidesConfig() {
    this.$2 = [...this.selector1.children].map((slide) => {
      const position = this.slidePosition(slide);
      return { slide, position };
    });
  }

  changeSlide(index) {
    const activeSlide = this.$2[index];
    console.log(activeSlide);
    this.$.finalPosition = this.$2[index].position;
    this.moveSlide();
    this.slideIndexNav(index);
  }

  slideIndexNav(index) {
    const size = this.$2.length - 1;
    this.index = {
      prev: (index - 1 < 0) ? undefined : index - 1,
      active: index,
      next: (index + 1 > size) ? undefined : index + 1,
    };
  }

  init() {
    if (this.selector1 && this.selector2) {
      this.bindEvents();
      this.addEvents();
      this.slidesConfig();
    }
    return this;
  }
}
