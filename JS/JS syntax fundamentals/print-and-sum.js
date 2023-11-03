function printAndSum(num1, num2) {
    let allNumsBetween = []
    let sum = 0
    for (var i = num1; i <= num2; i++) {
        allNumsBetween.push(i)
        sum += i
    }

    console.log(allNumsBetween.join(' '))
    console.log(`Sum: ${sum}`)
}

printAndSum(50, 60)