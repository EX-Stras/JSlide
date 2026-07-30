import Slide from './modulos/slide.js';

console.clear();

const slide = new Slide('.slide', '.wrapper');
slide.init();
slide.changeSlide(3);
