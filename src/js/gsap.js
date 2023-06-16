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

////// Festival details navigation "WHAT, WHEN, WHERE" //////

// Select all the sections and the sidebar links
const sections = document.querySelectorAll(".nav-section");
const links = document.querySelectorAll(".sidebar-link");

// Add a scroll event listener
window.addEventListener("scroll", function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Iterate through each section
    sections.forEach(function (section, index) {
        // Calculate the top and bottom positions of the section
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        // Check if the current scroll position is within the section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Remove the active class from all the links
            links.forEach(function (link) {
                link.classList.remove("activesection");
            });

            // Add the active class to the corresponding link in the sidebar
            links[index].classList.add("activesection");
        }
    });
});



