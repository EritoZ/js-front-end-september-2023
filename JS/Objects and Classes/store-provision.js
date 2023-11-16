function storeProvision(stock, orderedProducts) {
    const shelf = {}
    const combinedProducts = stock.concat(orderedProducts)
    const everythingLength = combinedProducts.length

    for (let i = 0; i < everythingLength; i += 2) {
        if (!(combinedProducts[i] in shelf)) {
            shelf[combinedProducts[i]] = 0
        }
        shelf[combinedProducts[i]] += parseInt(combinedProducts[i + 1])
    }

    for (const item in shelf) {
        console.log(`${item} -> ${shelf[item]}`)
    }
}

storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])