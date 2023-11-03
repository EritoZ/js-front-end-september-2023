function reverseAnArrayOfNumbers(n, array) {
    let newArray = array.slice(0, n)
    newArray.reverse()
    newArray = newArray.join(' ')

    console.log(newArray)
}

reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]
)