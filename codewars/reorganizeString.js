// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

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

        if(charCounts[letter] === 1) degreeOfChars[1][letter] = 1

        if(charCounts[letter]>1){
            if (charCounts[letter]>highestCount) highestCount = charCounts[letter]

            if(!degreeOfChars[charCounts[letter]]) degreeOfChars[charCounts[letter]] = {}
            degreeOfChars[charCounts[letter]][letter] = 1
            charCounts[letter] > 1 ?
                delete degreeOfChars[charCounts[letter]-1][letter]
                : 0
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
            if(!degreeOfChars[highestCount-1]) degreeOfChars[highestCount-1] = {}
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
                if(degreeOfChars[highestCount-downward]){
                    tempArr = Object.keys(degreeOfChars[highestCount-downward])
                }
            }
            char = tempArr.pop()
            output+= char
            delete degreeOfChars[highestCount-downward][char]
            if(!degreeOfChars[highestCount-(downward+1)]) degreeOfChars[highestCount-(downward+1)] = {}
            degreeOfChars[highestCount-(downward+1)][char] = 1
            if(!tempArr.length) delete degreeOfChars[highestCount-downward]
        }
    }
    return output
};

//https://leetcode.com/problems/reorganize-string/
