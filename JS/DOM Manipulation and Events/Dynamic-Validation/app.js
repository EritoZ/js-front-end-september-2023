function validate() {
    const emailInputField = document.getElementById('email');
    emailInputField.addEventListener('change', validateEmail);

    function validateEmail(e) {
        const inputValue = e.target.value;
        const regex = new RegExp('[a-z]+@[a-z]+\\.[a-z]+');

        const isValid = regex.test(inputValue);

        if (!isValid) {
            emailInputField.classList.add('error');
        } else {
            emailInputField.classList.remove('error');
        }
    }
}