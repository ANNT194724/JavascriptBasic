function log(foo, bar) {
    console.log(`foo has value ${foo}`);
    console.log(`bar has value ${bar}`);
}

let foo = 2;
let bar = 5;
log(foo, bar);
console.log("swapping...");
let tmp = foo;
foo = bar;
bar = tmp;
log(foo, bar);