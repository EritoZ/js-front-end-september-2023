function piccolo(arrayCarNumbers) {
    const carNumbersObject = {};

    arrayCarNumbers.forEach((carNumber) => {
        const [status, number] = carNumber.split(', ');
        carNumbersObject[number] = status;
    });

    let carNumbersArray = Object.entries(carNumbersObject);
    let inCarNumbers = []
    for (const [carNumber, status] of carNumbersArray) {
        if (status === 'IN') {
            inCarNumbers.push(carNumber);
        }
    }

    if (inCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
        return
    }

    inCarNumbers = inCarNumbers.sort();

    console.log(inCarNumbers.join('\n'))

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);