// 6. The type of the variable of someValue

export const someValue:number|null = Math.random() > 0.5 ? 12 : null;

export const nextValue: number = someValue === null ? 1 :someValue + 3;

console.log(`some value:`, someValue);

console.log(`next value`, nextValue); 
