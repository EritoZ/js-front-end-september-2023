function spiceMustFlow(spiceYield) {
    let daysWorked = 0
    let yieldedSpice = 0

    while (spiceYield >= 100) {
        daysWorked += 1
        yieldedSpice += spiceYield
        spiceYield -= 10

        if (yieldedSpice >= 26) {
            yieldedSpice -= 26
        }
    }

    if (yieldedSpice >= 26) {
        yieldedSpice -= 26
    }

    console.log(daysWorked)
    console.log(yieldedSpice)
}

spiceMustFlow(450)