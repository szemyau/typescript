// 5. The setTimeout callback function

export const timeoutHandler:()=>void = ():void=> { 
    console.log("Timeout happens!");
  };
  
export const timeout:number = 1000;

console.log('before time out');
setTimeout(timeoutHandler, 3000);
console.log('after time out');


// function test(timeoutHandler:()=>void, timeout:number) {
//     console.log('-'.repeat(35));
//     console.log('before time out');
//     console.log('timeout:', setTimeout(timeoutHandler, timeout));
//     console.log('after time out');
// }

// console.log('-'.repeat(35));
// console.log('before time out');
// console.log(
//     setTimeout(timeoutHandler, timeout)
// );
// console.log('after time out');
