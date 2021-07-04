function print(firstName) {
   console.log(`Hello ${firstName}`);
   const planet = "Earth";
   console.log(planet.startsWith("ear"));  //false
   console.log(planet.startsWith("Ear"));  //true
   console.log(planet.endsWith("th"));
   console.log(planet.endsWith("s"));
   console.log(planet.includes("h")); // true
   console.log(planet.includes("Earth1"));
   console.log(planet.includes("art"));
   console.log(planet.search("art"));

}

print("Sarvani");

function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName} Thanks!
    Total: ${price}
    shipping: ${shipping}
    grand total: ${price + shipping}`);
}

function createSymbol() {
    const id = Symbol();
    const courseInfo = {
        title: "Javascript",
        topics: ["strings","arrays","objects"],
        id: "js-course"
    };
    courseInfo[id] = "1234";
    console.log(courseInfo); //{title:"javascript",topics:Array(3), id:"js-course", Symbol():1234}
}

createEmail("Guy", 100);
createSymbol();