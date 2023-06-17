import '../css/flickity.css';

/*For more flickity options: https://flickity.metafizzy.co/options */

const generateCarouselCells = () => {
  const $carouselContainer = document.querySelector('.main-carousel');
  const $carouselArticles = document.querySelectorAll('.card');

  $carouselArticles.forEach((filmCardArticle) => {
    const cell = document.createElement('div');
    cell.classList.add('carousel-cell');
    cell.appendChild(filmCardArticle);
    $carouselContainer.appendChild(cell);
  });
};

// initialize Flickity carousel
const initializeFlickityCarousel = () => {
  new Flickity('.main-carousel', {
    // options
    cellAlign: 'center',
    contain: true,
    groupCells: 3,
    wrapAround: true,
    pageDots: true,
  });
};

const generateCarouselHotspotCells = () => {
  const $carouselContainer = document.querySelector('.container__hotspot');
  const $carouselArticles = document.querySelectorAll('.hotspot__wrapper');

  $carouselArticles.forEach((filmCardArticle) => {
    const cell = document.createElement('div');
    cell.classList.add('carousel-cell');
    cell.appendChild(filmCardArticle);
    $carouselContainer.appendChild(cell);
  });
};

const initializeFlickityHotspotCarousel = () => {
  new Flickity('.main-carousel', {
    // options
    cellAlign: 'center',
    contain: true,
    groupCells: 1,
    wrapAround: true,
    pageDots: true,
  });
};

const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    generateCarouselCells();
    initializeFlickityCarousel(); /*Always initialise it last! */

    generateCarouselHotspotCells();
    initializeFlickityHotspotCarousel();
  });
};

init();
