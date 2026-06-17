// When we create a Constructor function first letter was Capitle

function CreateCar(name, color, price, mxSpeed, average) {
    this.name = name;
    this.color = color;
    this.price = price;
    this.mxSpeed = mxSpeed;
    this.average = average;
    
};

// Use prototype

CreateCar.prototype.write = function(text){
    let h1 = document.createElement("h1")
    h1.style.color = this.color;
    h1.textContent = `This is ${this.name}. It's Max speed is ${this.mxSpeed}`;
    document.body.appendChild(h1)
}

let car1 = new CreateCar("Bugadi", "red", "$50000", 400, 14);
let car2 = new CreateCar("Fortuner", "gray", "$65000", 500, 20);                          