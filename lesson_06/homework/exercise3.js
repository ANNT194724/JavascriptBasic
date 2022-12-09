let p = document.querySelector('p');
let content = p.innerHTML;
content = content.replaceAll("?", "why?");
content = content.replaceAll("!", "what?");
p.innerHTML = content;
