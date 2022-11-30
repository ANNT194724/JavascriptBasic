function Person(name, age) {
    this.age = age;
    this.name = name;
    this.stomach = [];
}

const prototype = {
    eat(food) {
        if (food.length > 10) {
            console.log("Too much food");
            return;
        }
        this.stomach.concat(food);
    },
    poop() {
        this.stomach = [];
    },
    introduceMyself() {
        return `This is ${this.name}, ${this.age} years old.`
    }
}

Person.prototype = prototype;