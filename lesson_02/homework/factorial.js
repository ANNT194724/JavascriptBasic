function factorial(number) {
    if (number < 0 || isNaN(number)) {
        return "Invalid input";
    }
    if (number < 2) {
        return 1;
    } else {
        return number*factorial(number - 1);
    }
}

console.log(factorial(7));