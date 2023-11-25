function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchField = document.getElementById('searchField');
        const tableRows = document.querySelectorAll('tbody tr');

        if (searchField.value === '') {
            return;
        }

        for (const tableRow of tableRows) {
            if (tableRow.textContent.includes(searchField.value)) {
                tableRow.classList.add('select');
            } else {
                tableRow.classList.remove('select');
            }
        }
    }
}