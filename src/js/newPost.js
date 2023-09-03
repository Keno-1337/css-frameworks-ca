const modal = document.getElementById('myModal');
const openFormButton = document.querySelector('.expandable-button');
const closeFormButton = document.getElementById('closeFormButton');

openFormButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeFormButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
