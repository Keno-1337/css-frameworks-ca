document.addEventListener('DOMContentLoaded', function () {
    const authForm = document.getElementById('authForm');

    authForm.addEventListener('submit', function (event) {
        const passwordInput = document.getElementById('password');
        if (passwordInput.value.length < 8) {
            alert('Password must be at least 8 characters long.');
            event.preventDefault();
        }
    });
});
