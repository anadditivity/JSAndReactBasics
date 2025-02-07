const diffWith17 = number => {
    return number - 17;
}

let outputInteger = document.getElementById("outputInteger");

function returnDifferenceWith17() {
    let inputElement = document.getElementById("inputElement");
    let inputInteger = Number(inputElement.value);
    let difference = diffWith17(inputInteger);
    if (difference > 0) {
        outputInteger.innerHTML = String(difference * 2);
    } else if (difference < 0) {
        outputInteger.innerHTML = String(Math.abs(difference));
    } else {
        outputInteger.innerHTML = String(0);
    }
}
