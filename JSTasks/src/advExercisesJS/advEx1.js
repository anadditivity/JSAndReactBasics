const checkSameValue = (a, b) => {
    let givenKey = "name";
    console.log(`Names: ${a[givenKey]} & ${b[givenKey]}`)
    console.log(a[givenKey] === b[givenKey]);
    // why didn't a.givenKey === b.givenKey work?
    // likely because .name != ['name']
    // so is it not possible to dot-notate a key
        // which I'd take as an argument or pass on as a variable?
    console.log(`Age: ${a.age === b.age}`)
}

let obj1 = {name: "Akira", age: 20};
let obj2 = {'name': "Akira", age: 22};
let obj3 = {'name': "notAkira", age: 20};
checkSameValue(obj1, obj2);
checkSameValue(obj1, obj3);