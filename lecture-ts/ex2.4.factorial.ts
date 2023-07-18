// 4. The factorial recursive function.

export function factorial(number:number):number {
  if (number === 0 || number === 1) {
    return 1;
  }
  return factorial(number - 1) * number;
}

function test(number:number){
console.log('-'.repeat(35));
console.log('number:', number);
console.log('factorial:', factorial(number));
}

test(10);
test(3);