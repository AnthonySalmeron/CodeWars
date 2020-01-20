//find if the sum of the array is odd or even
function oddOrEven(array) {
   let odd = false
   for(let i of array){
     if(i%2!=0) odd= !odd
   }
   return odd? "odd" : "even"
}
