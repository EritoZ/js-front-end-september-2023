function listOfNames(arrayNames) {
    arrayNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (var i = 0; i < arrayNames.length; i++) {
        console.log(`${i + 1}.${arrayNames[i]}`)
    }
}

listOfNames(["John", "Bob", "Christina", "Ema", "John", 'daniel', 'asdf']);