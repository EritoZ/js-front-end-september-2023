function generateReport() {
    const tableHeaders = document.querySelectorAll('th input');
    const trCount = document.querySelector('tbody').childElementCount;

    const report = new Array(trCount).fill(null).map(_ => ({}));

    for (let i = 0; i < tableHeaders.length; i++) {
        if (tableHeaders[i].checked) {
            const checkedHeader = tableHeaders[i];
            const takenTds = document.querySelectorAll(`tr td:nth-child(${i + 1})`);

            for (let j = 0; j < trCount; j++) {
                report[j][checkedHeader.name] = takenTds[j].textContent;
            }
        }
    }

    if (Object.keys(report[0]).length) {
        document.getElementById('output').textContent = JSON.stringify(report);
    }
}