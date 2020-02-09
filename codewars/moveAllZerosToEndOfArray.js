// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Do so without taking a copy of the array

var moveZeroes = function(nums) {
    let end = nums.length
    for(let i=0;i<end;i++){
        if(nums[i]==0){
            let j = i
            while(j<end-1){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                j++
            }
            end--
            i--
        }
    }
    return nums
};
