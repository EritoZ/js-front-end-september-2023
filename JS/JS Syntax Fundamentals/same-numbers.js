function sameNumbers(num) {
    let numToString = num.toString();
    let firstNumber = numToString[0];
    let sum = 0;
    let sameNum = 1;

    for (n of numToString) {
        sum += parseInt(n)
        if (n !== firstNumber) {
            sameNum = 0
        }
    }

    if (!sameNum) {
        console.log('false')
    } else {
        console.log('true')
    }

    console.log(sum)
}

sameNumbers(1234)