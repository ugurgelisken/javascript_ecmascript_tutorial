var cars = {
    titles: ["Model", "Plaka", "Hız"],
    cars: [
        {
            name: "Ford",
            plate: "34 ABC 1900",
            speed: 180
        },
        {
            name: "Renault",
            plate: "34 XYZ 1040",
            speed: 180
        },
        {
            name: "BMW",
            plate: "24 UG 1983",
            speed: 220
        }
    ],
    getCarLength: function(){
        return "Arabaların toplam sayısı: " + this.cars.length;
    }
};

console.log(cars.getCarLength())

console.table(cars.cars);