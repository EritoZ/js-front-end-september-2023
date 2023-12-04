function encodeAndDecodeMessages() {
    const codeMessageButtons = document.querySelectorAll('main button');

    for (const button of codeMessageButtons) {
        button.addEventListener('click', codeMessage);
    }

    function codeMessage(e) {
        const messageElement = e.currentTarget.previousElementSibling;
        const message = messageElement.value;
        let decode = false;

        let asciiValueIncreaseNumber = 1;
        let newMessage = [];

        if (messageElement.disabled) {
            decode = true;
            asciiValueIncreaseNumber = -1;
        }

        for (const asciiElement of message) {
            const newAsciiValue = asciiElement.charCodeAt(0) + asciiValueIncreaseNumber;

            newMessage.push(String.fromCharCode(newAsciiValue));
        }

        newMessage = newMessage.join('');

        if (decode) {
            messageElement.value = newMessage;
        } else {
            messageElement.value = '';
            codeMessageButtons[1].previousElementSibling.value = newMessage;
        }
    }
}