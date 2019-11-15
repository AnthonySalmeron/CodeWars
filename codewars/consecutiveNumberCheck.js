//Given Positive integer, N , Return true if it could be expressed as a sum of two or more consecutive positive numbers , OtherWise return false .
function consecutiveDucks(num) {
  while(num>2){
    if(num%2!=0)return true
    num=num/2;
  }
  return false
}
