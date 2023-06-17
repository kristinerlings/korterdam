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

const pin1 = document.querySelector(".location-pin");
const popup1 = document.querySelector(".location-info");
const pin2 = document.querySelector(".location-pin2");
const popup2 = document.querySelector(".location-info2");
const pin3 = document.querySelector(".location-pin3");
const popup3 = document.querySelector(".location-info3");
const pin4 = document.querySelector(".location-pin4");
const popup4 = document.querySelector(".location-info4");
const pin5 = document.querySelector(".location-pin5");
const popup5 = document.querySelector(".location-info5");
const zIndex1 = document.querySelector(".location1");
const zIndex2 = document.querySelector(".location2");
const zIndex3 = document.querySelector(".location3");
const zIndex4 = document.querySelector(".location4");
const zIndex5 = document.querySelector(".location5");


const toggleLocations = () => {

    pin1.addEventListener("click", () => {
        console.log("show location1");
        popup1.classList.toggle("location-info--active");
        pin1.classList.toggle("location-pin--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex1.classList.toggle("location1--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");



    });

    pin2.addEventListener("click", () => {
        console.log("show location2");
        popup2.classList.toggle("location-info2--active");
        pin2.classList.toggle("location-pin2--active");
        popup1.classList.remove("location-info--active");
        pin1.classList.remove("location-pin--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex2.classList.toggle("location2--active");
        zIndex1.classList.remove("location1--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");


    });

    pin3.addEventListener("click", () => {
        console.log("show location3");
        popup3.classList.toggle("location-info3--active");
        pin3.classList.toggle("location-pin3--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info--active");
        pin1.classList.remove("location-pin--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex3.classList.toggle("location3--active");
        zIndex2.classList.remove("location2--active");
        zIndex1.classList.remove("location1--active");
        zIndex4.classList.remove("location4--active");
        zIndex5.classList.remove("location5--active");
    });

    pin4.addEventListener("click", () => {
        console.log("show location4");
        popup4.classList.toggle("location-info4--active");
        pin4.classList.toggle("location-pin4--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info--active");
        pin1.classList.remove("location-pin--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin5.classList.remove("location-pin5--active");
        popup5.classList.remove("location-info5--active");
        zIndex4.classList.toggle("location4--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex1.classList.remove("location1--active");
        zIndex5.classList.remove("location5--active");
    });

    pin5.addEventListener("click", () => {
        console.log("show location5");
        popup5.classList.toggle("location-info5--active");
        pin5.classList.toggle("location-pin5--active");
        popup2.classList.remove("location-info2--active");
        pin2.classList.remove("location-pin2--active");
        popup1.classList.remove("location-info--active");
        pin1.classList.remove("location-pin--active");
        popup3.classList.remove("location-info3--active");
        pin3.classList.remove("location-pin3--active");
        pin4.classList.remove("location-pin4--active");
        popup4.classList.remove("location-info4--active");
        zIndex5.classList.toggle("location5--active");
        zIndex2.classList.remove("location2--active");
        zIndex3.classList.remove("location3--active");
        zIndex4.classList.remove("location4--active");
        zIndex1.classList.remove("location1--active");
    });

}


/// NOT GSAP BUT SCROLL TO SECTION JS ///

const init = () => {

    navScroll();
    detailsNav();
    toggleLocations();
}

init();