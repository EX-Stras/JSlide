import ButtonSlide from './modulos/buttonsSlide.js';

console.clear();

const slide = new ButtonSlide('.slide', '.wrapper');
slide.init();
slide.activeArrows('.Bnext', '.Bprev');
slide.changeSlide(3);
slide.Controls(true, 'div.custom-controls');
