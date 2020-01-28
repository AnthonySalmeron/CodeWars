var isAnagram = function(s, t) {
    //one solution is adding up the total in terms of charCodeAt but that can be gamed
    let chars = new Map
    for(let char of s){
        if(chars.get(char)){
            chars.set(char,chars.get(char)+1)
        }else{
            chars.set(char,1)
        }
    }
    for(let ltr of t){
        if(chars.get(ltr)){
            chars.set(ltr,chars.get(ltr)-1)
            if(!chars.get(ltr)) chars.delete(ltr)
        }else{
            return false
        }
    }
    if(chars.size) return false
    return true
};
