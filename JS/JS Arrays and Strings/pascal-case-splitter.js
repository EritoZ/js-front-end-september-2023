function pascalCaseSplitter(string) {
    const regex = RegExp('[A-Z][a-z]*', 'g')

    let matches = regex[Symbol.match](string)

    console.log(matches.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'
)