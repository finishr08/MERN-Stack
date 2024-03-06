// Qs3. Write a switch statement to print the months in a quarter. Months in Quarter 1: January, February, March
// Months in Quarter 2: April, May, June
// Months in Quarter 3: July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]



const month = parseInt(prompt("Enter a month number (1-12): "));
    switch (month) {
      case 1:
      case 2:
      case 3:
        console.log("Months in Quarter 1: January, February, March");
        break;
      case 4:
      case 5:
      case 6:
        console.log("Months in Quarter 2: April, May, June");
        break;
      case 7:
      case 8:
      case 9:
        console.log("Months in Quarter 3: July, August, September");
        break;
      case 10:
      case 11:
      case 12:
        console.log("Months in Quarter 4: October, November, December");
        break;
      default:
        console.log("Invalid month number (1-12)");
    }
  