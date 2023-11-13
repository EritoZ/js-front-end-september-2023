function carWash(arrayStrings) {
    let cleanedValue = 0;
    const objectAction = {
        'soap': (x) => x + 10,
        'water': (x) => x * 1.2,
        'vacuum cleaner': (x) => x * 1.25,
        'mud': (x) => x * 0.9
    }
    for (const action of arrayStrings) {
        cleanedValue = objectAction[action](cleanedValue)
    }

    console.log(`The car is ${cleanedValue.toFixed(2)}% clean.`)
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])