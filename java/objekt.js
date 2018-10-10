// var omar = {
//  first_name: "omar",
//  last_name: "abdullah",
//  age: "19",
//  brothers: ["ali", "hannin", "rabi"],
//  adress: {
//       street: "Adjunktsgatan 4B",
//       city: "Malmö",
//       state: "Skåne"
     
//  },
//  fullName: function(){
//   return this.first_name + " " + this.last_name;
//  },

//  age_adress: function(){
//   return this.adress.city+ " " +this.adress.street+ " " +this.adress.state+ " " +"age: "+ this.age;
//  }
// }

// console.log(omar.first_name);
// console.log(omar.fullName());
// console.log(omar.age_adress());

function Person (firstName, last_name, age, brothers) {
 this.firstName = firstName;
 this.last_name = last_name;
 this.age = age;
 this.brothers = brothers;

 this.about = function() {
  return "His name is "+this.firstName+" "+this.last_name+" and he is "+this.age+" old"; 
 };

 this.brother = function() {
  return "His brothers are "+this.brothers;  
 };
 
}

var omar = new Person("Omar" , "Abdullah", "19");
var ali = new Person("ali" , "Abdullah", "25");
var samir = new Person("samir", "ahmad", 22, "samir , ahmad , said");

console.log(omar.age);
console.log(omar.about());
console.log(ali.about());
console.log(samir.brother());