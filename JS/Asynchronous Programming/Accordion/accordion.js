const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/';

fetch(baseUrl + 'list')
    .then(response => response.json())
    .then(setArticles)
    .catch()

function setArticles(data) {
    data = Object.values(data);
    const main = document.getElementById('main');
    let article = main.removeChild(main.firstElementChild);

    for (const title of data) {
        const showMore = article.querySelector('button');

        showMore.previousElementSibling.textContent = title.title;

        showMore.id = title._id;
        showMore.addEventListener("click", showExtra);

        main.appendChild(article);
        article = article.cloneNode(true);
    }
}

function showExtra(e) {
    const button = e.currentTarget;
    const extraInfo = button.parentNode.nextElementSibling;

    if (button.textContent !== 'More') {
        extraInfo.style.display = 'none';
        button.textContent = 'More';
        return;
    }

    extraInfo.style.display = 'block';
    button.textContent = 'Less';

    if (extraInfo.firstElementChild.textContent) {
        return;
    }

    const id = button.id;

    fetch(baseUrl + `details/${id}`)
        .then(p => p.json())
        .then(title => {
            extraInfo.firstElementChild.textContent = title.content;
        })
        .catch()
}
