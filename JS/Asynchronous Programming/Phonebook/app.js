function attachEvents() {
    const buttonCreateContact = document.getElementById('btnCreate');
    const buttonLoadContacts = document.getElementById('btnLoad');
    const ulPhonebook = buttonLoadContacts.previousElementSibling;

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook/';

    buttonCreateContact.addEventListener('click', createContact);
    buttonLoadContacts.addEventListener('click', loadContacts);

    function createContact() {
        const inputPhone = buttonCreateContact.previousElementSibling.previousElementSibling;
        const inputPerson = inputPhone.previousElementSibling.previousElementSibling;

        const person = inputPerson.value;
        const phone = inputPhone.value;

        fetch(baseUrl, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify({person, phone})
        })
            .then(p => p.json())
            .then(createLiContact)
            .catch()

        inputPerson.value = '';
        inputPhone.value = '';
    }

    function loadContacts() {

        fetch(baseUrl)
            .then(p => p.json())
            .then(processContacts)
            .catch()

        function processContacts(data) {
            ulPhonebook.textContent = '';

            data = Object.values(data);

            for (const contact of data) {
                createLiContact(contact);
            }
        }
    }

    function createLiContact(contact) {
        const li = document.createElement('li');
        li.textContent = `${contact.person}: ${contact.phone}`;
        li.dataset.id = contact._id;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteContact);
        li.appendChild(deleteButton);

        ulPhonebook.appendChild(li);

        function deleteContact(e) {
            const liContact = e.target.parentNode;

            fetch(baseUrl + liContact.dataset.id, {
                'method': 'DELETE',
            })
                .then(function (){
                    ulPhonebook.remove();
                })
                .catch()
        }
    }
}

attachEvents();