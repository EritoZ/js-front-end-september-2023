function validityChecker(x1, y1, x2, y2) {
    let firstSquareFirstPointToZero = 0 ** 2 + x1 ** 2;
    let secondSquareFirstPointToZero = 0 ** 2 + y1 ** 2;

    let distanceFirstPointToZero = (firstSquareFirstPointToZero + secondSquareFirstPointToZero) ** 0.5

    let firstSquareSecondPointToZero = 0 ** 2 + x2 ** 2;
    let secondSquareSecondPointToZero = 0 ** 2 + y2 ** 2;

    let distanceSecondPointToZero = (firstSquareSecondPointToZero + secondSquareSecondPointToZero) ** 0.5

    let firstSquarePointToPoint = x2 ** 2 - 2 * x2 * x1 + x1 ** 2;
    let secondSquarePointToPoint = y2 ** 2 - 2 * y2 * y1 + y1 ** 2;

    let distancePointToPoint = (firstSquarePointToPoint + secondSquarePointToPoint) ** 0.5

    let result = undefined

    if (distanceFirstPointToZero % 1 === 0) {
        result = 'valid'
    } else {
        result = 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${result}`)

    if (distanceSecondPointToZero % 1 === 0) {
        result = 'valid'
    } else {
        result = 'invalid'
    }

    console.log(`{${x2}, ${y2}} to {0, 0} is ${result}`)

    if (distancePointToPoint % 1 === 0) {
        result = 'valid'
    } else {
        result = 'invalid'
    }

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`)
}

validityChecker(2, 1, 1, 1)