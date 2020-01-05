//given an array, determine if there is one or less numbers that can be removed from it that will make the array strictly increasing
// [1,2,1,2] false
//[10,1,2,3,4,5] true
//[5,4,3,1,3] false
function almostIncreasingSequence(sequence) {
   if(isInOrder(sequence))return true
   for(let j=0;j<sequence.length;j++){
       let temp =[...sequence]
       temp.splice(j,1)
       if(isInOrder(temp)) return true
   }
   return false
}
function isInOrder(arr){
    for(let i=0;i<arr.length-1;i++){
       if(arr[i]>=arr[i+1]) return false
    }
    return true
}
