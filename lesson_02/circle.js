function area(radius) {
    return Math.PI*Math.pow(radius, 2);
}

function circumference(radius) {
    return Math.PI*2*radius;
}

let radius = 3.9;
console.log(`Area: ${area(radius).toFixed(2)}`);
console.log(`Circumference: ${circumference(radius).toFixed(2)}`);
