function arrayRotation(array, spins) {

    for (var i = 0; i < spins; i++) {
        array.push(array.shift())
    }

    console.log(array.join(' '));
}

arrayRotation([2, 4, 15, 31], 5)