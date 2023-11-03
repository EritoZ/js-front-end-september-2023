function cookingByNumbers(number, operator1, operator2, operator3, operator4, operator5) {
    number = parseInt(number)

    for (let operator of [operator1, operator2, operator3, operator4, operator5]) {
        switch (operator) {
            case 'chop':
                number /= 2
                break
            case 'dice':
                number **= 0.5
                break
            case 'spice':
                number += 1
                break
            case 'bake':
                number *= 3
                break
            case 'fillet':
                number *= 0.8
                break
        }
        console.log(number)
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')