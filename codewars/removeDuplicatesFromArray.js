// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//return only the length of the array that we have to keep, no need to delete any of the elements at the end of the array
var removeDuplicates = function(nums) {
    //we will bubble the numbers up to the top and remove them even though it's not necessary for the question
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]==nums[i+1]){
    //         let j = i
    //         while(j<nums.length-1){
    //             [nums[j],nums[j+1]]=[nums[j+1],nums[j]]
    //             j++
    //         }
    //         nums.pop()
    //         i--
    //     }
    // }
    // return nums.length

    //heres an optimized solution where we don't remove duplicates and we just return the length of the solution
    if (!nums.length)return 0
    var i=0
    for(let j=1;j<nums.length;j++){
        if(nums[j]!=nums[i]){
            i++
            nums[i]=nums[j]
        }
    }
    //we can remove the extra elements by saying nums.length= i+1 but it wasn't asked for in the questions
    return i+1 //because it started at zero so whatever position i landed on +1 is the length needed
};
