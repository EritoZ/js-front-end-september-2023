function attachEventsListeners() {
    const convertDistanceButton = document.getElementById('convert');

    convertDistanceButton.addEventListener('click', convertDistance)

    function convertDistance(e) {
        const inputUnit = e.currentTarget.previousElementSibling;
        const inputDistance = inputUnit.previousElementSibling;

        const outputUnit = document.getElementById('outputUnits');
        const outputDistance = outputUnit.previousElementSibling;

        const conversionRateToMeters = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254,
        }

        outputDistance.value = inputDistance.value * conversionRateToMeters[inputUnit.value] /
            conversionRateToMeters[outputUnit.value];
    }
}