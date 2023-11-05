function roadRadar(speed, area) {
    const areaDictionary = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    const penaltyDictionary = {
        20: 'speeding',
        40: 'excessive speeding',
    }

    let currentAreaLimit = areaDictionary[area]

    if (speed <= currentAreaLimit) {
        console.log(`Driving ${speed} km/h in a ${currentAreaLimit} zone`)
        return
    }

    let speedDiff = speed - currentAreaLimit
    let penalty = undefined

    for (const speedLimit in penaltyDictionary) {
        if (speedDiff <= speedLimit) {
            penalty = penaltyDictionary[speedLimit]
            break
        }
    }

    if (!penalty) {
        penalty = 'reckless driving'
    }

    console.log(`The speed is ${speedDiff} km/h faster than the allowed speed of ${currentAreaLimit} - ${penalty}`)

}

roadRadar(120, 'interstate')