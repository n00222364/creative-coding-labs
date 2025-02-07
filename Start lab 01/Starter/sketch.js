let age;
const dob = "27/06/2004";

// let yobString = dob.substring(6,10);
// let yobNum = parseInt(yobString);

age = 2025 - parseInt(dob.substring(6,10));

let friends = ["Callum", "Cormac", "Oisin", "Cian"];
let arrayLength = friends.length

for(let num=0; num<friends.length; num++){
console.log(friends[num]);
}

// friends.push("Orlaith");

friends.splice(0,1,"Orlaith")

let myFriend = { name:"John", age:22, eirCode:  "A94VSF4"}