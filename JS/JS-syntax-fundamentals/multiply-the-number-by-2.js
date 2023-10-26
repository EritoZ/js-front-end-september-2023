const readline = require('readline')

function multiply (num) {
    let result = num * 2

    console.log(result)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('give me ',(userInput) => {
    let num = parseInt(userInput)
    multiply(num)
    rl.close()
});