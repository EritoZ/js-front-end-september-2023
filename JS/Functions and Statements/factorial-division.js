function factorialDivision(n1, n2) {
    function recursionFactorial(n) {
        function wrapper(result, n) {
            if (n === 1) {
                return result;
            }
            n--;
            return wrapper(result * n, n);
        }
        return wrapper(n, n)
    }

    let factorialN1 = recursionFactorial(n1);
    let factorialN2 = recursionFactorial(n2);

    const divisionResult = factorialN1 / factorialN2;

    console.log(divisionResult.toFixed(2));
}

factorialDivision(6,
2)
