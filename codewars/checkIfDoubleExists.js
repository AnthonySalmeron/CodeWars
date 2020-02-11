var checkIfExist = function(arr) {
   let past = {}
   for(let num of arr){
       if(past[num/2]||past[num*2]) return true
       else past[num] = true
   }
   return false
};
