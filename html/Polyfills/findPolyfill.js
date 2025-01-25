// polyfill for find

document.getElementById("demo").innerHTML = "Polyfill for find";

let employees = [
    {empid:1, name: 'v'},
    {empid:2, name: 'vi'},
    {empid:3, name: 'vin'},
    {empid:4, name: 'vine'},
]

//original
let ans = employees.find((elem, i, employees) => {
    return elem.empid === 1;
})

console.log(ans);

// polyfill

Array.prototype.myFind = function(callback){
    if(!callback){
        throw Error ('undefined callback function');
    }
    const arr = this;

    for(let i=0;i<arr.length;i++){
        const res = callback(arr[i], i, arr);
        if(res){
            return arr[i];
        }
    }
    return undefined;
}

let ans2 = employees.myFind((elem, i, employees) => {
    return elem.empid === 1;
})

console.log(ans2);