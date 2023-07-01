let db;

let data = [
  {
    name: "Tripti",
    age: 20,
    hobbies: ["dancing", "cooking", "singing"],
  },
  {
    name: "Ujjwal",
    age: 19,
    hobbies: ["badminton", "cooking"],
  },
];

db.users.insertMany(data);


let products = 
[
    {
        _id: ObjectId("644e2cfabf5f9b7ab50fdf7f"),
        name:"chai",
        price:20,
        description:'sasti chaai, ekdum swaad'
    },
    {
        _id: ObjectId("644e2cfabf5f9b7ab50fdf7f"),
        name:"coffee",
        price:30,
        description:'nescafe, dedo'
    }
]