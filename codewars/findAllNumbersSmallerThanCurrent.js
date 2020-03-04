// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
//
// Return the answer in an array.

var smallerNumbersThanCurrent = nums=>nums.map(el=>[...nums].sort((a,b)=>a-b).indexOf(el))
//python solution much faster
// class Solution:
//     def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
//         count = [0] * 102
//         for num in nums:
//             count[num+1] += 1
//         for i in range(1, 102):
//             count[i] += count[i-1]
//         return [count[num] for num in nums]
