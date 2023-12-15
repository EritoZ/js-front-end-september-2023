window.addEventListener("load", solve);

function solve() {
    const buttonNext = document.getElementById('next-btn');

    buttonNext.addEventListener("click", applyScholarship);


    function applyScholarship(e) {
        const [name, university, score] = e.currentTarget.parentNode.getElementsByTagName('input');

        for (const node of [name, university, score]) {
            if (!node.value.trim()) {
                return;
            }
        }

        const ul = document.getElementById('preview-list');

        const li = document.createElement('li');
        li.className = 'application';
        ul.appendChild(li);

        const article = document.createElement('article');
        li.appendChild(article);

        const h4 = document.createElement('h4');
        h4.textContent = name.value;
        article.appendChild(h4);

        const pUniversity = document.createElement('p');
        pUniversity.textContent = `University: ${university.value}`;
        article.appendChild(pUniversity);

        const pScore = document.createElement('p');
        pScore.textContent = `Score: ${score.value}`;
        article.appendChild(pScore);

        const buttonEdit = document.createElement('button');
        buttonEdit.className = 'action-btn edit';
        buttonEdit.textContent = 'edit';
        buttonEdit.addEventListener("click", editApplication);
        li.appendChild(buttonEdit);

        const buttonApply = document.createElement('button');
        buttonApply.className = 'action-btn apply';
        buttonApply.textContent = 'apply';
        buttonApply.addEventListener("click", applyApplication);
        li.appendChild(buttonApply);

        name.value = '';
        university.value = '';
        score.value = '';

        e.currentTarget.disabled = true;
    }

    function editApplication(e) {
        const article = e.currentTarget.previousElementSibling;

        const ul = e.currentTarget.parentNode.parentNode;

        ul.textContent = '';

        const info = Array.from(article.children);

        const formInputs = buttonNext.parentNode.getElementsByTagName('input');

        formInputs[0].value = info[0].textContent;

        for (let i = 1; i < formInputs.length; i++) {
            const [type, data] = info[i].textContent.split(': ');

            formInputs[i].value = data;
        }

        buttonNext.disabled = false;
    }

    function applyApplication(e) {
        const article = e.currentTarget.previousElementSibling.previousElementSibling;
        const ul = article.parentNode;

        ul.textContent = '';

        const li = document.createElement('li');
        li.className = 'application';
        li.appendChild(article);

        const ulCandidates = document.getElementById('candidates-list');

        ulCandidates.appendChild(li);

        buttonNext.disabled = false;
    }
}
  