const ul = Array.from(document.querySelectorAll('ul'));
const first = document.createElement('li');
first.innerHTML = "first";
const last = document.createElement('li');
last.innerHTML = "last";
console.log(ul);
for (let i = 0; i < ul.length; i++) {
    const list = ul[i].querySelectorAll("li");
    list[0].innerHTML = "first";
    list[list.length - 1].innerHTML = "last";
}