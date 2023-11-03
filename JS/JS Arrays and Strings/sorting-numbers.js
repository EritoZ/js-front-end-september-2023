function sortingNumbers(arrayNums) {
    arrayNums.sort((a, b) => a - b);

    let arrayNumsFirstPart = arrayNums.slice(0, Math.ceil(arrayNums.length / 2))
    let arrayNumsSecondPart = arrayNums.slice(Math.ceil(arrayNums.length / 2), arrayNums.length)

    arrayNumsSecondPart.sort((a, b) => b - a)

    let finalArrayNums = []
    let arrayLength = arrayNumsFirstPart.length

    for (let i = 0; i < arrayLength; i++) {
        finalArrayNums.push(arrayNumsFirstPart.shift())
        finalArrayNums.push(arrayNumsSecondPart.shift())
    }

    if (finalArrayNums[finalArrayNums.length - 1] === undefined) {
        finalArrayNums.pop()
    }

    return finalArrayNums
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 2]))