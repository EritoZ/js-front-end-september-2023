function garage(arrayStrings) {
    let garages = {};

    for (let garageInfo of arrayStrings) {
        const [garageNum, car] = garageInfo.split(' - ');

        if (!garages.hasOwnProperty(garageNum)) {
            garages[garageNum] = [];
        }

        garages[garageNum].push(car.replace(/: /g, ' - '));
    }

    garages = Object.entries(garages)

    for (const [garageNum, cars] of garages) {
        console.log(`Garage № ${garageNum}
--- ${cars.join('\n--- ')}`)
    }
}

garage(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol'])