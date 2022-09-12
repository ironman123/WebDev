let str = "hello there general kenobi!!!";

let substr = str.split("");

substr[0] = 'y';

let p = substr[0];

let assembled = substr.toString();

let ass = assembled.replace(/,/g,"");

console.log(p);
console.log(ass);