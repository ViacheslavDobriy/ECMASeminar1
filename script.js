// Task 1
// const arr1 = [1, 9, 3];
// const arr2 = [4, 5, 6];

// function mergeArrays(array1, array2) {
//     return [...array1, ...array2];
// }

// console.log(mergeArrays(arr1, arr2));

// Task 2
// 1 Вариант
// function removeDuplicates(...params) {
//     const array = [...params];
//     return array.filter((el, index) => array.indexOf(el) === index);
// }


// 2 Вариант
// Set - это метод, который собирает коллекцию уникальных значений (он откидывает повторяющиеся значения коллекции)

// function removeDuplicates(...params) {
//     const array = [...new Set([...params])];
//     return array.filter((el, index) => array.indexOf(el) === index);
// }

// console.log(removeDuplicates(1, 2, 3, 4, 5, 1, 2, 3, 7, 8));

// Task 3

function getEvenNumbers(...args) {
    return [...args.filter((el) => el % 2 === 0)];
}

console.log(getEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Task 4

function calculateAverage(...args) {
    return [...args].reduce((accumulator, currentValue) => accumulator + currentValue) / [...args].length;
}

console.log(calculateAverage(1, 2, 3, 4, 5));

// Task 5

function capitalizeFirstLetter(string) {
    return string.split(' ').reduce((accumulator, currentValue) => accumulator + currentValue.charAt(0).toUpperCase() + currentValue.slice(1) + ' ', '');
}

console.log(capitalizeFirstLetter('Слава научился использовать reduce аж мама не горюй'));