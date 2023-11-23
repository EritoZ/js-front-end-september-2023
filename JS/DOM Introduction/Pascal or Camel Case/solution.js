function solve() {
    let text = document.getElementById('text').value;
    const namingConvention = document.getElementById('naming-convention').value;

    text = text.toLowerCase().trim()
    text = text.split(' ');
    let startIndex = 0

    switch (namingConvention) {
        case 'Camel Case':
            startIndex = 1
            break

        case 'Pascal Case':
            break

        default:
            document.getElementById('result').textContent = 'Error!'
            return
    }

    for (let i = startIndex; i < text.length; i++) {
        const word = text[i]
        text[i] = word[0].toUpperCase() + word.slice(1, word.length);
        console.log(text[i])
    }

    document.getElementById('result').textContent = text.join('')
}