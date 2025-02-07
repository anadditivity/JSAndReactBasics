const getEveryNthElementFromArray = (array, n = 1) => {
    let arrayWithNthElements = [];
    for (let i = 0; i < array.length; i+= n) {
        arrayWithNthElements.push(array[i]);
    }
    return arrayWithNthElements;
}

let arr = [0,1,2,3,4,5,6,7,8,9];
let nthArr = getEveryNthElementFromArray(arr, 2);
console.log(nthArr);