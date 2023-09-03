// Add this JavaScript to show and hide the modal
const modal = document.getElementById('myModal');
const openFormButton = document.querySelector('.expandable-button');
const closeFormButton = document.getElementById('closeFormButton');

// Show the modal when the "+" button is clicked
openFormButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeFormButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
