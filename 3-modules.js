/*
const john='john'
const peter='peter'

const sayHi = (name) =>{
    console.log(`Hey there ${name}`);
}
*/
const names = require('./4-names');
const sayHi = require('./5-utils.js');
const person = require('./6-alternate.js');
console.log(person);

const add = require('./7-function')
// console.log(names);

sayHi('susan')
// sayHi('susan11')
sayHi(names.john)
sayHi(names.peter)