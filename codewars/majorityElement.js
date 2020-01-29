//find the element that appears more than length/2 times, there will always be one
var majorityElement = function(nums) {
    let obj = {}
    for(let n of nums){
        if(obj[n]) obj[n]++
        else obj[n] =1
    }
    let max  = Math.max(...Object.values(obj))
    for(let j in obj){
        if(obj[j]==max) return j
    }
};
