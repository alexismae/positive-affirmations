// Fetch affirmations from the Type.fit API
let affirmations = [];
const affirmationElement = document.getElementById('affirmation');

function fetchAffirmations() {
    affirmations = [
        "You are capable of amazing things.",
        "Every day is a new beginning.",
        "Believe in yourself and all that you are.",
        "Positivity is a choice you make.",
        "You are stronger than you think."
    ];
    showAffirmation();
}

function showAffirmation() {
    if (affirmations.length > 0) {
        const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        affirmationElement.textContent = randomAffirmation;
        affirmationElement.classList.remove('fade-in');
        void affirmationElement.offsetWidth; // Trigger reflow for animation restart
        affirmationElement.classList.add('fade-in');
    }
}

// Event listeners for showing a new affirmation
document.addEventListener('click', showAffirmation);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        showAffirmation();
    }
});

// Fetch affirmations on page load
fetchAffirmations();
