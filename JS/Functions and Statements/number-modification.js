function numberModification(n) {
    let nArray = String(n).split('').map(Number);
    let digitSum = nArray.reduce((x, y) => x + y);

    function wrapper(digitSum, nArray) {
        const averageDigitSum = digitSum / nArray.length;

        if (averageDigitSum > 5) {
            return nArray.join('');
        }

        return wrapper(digitSum + 9, [...nArray, 9]);
    }

    console.log(wrapper(digitSum, nArray));
}

numberModification(101)