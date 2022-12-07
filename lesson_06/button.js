const number = document.getElementById('number');
let count = 0;

function plus() {
    number.innerHTML = ++count;
}

function minus() {
    number.innerHTML = --count;
}