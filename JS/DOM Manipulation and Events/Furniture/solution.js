function solve() {
    const buttonGenerate = document.querySelector('h1 + textarea + button');
    const buttonBuy = document.querySelector('.wrapper + textarea + button');
    const tbody = document.querySelector('tbody');

    buttonGenerate.addEventListener('click', generateObjects);
    buttonBuy.addEventListener('click', buyObjects);

    function createTd() {
        return document.createElement('td');
    }

    function createImage(img) {
        const containerImage = createTd();
        const image = document.createElement('img');
        image.setAttribute('src', img);
        containerImage.appendChild(image);

        return containerImage;
    }

    function createName(name) {
        const containerName = createTd();
        const pName = document.createElement('p');
        pName.setAttribute('class', 'name');
        pName.textContent = name;
        containerName.appendChild(pName);

        return containerName;
    }

    function createPrice(price) {
        const containerPrice = createTd();
        const pPrice = document.createElement('p');
        pPrice.setAttribute('class', 'price');
        pPrice.textContent = price;
        containerPrice.appendChild(pPrice);

        return containerPrice;
    }

    function createDecorationFactor(decFactor) {
        const containerDecorationFactor = createTd();
        const pDecorationFactor = document.createElement('p');
        pDecorationFactor.setAttribute('class', 'dec-factor');
        pDecorationFactor.textContent = decFactor;
        containerDecorationFactor.appendChild(pDecorationFactor);

        return containerDecorationFactor;
    }

    function createCheckBox() {
        const containerCheckBoxBuy = createTd();
        const inputCheckBox = document.createElement('input');
        inputCheckBox.setAttribute('type', 'checkbox');
        containerCheckBoxBuy.appendChild(inputCheckBox);

        return containerCheckBoxBuy;
    }

    function generateObjects(e) {
        const generateObjectTextarea = e.currentTarget.previousElementSibling;
        const arrayObjects = JSON.parse(generateObjectTextarea.value);

        for (const object of arrayObjects) {
            const {name, img, price, decFactor} = object;

            const tr = document.createElement('tr');

            const htmlImage = createImage(img);
            tr.appendChild(htmlImage);

            const htmlName = createName(name);
            tr.appendChild(htmlName);

            const htmlPrice = createPrice(price);
            tr.appendChild(htmlPrice);

            const htmlDecorationFactor = createDecorationFactor(decFactor);
            tr.appendChild(htmlDecorationFactor);

            const htmlCheckBox = createCheckBox();
            tr.appendChild(htmlCheckBox);

            tbody.appendChild(tr);
        }
    }

    function buyObjects(e) {
        const buyObjectsTextarea = e.currentTarget.previousElementSibling;
        const markedObjects = tbody.querySelectorAll('tbody input:checked');
        const boughtObjNames = [];
        let totalPrice = 0;
        let totalDecorationFactor = 0;

        for (const markedObject of markedObjects) {
            const object = markedObject.parentNode.parentNode;

            boughtObjNames.push(object.querySelector('.name').textContent);
            totalPrice += Number(object.querySelector('.price').textContent);
            totalDecorationFactor += Number(object.querySelector('.dec-factor').textContent);
        }

        buyObjectsTextarea.value += `Bought furniture: ${boughtObjNames.join(', ')}\n`;
        buyObjectsTextarea.value += `Total price: ${totalPrice.toFixed(2)}\n`;

        let averageDecorationFactor = totalDecorationFactor / boughtObjNames.length;

        if (isNaN(averageDecorationFactor)) {
            averageDecorationFactor = 0;
        }

        buyObjectsTextarea.value += `Average decoration factor: ${averageDecorationFactor}`;
    }
}