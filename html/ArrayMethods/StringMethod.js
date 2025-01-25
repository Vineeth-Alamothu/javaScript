// Stirng methods 

document.getElementById("demo").innerHTML = "String Methods on arrays"

// slice()
// splice()
// reverse()
// concat()
// join()


//------------------------------------------------------------------------

// slice() - Extracts a part of array without changing the original array

// returns a new array
let names = ['vineeth', 'mike', 'mona', 'tona', 'rona'];

console.log(names) // ["vineeth","mike","mona","tona","rona"]
                   //     0         1     2       3      4

// slice method returns a new array
let slicedArray = names.slice(2);
console.log(slicedArray) // ["mona","tona","rona"]

// slice(start, end) // doesnot include the end index
let slicedArray2 = names.slice(1,3); // ["mike","mona"]
console.log(slicedArray2)

// negative indexes can be passes so that it returns the elements from back of the array
console.log(names.slice(-1)); // ["rona"]
console.log(names.slice(-3)); // ["mona","tona","rona"]
console.log(names.slice(1,-1)); // ["mike","mona","tona"]

// slice method does not change the original array
console.log(names) // ["vineeth","mike","mona","tona","rona"]


// slice method can create a shallow copy of an array 
let shallowCopy = names.slice();
console.log(shallowCopy);
console.log(names);

// creating a shallow copy using spread operator
let shallowCopy2 = [...names];
console.log(shallowCopy2);
console.log(names);

// we can use both of the above processes to create a shallow copy.

console.log("-------------------------------------------------------")
// ----------------------------------------------------------------------

// splice() method

// works almost the same like the slice method but it mutates the original arrray;

let arr = names.splice(2);
console.log(arr); // ["mona","tona","rona"]
console.log(names); // ["vineeth","mike"] names got mutated

// Splice can be used for deleting of elements
// Eg: dleleting the last element

let names2 = ['vineeth', 'mike', 'mona', 'tona', 'rona'];
console.log(names2.splice(-1)); // ['rona']
console.log(names2); // ['vineeth', 'mike', 'mona', 'tona']

console.log("-------------------------------------------------------")

// ----------------------------------------------------------------------

// reverse() method

// mutates and Reverses the order of the elements in the array

let alphabet = ['a', 'b', 'c', 'd', 'e'];
console.log(alphabet); // ['a', 'b', 'c', 'd', 'e']
console.log(alphabet.reverse()); // ["e","d","c","b","a"]
console.log(alphabet); // ["e","d","c","b","a"]


console.log("-------------------------------------------------------")

// ----------------------------------------------------------------------

// concat() joins two arrays into a single array

// will not mutate the original arrays the original arrays are still intact

let arr1 = [1,2,3,4];
let arr2 = [5,6];

let arr3 = arr1.concat(arr2);
console.log(arr3); // [1,2,3,4,5,6]

// concatenation can be achieved by using spread operator also

let arr4 = [...arr1, ...arr2];
console.log(arr4); // [1,2,3,4,5,6]

console.log("-------------------------------------------------------")

// ----------------------------------------------------------------------


// join() method

// joins all the elements by using the separator passed as an argument to join method
// no separator passed gives comma as a default separator

let str = ['vineeth', 'is', 'a', 'good', 'man'];
console.log(str.join(" ")); // vineeth is a good man
console.log(str.join("-")); // vineeth-is-a-good-man
console.log(str.join()); // vineeth,is,a,good,man



let ans = '';
str.forEach(function(val){
    ans += `${val} `;
})

console.log(ans);