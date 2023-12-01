function focused() {
    const sectionsInputField = document.querySelectorAll('div input');

    for (const inputField of sectionsInputField) {
        inputField.addEventListener('focus', hoverEffectOn);
        inputField.addEventListener('blur', hoverEffectOff);
    }

    function hoverEffectOn(e) {
        e.target.parentNode.classList.add('focused');
    }

    function hoverEffectOff(e) {
        e.target.parentNode.classList.remove('focused');
    }
}