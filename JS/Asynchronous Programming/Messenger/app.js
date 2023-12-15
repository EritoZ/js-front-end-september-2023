function attachEvents() {
    const buttonSend = document.getElementById('submit');
    const buttonRefresh = buttonSend.nextElementSibling;

    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    buttonSend.addEventListener('click', createMessage);
    buttonRefresh.addEventListener('click', loadMessages);

    function createMessage() {
        let content = buttonSend.previousElementSibling;
        let author = content.previousElementSibling;

        author = author.children[1];
        content = content.children[1];

        fetch(baseUrl, {
            'method': 'POST',
            'headers': {
                'Content-type': 'application/json'
            },
            'body': JSON.stringify({
                'author': author.value,
                'content': content.value
            })
        })
        .catch();

        author.value = '';
        content.value = '';
    }

    function loadMessages() {
        const textArea = document.getElementById('messages');

        fetch(baseUrl)
            .then(promise => promise.json())
            .then(data => {
                data = Object.values(data);
                const messages = [];

                for (const obj of data) {
                    messages.push(`${obj.author}: ${obj.content}`);
                }

                textArea.textContent = messages.join('\n');
            })
            .catch();
    }
}

attachEvents();