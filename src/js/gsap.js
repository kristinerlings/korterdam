// Select the element you want to make sticky
const element = document.querySelector('.nav__wrapper');

// Create a GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const navScroll = () => {
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

}

////// Festival details navigation "WHAT, WHEN, WHERE" //////

const sections = document.querySelectorAll(".nav-section");
const links = document.querySelectorAll(".sidebar-link");

const detailsNav = () => {

    // Add a GSAP ScrollTrigger for section highlighting
    sections.forEach(function (section, index) {
        ScrollTrigger.create({
            trigger: section,
            start: "top 50%", // Activate the animation when the section is 50% in view
            end: "bottom", // Deactivate the animation when the section is 50% out of view
            onEnter: function () {
                links.forEach(function (link) {
                    link.classList.remove("activesection");
                });
                links[index].classList.add("activesection");
            },
            onEnterBack: function () {
                links.forEach(function (link) {
                    link.classList.remove("activesection");
                });
                links[index].classList.add("activesection");
            },
            onLeave: function () {
                links[index].classList.remove("activesection");
            },
            onLeaveBack: function () {
                links[index].classList.remove("activesection");
            },
        });
    });

}

const init = () => {

    navScroll();
    detailsNav();

}

init();