function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchField = document.getElementById('searchField');
        const tableRows = document.querySelectorAll('tbody tr');

        for (const tableRow of tableRows) {
            const tableCells = Array.from(tableRow.children)
            const found = tableCells.some(cell => cell.textContent.includes(searchField.value))

            if (found) {
                tableRow.classList.add('select');
            } else {
                tableRow.classList.remove('select');
            }
        }
    }
}