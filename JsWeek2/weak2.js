// 1 Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/[, ]+/g, " ").trim();
console.log(myString);

// 2 Arrays!
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
// att index 1 delet 0 element and add "meerkat"
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

var itemX = "meerkat";
for (var i = 0; i <= favoriteAnimals.length; i++) {
    if (itemX == favoriteAnimals[i]) {
        console.log("The item (" + itemX + ") you are looking for is at index: " + i)
    };
};


// more JavaScript 1
function arguments(first, secund, therd) {
    console.log(first + " " + secund + " " + therd);
}

arguments("what did u do", "last summer", 123);

// colorCar
function colorCar(color) {

    console.log("a " + color + " car.");

};
colorCar("red");

// 3
var theKing = {
    first_name: "The",
    last_name: "King",
    age: "19",
    food: ["Pizza", "Flafel", "Kex"],


    fullName: function () {
        return "his name is " + this.first_name + " " + this.last_name + " and he is " + this.age + ". His favorit food is: " + this.food;
    }
}
console.log(theKing.fullName());
