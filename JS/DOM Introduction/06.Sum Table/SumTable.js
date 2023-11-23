function sumTable() {
    let rowsNums = Array.from(document.querySelectorAll('table td:nth-child(even):not(#sum)'));
    const result = rowsNums.reduce((sum, n) => sum + parseFloat(n.textContent), 0);

    document.getElementById('sum').textContent = String(result);
}