function highlight(size) {
	let array = document.querySelector('p').innerHTML.split(" ");
	let newArray = array.map(x => {
	    if (x.length >= size) {
	        return '<span style="color:blue">' + x + "</span>";
	    }
	    return x;
	})
    return newArray.join(" ");
}

let text = highlight(5);
document.querySelector('p').innerHTML = text;
