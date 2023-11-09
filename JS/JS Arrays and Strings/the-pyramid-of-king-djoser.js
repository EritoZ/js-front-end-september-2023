function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    const gold = (base % 2) ? 1 : 4 * increment;

    let height = 0;
    let step = 0;

    for (let i = base; i > 2; i -= 2) {
        step++;
        stone += (i - 2) ** 2 * increment;
        height += increment;

        const outerLayerAmount = (i * 4 - 4) * increment;
        if (step % 5 === 0) {
            lapisLazuli += outerLayerAmount;
            continue;
        }

        marble += outerLayerAmount;
    }

    console.log(`Stone required: ${Math.ceil(stone)}
Marble required: ${Math.ceil(marble)}
Lapis Lazuli required: ${Math.ceil(lapisLazuli)}
Gold required: ${Math.ceil(gold)}
Final pyramid height: ${Math.floor(height + increment)}`);
}

thePyramidOfKingDjoser(12, 1);