const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const buttonLoad = document.getElementById(`load-meals`);
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

const buttonAddMeal = form.nextElementSibling.firstElementChild;
const buttonEditMeal = form.nextElementSibling.lastElementChild;

const listMeals = buttonLoad.nextElementSibling.nextElementSibling;

let exampleMeal = listMeals.removeChild(listMeals.firstElementChild);

buttonLoad.addEventListener("click", loadMeals);
buttonAddMeal.addEventListener("click", addMeal);
buttonEditMeal.addEventListener("click", editMeal);

function loadMeals() {
    listMeals.textContent = '';

    fetch(baseUrl)
        .then(p => p.json())
        .then(data => {
            data = Object.values(data);

            for (const object of data) {
                const clone = exampleMeal.cloneNode(true)
                const cloneChildren = clone.children;

                cloneChildren[0].textContent = object.food;
                cloneChildren[1].textContent = object.time;
                cloneChildren[2].textContent = object.calories;

                clone.dataset.id = object._id;

                cloneChildren[3].firstElementChild.addEventListener('click', changeMeal);
                cloneChildren[3].lastElementChild.addEventListener('click', deleteMeal);

                listMeals.appendChild(clone);
            }
        })
        .catch()
}

function addMeal(e, method='post', id='') {

    const [food, time, calories] = [inputs[0].value, inputs[1].value, inputs[2].value];

    for (const input of inputs) {
        input.value = '';
    }

    const body = {food, time, calories};

    if (method === 'put') {
        body['_id'] = id;
    }

    fetch(baseUrl + id, {
        'method': method,
        'headers': {
            'Content-type': 'application/json'
        },
        'body': JSON.stringify(body),

    })
        .then(p => {
            loadMeals()
            buttonAddMeal.disabled = false;
            buttonEditMeal.disabled = true;
        })
        .catch()
}

function editMeal(e) {
    const id = e.currentTarget.dataset.id;

    addMeal(e, 'put', id)
}

function changeMeal(e) {
    const meal = listMeals.removeChild(e.currentTarget.parentNode.parentNode)
    const mealChildren = meal.children;

    for (let i = 0; i < 3; i++) {
        inputs[i].value = mealChildren[i].textContent
    }

    buttonEditMeal.dataset.id = meal.dataset.id;
    buttonEditMeal.disabled = false;
    buttonAddMeal.disabled = true;
}

function deleteMeal(e) {
    const id = e.currentTarget.parentNode.parentNode.dataset.id;

    fetch(baseUrl + id, {
        'method': 'delete',
    })
        .then(p => loadMeals())
        .catch()
}
