//Given an infinitely repeating string, s, and a position in the infinitely sequence, n,
//find the number of times the letter 'a' appears in the infinitely sequence up to n

function repeatedString(s, n) {
 let len = s.length
 let amountOfTimesToRepeat= Math.floor(n/len)
 let remainingChars = n%len
 let aTracker =0;
 let aBeforeCutOff=0;
 for(let i=0;i<len;i++){
   if(s[i]=="a"){
     i<remainingChars ? aBeforeCutOff++ : aTracker++
   }
 }
return amountOfTimesToRepeat*(aBeforeCutOff+aTracker) + aBeforeCutOff

}
