//---------------------------------------Arrays map,reduce,filter,slice------------------------------------------

// MAP 

console.log("Map methos in Arrays");
let arr = [45,23,21];
arr.map ((value) => {  // it is work as for each loop but takes copy of array and value is iterate on all elements
    console.log(value+1);
})

arr.map ((value,index,array) => {  
    console.log(value+1,index,array);
})

let a =arr.map ((value,index,array) => {  
    console.log(value+1,index,array);
    return value+index;
})
console.log(a);

//Filter Method 

let arr2 =[45,23,6,23,90,43,10,43,23,4,5,6];

let a2 = arr2.filter( (value) => 
{
     return value<10; // it returns values for which this condition is true and stored in new array a2
}
)
console.log(a2);

//Reduce 

let arr3= [3,34,5,5,23,23,54,5,36,25,3,45,7,76,3,25];

let a3 = arr3.reduce( (h1,h2) => //h1,h2 takes two continuous values (3,34)->(37,5)//37 is previous sum (42,5) & so on 
{
    return h1+h2;
}
)
console.log(a3);

//slice --> in slice we give indexes of array which we want to iterate (start,end) NOTE: where end is not included 

let narray = ['Hepin','Gopal','Yagnadeep','Price','Satyjit'];

let resu = narray.slice (1,4);

console.log(resu);



