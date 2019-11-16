function distinctDigitYear(year) {
  year++
  year = year.toString()
  while((year[0]===year[1])||(year[0]===year[2])||(year[0]===year[3])||(year[1]===year[2])||(year[1]===year[3])||(year[2]===year[3])){
    year = (Number(year)+1).toString();
  }
  return Number(year)

}
