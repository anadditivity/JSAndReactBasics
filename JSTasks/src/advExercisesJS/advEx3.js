const outputObject = document.getElementById("outputObject");

const generateRandomRGBCode = () => {
    // 256 because Math.random() generates [0, 1). We want the 1.
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    // add values to CSS box
    outputObject.style.backgroundColor = `rgb(${String(red)}, ${String(green)}, ${String(blue)})`;
}