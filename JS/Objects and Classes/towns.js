function towns(strings) {
    for (const row of strings) {
        let [town, latitude, longitude] = row.split(' | ');
        latitude = parseFloat(latitude).toFixed(2)
        longitude = parseFloat(longitude).toFixed(2)

        console.log({town, latitude, longitude})
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])