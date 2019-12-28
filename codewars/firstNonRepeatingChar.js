// Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
//
// Given a string s consisting of lowercase English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
function firstNotRepeatingCharacter(s) {
    let obj = {}
    for(let i=0;i<s.length;i++){
        if(s[i] in obj){
            obj[s[i]] = false
        }else{
            obj[s[i]]= true
        }
    }
    for(prop in obj){
        if (obj[prop]) return prop
    }
    return "_"
}
