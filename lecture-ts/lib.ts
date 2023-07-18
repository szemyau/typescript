// let lib = {
//     someObject: "Hello World",
//     someFunction: function (){
//         return "Foobar"
//     }
// }

// type lib {
//     someObject: string,
//     someFunction: () => {string}

//     }
// }

// /* lib is a name exported object from the module lib.*/
// console.log(lib.someObject); /* should print "Hello World"*/
// console.log(lib.someFunction()); /* should print "Foobar"*/

let someObject:string = 'Hello World'

function someFunction():string {
    return 'Foobar'
}

export const lib2 = {
    someObject,
    someFunction
}


export const lib = { 
    someObject: "Hello World",
    someFunction: function (): string {
        return "Foobar";
    },
}

let student = ["A", "B", "C",]


export const name = 'apple'


type Color = number | string

let boxColors: Color[] = [255, 128, 48]

boxColors[0] = 'red'

export default { lib, student }
