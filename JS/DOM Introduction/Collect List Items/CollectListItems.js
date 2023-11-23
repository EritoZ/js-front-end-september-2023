function extractText() {
    const items = Array.from(document.querySelectorAll('ul li'));
    const textArea = document.querySelector('textarea');

    for (const item of items) {
        textArea.textContent += item.textContent + '\n';
    }
}