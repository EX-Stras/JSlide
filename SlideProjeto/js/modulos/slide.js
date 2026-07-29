export default class Slide {
  constructor(selector1, selector2) {
    this.selector1 = document.querySelector(selector1); // slide
    this.selector2 = document.querySelector(selector2); // wrapper
    this.$ = { finalPosition: 0, startX: 0, movement: 0 };
  }

  addEvents() {
    this.selector2.addEventListener('mousedown', this.handleDown);
  }

  moveSlide() {
    this.selector1.setAttribute('style', `transform: translate3d(${(this.$.finalPosition + this.$.movement) * -1}px, 0, 0)`);
  }

  updatePosition(x) {
    this.$.movement = (this.$.startX - x) * 1.6;
  }

  handleUp() {
    this.selector1.removeEventListener('mousemove', this.handleMove);
    window.removeEventListener('mouseup', this.handleUp);

    this.$.finalPosition += this.$.movement;
  }

  handleMove({ x }) {
    this.updatePosition(x);
    this.moveSlide();

    return this;
  }

  handleDown(event) {
    event.preventDefault();
    this.$.startX = event.x;
    this.selector1.addEventListener('mousemove', this.handleMove);
    window.addEventListener('mouseup', this.handleUp);
  }

  bindEvents() {
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  init() {
    if (this.selector1 && this.selector2) {
      this.bindEvents();
      this.addEvents();
    }
    return this;
  }
}
