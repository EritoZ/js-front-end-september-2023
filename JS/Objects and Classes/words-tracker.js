function wordsTracker(arrayWords) {
    let wordCounts = {};
    let [wordsToBeCounted, ...words] = arrayWords

    wordsToBeCounted = wordsToBeCounted.split(' ')

    wordsToBeCounted.forEach((x) => wordCounts[x] = 0)

    for (const word of words) {
        wordCounts[word] += 1
    }

    wordCounts = Object.entries(wordCounts)
    wordCounts = wordCounts.sort((a, b) => b[1] - a[1])

    for (const word of wordCounts) {
        if (!isNaN(word[1])) {
            console.log(`${word[0]} - ${word[1]}`)
        }
    }
}

wordsTracker([
'is the',
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])