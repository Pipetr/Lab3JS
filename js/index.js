class ToyCar {
    constructor(brand, model, series, manufacturer, scale, color, features, material, dimensions, price, inStock = true, year = 2001) {
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
    }


    displayDetails() {
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
    "Openable doors",
    "Diecast metal with some plastic parts",
    "5\"L x 2\"W x 1.75\"H",
    9.99,
    true,
    2003
);

console.log(johnnysS2000.displayDetails());


document.getElementById('carDetails').innerHTML = johnnysS2000.displayDetails();

function modifyPrice() {
    johnnysS2000.price = prompt("Enter new price:", johnnysS2000.price);
    document.getElementById('carDetails').innerHTML = johnnysS2000.displayDetails();
}