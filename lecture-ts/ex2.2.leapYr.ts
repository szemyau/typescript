// 2. This LeapYear function

export function leapYear(year:number):boolean {
    if (year % 400 === 0) {
      console.log("Leap Year");
      return true;
    } else if (year % 100 === 0) {
      console.log("Not a Leap Year");
      return false;
    } else if (year % 4 === 0) {
      console.log("Leap Year");
      return true;
    } else {
      console.log("Not a Leap Year");
      return false;
    }
  }

  function test(year:number):void{
    console.log('-'.repeat(35));
    console.log('Year:', year);
    console.log(`Leap Year or not:`, leapYear(year));
  }

  test(2027);
  test(2024);