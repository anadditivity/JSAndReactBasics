let output = document.getElementById("output");

function convertToLowerUpper() {
    let input = document.getElementById("inputElement");
    let value = String(input.value);
    if (value.length < 3) {
        output.innerHTML = String(value.toUpperCase());
    } else {
        let firstThree = value.slice(0, 3);
        let others = value.slice(3);
        output.innerHTML = String(firstThree.toLowerCase() + others.toUpperCase());
    }
}