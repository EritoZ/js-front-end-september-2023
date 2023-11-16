function cats(catData) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cat of catData) {
        const [name, age] = cat.split(' ');
        const newCat = new Cat(name, age);

        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])