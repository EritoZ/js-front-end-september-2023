function modernTimesOfHashtag(string) {
    const regex = RegExp('#([a-z]+)(?:(?=#)| |$)', 'ig')

    const result = Array.from(string.matchAll(regex))

    result.forEach((value) => {console.log(value[1])})
}

modernTimesOfHashtag('#Nowa#days everyone uses # to tag a #special word in #socialMedia')