let yell = "woo !"

let party = yell.repeat(20);

console.log(party);


let cat = {
    meow(times) {
        console.log("meow".repeat(times));
    },
    purr(times) {
        console.log("purr".repeat(times));
    },
    snore(times) {
        console.log("snore".repeat(times));
    }

}
cat.meow(20);
cat.purr(15);

function add(x=5, y=6) {
    console.log(x+y);
}

add(1,2);
//3


//default function parameters
function haveFun(
    activityName = "hiking",
     time = 3
     ) {
    console.log(`Today I will go ${activityName} for ${time} hours`)
}

haveFun("biking", 2.5);
haveFun("biking");
haveFun();

// arrow functions

let studentList = function(students) {
    console.log(students);
};

let studentListArrow = (students) => {
    console.log(students);
}


studentList(["A","B","C"]);
studentListArrow(["A","B","C"]); 

let list = ["apple","banana","cherry"];
list.map((item) => {
    console.log(item);
});


let person = {
    first: "Angie",
    hobbies: ["bike", "hike", "ski"],
    printHobbies: function(){
        //let _this = this;
     /*  this.hobbies.forEach(function(hobby){
            let string = `${_this.first} likes to ${hobby}`;
            console.log(string);
        });*/
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
}

person.printHobbies();

 //Generators

 function* director() {
     yield "Three";
     yield "Two";
     yield "One";
     yield "Action"
 }

 let countdown = director();

 console.log(countdown.next()); //{value:"Three", done:false}
 console.log(countdown.next());//{value:"Two", done:false}
 console.log(countdown.next());//{value:"One", done:false}
 console.log(countdown.next());//{value:"Action", done:false}
 console.log(countdown.next());//{value:undefined, done:true}
