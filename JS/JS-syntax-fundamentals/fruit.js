function fruit(fruit, weight, money) {
    let kg = weight / 1000
    let price = kg * money

    console.log(`I need $${price.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}

fruit('apple', 1563, 2.35)