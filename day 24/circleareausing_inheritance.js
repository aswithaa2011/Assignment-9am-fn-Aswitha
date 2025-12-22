
class Shape {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`This is a ${this.name}`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}


const c1 = new Circle(5);

c1.display();                 
console.log(c1.area());      
