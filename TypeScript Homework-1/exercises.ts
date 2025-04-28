function areTheyInLove(flower1: number, flower2: number): boolean {
    return (flower1 % 2 !== flower2 % 2);
}
console.log("Exercise 1:", areTheyInLove(1, 4));
interface Person {
    name: string;
    age: number;
    gender: 'male' | 'female';
}
function filterByProperty<T extends keyof Person>(
    people: Person[],
    property: T,
    value: Person[T]
): Person[] {
    return people.filter(person => person[property] === value);
}
const peopleArray: Person[] = [
    { name: "Tim", age: 30, gender: "male" },
    { name: "Sarah", age: 25, gender: "female" },
    { name: "John", age: 30, gender: "male" },
];
console.log("Exercise 2:", filterByProperty(peopleArray, "age", 30));
function doubleArrayValues(numbers: number[]): number[] {
    return numbers.map(num => num * 2);
}
console.log("Exercise 3:", doubleArrayValues([1, 2, 3])); 
function booleanToString(value: boolean): string {
    return value.toString();
}
console.log("Exercise 4:", booleanToString(true));
function average(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}
console.log("Exercise 5:", average([1, 2, 3, 4])); 
function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
    const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
    return yourPoints > average;
}
console.log("Exercise 6:", betterThanAverage([70, 80, 90], 85));
function countPositivesSumNegatives(input: number[] | null): number[] {
    if (!input || input.length === 0) return [];
    let positives = 0;
    let negativeSum = 0;
    input.forEach(num => {
        if (num > 0) positives++;
        else if (num < 0) negativeSum += num;
    });
    return [positives, negativeSum];
}
console.log("Exercise 7:", countPositivesSumNegatives([1, -2, 3, -4, 5]));
function evenOrOdd(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Exercise 8:", evenOrOdd(7));
type Operation = 'add' | 'subtract' | 'multiply' | 'divide';
function calculator(a: number, b: number, operation: Operation): number | string {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) return 'Error: Division by zero';
            return a / b;
        default:
            return 'Error: Unknown operation';
    }
}
console.log("Exercise 9:", calculator(10, 2, 'divide'));