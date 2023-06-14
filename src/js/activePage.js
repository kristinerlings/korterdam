const activePage = window.location.pathname;

const $nav = document.querySelectorAll('nav a');


const pageDetector = () => {
    $nav.forEach((link) => {
        if (link.href.includes(activePage)) {
            link.classList.add('active');
            console.log(activePage);
        }
    });
};


const init = () => {
    pageDetector();
}

init();