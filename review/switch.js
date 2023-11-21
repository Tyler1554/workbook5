let date = new Date();
let month = date.getMonth() + 1;
let monthName = "";

switch (month) {
  case 1:

    monthName = "January";
    break;

  case 2:
    month = "Feburary";
    break;
  case 11:
    month = "November";
    break;
  
  default:
    break;
}
console.log(month);

// FALL THRU

switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
    case 10:
    case 11:
    case 12:
      quarter =4;
  
    default:
      break;
  }
  console.log(quarter);
  
