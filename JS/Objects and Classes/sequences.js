function sequences(arrayStrings) {
    let uniqueNumberArrays = new Set()

    for (let array of arrayStrings) {
        array = JSON.parse(array)
        array = array.sort((a, b) => b - a);
        uniqueNumberArrays.add(array.join(', '));
    }

    uniqueNumberArrays = [...uniqueNumberArrays].sort((a, b) => a.split(', ').length - b.split(', ').length);

    console.log('[' + uniqueNumberArrays.join(']\n[') + ']');
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13.1]",
"[10, 1, -17, 0, 2, 14]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])