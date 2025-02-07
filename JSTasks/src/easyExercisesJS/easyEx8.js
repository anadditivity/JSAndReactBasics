let outputElement = document.getElementById("output");

const convertToHoursAndMinutes = () => {
    let inputElement = document.getElementById("inputElement");
    let inputValue = Number(inputElement.value);
    let hours = Math.floor(inputValue / 60);
    let minutes = inputValue % 60;
    outputElement.innerHTML = `Hours: ${hours} <br>Minutes: ${minutes}`;
}