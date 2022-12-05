const button = document.querySelector('.lamp-button');
let on = false;
button.addEventListener("click", () => {
    var room = document.querySelector('.room');
    if (on) {
        room.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        on = false;
    } else {
        room.style.backgroundColor = "white";
        button.style.backgroundColor = "yellow";
        on = true;
    }
})