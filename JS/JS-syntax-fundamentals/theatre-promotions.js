function theaterTicketPriceFinder(day, age) {
    age = parseInt(age)

    if (0 <= age && age <= 18) {
        age = 'young'
    } else if (19 <= age && age <= 64) {
        age = 'mid'
    } else if (65 <= age && age <= 122) {
        age = 'senior'
    } else {
        console.log('Error!')
        return
    }

    const dayDict = {
        'Weekday': {
            'young': 12,
            'mid': 18,
            'senior': 12,
        },
        'Weekend': {
            'young': 15,
            'mid': 20,
            'senior': 15,
        },
        'Holiday': {
            'young': 5,
            'mid': 12,
            'senior': 10,
        }
    }

    let price = dayDict[day][age]

    console.log(`${price}$`)
}

theaterTicketPriceFinder('Holiday', 15)