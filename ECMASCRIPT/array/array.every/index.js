const workers = [
    {person: "A1", age: 24},
    {person: "A2", age: 44},
    {person: "A3", age: 26}
];

const canWork = (worker) => worker.age >= 18;

console.log(workers.every(canWork)); // true