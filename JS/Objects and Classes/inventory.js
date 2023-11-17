function inventory(arrayStrings) {
    let info = [];

    for (const heroInfo of arrayStrings) {
        let [Hero, level, items] = heroInfo.split(' / ');

        info.push({Hero, level, items});
    }

    info = info.sort((a, b) => a['level'] - b['level'])

    for (const heroInfo of info) {
        console.log([`Hero: ${heroInfo['Hero']}`, `level => ${heroInfo['level']}`, `items => ${heroInfo['items']}`].join('\n'));
    }
}

inventory([
    'Superman / 18 / Sword',
    'Batman / 2 / Banana, Gun',
    'Poppy / 28 / Sentinel, Antara'
]);