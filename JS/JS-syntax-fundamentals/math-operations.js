const readline = require('readline')

function solver(num1, num2, operator) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    let result = undefined

    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '%':
            result = num1 % num2
            break;
        case '**':
            result = num1 ** num2
            break;
    }

    console.log(result);
}


