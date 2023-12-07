function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
    const busStop = document.getElementById('info').firstElementChild;
    const buttonDepart = document.getElementById('depart');
    const buttonArrive = buttonDepart.nextElementSibling;

    busStop.setAttribute('value', 'depot');

    let currentStop = undefined;


    function depart(e) {
        console.log(e)
        fetch(`${baseUrl}${busStop.getAttribute('value')}`)
            .then(res => res.json())
            .then(updateBusStop)
            .catch(showError);

        function updateBusStop(data) {
            buttonDepart.disabled = true;
            buttonArrive.disabled = false;

            busStop.textContent = `Next stop ${data.name}`;
            currentStop = data.name;
            busStop.setAttribute('value', data.next);
        }
    }

    async function arrive() {
        buttonDepart.disabled = false;
        buttonArrive.disabled = true;

        busStop.textContent = `Arriving at ${currentStop}`;
    }

    function showError(e) {
        buttonDepart.disabled = true;
        buttonArrive.disabled = true;

        busStop.textContent = 'Error';
    }

    return {
        depart,
        arrive
    };
}

let result = solve();