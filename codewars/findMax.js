// Let's call an array A a mountain if the following properties hold:
//
//     A.length >= 3
//     There exists some 0 < i < A.length - 1 such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
//
// Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
var peakIndexInMountainArray = function(A) {
    let max  = 0
    for(let i =0;i<A.length;i++){
       if(A[i]>=A[max]){
           max=i
       }
    }
    return max
};
