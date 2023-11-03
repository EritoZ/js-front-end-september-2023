const readline = require('readline')

function monthChecker(num) {
    num = parseInt(num)

    let monthDictionary = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }

    let result = monthDictionary[num]

    if (result === undefined) {
        console.log('Error!')
        return
    }

    console.log(result);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('give me ', (...args) => {
    monthChecker(args[0])
    rl.close()
});