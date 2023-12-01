function solve() {
    const selectMenu = document.getElementById('selectMenuTo');
    const optionBinary = selectMenu.querySelector('option');

    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';

    const optionHexadecimal = document.createElement('option');

    optionHexadecimal.textContent = 'Hexadecimal';
    optionHexadecimal.value = 'hexadecimal';

    selectMenu.appendChild(optionHexadecimal);



}