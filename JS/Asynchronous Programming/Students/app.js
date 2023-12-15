function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const buttonSubmit = document.getElementById('submit');

    loadStudents();

    buttonSubmit.addEventListener('click', addStudent);

    function addStudent() {
        const inputs = document.querySelectorAll('input[type="text"]');
        const objectData = {};

        for (const input of inputs) {
            objectData[input.name] = input.value;
            input.value = '';
        }

        fetch(baseUrl, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(objectData)
        })
            .then(p => p.json())
            .then(showStudent)
            .catch();
    }

    function loadStudents() {
        fetch(baseUrl)
            .then(p => p.json())
            .then(data => {
                data = Object.values(data);

                for (const studentObject of data) {
                    showStudent(studentObject)
                }
            })
            .catch();
    }

    function showStudent(studentObject) {
        const tr  = document.createElement('tr');
        studentObject = Object.values(studentObject);

        for (const info of studentObject.slice(0, -1)) {
            const td = document.createElement('td');
            td.textContent = info;

            tr.appendChild(td);
        }
        document.getElementById('results').lastElementChild.appendChild(tr);
    }
}

attachEvents();