function evenAndOddSubtraction(array) {
    let evenNums = array.filter((x) => x % 2 === 0)
    let evenTotal = 0

    evenNums.forEach((n) => evenTotal += n)

    let oddNums = array.filter((x) => x % 2 === 1)
    let oddTotal = 0

    oddNums.forEach((n) => oddTotal += n)

    console.log(evenTotal - oddTotal)
}

evenAndOddSubtraction([3,5,7,9])