const readline = require('readline')

function checkExcellent(grade) {
    grade = parseFloat(grade)
    if (grade >= 5.5) {
        console.log('Excellent')
    } else {
        console.log('Not excellent')
    }
}

const rl = readline.createInterface({
    input: process.stdin,    output: process.stdout
});

rl.question('give me ', (...args) => {
    checkExcellent(args[0]);
    rl.close()
});

