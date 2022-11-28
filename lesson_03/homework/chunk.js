function chunk(array, size) {
    if (size < 1 || !Number.isInteger(size)) {
        console.log("Invalid input");
        return;
    }
    for (let i = 0; i < array.length; i+=size) {
        var subArr = [];
        for (let j = i; j < i + size; j++) {
            if (j == array.length) {
                break;
            }
            subArr.push(array[j]);
        }
        console.log(subArr);
    }
}

chunk([1, 2, 3, 4, 5], 2);