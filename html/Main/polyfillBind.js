
let name1 = {
    firstname: "vineeth",
    lastname: "alamothu"
}

let printFullName = function(hometown, state){
    console.log(this.firstname + " " + this.lastname +" from " + hometown + ", "+ state);
}

let printMyName = printFullName.bind(name1,"ap");

printMyName();

Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(){
        obj.apply(args[0],params);
    }
}

let printMyName2 = printFullName.mybind(name1,"ongole","ap");

printMyName2();