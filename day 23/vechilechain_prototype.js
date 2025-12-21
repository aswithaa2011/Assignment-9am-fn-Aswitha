function Vehicle(name) {
  this.name = name;
}

Vehicle.prototype.start = function () {
  console.log(`${this.name} started`);
};

Vehicle.prototype.charge = function () {
  console.log(`${this.name} is charging`);
};

const car = new Vehicle("Car");
const electricCar = new Vehicle("Electric Car");

car.start();        
electricCar.start(); 
electricCar.charge();
