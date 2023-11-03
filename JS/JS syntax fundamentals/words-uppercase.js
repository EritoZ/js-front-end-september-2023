function wordsUppercase(string) {
    let reg = /\w+/g

    let words = reg[Symbol.match](string)

    words = words.join(', ').toUpperCase()

    console.log(words)
}

wordsUppercase('Hi, how are you?')
