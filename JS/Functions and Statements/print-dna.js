function printDna(length) {
    const sequence = 'ATCGTTAGGG'

    for (let i = 0; i < length; i++) {
        const sequenceLength = sequence.length;

        let starsCount = Math.abs(2 - i % 4);
        let dashesCount = i % 4 * 2;
        const codeLetterOne = sequence[i * 2 % sequenceLength];
        const codeLetterTwo = sequence[(i * 2 + 1) % sequenceLength];

        if (dashesCount === 6) {
            dashesCount -= 4
        }

        console.log(`${'*'.repeat(starsCount)}${codeLetterOne}${'-'.repeat(dashesCount)}${codeLetterTwo}${'*'.repeat(starsCount)}`);

    }
}

printDna(20);