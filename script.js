// Fetch affirmations from the Type.fit API
let affirmations = [];
const affirmationElement = document.getElementById('affirmation');

function fetchAffirmations() {
    fetch('https://zenquotes.io/api/random')
    .then(response => response.json())
    .then(data => {
        affirmations = data.map(item => item.q); // Use 'q' for Zen Quotes
        showAffirmation();
    })
    .catch(error => console.error('Error fetching affirmations:', error));
;
            showAffirmation();
        });
}

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
