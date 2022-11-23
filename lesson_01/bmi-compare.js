var h = 1.76;
var w = 88.5;
function bmi(w, h) {
    return w/(h*h);    
}

function compare(bmi) {
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi <25) {
        console.log("Normal weight");
    } else if (bmi < 30) {
        console.log("Pre-obesity");
    } else if (bmi < 35) {
        console.log("Obesity clas I");
    } else if (bmi < 40) {
        console.log("Obesity clas II");
    } else {
        console.log("Obesity clas III");
    }
}

compare(bmi(w, h));