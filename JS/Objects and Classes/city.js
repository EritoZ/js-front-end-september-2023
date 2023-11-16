function city(obj) {
    const objEntries = Object.entries(obj)
    for (const pair of objEntries) {
        console.log(`${pair[0]} -> ${pair[1]}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})