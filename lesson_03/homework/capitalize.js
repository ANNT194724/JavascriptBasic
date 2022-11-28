function capitalize(string) {
    const array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    const newstring = array.join(" ");
    return newstring;
}

console.log(capitalize("It is a good day"));