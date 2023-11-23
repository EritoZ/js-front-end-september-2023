function colorize() {
    const rows = document.querySelectorAll('table tr:nth-child(even)');

    for (const row of rows) {
        row.style.backgroundColor = 'Teal';
    }
}