//you're given two string representations of binary numbers, you're tasked with performing binary addition on them and returning the output as a string
//ie '01' + '11' = '100'

//this code doesn't work for very large bit numbers because it defaults to scientific notation
var addBinaryFast=(a,b)=> (Number('0b'+a)+Number('0b'+b)).toString(2)

var addBinary = function(a, b) {
  a  = a.split('')
  b = b.split('')
  let carry = 0
  let out  = ""
  while(a.length||b.length){
      let sum = (a.length? Number(a.pop()): 0) + (b.length? Number(b.pop()): 0)
      if(carry){
          sum++
          carry--
      }
      if(sum<=1){
          out = sum + out
      }else{
          sum-=2
          carry++
          out= sum + out
      }
  }
  if(carry) out = carry + out
  return out
};
