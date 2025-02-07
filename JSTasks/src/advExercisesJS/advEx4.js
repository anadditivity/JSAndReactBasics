const removeElementsFromLeft = (array) => {
    let numberOfElementsToRemove = 1;
    array.splice(0, numberOfElementsToRemove);
    return array;
}

const removeElementsFromRight = (array) => {
    let numberOfElementsToRemove = 1;
    let arrayLength = array.length;
    array.splice(arrayLength - numberOfElementsToRemove, arrayLength);
    return array;
}

let arr = [0, 1, 2, 3, 4, 5];
console.log(arr);
arr = removeElementsFromLeft(arr);
console.log(arr);
arr = removeElementsFromRight(arr);
console.log(arr);