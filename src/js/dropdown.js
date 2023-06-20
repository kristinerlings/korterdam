const setupCollapsibleQuestions = () => {
    // Get all question elements
    const questions = document.querySelectorAll('.question');

    // Function to handle question click
    const handleClick = function () {
        const answer = this.querySelector('.answer');
        const questionText = this.querySelector('.question__text');

        // Toggle the display of the answer
        answer.classList.toggle('showanswer');
        questionText.classList.toggle('collapsed');
    };

    // Attach click event listener to each question
    questions.forEach((question) => {
        question.addEventListener('click', handleClick);
    });
};

// Call the function to set up collapsible questions
setupCollapsibleQuestions();
