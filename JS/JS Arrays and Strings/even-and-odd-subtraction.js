function evenAndOddSubtraction(array) {
    let evenTotal = 0;
    let oddTotal = 0;
    for (let n of array) {
        if (!(n % 2)) {
            evenTotal += n;
        } else {
            oddTotal += n;
        }
    }

    console.log(evenTotal - oddTotal);
}

evenAndOddSubtraction([3,5,7,9])