function oddOccurrences(arrayStrings) {
    arrayStrings = arrayStrings.split(' ');
    let occurrences = new Map();

    for (let word of arrayStrings) {
        word = word.toLowerCase();
        if (!occurrences.has(word)) {
            occurrences.set(word, 0);
        }

        occurrences.set(word, occurrences.get(word) + 1);
    }

    const result = []
    for (const [word, count] of occurrences) {
        if (count % 2 === 1) {
            result.push(word)
        }
    }

    console.log(result.join(' '))
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')