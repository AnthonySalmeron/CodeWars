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

            degreeOfChars[charCounts[letter]][letter] = 1
            letter === 2 ?
                delete degreeOfChars[1][letter] :
                delete degreeOfChars[charCounts[letter]-1][letter]
        }
    }

    let output = ""
    while(output.length<s.length){
        let tempArr = Object.keys(degreeofChars[highestCount])
    }
};

//https://leetcode.com/problems/reorganize-string/
