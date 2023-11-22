function armies(arrayStrings) {
    let armies = {};
    const armyActionDict = {
        'arrives': (leaderName, armyName, armyCount) => {
            armies[leaderName] = {'armies': {}, 'totalCount': 0};
        },
        ':': (leaderName, armyName, armyCount) => {
            if (!armies.hasOwnProperty(leaderName)) {
                return
            }

            armies[leaderName]['armies'][armyName] = armyCount;
            armies[leaderName]['totalCount'] += armyCount;
        },
        '+': (leaderName, armyName, armyCount) => {
            for (const leaderName in armies) {
                if (armies[leaderName]['armies'].hasOwnProperty(armyName)) {
                    armies[leaderName]['armies'][armyName] += armyCount;
                    armies[leaderName]['totalCount'] += armyCount;
                    return
                }
            }
        },
        'defeated': (leaderName, armyName, armyCount) => {
            if (armies.hasOwnProperty(leaderName)) {
                delete armies[leaderName];
            }
        }
    };

    for (const stringInfo of arrayStrings) {
        if (stringInfo.includes(' arrives')) {
            const [leader, action] = stringInfo.split(/ (?=[arrives])/);
            armyActionDict[action](leader, undefined, undefined);

        } else if (stringInfo.includes(': ')) {
            let [leader, info] = stringInfo.split(': ');
            const [armyName, armyCount] = info.split(', ');
            armyActionDict[':'](leader, armyName, parseInt(armyCount));

        } else if (stringInfo.includes(' + ')) {
            let [armyName, armyIncrease] = stringInfo.split(' + ');
            armyActionDict['+'](undefined, armyName, parseInt(armyIncrease));

        } else {
            const [leader, action] = stringInfo.split(/ (?=[defeated])/);
            armyActionDict[action](leader, undefined, undefined);
        }
    }

    armies = Object.entries(armies)
    armies = armies.sort((a, b) => b[1]['totalCount'] - a[1]['totalCount']);

    for (const [leader, leaderArmy] of armies) {
        let armiesArray = Object.entries(leaderArmy['armies'])
            .sort((aCount, bCount) => bCount[1] - aCount[1]);

        console.log(`${leader}: ${leaderArmy['totalCount']}`)

        armiesArray.forEach(army => {
            console.log(`>>> ${army[0]} - ${army[1]}`)
        })
    }
}

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])