function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    const emailToBeDeleted = document.querySelector('input[name="email"]');
    const result = document.getElementById('result');

    let found = false;

    for (const td of emails) {
        if (td.textContent === emailToBeDeleted.value) {
            const parent = td.parentNode;
            const grandpa = parent.parentNode;

            grandpa.removeChild(parent);
            found = true;
            break;
        }
    }

    if (!found) {
        result.textContent = 'Not found.';
        return;
    }

    result.textContent = 'Deleted';
}