// 7. The type of the following object

export type teacher = {
  name: string,
  age: number,
  students: student[],
}

export type student = {
  name: string,
  age: number,
  exercises?: exercise[]
}

export type exercise = {
  score: number,
  date: Date,
}

export const peter:teacher = {
  name: "Peter",
  age: 50,
  students:[
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises:[{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};

console.log(peter);