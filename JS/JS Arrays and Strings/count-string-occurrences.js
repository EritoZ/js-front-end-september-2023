function countStringOccurrences(text, word) {
    text = text.split(' ')
    text = text.filter((x) => x === word)
    console.log(text.length);
}

countStringOccurrences('softuni is great place for learning new programming languages',
'softuni')