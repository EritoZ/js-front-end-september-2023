function vacation(nPeople, typePeople, day) {
    const priceChecker = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50
        }
    }

    const pricePerson =  priceChecker[typePeople][day]
    let totalPrice = pricePerson * nPeople

    if (typePeople === 'Students' && nPeople >= 30) {
        totalPrice *= 0.85;
        } else if (typePeople === 'Business' && nPeople >= 100) {
            totalPrice -= 10 * pricePerson;
        } else if (typePeople === 'Regular' && nPeople >= 10 && nPeople <= 20) {
            totalPrice *= 0.95;
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40,
"Regular",
"Saturday")