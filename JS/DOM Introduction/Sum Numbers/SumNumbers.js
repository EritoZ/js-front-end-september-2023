function calc() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
    const result = document.getElementById('sum');

    result.value = Number(n1) + Number(n2);
}
