function sum(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function checksum(array) {
    sum = sum(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] == (sum - array[i])) {
            return array[i];
        }        
    }
    return null;
}

const array = [5, 65, 44, 12, 4];
console.log(checksum(array));