const baseBusInfoURL = 'http://localhost:3030/jsonstore/bus/businfo/'

function getInfo() {
    const buttonSubmitId = document.getElementById('submit');
    const inputInfo = buttonSubmitId.previousElementSibling;
    const divStopName = document.getElementById('stopName');
    const ulBuses = divStopName.nextElementSibling;

    getBusStatus()

    function getBusStatus() {
        fetch(`${baseBusInfoURL}${inputInfo.value}`)
            .then(response => response.json())
            .then(data => returnData(data))
            .catch(err => showError(err));
    }

    function returnData(data) {
        divStopName.textContent = data.name;
        ulBuses.textContent = '';

        const buses = Object.entries(data.buses);
        for (const [busId, time] of buses) {
            const busArrival = document.createElement('li');
            busArrival.textContent = `Bus ${busId} arrives in ${time} minutes`;
            ulBuses.appendChild(busArrival);
        }
    }

    function showError(err) {
        divStopName.textContent = 'Error';
        ulBuses.textContent = '';
    }
}

