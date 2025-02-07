let output = document.getElementById("output");

function multipleOf5Or7() {
    let inputElement = document.getElementById("inputElement");
    let inputValue = Number(inputElement.value);
    if (inputValue % 5 === 0 || inputValue % 7 === 0) {
        output.innerHTML = "yes";
    } else {
        output.innerHTML = "no";
    }
}