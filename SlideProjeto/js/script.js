import ButtonSlide from './modulos/buttonsSlide.js';

console.clear();

const slide = new ButtonSlide('.slide', '.wrapper');
slide.init();
slide.activeArrows('.Bnext', '.Bprev');
slide.Controls(false, 'ul.custom-controls li');
