function convertToObject(jsonString) {
    const objectString = JSON.parse(jsonString)

    for (const key in objectString) {
        console.log(`${key}: ${objectString[key]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')