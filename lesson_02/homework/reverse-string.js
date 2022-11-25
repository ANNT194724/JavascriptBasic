function reverseString(string) {
    if (typeof string === 'string' || string instanceof String)
        return string.split("").reverse().join("");
    else 
        return "Invalid input";
}
console.log(reverseString("hello"));