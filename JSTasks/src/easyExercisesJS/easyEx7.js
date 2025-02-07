let outputElement = document.getElementById("output");

const replaceWithNextLetter = () => {
    let input = document.getElementById("inputElement");
    let inputValue = String(input.value);
    let lowercaseAlphabet = "abcdefghijklmnopqrsšzžtuvwõäöüxy";
    let uppercaseAlphabet = lowercaseAlphabet.toUpperCase();

    let finalOutput = "";
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === inputValue[i].toLowerCase()) {
            // is lowercase, we take the next lowercase character, add 1 & divide modulo alphabet length.
            finalOutput += lowercaseAlphabet[(lowercaseAlphabet.indexOf(inputValue[i]) + 1) % lowercaseAlphabet.length]
        } else if (inputValue[i] === inputValue[i].toUpperCase()) {
            finalOutput += uppercaseAlphabet[(uppercaseAlphabet.indexOf(inputValue[i]) + 1) % uppercaseAlphabet.length]
        } else {
            // is another symbol; however, our HTML pattern should actually prevent this from ever happening
            finalOutput += inputValue[i];
        }
    }
    outputElement.innerHTML = finalOutput;
}