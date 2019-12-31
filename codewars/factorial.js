//write a js factorial
function factorial(n){
  if (n==0) return 1
  let og = n-1
  while(og>1){
    n*=og
    og--
  }
  return n
}

//or
let factorial2 = n => n ? factorial2(n-1)*n : 1 
