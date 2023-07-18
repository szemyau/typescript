

// This one is normal typescript
let color: string = "red";
console.log(color);

let numArray:number[] = [1, 2, 3, 4];
// Typescript can deduce this type is array of numbers

function some_function_call_that_can_return_the_value_or_null(): any {
    // ...
  }
  
let val = some_function_call_that_can_return_the_value_or_null();

// The correct version is
if (val) {
    val.abc();  //TODO 1. dont understand the meaning of abc()
  }
console.log(val);

//3 function

// function add(a:number, b: number): number {
//     /* The data type of return value is written behind the parameter list.
//      *  The data type of the parameter can be written after each parameters.
//      */
//     return a + b;
//   }
  
function add(a:number, b:number) {
    return a+b;
}

function setTimeout(
    handler: () => {},
    timeout: number
  ): number

  console.log(setTimeout);

// 4 objects
let student = {
    name: "Peter",
    age: 30,
    dateOfBirth: new Date("1999-11-11"),
  };

type student = {
    name:string,
    age:number,
    dateOfBirth: Date,
}

type specialName = `Alice` | `Bob`;
let myName: specialName = "Alice";

// 5 Enums
enum Direction {
  East,
  South,
  West,
  North,
}

enum Kind {
  cat,
  dog,
  mouse,
  bird,
}

function turnTo(direction: Direction) {
  if (direction == Direction.East) {
    console.log("This is the direction East!");
  }
  return direction != Direction.East;
}

console.log(turnTo(Direction.North));

// 6 generics


function sum(nums:Array<number>) { // TODO 1. any problems in nums
  let total = 0;
  for (let num of nums) {
    total += num
  }
  return total;
}

console.log(sum([3, 4, 5, 6]));


