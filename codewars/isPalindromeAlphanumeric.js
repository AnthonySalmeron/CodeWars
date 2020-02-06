var isPalindrome = function(s) {
    s= s.toLowerCase()
    for(let i=0;i<s.length;i++){
        if((s.charCodeAt(i)>122||s.charCodeAt(i)<97)&&(s.charCodeAt(i)<48||s.charCodeAt(i)>57)){
            s= s.slice(0,i) + s.slice(i+1)
            i--
        }
    }
    for(let j=0,k=s.length-1;j<k;j++,k--){
        if(s[j]!=s[k])return false
    }
    return true
};
