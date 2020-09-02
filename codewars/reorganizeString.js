var reorganizeString = function(s) {
    //First thing I noticed is that if there is any character in the string which appears > S.length/2 times, then it's an immediate fail 
    if (s.length === 1) return ""
    const maxLen = Math.ceil(s.length/2)
    
    let charCounts = {}
    let degreeOfChars = {1:{}}
    let highestCount = 1
    for(let letter of s){
        if(charCounts[letter]) charCounts[letter]++
        else charCounts[letter] = 1
        
        if (charCounts[letter] > maxLen) return ""
        
        degreeOfChars[1][letter] = 1
        
        if(charCounts[letter]>1){
            if (charCounts[letter]>highestCount) highestCount = charCounts[letter]
            
            if(!degreeOfChars[charCounts[letter]]) degreeOfChars[charCounts[letter]] = {}
            degreeOfChars[charCounts[letter]][letter] = 1
            letter === 2 ?
                delete degreeOfChars[1][letter] :
                delete degreeOfChars[charCounts[letter]-1][letter]
        }
    }
    
    let output = ""
    while(output.length<s.length){
        let tempArr = Object.keys(degreeOfChars[highestCount])
        let char = tempArr.pop()
        let downward = 0
        if(char!=output[output.length-1]){
            output+= char
            delete degreeOfChars[highestCount][char]
            degreeOfChars[highestCount-1][char] = 1
            if(!tempArr.length){
                delete degreeOfChars[highestCount]
                highestCount--
            }
        }else if(tempArr.length){
            char = tempArr.pop()
            output+= char
            delete degreeOfChars[highestCount][char]
            if(!degreeOfChars[highestCount-1]) degreeOfChars[highestCount-1] = {}
            degreeOfChars[highestCount-1][char] = 1
        }else{
            while(!tempArr.length){
                downward++
                tempArr = Object.keys(degreeOfChars[highestCount-downward])
            }
            char = tempArr.pop()
            output+= char
            delete degreeOfChars[highestCount-downward][char]
            degreeOfChars[highestCount-(downward+1)][char] = 1
            if(!tempArr.length) delete degreeOfChars[highestCount-downward]
        }
    }
    return output
};

//https://leetcode.com/problems/reorganize-string/
