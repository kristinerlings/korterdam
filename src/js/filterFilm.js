console.log('filterFilm js works');

////// FILTERING //////

const applyFilter = (selectedTheme) => {
    const cards = document.querySelectorAll('.archive__card');
    cards.forEach((card) => {
        if (selectedTheme === '' || card.querySelector('.card__theme').textContent === selectedTheme) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
};

const themeFilter = document.getElementById('themeFilter');
themeFilter.addEventListener('change', () => {
    applyFilter(themeFilter.value);
});

////// SORTING //////

const sortFilmsByTitle = (sortOrder) => {
    const filmsContainer = document.querySelector('.archive__cards__container');
    const films = Array.from(filmsContainer.querySelectorAll('.archive__card'));

    films.sort((a, b) => {
        const titleA = a.querySelector('.card__title').textContent.toLowerCase();
        const titleB = b.querySelector('.card__title').textContent.toLowerCase();
        if (sortOrder === 'asc') {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }
    });

    films.forEach((film) => {
        filmsContainer.appendChild(film);
    });
};



const init = () => {
    applyFilter(themeFilter.value);

    const sortAscButton = document.getElementById('sortAscButton');
    sortAscButton.addEventListener('click', () => {
        sortFilmsByTitle('asc');
    });

    const sortDescButton = document.getElementById('sortDescButton');
    sortDescButton.addEventListener('click', () => {
        sortFilmsByTitle('desc');
    });
};

init();
