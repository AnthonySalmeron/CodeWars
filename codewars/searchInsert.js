// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
var searchInsert = function(nums, target) {
    let middle = Math.floor(nums.length/2)
    while(middle>0 && middle<nums.length){
        if(nums[middle]==target){
            return middle
        }else if(target<nums[middle]){
            middle = Math.floor(middle/2)
        }else if(middle=0) {
            break;
        }else{
            middle = middle+Math.floor(middle/2)
        }
    }
    let index=0
    while(nums[index]<target){
        index++
    }
    return index
};
