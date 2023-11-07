function bitcoinMining(arrayShift) {
    let totalLv = 0;
    let totalBitcoin = 0;
    let dayBitcoinBought = undefined;

    for (let i = 1; i <= arrayShift.length; i++) {
        if (i % 3 === 0) {
            arrayShift[i - 1] *= 0.7
        }

        totalLv += arrayShift[i - 1] * 67.51;

        if (totalLv >= 11949.16) {
            let bitcoinsBought = Math.floor(totalLv / 11949.16);
            totalLv -= bitcoinsBought * 11949.16;
            totalBitcoin += bitcoinsBought;

            if (!dayBitcoinBought) {
                dayBitcoinBought = i
            }
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoin}`);

    if (dayBitcoinBought) {
        console.log(`Day of the first purchased bitcoin: ${dayBitcoinBought}`)
    }

    console.log(`Left money: ${totalLv.toFixed(2)} lv.`);
}

bitcoinMining([3124.15,
504.212,
2511.124,]);