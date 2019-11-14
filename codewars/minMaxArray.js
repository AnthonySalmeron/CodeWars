// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
//
// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.
//
// You solution should return an array [smallest, minimumAbsent, largest]
//
// The smallest integer should be the integer from the array with the lowest value.
//
// The largest integer should be the integer from the array with the highest value.
//
// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

function minMinMax(array) {
  function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}
  array = array.sort(compare);
  let test=array[0]+1;
  while(array.includes(test)){
    test++;
  }
  return [array[0],test,array[array.length-1]]
}
