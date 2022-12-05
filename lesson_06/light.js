const button = document.querySelector('.lamp-button');
button.addEventListener("click", () => {
    var room = document.querySelector('.room');
    if (room.style.backgroundColor === "white") {
        room.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
    } else {
        room.style.backgroundColor = "white";
        button.style.backgroundColor = "yellow";
    }
})