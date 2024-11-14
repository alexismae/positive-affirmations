// Fetch affirmations from the Type.fit API
let affirmations = [];
const affirmationElement = document.getElementById('affirmation');

function fetchAffirmations() {
    const sheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZO0oljRpa9rXw8KZGmv8KbDYEsi_6f8jIfiMzk7aCWS0fPxEPmiDSc3bONONYWFypdi204mmxNgdo/pub?gid=0&single=true&output=csv'; // Replace with your URL
    
    console.log('Fetching affirmations from:', sheetURL);
    
    fetch(sheetURL)
        .then(response => {
            console.log('Response received:', response);
            return response.text();
        })
        .then(data => {
            console.log('CSV data:', data);
            affirmations = data.split('\n').map(row => row.trim());
            console.log('Affirmations array:', affirmations);
            showAffirmation();
        })
        .catch(error => {
            console.error('Error fetching affirmations:', error);
            affirmations = [
                "You are capable of amazing things.",
                "Every day is a new beginning.",
                "Believe in yourself and all that you are.",
                "Positivity is a choice you make.",
                "You are stronger than you think."
            ];
            showAffirmation();
        });
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
