let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

console.log(1);
for (let i = 0; i < products.length; i++) {
    console.log(`${products[i]["name"]} - ${products[i]["price"]} - ${products[i]["brand"]} - ${products[i]["count"]}`)
}

console.log(2);
let sum = 0;
for (let i = 0; i < products.length; i++) {
    sum += products[i]["price"]*products[i]["count"];
}
console.log(sum);

console.log(3);
let apples = products.filter(product => product["brand"] == "Apple");
console.log(apples);

console.log(4);
let array = products.filter(product => product["price"] > 20000000);
console.log(array);

console.log(5);
let pros = products.filter(product => product["name"].toLowerCase().includes("pro"));
console.log(pros);

console.log(6);
var product = {
    name: "Xiaomi Redmi Note 7",
    price: 4500000,
    brand: "Xiaomi",
    count: 3,
}
products.push(product);
console.log(products);

console.log(7)
for (let i = 0; i < products.length; i++) {
    if (products[i]["brand"] == "Samsung") {
        products.splice(i, 1);
    }    
}
console.log(products);

console.log(8);
products.sort((a, b) => a["price"] - b["price"]);
console.log(products);

console.log(9);
products.sort((a, b) => b["count"] - a["count"]);
console.log(products);

console.log(10);
var index1 = Math.floor(Math.random() * products.length);
do {
    var index2 = Math.floor(Math.random() * products.length);
} while(index1 == index2);
console.log(products[index1], products[index2]);
