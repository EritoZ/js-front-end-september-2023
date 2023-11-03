function ageChecker(age) {
    if (age < 0) {
        console.log('out of bounds')
        return
    }

    ranges = [
        [0, 2, 'baby'],
        [3, 13, 'child'],
        [14, 19, 'teenager'],
        [20, 65, 'adult'],
    ]

    for (range of ranges) {
        if (range[0] <= age && age <= range[1]) {
            console.log(range[2])
            return
        }
    }

    console.log('elder')
}

ageChecker(-1)