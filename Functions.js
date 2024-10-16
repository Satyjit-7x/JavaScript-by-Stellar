// java script treats fumctions as objects 
//-----------------------------------------------Functions--------------------------------------------
 console.log(hello());  // this is function HOISTING we call function before declaration its is valid in JSCRIPT
function hello() {return 1;}            // this is FUNCTION DECLARATION 

console.log(hello()); // prints 1 


//below is for NOTE 
// when we want to use variable directly in out string 

let name = "Stellar";
let grut = `Hello Mr. ${name} How are you Today...`; // HERE USED (`) backticks <- below esc 
console.log(grut);


console.log("Now the stuff is function expression");

//-------------------------------------------Function Expression --------------------------------------------


let world = function() {               // FUNCTION EXPRESSION (are a value) stores a function as values 
// here function  is anonymous is doesn't have it's name 
    console.log("Hello World");
}
world(); //function calling 

let add = function(num1,num2)
          { return num1+num2; }

let result = add(4,5);
console.log(result);

let sum = add;
let resul = sum(2,3);
console.log(resul);

//-----------------------------------------------Arrow Functions--------------------------------------------


// we are using arrow because we dont want to mention function keyword and want to use function then
// if we have only one statement in our function then we dont have to write {} and if statement returning something 
// also there we don't have to write return keyword in upper add can done by it see below 
/*
let add = (num1,num2) => num1+num2; 
*/ 
let greet = (name) => console.log("Hello "+ name);
//let greet = name => console.log("Hello "+ name); // observe name in singe paranthesis ()is optional
greet("Satyjit");

//for te=wo three lines 

let learn = (value) =>
{
    console.log(value+5);
    console.log(value-5);
    console.log(value*5);
    return value/5;
}

let ans = learn(4);
console.log(ans);

//----------------------------------------------Closures------------------------------------------------------ 

 function hell(a)
 {
    console.log("Learning Closures "+a);
  let c = 96;
    return function(b) // this is anonymous function bcz we dont gave any name to this function 
    {                 //we can also give name to this function  
      return a+b+c; // here we can use variables of previous function in returned function 
      // so scope of a and c called as LAXICAL SCOPE 
    }
 }

  var store = hell(3); //calling AND here store catches RETURNED FUNCTION 
         console.log(store(3));    //Store has function which is returned by hell() so we can use it              



         //function overloading, in
         
