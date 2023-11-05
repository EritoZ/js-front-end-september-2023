function stringSubstring(word, text) {
    let regex = RegExp(`(?: |^)${word}(?: |$)`, 'i');

    if (regex.test(text)) {
        console.log(word)
        return
    }

    console.log(`${word} not found!`)
}

stringSubstring('javascript',
'JavaScript is the best programming language')