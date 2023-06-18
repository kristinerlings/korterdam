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
    pagedots: true,
  });
};

const years = ['2021', '2022', '2023'];

const titles = [
  'Kortkijk x mental health',
  'Another title',
  'Yet another title',
];

const paragraphs = [
  'Mental health is a seriouss issue. In Belgium alone, there are a lot of suicide deaths every year, because people are depressed. Kortrijk would like to raise awareness for this problem. That is why the theme of that Kortkijk film festival edition was mental health',
  'Another paragraph.',
  'Yet another paragraph.',
];

const paragraphsTwo = [
  'By giving the youngsters the voice to speak out their thoughts about this subject, we can raise awareness for the people that are struggling. And we hope that because of this, people will become closer and help each other when they are struggling.',
  'example two',
  'example three',
];

const images = [
  'public/1-hotspot-1.png',
  'public/1-hotspot-1.svg',
  'public/1-hotspot-1.svg',
];

let currentIndex = 0;

const replaceHotspotContent = () => {
  // Get references to the elements
  const $yearElement = document.querySelector('.hotspot__year');
  const $titleElement = document.querySelector('.hotspot__title');
  const $paragraphElement = document.querySelector('.hotspot__paragraph');
  const $paragraphElementTwo = document.querySelector(
    '.hotspot__paragraph--two'
  );
  const $imageElement = document.querySelector('.hotspot__img');

  // Replace the content based on the current index
  $yearElement.textContent = years[currentIndex];
  $paragraphElementTwo.textContent = paragraphsTwo[currentIndex];
  $titleElement.textContent = titles[currentIndex];
  $paragraphElement.textContent = paragraphs[currentIndex];
  $imageElement.src = images[currentIndex];

  const $dots = document.querySelectorAll('.h--dot');
  $dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot__active');
    } else {
      dot.classList.remove('dot__active');
    }
  });
};

const $prevButton = document.querySelector('.hotspot__prev');
$prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + years.length) % years.length; // Decrement index (with wrapping)
  replaceContent();
});

const $nextButton = document.querySelector('.hotspot__next');
$nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % years.length; // Increment index (with wrapping)
  replaceHotspotContent();
});


const init = () => {
  document.addEventListener('DOMContentLoaded', () => {
    generateCarouselCells();
    initializeFlickityCarousel(); /*Always initialise it last! */

    replaceContent();
  });
};

init();
