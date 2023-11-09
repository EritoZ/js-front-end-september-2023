function signCheck(n1, n2, n3) {
    let negativeNums = 0;
    const arrayNums = [n1, n2, n3];

    for (const n of arrayNums) {
        if (n < 0) {
            negativeNums++;
        }
    }

    if (negativeNums % 2 !== 0) {
        console.log('Negative');
        return
    }

    console.log('Positive');
}

signCheck(1, 2, 3)