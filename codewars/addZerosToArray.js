//in an array, if there are any zeros, add another zero in front of them. Keep the array at the same length as the one you started with
var duplicateZeros = function(arr) {
    let length = arr.length
    for(let i=0;i<arr.length;i++){
        if(!arr[i]){
            arr.splice(i,0,0)
            i++
        }
    }
    arr.length=length
};
