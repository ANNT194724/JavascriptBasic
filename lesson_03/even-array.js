function evenArray(array) {
    const evenArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0)
            evenArray.push(array[i]);   
    }
    return evenArray;
}

const array = [5, 65, 44, 12, 4];
console.log(evenArray(array));