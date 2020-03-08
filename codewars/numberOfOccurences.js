var uniqueOccurrences = function(arr) {
    let count = {}
    for(let i of arr){
        if(count[i])count[i]++
        else count[i]=1
    }
    arr = Object.values(count)
    let copy = new Set(arr)
    return copy.size ===arr.length
};
