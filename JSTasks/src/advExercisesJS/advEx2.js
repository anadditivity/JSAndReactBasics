const getValueFromIndex = (arr, index) => {
    let valuableObject = arr[index];
    /* I got a bit too excited and printed out every value in the object.
    for (let key in valuableObject) {
        console.log(key, valuableObject[key]);
    }
    */
    console.log(valuableObject.kid1);
}

let family1 = {
    papa: 'Dad1',
    mama: 'Mum1',
    kid1: 'Kiddie1'
}

let family2 = {
    papa: 'Dad2',
    mama: 'Mum2',
    kid1: 'Kiddie2'
}

let family3 = {
    papa: 'Dad3',
    mama: 'Mum3',
    kid1: 'Kiddie3'
}

let familyArray = [family1, family2, family3];
getValueFromIndex(familyArray, 0);