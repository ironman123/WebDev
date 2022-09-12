let str = "hello there general kenobi!!!";

let substr = str.split("");

substr[0] = 'y';

let ass = substr.toString().replace(/,/g,"");

console.log(substr.toString());
console.log(ass);