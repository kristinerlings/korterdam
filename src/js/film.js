console.log('film js works');

//Source: https://www.codewithrandom.com/2023/02/12/simple-javascript-carousel-how-to-create-a-carousel-using-css-js/?expand_article=1

const $carouselReel = document.querySelector('.carousel__reel');
const $card = document.querySelectorAll('.card');
const $btnNext = document.querySelector('.next');
const $btnPrev = document.querySelector('.prev');
let counter = 0;

const size = $card[0].clientWidth;

$carouselReel.style.transform = 'translateX(0)';

const init = () => {
  $btnNext.addEventListener('click', () => {
    if (counter < $card.length - 3) {
      $carouselReel.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      $carouselReel.style.transform = 'translateX(' + -size * counter + 'px';
    }
  });

  $btnPrev.addEventListener('click', () => {
    if (counter > 0) {
      $carouselReel.style.transition = 'transform 0.4s ease-in-out';
      counter--;
      $carouselReel.style.transform = 'translateX(' + -size * counter + 'px';
    }
  });

  $carouselReel.addEventListener('transitionend', () => {
    if (counter === $card.length - 3) {
      $carouselReel.style.transition = 'none';
      counter = 0;
      $carouselReel.style.transform = 'translateX(' + -size * counter + 'px';
    } else if (counter === -1) {
      $carouselReel.style.transition = 'none';
      counter = $card.length - 4;
      $carouselReel.style.transform = 'translateX(' + -size * counter + 'px';
    }
  });
};

init();
