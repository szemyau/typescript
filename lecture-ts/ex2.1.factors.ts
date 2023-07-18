// 1. The following findFactors function.


export function findFactors(num:number):number[]{

    let factors:number[] = [];

    if (num === 1){
    return [1];
    }

    for (let factor:number= 2; factor <= num / 2; factor++) {
      if (num % factor === 0) {
        factors.push(factor);
      }
    }
    factors.push(num)
    return factors;
  }

function test(num:number){
    console.log("-".repeat(35));   
    console.log(`test: ${num}`);
    console.log(`factors:`, findFactors(num)); 
} 

test(1);
test(20);
test(35);

