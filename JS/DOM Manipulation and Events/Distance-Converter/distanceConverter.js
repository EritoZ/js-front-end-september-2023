function attachEventsListeners() {
    const convertDistanceButton = document.getElementById('convert');

    convertDistanceButton.addEventListener('click', convertDistance)

    function convertDistance(e) {
        const inputUnit = e.currentTarget.previousElementSibling;
        const inputDistance = inputUnit.previousElementSibling;

        const outputUnit = document.getElementById('outputUnits');
        const outputDistance = outputUnit.previousElementSibling;

        const convertDistanceToMeters = {
            'km': (distance) => distance * 1000,
            'm': (distance) => distance * 1,
            'cm': (distance) => distance * 0.01,
            'mm': (distance) => distance * 0.001,
            'mi': (distance) => distance * 1609.34,
            'yrd': (distance) => distance * 0.9144,
            'ft': (distance) => distance * 0.3048,
            'in': (distance) => distance * 0.0254,
        }

        const convertMetersToDistance = {
            'km': (distance) => distance / 1000,
            'm': (distance) => distance / 1,
            'cm': (distance) => distance / 0.01,
            'mm': (distance) => distance / 0.001,
            'mi': (distance) => distance / 1609.34,
            'yrd': (distance) => distance / 0.9144,
            'ft': (distance) => distance / 0.3048,
            'in': (distance) => distance / 0.0254,
        }

        const meters = convertDistanceToMeters[inputUnit.value](inputDistance.value);

        outputDistance.value = convertMetersToDistance[outputUnit.value](meters);
    }
}