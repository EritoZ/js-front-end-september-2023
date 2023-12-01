function addItem() {
    const newItemText = document.getElementById('newItemText');
    const items = document.getElementById('items');

    if (!newItemText.value.trim()) {
        return;
    }

    const newItem = document.createElement('li');

    newItem.textContent = newItemText.value;

    items.appendChild(newItem);
}