function catalog(arrayProducts) {
    const productsDict = {};
    arrayProducts.sort((a, b) => a.localeCompare(b))

    arrayProducts.forEach(product => {
        if (!productsDict.hasOwnProperty(product[0]))
            productsDict[product[0]] = [];

        productsDict[product[0]].push(product.replace(/ (?=:)/, ''));
    })

    for (const productsDictKey in productsDict) {
        console.log(productsDictKey)
        console.log('  ' + productsDict[productsDictKey].join('\n  '))
    }
}

catalog([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
])