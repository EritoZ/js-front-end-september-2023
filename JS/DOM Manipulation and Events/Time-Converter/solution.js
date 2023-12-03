function attachEventsListeners() {
    const buttonsTakeTime = document.querySelectorAll('div input:last-child');

    for (const button of buttonsTakeTime) {
        button.addEventListener('click', convertTime);
    }

    function convertTime(e) {
        const valueTime = e.currentTarget.previousElementSibling;
        const timeType = valueTime.id;

        convertToDays(timeType, Number(valueTime.value));
    }

    function convertToDays(timeType, valueTime) {
        switch (timeType) {
            case 'days':
                break;
            case 'hours':
                valueTime /= 24;
                break;
            case 'minutes':
                valueTime /= 60 * 24;
                break;
            case 'seconds':
                valueTime /= 60 * 60 * 24;
                break;
        }

        buttonsTakeTime[0].previousElementSibling.value = valueTime;

        convertToHours(valueTime);
    }

    function convertToHours(valueTime) {
        valueTime *= 24;

        buttonsTakeTime[1].previousElementSibling.value = valueTime;

        convertToMinutes(valueTime);
    }

    function convertToMinutes(valueTime) {
        valueTime *= 60;

        buttonsTakeTime[2].previousElementSibling.value = valueTime;

        convertToSeconds(valueTime);
    }

    function convertToSeconds(valueTime) {
        valueTime *= 60;

        buttonsTakeTime[3].previousElementSibling.value = valueTime;
    }
}