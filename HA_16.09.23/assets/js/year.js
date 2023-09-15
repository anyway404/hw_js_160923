function isLeapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

if (isLeapYear) console.log(isLeapYear(2023));
