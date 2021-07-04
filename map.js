let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description:"testing"});

console.log(course);
console.log(course.react); //undefined
console.log(course.get("react").description); //ui

let details = new Map([[new Date(), "today"],[2, {javascript: ["js","node","react"]}],["items", [1,2]]]);

console.log(details.size);

details.forEach(function(item){
    console.log(item);
})