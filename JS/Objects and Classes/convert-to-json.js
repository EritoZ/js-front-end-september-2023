function convertToJson(firstName, lastName, hairColor) {
    const obj = {firstName, lastName, hairColor}

    console.log(JSON.stringify(obj))
}

convertToJson('George', 'Jones', 'Brown')