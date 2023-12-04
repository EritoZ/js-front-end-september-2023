function solve() {
    const result = document.querySelector('#check p');

    const table = document.querySelector('table');
    const tdButtons = table.querySelector('tfoot td');
    const quickCheck = tdButtons.firstElementChild;
    const clear = tdButtons.lastElementChild;

    const getRows = table.querySelectorAll('tbody tr');
    quickCheck.addEventListener('click', solveSudoku);
    clear.addEventListener('click', clearSudoku);

    const sudokuMatrix = formMatrix();

    function formMatrix() {
        const array= [];

        for (const row of getRows) {
            const rowChildren = row.querySelectorAll('input');
            const rowArray = [];

            for (const node of rowChildren) {
                rowArray.push(node);
            }

            array.push(rowArray);
        }

        return array;
    }

    function solveSudoku(e) {
        if (!sudokuMatrix[0][0].value) {
            table.style.border = '2px solid red';
            result.textContent = "NOP! You are not done yet...";
            result.style.color = 'red';

            return;
        }

        const firstRow = sudokuMatrix[0].map(x => x.value).sort();

        for (let i = 0; i < sudokuMatrix.length; i++) {
            const col = sudokuMatrix.map(value => value[i].value).sort();

            if (!col.every((value, index) => value === firstRow[index])) {
                table.style.border = '2px solid red';
                result.textContent = "NOP! You are not done yet...";
                result.style.color = 'red';

                return;
            }
        }

        table.style.border = '2px solid green';
        result.textContent = "You solve it! Congratulations!";
        result.style.color = 'green';
    }

    function clearSudoku() {
        for (const row of sudokuMatrix) {
            row.map(node => node.value = '');
        }
        table.style.border = '';
        result.textContent = '';
    }
}