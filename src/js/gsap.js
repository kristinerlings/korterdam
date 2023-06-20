const element = document.querySelector('.nav__wrapper');

gsap.registerPlugin(ScrollTrigger);

const navScroll = () => {
    ScrollTrigger.create({
        trigger: element,
        start: 'top top', 
        endTrigger: 'body',
        pin: true, 
        pinSpacing: false,

        onUpdate: self => {
            if (self.isActive) {
                element.classList.add('sticky'); 
            } else {
                element.classList.remove('sticky'); 
            }
        }
    });

}

////// Festival details navigation "WHAT, WHEN, WHERE" //////

const sections = document.querySelectorAll(".nav-section");
const links = document.querySelectorAll(".sidebar-link");

const detailsNav = () => {

    sections.forEach(function (section, index) {
        ScrollTrigger.create({
            trigger: section,
            start: "top 50%", 
            end: "bottom", 
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