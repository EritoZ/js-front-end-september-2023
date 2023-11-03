function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0

    for (var nLostFight = 1; nLostFight <= lostFights; nLostFight++) {
        if (nLostFight % 2 === 0) {
            totalPrice += helmetPrice
        }

        if (nLostFight % 3 === 0) {
            totalPrice += swordPrice
        }

        if (nLostFight % 6 === 0) {
            totalPrice += shieldPrice
        }

        if (nLostFight % 12 === 0) {
            totalPrice += armorPrice
        }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
12.50,
21.50,
40,
200)