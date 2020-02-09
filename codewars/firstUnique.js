var firstUniqChar = function(s) {
    let letters = new Map
    for(let i of s){
        if(letters.get(i)){
            letters.set(i,letters.get(i)+1)
        }else{
            letters.set(i,1)
        }
    }
    for(let [key,value] of letters){
        if(value==1) return s.indexOf(key)
    }
    return -1
};
