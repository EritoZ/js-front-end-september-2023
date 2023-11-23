function extract(content) {
    const text = document.getElementById(content).textContent;

    const extractedText = Array.from(text.match(RegExp('(?<=\\().+?(?=\\))', 'g')));

    return extractedText.join('; ')
}

