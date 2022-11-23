function bmi(w, h) {
	return w/(h*h);   
}

function compare(bmi) {
	switch (bmi) {
		case bmi < 18.5:
			console.log("Underweight");
			break;
		case bmi <25:
			console.log("Normal weight");
			break;
		case bmi < 30:
			console.log("Pre-obesity");
			break;
		case bmi < 35:
			console.log("Obesity clas I");
			break;
		case bmi < 40:
			console.log("Obesity clas II");
			break;
		default:
			console.log("Obesity clas III");
			break;
		}
	}

var h = 1.76;
var w = 88.5;
compare(bmi(w, h));