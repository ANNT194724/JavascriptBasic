function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}

const prototype = {
    takeOff() {
            this.isFlying = true;
        },
    land() {
            this.isFlying = false;
        }
}

Airplane.prototype = prototype

var boeing = new Airplane("Boeing");
console.log(boeing);
boeing.takeOff();
console.log(boeing.isFlying);
boeing.land();
console.log(boeing.isFlying);