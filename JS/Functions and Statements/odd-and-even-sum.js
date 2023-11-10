function oddAndEvenSum(n) {
    n = String(n).split('');
    let oddSum = 0
    let evenSum = 0

    for (let digit of n) {
        digit = parseInt(digit)

        if (digit % 2 === 1) {
            oddSum += digit;
        } else {
            evenSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)