let user = {}; // thi sis creation of object

user["Know JavaScript"] = false; // create "Multiword-Key" and value is false
delete user["Know JavaScript"]; //delete that attribute

let key ="Know JavaScript";
user[key] = false; same as 3-line

let fruit = "apple";
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5 {Rule of String concatenation}
};

// Now let make Object using function so that no need to write same object structure again and again

function make_user(name,age)
{
  name : name,
    age : age
};

let user1 = make_user("Prince Chaudhry",21);
console.log(user1.age);

// There were no limitations on property{key} names , reserved words can be used as key

let obj = {
  for: 1,
  let: 2,
  return: 3,

  0:"test" // here key is automatiacally converts into string same as "0": "test"
};

console.log( obj.for + obj.let + obj.return );  //6
console.log( obj["0"] ); // test
console.log( obj[0] ); // test (same property)

//obj.__proto__ ->If used as a getter, returns the object's [[Prototype]].This feature is no longer recommended.

//in operator =. Return True or False that exists in object or not

console.log("0" in user);

//Acessing the object using for loop 

let userr = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in userr) { // we can give any name to variable key,property its programmers choice
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( userr[key] ); // John, 30, true
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1 //here + is implicitey type case string into integer
}



