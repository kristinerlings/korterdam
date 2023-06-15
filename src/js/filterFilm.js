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

    const archiveThemes = document.querySelectorAll('.archive__theme');
    const themeDescriptionContainer = document.querySelector('.theme__description__container');
    const themeTitle = document.querySelector('.theme__title');
    const themeYear = document.querySelector('.theme__year');
    const themeDescription = document.querySelector('.theme__description');
    let isAllEditionThemes = false;

    archiveThemes.forEach((theme) => {
        const title = theme.querySelector('.archive__theme__title').textContent;
        const year = theme.querySelector('.archive__theme__year').textContent;
        const description = theme.querySelector('.archive__theme__description').textContent;

        if (title === selectedTheme) {
            themeTitle.textContent = title;
            themeYear.textContent = year;
            themeDescription.textContent = description;
        }



        // Check if the selected theme is 'All Edition themes'
        if (title === 'All Edition themes') {
            isAllEditionThemes = true;
        }
    });

    // Handle 'All Edition themes' separately
    if (selectedTheme === '') {
        themeTitle.textContent = 'All Edition themes';
        themeYear.textContent = '2021 - 2023';
        themeDescription.textContent = 'The different stories from all the way back to the first edition of the Kortkijk film festival';
    }


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
