const getChecksum = () => {
    let input1 = "1117"
    let input2 = "1111"
    let input3 = "1111"
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
    console.log(`The single-digit checksum is ${String(sum)}`);
}
getChecksum();