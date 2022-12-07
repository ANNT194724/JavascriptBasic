let list = document.querySelector('ul');
let item8 = document.createElement('li');
item8.innerHTML = "Item 8";
let item9 = document.createElement('li');
item9.innerHTML = "Item 9";
let item10 = document.createElement('li');
item10.innerHTML = "Item 10";
list.appendChild(item8);
list.appendChild(item9);
list.appendChild(item10);

let elements = Array.from(document.querySelector('ul').querySelectorAll('li'));
elements[0].style.color = "red";
elements[2].style.backgroundColor = "green";
list.removeChild(elements[3]);
let newItem = document.createElement('li');
newItem.innerHTML = "New item";
list.insertBefore(newItem, elements[4]);