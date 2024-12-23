let numbers = [6, 4, 8, 15, 1];
let numberList = document.getElementById("number-list");
let sumElement = document.getElementById("sum");
for (let i = 0; i < numbers.length; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = numbers[i];
    numberList.appendChild(listItem);
}
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
sumElement.textContent = sum;
