const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
    if (date1 < date2) {
        return -1;
    } else if (date1 > date2) {
        return 1;
    } else {
        return 0;
    }
}

const currentDate = new Date("2024-02-29");
let currentYear = currentDate.getFullYear();
switch (compareDates(currentDate.toString(), String(currentYear) + "-06-24")) {
    case -1: {
        const dayDifference = Math.floor((new Date(String(currentYear) + "-06-24") - currentDate) / (1000 * 60 * 60 * 24));
        console.log(`Days until the next midsummer: ${dayDifference}`);
        break;
    }
    case 1: {
        const dayDifference = Math.floor((new Date(String(currentYear + 1) + "-06-24") - currentDate) / (1000 * 60 * 60 * 24));
        console.log(`Days until the next midsummer: ${dayDifference}`);
        break;
    }
    case 0: {
        console.log("It's midsummer!")
        break;
    }
    default: {
        throw new Error("Something has gone terribly wrong.");
    }
}