function largestNumber(num1, num2, num3) {
    let largestNum = parseFloat(num1)

    for (let num of [num2, num3]) {
        num = parseFloat(num)
        if (num >= largestNum) {
            largestNum = num
        }
    }
    console.log(`The largest number is ${largestNum}.`)
}

largestNumber(-3, -5, -22.5)