//Complete the function that calculates the area of the red square, when the length of the circular arc A that runs from its bottom left corner to its top right corner is given as the input. Return the result rounded to two decimals.
function squareArea(a){
  let r= (a*2)/(Math.PI)
  return Math.round(Math.pow(r,2)*100)/100
}
