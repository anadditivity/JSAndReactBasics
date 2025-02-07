let outputElement = document.getElementById("outputElement");

const getChecksum = () => {
    let input1 = (document.getElementById("inputField1")).value;
    let input2 = (document.getElementById("inputField2")).value;
    let input3 = (document.getElementById("inputField3")).value;

    if (input1.length > 4 || input2.length > 4 || input3.length > 4) {
        outputElement.innerHTML = "All input fields must contain a maximum of 4 digits.";
        return;
    }
    let sum = 0;
    for (let char of (input1 + input2 + input3)) {
        sum += Number(char);
    }
    while (sum > 9) {
        let sumAsString = String(sum);
        let newSum = 0;
        for (let char of sumAsString) {
            newSum += Number(char);
        }
        sum = newSum;
    }
    outputElement.innerHTML = `The single-digit checksum is ${String(sum)}`;
}