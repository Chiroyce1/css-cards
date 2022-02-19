const cards = document.querySelectorAll('.card');
const close = document.querySelectorAll('.close');

// When the script loads, check for theme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.style.backgroundColor = 'black';
    cards.forEach(card => card.classList.add('dark'));
}
else {
    document.body.style.backgroundColor = 'white';
    cards.forEach(card => card.classList.remove('dark'))
}

// Check for changes to the theme and change content accordingly
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        document.body.style.backgroundColor = 'black';
        cards.forEach(card => card.classList.add('dark'));
    } else {
        document.body.style.backgroundColor = 'white';
        cards.forEach(card => card.classList.remove('dark'))
    }
})

// Handle closing of cards
close.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add a closing animation before removing the card
        e.target.parentElement.classList.add('close-animation');
        e.target.parentElement.remove();
    })
})