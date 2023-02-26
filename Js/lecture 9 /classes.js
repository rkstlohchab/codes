class Vehicle{
    constructor(name,year,speed,price){
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.isMehngi = ()=>{
            return price > 20 ? 
            console.log("Mehngi Hai"):
            console.log("sasti hai");
        }
    }

    print(){
        console.log("Name:",this.name);
        console.log("Year:",this.year);
        console.log("Speed:",this.speed);
        console.log();
    }

    static className(){
        console.log("this is vehicle class")
    }

    get speedVal(){
        return this.speed;
    }

    set speedVal(s){
        this.speed = s;
    }
    // _
}
class Car extends Vehicle(){
    constructor(name,year,speed,price,type){
        super(name,year,speed,price);
        this.type = type;
    }

    printType(){
        console.log("type of car", type)
    }
}

let v = new Vehicle("Alto", 2022, 160);
console.log(v);

let v1 = new Vehicle("G-Wagon", 2023,140);
console.log(v1);

// console.log(v1.__proto__ == Vehicle.prototype) //true



let c = new Car("alto",2020,206,200,"suv")

console.log(c);
c.isMehngi();

// console.log(Car.prototype.__proto__ == Vehicle.prototype)