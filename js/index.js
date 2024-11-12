class ToyCar {
    constructor(brand, model, series, manufacturer, scale, 
        color, features, material, dimensions, price, inStock = true, year = 2001,
        image
    ) {
        this.brand = brand;
        this.model = model;
        this.series = series;
        this.manufacturer = manufacturer;
        this.scale = scale;
        this.color = color;
        this.features = features;
        this.material = material;
        this.dimensions = dimensions;
        this.price = price;
        this.inStock = inStock;
        this.year = year;
        this.image = image;
        
    }


    displayDetails() {
        this.setImage(this.image);
        document.getElementById('carName').textContent = `${this.brand} ${this.model}`;
        document.getElementById('carDescription').textContent = `A collectible ${this.series} series car from ${this.year} at a scale of ${this.scale}.`;
        const carProperties = document.getElementById('carProperties');
        carProperties.innerHTML = `
        <li>Color: ${this.color}</li>
        <li>Manufacturer: ${this.manufacturer}</li>
        <li>Price: $${this.price}</li>
        <li>Features: ${this.features.join(', ')}</li>
        <li>Materials: ${this.material}</li>
        <li>Dimensions: ${this.dimensions}</li>
        <li>In Stock: ${this.inStock ? 'Yes' : 'No'}</li>
    `; 
        return carProperties.innerHTML;
    }

    setImage(image) {
        const imageContainer = document.getElementById('carImage');
        // clean the container to avoid multiple images
        imageContainer.innerHTML = '';
        const carImage = document.createElement('img');
        carImage.setAttribute('src', image);
        imageContainer.appendChild(carImage);
    }

    displayCarCard() {
        document.getElementById('carProperties').innerHTML = this.displayDetails();
        this.setImage('');
    }
}

// Create an instance of the ToyCar
const johnnysS2000 = new ToyCar(
    "Honda",
    "S2000 Convertible",
    "Fast & Furious",
    "Jada Toys",
    "1/32",
    "Black",
    ["Openable doors"," Detailed interior"," Rubber tires"],
    "Diecast metal with some plastic parts",
    "5\"L x 2\"W x 1.75\"H",
    9.99,
    true,
    2003,
    './image/Johnnys-Honda-S2000-Convertible.jpg'
);

const toyotaSupra = new ToyCar(
    "Toyota",
    "Supra",
    "Fast & Furious",
    "Jada Toys",
    "1/32",
    "Orange",
    ["Openable doors"," Detailed interior"," Rubber tires"],
    "Diecast metal with some plastic parts",
    "5\"L x 2\"W x 1.75\"H",
    9.99,
    true,
    2003,
    './image/JADA-FF-1995-Toyota-Supra.jpg'
);

const ShawnsMcLaren = new ToyCar(
    "McLaren",
    "720S",
    "Fast & Furious",
    "Jada Toys",
    "1/32",
    "Silver",
    ["Openable doors"," Detailed interior"," Rubber tires"],
    "Diecast metal with some plastic parts",
    "5\"L x 2\"W x 1.75\"H",
    9.99,
    true,
    2003,
    './image/Shaws-McLaren-720S.jpg'
);

johnnysS2000.displayDetails();

let car;
function getCar() {
    const carName = document.getElementById('carName').textContent;
    if (carName.includes('Honda')) {
        car = johnnysS2000;
    } else if (carName.includes('Toyota')) {
        car = toyotaSupra;
    } else {
        car = ShawnsMcLaren;
    }
    return car;
}

function modifyPrice() {
    // Get the car object that is currently displayed
    car = getCar();
    car.price = prompt("Enter new price:", car.price);
    document.getElementById('carDetails').innerHTML = car.displayDetails();
}

function chageColor() {
    car = getCar();
    car.color = prompt("Enter new color:", car.color);
    document.getElementById('carDetails').innerHTML = car.displayDetails();
}

let count = 0;
function nextCar(){
    
    const cars = [johnnysS2000, toyotaSupra, ShawnsMcLaren];
    if(count < cars.length - 1){
        count++;
    } else {
        count = 0;
    }
    car = cars[count];
    car.displayDetails();
}

document.getElementById('changePrice').addEventListener('click', modifyPrice);
document.getElementById('changeColor').addEventListener('click', chageColor);
document.getElementById('nextCar').addEventListener('click', nextCar);
