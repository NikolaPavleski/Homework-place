function getChineseZodiac(year) {
    let result = (year - 4) % 12;

    let zodiac;
    if (result === 0) {
        zodiac = "Rat";
    } else if (result === 1) {
        zodiac = "Ox";
    } else if (result === 2) {
        zodiac = "Tiger";
    } else if (result === 3) {
        zodiac = "Rabbit";
    } else if (result === 4) {
        zodiac = "Dragon";
    } else if (result === 5) {
        zodiac = "Snake";
    } else if (result === 6) {
        zodiac = "Horse";
    } else if (result === 7) {
        zodiac = "Goat";
    } else if (result === 8) {
        zodiac = "Monkey";
    } else if (result === 9) {
        zodiac = "Rooster";
    } else if (result === 10) {
        zodiac = "Dog";
    } else if (result === 11) {
        zodiac = "Pig";
    }
    
    return zodiac;
}

let year = prompt("Enter a year to find the Chinese Zodiac:");
year = parseInt(year);

console.log("The Chinese Zodiac for the year " + year + " is: " + getChineseZodiac(year));
