console.log('film js works');

/*

// Get the carousel container
const slider = document.querySelector('.slider');

// Get the prev and next buttons
const prevBtn = slider.querySelector('.slider__prev');
const nextBtn = slider.querySelector('.slider__next');

// Get the slider reel
const reel = slider.querySelector('.slider__reel');

// Set the initial position of the reel
let position = 0;

// Set the number of images to display at a time
const imagesToShow = 3;

// Calculate the width of a single slide
const slideWidth = reel.clientWidth / imagesToShow;

// Set the width of the slider reel
reel.style.width = `${slideWidth * reel.childElementCount}px`;

// Function to move the carousel to the left
const moveCarouselLeft = () => {
    position += slideWidth;
    position = Math.min(position, 0);
    reel.style.transform = `translateX(${position}px)`;
};

// Function to move the carousel to the right
const moveCarouselRight = () => {
    position -= slideWidth;
    position = Math.max(position, -slideWidth * (reel.childElementCount - imagesToShow));
    reel.style.transform = `translateX(${position}px)`;
};

// Event listeners for prev and next buttons
prevBtn.addEventListener('click', moveCarouselLeft);
nextBtn.addEventListener('click', moveCarouselRight);


*/