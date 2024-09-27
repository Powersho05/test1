const flashcard = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const nextButton = document.getElementById('nextButton');

const flashcards = [
    { question: 'Qual é a capital da França?', answer: 'Paris' },
    { question: 'Qual é a capital do Brasil?', answer: 'Brasília' },
    { question: 'Qual é a capital da Espanha?', answer: 'Madri' },
    { question: 'Qual é a capital da Itália?', answer: 'Roma' },
];

let currentFlashcardIndex = 0;

function showFlashcard() {
    questionElement.textContent = flashcards[currentFlashcardIndex].question;
    answerElement.style.display = 'none';
}

nextButton.addEventListener('click', () => {
    answerElement.style.display = 'none';
    currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcards.length;
    showFlashcard();
});

// Mostrar a pergunta inicial
showFlashcard();

flashcard.addEventListener('click', () => {
    answerElement.style.display = 'block';
});