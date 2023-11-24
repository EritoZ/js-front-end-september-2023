function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const extraText = document.getElementById('extra');

    switch (button.textContent) {
        case 'More':
            extraText.style.display = 'block';
            button.textContent = 'Less';
            break;
        default:
            extraText.style.display = 'none';
            button.textContent = 'More';
    }
}