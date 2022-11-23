function check(number) {
    if(isNaN(number)) {
        console.log("Not a Number!");
    } else if (number % 3 == 0 && number % 5 == 0) {
        console.log("FooBar");
    } else if (number % 5 == 0) {
        console.log("Bar");
    } else if (number % 3 == 0) {
        console.log("Foo");
    }else {
        console.log("Not Foobar");
    }
}

let number = prompt("Please enter a number");
check(number);