function charactersInRange(chr1, chr2) {
    const asciiChr1 = chr1.charCodeAt(0);
    const asciiChr2 = chr2.charCodeAt(0);

    const smallerAscii = Math.min(asciiChr1, asciiChr2);
    const largerAscii = Math.max(asciiChr1, asciiChr2);

    const arrayAscii = [];

    for (let i = smallerAscii + 1; i < largerAscii; i++) {
        arrayAscii.push(String.fromCharCode(i));
    }

    console.log(arrayAscii.join(' '));
}

charactersInRange('C',
'#')