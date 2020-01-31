var lengthOfLongestSubstring = function(s) {
    let biggest = 0
    let counter = 0
    let soFar= new Map
    for(let i=0;i<s.length;i++){
        if(soFar.get(s[i])==undefined){
            counter++
            soFar.set(s[i],i)
        }else{
            i = soFar.get(s[i])
            soFar.clear()
            counter>biggest ? biggest=counter : ""
            counter = 0
        }
    }
    return counter>biggest ? counter : biggest
};
