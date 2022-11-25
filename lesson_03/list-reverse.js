function listReverse(number) {
    const array = [];
    for (let i = number; i >= 0; i--) {
        array.push(i);   
    }
    return array;
}

console.log(listReverse(12));