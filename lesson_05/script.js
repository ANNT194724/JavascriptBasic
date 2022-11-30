console.log(document.getElementsByClassName('text-content')[0].querySelector('p'));

console.log(document.getElementsByClassName('text-content')[0].querySelectorAll('p')[1]);

listArr = Array.from(document.querySelector('ul').querySelectorAll('li'));
console.log(listArr);

paragraphArr = Array.from(document.getElementsByClassName('text-content')[0].querySelectorAll('p'));
console.log(paragraphArr);