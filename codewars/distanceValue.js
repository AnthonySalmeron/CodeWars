var findTheDistanceValue = function(arr1, arr2, d) {
    for(let i=0;i<arr1.length;i++){
        for(let j of arr2){
            if(Math.abs(arr1[i]-j)<=d){
                arr1.splice(i,1)
                i--
                break
            }
        }
    }
    return arr1.length
};
// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.
//
// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
