function compare(name1, name2, age1, age2) {
    if (age1 < age2) {
        console.log(`${name1} nhỏ hơn ${name2} ${age2 - age1} tuổi`);
    } else if (age1 > age2) {
        console.log(`${name1} lớn hơn ${name2} ${age1 - age2} tuổi`);
    } else {
        console.log(`${name1} bằng tuổi ${name2}`);
    }
}

let name1 = "Lâm";
let name2 = "Phong";
let age1 = 15;
let age2 = 12;

compare(name1, name2, age1, age2);