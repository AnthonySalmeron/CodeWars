var lengthOfLastWord = function(s) {
    s=s.trim()
    var word = ""
    let i = s.length-1
    while(s[i]!=" "&&s[i]){
        word = s[i] + word
        i--
    }
    return word.length
};
