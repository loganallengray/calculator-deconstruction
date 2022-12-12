const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const subtract = (firstNumber, secondNumber) => {
    const total = firstNumber - secondNumber;
    return total;
}

const multiply = (firstNumber, secondNumber) => {
    const product = firstNumber * secondNumber;
    return product;
}

const divide = (firstNumber, secondNumber) => {
    const total = firstNumber / secondNumber;
    return total;
}

const fourLeggedAnimals = divide(24, 4);
const twoLeggedAnimals = divide(subtract(60 ,24), 2);

const animals = add(fourLeggedAnimals, twoLeggedAnimals);

console.log(fourLeggedAnimals);
console.log(twoLeggedAnimals);
console.log(animals);