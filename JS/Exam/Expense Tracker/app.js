window.addEventListener("load", solve);

function solve() {
    const buttonForm = document.getElementById('add-btn');
    const ulPreviewList = document.getElementById('preview-list');
    const ulExpensesList = document.getElementById('expenses-list');
    const buttonDelete = ulExpensesList.nextElementSibling;

    const form = buttonForm.parentNode;
    const inputs = form.querySelectorAll('input');

    buttonForm.addEventListener("click", addExpense);
    buttonDelete.addEventListener("click", deleteExpense);

    function addExpense(e) {
        e.preventDefault();

        for (const input of inputs) {
            if (!input.value.trim()) {
                return;
            }
        }

        const [expense, amount, date] = inputs;

        const li = document.createElement('li');
        li.className = 'expense-item';

        const article = document.createElement('article');

        const pExpense = document.createElement('p');
        pExpense.textContent = `Type: ${expense.value}`;
        pExpense.value = expense.value;
        article.appendChild(pExpense);

        const pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amount.value}$`;
        pAmount.value = amount.value;
        article.appendChild(pAmount);

        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${date.value}`;
        pDate.value = date.value;
        article.appendChild(pDate);

        const divButtons = document.createElement('div');
        divButtons.className = 'buttons';

        const buttonEdit = document.createElement('button');
        buttonEdit.className = 'btn edit';
        buttonEdit.textContent = 'edit';
        buttonEdit.addEventListener('click', editExpense);
        divButtons.appendChild(buttonEdit);

        const buttonOk = document.createElement('button');
        buttonOk.className = 'btn ok';
        buttonOk.textContent = 'ok';
        buttonOk.addEventListener('click', confirmExpense);
        divButtons.appendChild(buttonOk);

        li.appendChild(article);
        li.appendChild(divButtons);
        ulPreviewList.appendChild(li);

        for (const input of inputs) {
            input.value = '';
        }

        buttonForm.disabled = true;
    }

    function editExpense(e) {
        const article = e.currentTarget.parentNode.previousElementSibling;
        const articleChildren = article.children;

        for (let i = 0; i < 3; i++) {
            inputs[i].value = articleChildren[i].value;
        }

        const li = article.parentNode;

        ulPreviewList.removeChild(li);

        buttonForm.disabled = false;
    }

    function confirmExpense(e) {
        const li = ulPreviewList.removeChild(e.currentTarget.parentNode.parentNode);

        li.removeChild(li.lastElementChild);

        ulExpensesList.appendChild(li);

        buttonForm.disabled = false;
    }

    function deleteExpense(e) {
        e.reload()
    }
}
