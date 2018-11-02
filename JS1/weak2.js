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


// 4
function  vehicleType(color , num) {
    if (num == 1) 
    {
        console.log("a "+ color + " car.");
    }
     else if (num == 2)
     {
        console.log("a "+ color + " motorbike");
    }
}
console.log(vehicleType("black" , 2));
console.log(vehicleType("red" , 1));

// 5
console.log(3===3 ? "yes" : "no" );

// 6
function  vehicleType(color , num, age) {
    if (num == 1 && age <= 2) 
    {
        console.log("a "+ "new" + color + " car.");
    }
     else if (num == 2 && age <= 2)
     {
        console.log("a "+ "new" + color + " motorbike");
    } else if (num == 1 && age > 2)
     {
        console.log("a "+ "old" + color + " car.");
    } else if (num == 2 && age > 2) {
        console.log("a "+ "old" + color + " motorbike");
    }
};

// 7
let list =  ["motorbike" , "car" , "caravan" , "bike"]

// 8
console.log(list[2]);

// 9
function  vehicleType(color , num, age) {
    if (num == 1 && age <= 2) 
    {
        console.log("a "+ "new " + color + " " + list[1]);
    }
     else if (num == 2 && age <= 2)
     {
        console.log("a "+ "new " + color + " " + list[0]);
    } else if (num == 1 && age > 2)
     {
        console.log("a "+ "old " + color + " " + list[1]);
    } else if (num == 2 && age > 2) {
        console.log("a "+ "old " + color +  " " +list[0]);
    }
    if (num == 3 && age <= 2) 
    {
        console.log("a "+ "new " + color + " " + list[3]);
    }
    else if (num == 3 && age > 2)
    {
       console.log("a "+ "old " + color + " " + list[3]);
   }
};