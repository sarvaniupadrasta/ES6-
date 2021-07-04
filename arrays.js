let cats = ["Biscuit", "Jungle"]
let dogs = ["Stella","Camper"];

let animals = ["Smoky", "Miro", "Swimmy", cats, dogs];

let animals1 = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs];

console.log(animals); // ["Smoky", "Miro", "Swimmy", Array[2], Array[2]];
console.log(animals1);["Smoky", "Miro", "Swimmy", "Biscuit", "Jungle", "Stella","Camper"];


//Destructuring array

let [first,,,,fifth] = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seatle",
    "Portland"
]

console.log(first); //Spokane
console.log(fifth); //Portland

//includes
let cities = [
    "Spokane",
    "Boston",
    "Los Angeles",
    "Seatle",
    "Portland"
]

console.log(cities.includes("Boston")); //true
console.log(cities.includes("Santa Barbara")); //false