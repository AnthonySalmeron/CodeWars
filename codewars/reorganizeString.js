var reorganizeString = function(s) {
    //First thing I noticed is that if there is any character in the string which appears > S.length/2 times, then it's an immediate fail 
    if (s.length === 1) return ""
    
    let charCounts = {}
    for(let letter of s){
        if(charCounts[letter]) charCounts[letter]++
        else charCounts[letter] = 1
    }
    
    //possibly have another object that has the form {numberOfChar: [array of chars with this number]} and update this every time a letter is used to add to the string so every time only the highest number chars are used
};

//https://leetcode.com/problems/reorganize-string/
