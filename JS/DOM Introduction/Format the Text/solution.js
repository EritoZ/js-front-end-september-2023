function solve() {
    const textInput = document.getElementById('input');
    const result = document.getElementById('output');
    result.innerHTML = ''

    let formatedText = textInput.value.split('.');

    if (!formatedText[formatedText.length - 1]) {
        formatedText.pop();
    }

    for (let i = 0; i < formatedText.length; i += 3) {
        const paragraph = formatedText.slice(i, i + 3).join('. ');

        const p = document.createElement('p');

        p.textContent = `${paragraph}.`;

        result.appendChild(p);
    }
}