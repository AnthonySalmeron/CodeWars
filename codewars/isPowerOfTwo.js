var isPowerOfTwo = function(n) {
  if(n===1)return true
  let current = 1
  while(current<n){
      current*=2
  }
  return current===n
};
