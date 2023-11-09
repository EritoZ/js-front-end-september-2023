function simpleCalculator(n1, n2, operator) {
    const solver = {
        'add': (n1, n2) => n1 + n2,
        'subtract': (n1, n2) => n1 - n2,
        'multiply': (n1, n2) => n1 * n2,
        'divide': (n1, n2) => n1 / n2
    }

    console.log(solver[operator](n1, n2));
}

simpleCalculator(12, 19, 'add')