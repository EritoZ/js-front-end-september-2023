const readline = require('readline')

function solve(data) {
    data = data.split(', ')
    name = data[0]
    age = parseInt(data[1])
    grade = parseFloat(data[2])
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

// function solve(name, age, grade) {
//     age = parseInt(age)
//     grade = parseFloat(grade)
//     console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('give me ', (data) => {
    solve(data)
    rl.close()
});