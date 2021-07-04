function skier(name, sound) {
    return {
        name: name,
        sound: sound,
        powderYell: function () {
            let yell = this.sound.toUpperCase();
            console.log(`${yell}! ${yell}`);
        }
    };
}

console.log(skier('Sendy', 'woo').name);
console.log(skier('Sendy', 'woo').sound);
console.log(skier('Sendy', 'woo').powderYell());


const daytime = {
    breakfast : "oatmeal",
    lunch: "peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    daytime,
    nighttime
}; 

console.log(backpackingMeals); //{daytime:{breakfast:"oatmeal",lunch:"peanut butter and jelly", nighttime:"mac and cheese"}}

const backpackingMeals1 = {
    ...daytime,
    nighttime
};
console.log(backpackingMeals1); //{breakfast: "oatmeal",lunch:"peanut butter and jelly",nighttime:"mac and cheese"}

//Destructuring

const {title, price} = {
    title : "Reuben",
    price: "7",
    descriptopn: "classic",
    ingredients: [
        "bread",
        "corned beef",
        "dressing"
    ]
}

console.log(title);  //Reuben
console.log(price);  //7


const vacation = {
    destination: 'Chile',
    travelers: 2,
    activity: 'skiing',
    cost: 'so much'
};

function marketing({ destination, activity}) {
    return `Come to ${destination} and do some ${activity}`
}

console.log(marketing(vacation)); 

for (let letter of "Javascript") {
    console.log(letter);
}

//let topics = ["Javascript", "Node", "CSS"];

let topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("Javascript","/topic/javascript");

for (let topic of topics) {
    console.log(topic);
}

for (let topic of topics.keys()) {
    console.log(topic);
}

for (let route of topics.values()) {
    console.log(route);
}

for (let topic of topics.entries()) {
    console.log(topic);
}
// ["HTML", "/topic/html"]
// ["CSS", "/topic/css"]
// ["Javascript", "/topic/javascript"]






