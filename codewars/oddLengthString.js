var generateTheString = function(n) {
    let ret = ""
    if(n%2==0){
        ret+="a"
        n--
    }
    for(let i=0;i<n;i++){
        ret+='b'
    }
    return ret

};
// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
//
// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.
