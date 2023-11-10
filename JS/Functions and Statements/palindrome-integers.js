function palindromeIntegers(arrayPositiveNums) {
    for (let n of arrayPositiveNums) {
        n = String(n);
        const reverseN = n.split('').reverse().join('');

        console.log((n === reverseN));
    }
}

palindromeIntegers([32,2,232,1010]);