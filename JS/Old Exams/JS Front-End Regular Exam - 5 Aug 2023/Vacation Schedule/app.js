const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const buttonLoadVacations = document.getElementById('load-vacations');
const buttonAddVacation = document.getElementById('add-vacation');
const buttonEditVacation = buttonAddVacation.nextElementSibling;

const form = buttonAddVacation.parentNode;
let [nameInput, daysInput, dateInput] = form.getElementsByTagName('input');

const vacationList = buttonLoadVacations.nextElementSibling;
let vacationExampleContainer = vacationList.firstElementChild;
vacationList.textContent = '';

buttonLoadVacations.addEventListener("click", loadVacations);
buttonAddVacation.addEventListener("click", addVacation);
buttonEditVacation.addEventListener("click", editVacation);


function loadVacations(e) {
    fetch(baseUrl)
        .then(p => p.json())
        .then(data => {createVacations(data)})
        .catch()

    function createVacations(data) {
        vacationList.textContent = '';
        data = Object.entries(data);

        for (const [id, vacation] of data) {
            const [name, date, days, change, done] = vacationExampleContainer.children;

            name.textContent = vacation.name;
            date.textContent = vacation.date;
            days.textContent = vacation.days;
            vacationExampleContainer.dataset.id = vacation._id;
            change.addEventListener('click', changeVacation);
            done.addEventListener('click', deleteVacation);

            vacationList.appendChild(vacationExampleContainer);
            vacationExampleContainer = vacationExampleContainer.cloneNode(true);
        }
    }
}

function addVacation(e, method='post', id='') {
    e.preventDefault();

    let name = nameInput.value;
    let days = daysInput.value;
    let date = dateInput.value;

    const body = {name, days, date}

    if (method === 'put') {
        body['_id'] = id;
    }

    fetch(baseUrl + id, {
        'method': method,
        'headers': {
            'Content-type': 'application/json'
        },
        'body': JSON.stringify(body)
    })
        .then(p => {
            loadVacations()
            nameInput.value = '';
            daysInput.value = '';
            dateInput.value = '';
        })
        .catch()
}

function changeVacation(e) {
    const currentVacation = e.currentTarget.parentNode;
    vacationList.removeChild(currentVacation);

    const [name, date, days] = currentVacation.children;

    nameInput.value = name.textContent;
    daysInput.value = days.textContent;
    dateInput.value = date.textContent;

    buttonEditVacation.disabled = false;
    buttonEditVacation.dataset.id = currentVacation.dataset.id;
    buttonAddVacation.disabled = true;
}

function editVacation(e) {
    addVacation(e, 'put', buttonEditVacation.dataset.id);
    buttonEditVacation.disabled = true;
    buttonAddVacation.disabled = false;
}

function deleteVacation(e) {
    const container = e.currentTarget.parentNode;

    fetch(baseUrl + container.dataset.id, {
        'method': 'delete'
    })
        .then(p => loadVacations())
        .catch()
}