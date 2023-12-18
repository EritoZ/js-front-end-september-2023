function cafeteria(inputArray) {
    const baristasN = Number(inputArray.shift());
    const baristas = {};

    for (let i = 0; i < baristasN; i++) {
        let [name, shift, coffeeTypes] = inputArray.shift().split(' ');
        coffeeTypes = coffeeTypes.split(',');

        baristas[name] = {shift, coffeeTypes};
    }

    let command = inputArray.shift();
    while (command !== 'Closed') {
        const [action, ...data] = command.split(' / ');

        switch (action) {
            case 'Prepare':
                const [namePre, shift, coffeeType] = data;

                if (baristas[namePre]['shift'] !== shift || !baristas[namePre]['coffeeTypes'].some(value => value === coffeeType)) {
                    console.log(`${namePre} is not available to prepare a ${coffeeType}.`)
                    break;
                }

                console.log(`${namePre} has prepared a ${coffeeType} for you!`)
                break;

            case 'Change Shift':
                const [nameCha, newShift] = data;

                baristas[nameCha]['shift'] = newShift;

                console.log(`${nameCha} has updated his shift to: ${newShift}`)
                break;

            case 'Learn':
                const [nameLea, newCoffType] = data;

                if (baristas[nameLea]['coffeeTypes'].some(value => value === newCoffType)) {
                    console.log(`${nameLea} knows how to make ${newCoffType}.`)
                    break;
                }

                baristas[nameLea]['coffeeTypes'].push(newCoffType);

                console.log(`${nameLea} has learned a new coffee type: ${newCoffType}.`)
                break;
        }

        command = inputArray.shift();
    }

    for (const barista in baristas) {
        console.log(`Barista: ${barista}, Shift: ${baristas[barista]['shift']}, Drinks: ${baristas[barista]['coffeeTypes'].join(', ')}`)
    }
}

cafeteria(['4',
'Alice day Espresso,Cappuccino',
'Bob night Latte,Mocha',
'Carol day Americano,Mocha',
'David night Espresso',
'Prepare / Alice / day / Espresso',
'Change Shift / Bob / day',
'Learn / Carol / Latte',
'Prepare / Bob / night / Latte',
'Learn / David / Cappuccino',
'Prepare / Carol / day / Cappuccino',
'Change Shift / Alice / night',
 'Learn / Bob / Mocha',
'Prepare / David / night / Espresso',
'Closed']
)