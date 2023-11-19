class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        const [name, price, quantity] = Object.values(product);

        this.storage.push({name, price, quantity});
        this.totalCost += price * quantity;
        this.capacity -= quantity;
    }

    getProducts() {
        const result = []
        this.storage.forEach((product) => result.push(JSON.stringify(product)));

        return result.join('\n');
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);