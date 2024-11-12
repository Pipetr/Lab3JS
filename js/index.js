class ToyCar {
    constructor(brand, model, series, manufacturer, scale, color, features, material, dimensions, price) {
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
    }

    displayDetails() {
        return `
            Brand: ${this.brand}
            Model: ${this.model}
            Series: ${this.series}
            Manufacturer: ${this.manufacturer}
            Scale: ${this.scale}
            Color: ${this.color}
            Features: ${this.features}
            Material: ${this.material}
            Dimensions: ${this.dimensions}
            Price: $${this.price}
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
    9.99
);

console.log(johnnysS2000.displayDetails());


document.getElementById('carDetails').innerHTML = johnnysS2000.displayDetails();

function modifyPrice() {
    johnnysS2000.price = prompt("Enter new price:", johnnysS2000.price);
    document.getElementById('carDetails').innerHTML = johnnysS2000.displayDetails();
}