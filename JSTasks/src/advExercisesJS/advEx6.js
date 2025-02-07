/*
A few solutions I've thought up:
* the "dumb" method with 2 for-loops and counts. n^2
* map {key: count} (or to an Object, not Map) and only take count===1 -> key1 === key 2. complexity unknown
    * count would come from filter; how to exclude already viewed elements?
    * a separate Set{} would probably have the quickest contains() check
I think this is quite elegant :)
https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements
const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
  return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

console.log(occurrences) // => {2: 5, 4: 1, 5: 3, 9: 1}

same thing, a bit different. seems to map to 2dimensional array, which is not as good
!!! IMPORTANT !!! this lets us have numbers as "keys"
when mapping to an object, the keys need to be proper strings.
this can cause a lot of confusion

const arr = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
const result = arr.reduce((acc, curr) => {
  acc[curr] ??= {[curr]: 0};
  acc[curr][curr]++;

  return acc;
}, {});

console.log(Object.values(result));
 */

/*
A few more notes:
* the type inference is completely off the rails right now, but since JS doesn't have strong typing,
    it's much more difficult to find where these inferences happen.
    Technically, this is ~fine~, but I don't like it!
 */
const everyElementOnceInBoth = (arr1, arr2) => {
    let arr1Counts = {};
    let arr2Counts = {};
    // let el IN would return INDEXES, not ELEMENTS. Not what we want!
    for (let el of arr1) {
        //console.log(el);
        // if arr1Counts has that key, then adds 1; else keeps at 1
        arr1Counts[el] = arr1Counts[el] ? arr1Counts[el] + 1 : 1;
    }
    for (let el of arr2) {
        // if arr2Counts has that key, then adds 1; else keeps at 1
        arr2Counts[el] = arr2Counts[el] ? arr2Counts[el] + 1 : 1;
    }
    // the array we're returning at the end
    let returnableArray = [];
    // Interesting! So Object.entries is also basically just an array!
    //console.log(`Arr1 keys/values: ${Object.entries(arr1Counts)}`);
    //console.log(`Arr2 keys/values: ${Object.entries(arr2Counts)}`);
    for (let objKey of Object.keys(arr1Counts)) {
        if (arr1Counts[objKey] === 1) {
            if (arr2Counts[objKey] === 1) {
                returnableArray.push(objKey);
            }
        }
    }

    return returnableArray;
}

let a1 = [1, 1, 2, 3, 4];
let a2 = [1, 2, 3, 3, 4, 'a'];
console.log(everyElementOnceInBoth(a1, a2));

// This technically doesn't use a "comparator function" (something similar to what sort() would use),
// but the output is correct.
const everyElementOnceInEither = (arr1, arr2) => {
    let arr1Counts = {};
    let arr2Counts = {};
    for (let el of arr1) {
        arr1Counts[el] = arr1Counts[el] ? arr1Counts[el] + 1 : 1;
    }
    for (let el of arr2) {
        arr2Counts[el] = arr2Counts[el] ? arr2Counts[el] + 1 : 1;
    }
    let returnableSet = new Set();
    // Interesting! So Object.entries is also basically just an array!
    console.log(`Arr1 keys/values: ${Object.entries(arr1Counts)}`);
    console.log(`Arr2 keys/values: ${Object.entries(arr2Counts)}`);
    for (let objKey of Object.keys(arr1Counts)) {
        if (arr1Counts[objKey] === 1) {
            returnableSet.add(objKey);
        }
    }
    for (let objKey of Object.keys(arr2Counts)) {
        if (arr2Counts[objKey] === 1) {
            returnableSet.add(objKey);
        }
    }
    return Array.from(returnableSet);
    // WHY ARE SETS IN INSERTION ORDER! THIS IS BLASPHEMY!
}
console.log(everyElementOnceInEither(a1, a2));