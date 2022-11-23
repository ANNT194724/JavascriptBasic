function compare(name1, name2, age1, age2) {
    if (age1 == age2) {
        console.log(`${name1} bằng tuổi ${name2}`);
        return;
    }
    var olderPerson = age1 > age2 ? name1 : name2;
    var youngerPerson = age1 < age2 ? name1 : name2;
    console.log(`${olderPerson} lớn hơn ${youngerPerson} ${age1 > age2 ? (age1 - age2) : (age2 - age1)} tuổi`);
}

let name1 = "Lâm";
let name2 = "Phong";
let age1 = 5;
let age2 = 12;

compare(name1, name2, age1, age2);