const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('give me ', (
    name,
    age,
    grade,
) => {
    age = parseInt(age)
    grade = parseFloat(grade)
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
    rl.close()
});