// Returns 1 if x > y, -1 if x < y or 0 if x == y
const closerTo99 = (x, y) => {
    const xDiff = Math.abs(99 - x);
    const yDiff = Math.abs(99 - y);
    if (xDiff < yDiff) {
        return 1;
    } else if (xDiff > yDiff) {
        return -1;
    }
    return 0;
}

let output = document.getElementById("output");
let warningField = document.getElementById("warningField");

function checkInputs() {
    let input1 = document.getElementById("inputElement1");
    let input2 = document.getElementById("inputElement2");
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    switch (closerTo99(value1, value2)) {
        case 1: {
            warningField.innerHTML = "";
            output.innerHTML = String(value1);
            break;
        }
        case -1: {
            warningField.innerHTML = "";
            output.innerHTML = String(value2);
            break;
        }
        case 0: {
            warningField.innerHTML = "The difference between inputs and 99 is the same.";
            output.innerHTML = "";
            break;
        }
        default: {
            throw new Error("Something has gone wrong.");
        }
    }
}
