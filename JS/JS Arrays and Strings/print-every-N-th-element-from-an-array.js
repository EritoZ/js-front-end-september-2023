function printEveryNThElementFromAnArray(array, step) {
    let filteredArray = []

    for (var i = 0; i < array.length; i += step) {
        filteredArray.push(array[i])
    }

    return filteredArray
}

printEveryNThElementFromAnArray(['1',
'2',
'3',
'4',
'5'],
6)