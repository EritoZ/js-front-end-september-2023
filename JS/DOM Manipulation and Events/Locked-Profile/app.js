function lockedProfile() {
    const buttonsDisplay = document.querySelectorAll('.profile button:last-child');

    for (const button of buttonsDisplay) {
        button.addEventListener('click', toggleShowInformation);
    }

    function toggleShowInformation(e) {
        const buttonDisplay = e.currentTarget;
        const hiddenInfo = buttonDisplay.previousElementSibling;
        const displayStatus = hiddenInfo.style.display;

        const profile = buttonDisplay.parentNode;
        const lockButton = profile.querySelector('input[value="lock"]')

        if (lockButton.checked) {
            return;
        }

        if (displayStatus === '') {
            hiddenInfo.style.display = 'block';
            buttonDisplay.textContent = 'Hide it';
        } else {
            hiddenInfo.style.display = '';
            buttonDisplay.textContent = 'Show more';
        }
    }
}