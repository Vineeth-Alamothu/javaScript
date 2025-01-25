document.getElementById("demo").innerHTML = "Map Filter and Reduce";

// Map function

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = [
    {firstName: "John", lastName: "son", age: 26},
    {firstName: "honey", lastName: "singh", age: 48},
    {firstName: "chinna", lastName: "mama", age: 40},
    {firstName: "pedda", lastName: "mama", age: 26},
]

// Double the array
function double(x){
    return x * 2;
}

//triple the array
function triple(x){
    return x * 3;
}

// convert the array to binary
function binary(x){
    return x.toString(2);
}

// const mapoutput = arr.map(double);
// console.log(mapoutput);

// const mapoutput1 = arr.map(triple);
// console.log(mapoutput1);

// const mapoutput2 = arr.map(binary);
// console.log(mapoutput2);

// const mapoutput3 = users.map((x) => {return x.firstName+" "+x.lastName});
// console.log(mapoutput3);



// ------------------------------------------------------------------------------------------------

// Filter function

function isOdd(x){
    return x % 2 ;
}

function isEven(x){
    return x % 2 === 0;
}


// const filterOutput = arr.filter(isOdd)
// console.log(filterOutput);

// const filterOutput1 = arr.filter(isEven)
// console.log(filterOutput1);

// const filterOutput2 = arr.filter((x) => x<5); // check this syntax
// console.log(filterOutput2);

const filterOutput3 = users.filter((x) => x.age < 30).map((x) => x.firstName);  // *chaining is a imp concept*
console.log(filterOutput3);

// ------------------------------------------------------------------------------------------------

// Reduce function

// to find sum or maximum in the array

function findSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(findSum(arr));

// the above code using reduce

const reduceOutput = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
},0);

// console.log(reduceOutput);

// find maximum in the array

function findMax(arr){
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
};

// console.log(findMax(arr));

// the above code using reduce

const reduceOutput1 = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
},0);

// console.log(reduceOutput1);


// acc = {26: 2, 40: 1, 48: 1}
const reduceoutput4 = users.reduce((acc,curr) => {
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(reduceoutput4);