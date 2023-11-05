function pascalCaseSplitter(string) {
    const regex = RegExp('[A-Z].*?(?:(?=[A-Z])|$)', 'g')

    let matches = regex[Symbol.match](string)

    console.log(matches.join(', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'
)