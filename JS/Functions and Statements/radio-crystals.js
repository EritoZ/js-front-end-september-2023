function radioCrystals(array) {

    function processCrystalRecursion(crystal, operation, desiredThickness, counter) {
        let result = operation(crystal)
        if (result < desiredThickness - 1) {
            return [crystal, counter]
        }
        return processCrystalRecursion(result, operation, desiredThickness, counter + 1)
    }

    const operationsDecrease = {
        'Cut': (x) => x * 0.25,
        'Lap': (x) => x * 0.8,
        'Grind': (x) => x - 20,
        'Etch': (x) => x - 2,
    }

    const operationsIncreaseAndWash = {
        'X-ray': (x) => x + 1,
        'Transporting and washing': (x) => Math.floor(x)
    }

    let [finalThicknessGoal, ...crystals] = array;

    for (let crystal of crystals) {
        console.log(`Processing chunk ${crystal} microns`)

        for (const operation in operationsDecrease) {
            let [operationResult, repeated] = processCrystalRecursion(crystal, operationsDecrease[operation], finalThicknessGoal, 0)

            if (operationResult !== crystal) {
                crystal = operationResult
                console.log(`${operation} x${repeated}`)

                crystal = operationsIncreaseAndWash["Transporting and washing"](crystal)
                console.log('Transporting and washing')
            }

            if (crystal < finalThicknessGoal) {
                crystal = operationsIncreaseAndWash["X-ray"](crystal)
                console.log('X-ray x1')
            }

            if (crystal === finalThicknessGoal) {
                console.log(`Finished crystal ${finalThicknessGoal} microns`)
                break
            }
        }
    }
}

radioCrystals([1000, 4000, 8100])