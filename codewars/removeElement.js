//given an unsorted array, remove the instances of val from this array using no additional space, return the number of elements that will be in this array, the rest will be cut off


var removeElement = function(nums, val) {
    let i = 0
    for(let j =0;j<nums.length;j++){
        if(nums[j]!=val){
            nums[i]=nums[j]
            i++
        }
    }
    return i
};
