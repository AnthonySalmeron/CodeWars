//merge two sorted arrays into the first array (nums1)
//m is how long the first array is, n is how long the second is 
var merge = function(nums1, m, nums2, n) {
    nums1.length=m
    let i =nums1.length-1
    while(nums2.length&&i>=0){
        if(nums2[nums2.length-1]>=nums1[i]){
            nums1.splice(i+1,0,nums2.pop())
        }else{
            i--
        }
    }
    while(nums2.length){
        nums1.unshift(nums2.pop())
        //can't write nums1 = nums2.concat(nums1) instead because then nums1 will point to nums2 in memory but the original memory that was used to store nums1 is what the tests are looking for
    }
};
