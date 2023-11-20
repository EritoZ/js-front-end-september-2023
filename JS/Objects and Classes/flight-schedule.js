function flightSchedule(matrix) {
    let [flightsSpecificSector, changedStatuses, checkStatus] = matrix;
    const flightsDict = {};

    const allFlights = [...flightsSpecificSector, ...changedStatuses];

    for (let flight of allFlights) {
        flight = flight.replace(' ', ':')
        const[code, destinationOrStatus] = flight.split(':');
        let keyName = 'Destination';

        if (destinationOrStatus === 'Cancelled') {
            keyName = 'Status';
        }

        if (!flightsDict.hasOwnProperty(code)) {
            flightsDict[code] = {};
        }

        flightsDict[code][keyName] = destinationOrStatus;
    }

    if (checkStatus[0] === 'Ready to fly') {
        for (const flight in flightsDict) {
            if (!flightsDict[flight].hasOwnProperty('Status')) {
                flightsDict[flight]['Status'] = 'Ready to fly';
                console.log(flightsDict[flight])
            }
        }

        return
    }

    for (const flight in flightsDict) {
        if (Object.values(flightsDict[flight]).length === 2) {
            console.log(flightsDict[flight])
        }
    }
}