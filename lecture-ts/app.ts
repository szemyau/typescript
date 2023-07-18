import dotenv from "dotenv";
dotenv.config() //TODO 1. WHEN DONT NEED TO ADD THIS
console.log(process.env);


import fs from "fs";
fs.writeFile('hi.txt', 'hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })

import Cls from "./Cls";
import { lib } from "./lib"; // TODO 3. WHEN I NEED TO USE {}, means only import object in lib
import { func } from "./func";

import * as lib2 from './lib'

console.log(lib2.lib.someObject)
console.log(lib2.name)

/* lib is a name exported object from the module lib.*/
console.log(lib.someObject); /* should print "Hello World"*/
console.log(lib.someFunction()); /* should print "Foobar"*/

/* Cls is a function which is exported as the default export of the module Cls*/
console.log( Cls() ); 

/* func is a function which is exported as the named export of the module func */
console.log( func() );

// var obj = { a: 'apple', b: '' }
// var fruit = obj.a
// var { a } = fruit