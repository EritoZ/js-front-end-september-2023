function sumDigits(value) {
    let sum = 0;
    for (const i of value.toString()) {
        sum += parseInt(i)
    }

    console.log(sum);
}

sumDigits(97561)