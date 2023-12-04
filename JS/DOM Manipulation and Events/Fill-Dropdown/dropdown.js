function addItem() {
    const inputText = document.getElementById('newItemText');
    const inputValue = document.getElementById('newItemValue');
    const selectMenu = document.getElementById('menu');

    const option = document.createElement('option');
    option.textContent = inputText.value;
    option.value = inputValue.value;

    selectMenu.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}