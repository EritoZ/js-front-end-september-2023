function calculateCircleArea(input) {
    if (typeof input != 'number') {
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof input}.`
        )
        return
    }

    let radius = parseFloat(input)
    let area = 3.14159 * radius ** 2

    console.log(area.toFixed(2))
}

calculateCircleArea(1)