function makeADictionary(jsonArray) {
    let dictionary = jsonArray.reduce((acc, jsonStr) => {
        return Object.assign(acc, JSON.parse(jsonStr));
    }, {});

    const sortedDictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));

    sortedDictionary.forEach(([word, definition]) => {
        console.log(`Term: ${word} => Definition: ${definition}`);
    });
}


makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])