// Select the element you want to make sticky
const element = document.querySelector('.container__nav');

// Create a GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: element,
    start: 'top top', // Start the sticky behavior when the element's top reaches the top of the window
    endTrigger: 'body', // Stop the sticky behavior when scrolling reaches the end of the document
    pin: true, // Pins the element in place
    pinSpacing: false, // Disables automatic adjustment of pin spacing
    onUpdate: self => {
        if (self.isActive) {
            element.classList.add('sticky'); // Add the 'sticky' class when the element is active
        } else {
            element.classList.remove('sticky'); // Remove the 'sticky' class when the element is not active
        }
    }
});