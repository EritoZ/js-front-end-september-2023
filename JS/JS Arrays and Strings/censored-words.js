function censoredWords(text, censoredWord) {
    const censoredText = text.replace(RegExp(censoredWord, 'g'), '*'.repeat(censoredWord.length));

    console.log(censoredText)
}

censoredWords('Find the hidden word hidden', 'hidden')