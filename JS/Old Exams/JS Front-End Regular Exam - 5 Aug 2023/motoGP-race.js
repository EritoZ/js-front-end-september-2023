function motoGPRace(array) {
    const [nRiders, ...data] = array;

    let riders = {};

    for (let i = 0; i < Number(nRiders); i++) {
        let [nameRider, fuel, position] = data[i].split('|');

        fuel = Number(fuel);
        position = Number(position);

        riders[nameRider] = {fuel, position};
    }

    const actions = data.slice(Number(nRiders), -1);

    const commands = {
        'StopForFuel': (dataArray) => {
            let [rider, minimumFuel, changedPosition] = dataArray;
            minimumFuel = Number(minimumFuel);

            if (riders[rider]['fuel'] < minimumFuel) {
                riders[rider]['fuel'] = minimumFuel;
                riders[rider]['position'] = Number(changedPosition);

                console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)

                return;
            }

            console.log(`${rider} does not need to stop for fuel!`);
        },

        'Overtaking': (dataArray) => {
            const [rider1, rider2] = dataArray;
            const positionRider1 = riders[rider1]['position'];
            const positionRider2 = riders[rider2]['position'];

            if (positionRider2 > positionRider1) {
                riders[rider1]['position'] = positionRider2;
                riders[rider2]['position'] = positionRider1;

                console.log(`${rider1} overtook ${rider2}!`);
            }
        },

        'EngineFail': (dataArray) => {
            const [rider, lapsLeft] = dataArray;

            riders[rider] = 0;

            console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }
    }

    for (const action of actions) {
        const [actionName, ...data] = action.split(' - ');

        commands[actionName](data);
    }

    riders = Object.entries(riders);

    for (const [rider, data] of riders) {
        if (data) {
            console.log(`${rider}\n  Final position: ${data['position']}`);
        }
    }
}

motoGPRace((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]))