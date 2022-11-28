const pet = {
    type: "chim",
    name: "Robin",
    breed: "chào mào",
    hairColor: "nâu",
    favoriteFood: ["ngô", "hoa quả"],
    yearOld: 1
}

console.log(pet["name"]);
console.log(pet);

function introducePet(pet) {
    result = `Nhà tôi có 1 con ${pet["type"]} tên là ${pet["name"]}, nó thích ăn `;
    var food = pet["favoriteFood"];
    for (let i = 0; i < food.length - 1; i++) {
        result += (food[i] + ", ")
    }
    result += (food[food.length - 1] + ".");
    return result
}

console.log(introducePet(pet));

const petArray = [{
    type: "chim",
    name: "Robin",
    breed: "chào mào",
    hairColor: "nâu",
    favoriteFood: ["ngô", "hoa quả"],
    yearOld: 1
    }, {
    type: "mèo",
    name: "Black Cat",
    breed: "mun",
    hairColor: "đen",
    favoriteFood: ["sữa", "thức ăn cho mèo"],
    yearOld: 5
    }, {
    type: "thỏ",
    name: "Bunny",
    breed: "thỏ cảnh",
    hairColor: "trắng",
    favoriteFood: ["cà rốt", "hoa quả"],
    yearOld: 1
    }]
