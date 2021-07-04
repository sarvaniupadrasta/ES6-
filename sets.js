let books = new Set();
books.add("Pride and prejudice");
books.add("War and Peace").add("Oliver Twist");
console.log(books);
console.log(books.size);

console.log("has Oliver Twist", books.has("Oliver Twist"));

books.delete("Oliver Twist");

/*
books.map(function(item){
    console.log(item);
}) // map function is not there for set
*/

books.forEach(function(item){
    console.log(item);
}) 