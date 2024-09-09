let currentPage = 1;

function nextPage(pageNumber) {
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
    currentPage = pageNumber;
}

function prevPage(pageNumber) {
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    document.getElementById(`page${pageNumber}`).classList.remove('hidden');
    currentPage = pageNumber;
}

function submitQuiz() {
    // Capture answers
    const answer1 = document.getElementById('q1').value;
    const answer2 = document.getElementById('q2').value;
    const answer3 = document.getElementById('q3').value;
    const answer4 = document.getElementById('q4').value;

    // Display answers
    document.getElementById('answer1').textContent = answer1;
    document.getElementById('answer2').textContent = answer2;
    document.getElementById('answer3').textContent = answer3;
    document.getElementById('answer4').textContent = answer4;

    // Show result page
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

function revealAnswers() {
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.classList.toggle('hidden');
    const button = document.getElementById('revealAnswersButton');
    button.textContent = answersContainer.classList.contains('hidden') ? 'Reveal Your Answers' : 'Hide Your Answers';
}

function retakeQuiz() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('page1').classList.remove('hidden');
    currentPage = 1;
    // Clear all answers
    document.getElementById('q1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('q3').value = '';
    document.getElementById('q4').value = '';
    document.getElementById('answer1').textContent = '';
    document.getElementById('answer2').textContent = '';
    document.getElementById('answer3').textContent = '';
    document.getElementById('answer4').textContent = '';
    document.getElementById('answersContainer').classList.add('hidden');
    document.getElementById('revealAnswersButton').textContent = 'Reveal Your Answers';
}
