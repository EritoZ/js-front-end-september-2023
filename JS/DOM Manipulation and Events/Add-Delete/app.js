function addItem() {
    const newItemText = document.getElementById('newItemText');
    const items = document.getElementById('items');

    if (!newItemText.value.trim()) {
        return;
    }

    const newItem = document.createElement('li');
    const deleteButton = document.createElement('a');

    deleteButton.textContent = '[Delete]';
    deleteButton.href = '#';
    deleteButton.addEventListener('click', () => {
        const ul = newItem.parentNode;
        ul.removeChild(newItem);
    })

    newItem.textContent = newItemText.value;

    newItem.appendChild(deleteButton);

    items.appendChild(newItem);
}