function list(number) {
    const array = [];
    for (let i = 0; i <= number; i++) {
        array.push(i);   
    }
    return array;
}

console.log(list(12));