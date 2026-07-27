export default class Slide {
  constructor(selector1, selector2) {
    this.selector1 = document.querySelector(selector1); // slide
    this.selector2 = document.querySelector(selector2); // wrapper
  }

  addEvents() {
    this.selector2.addEventListener('mousedown', this.handleDown);
  }

  handleUp() {
    this.selector1.removeEventListener('mousemove', this.handleMove);
    window.removeEventListener('mouseup', this.handleUp);
  }

  handleMove(event) {
    console.log(event.x);
    return this;
  }

  handleDown(event) {
    event.preventDefault();
    this.selector1.addEventListener('mousemove', this.handleMove);
    this.selector2.addEventListener('mouseup', this.handleUp);
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
