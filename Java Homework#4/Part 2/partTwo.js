function sumOfNumbers(numbers) {
    if (numbers.length !== 5) {
        console.log('Please provide an array with exactly 5 numbers.');
        return;
    }
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log('Sum:', sum);
}
sumOfNumbers([1, 2, 3, 4, 5]);
