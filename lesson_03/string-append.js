function appendString(array) {
    if(array.length < 2) {
        return array[0];
    }
    var result = "";
    for (let i = 0; i < array.length - 2; i++) {
        result += `${array[i]}, `;
    }
    result += `${array[array.length - 2]} và ${array[array.length - 1]}`;
    return result;
}

const array = ["Mai", "Vân", "Tùng", "Khánh"];
console.log(appendString(array));