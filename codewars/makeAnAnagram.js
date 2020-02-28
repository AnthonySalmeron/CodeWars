//determine the minimum number of steps that it will take to transform the string t into an anagram of the string s, s and t have the same length

var minSteps = function(s, t) {
    let lettersOfS=new Map
    for(let i of s){
        if(lettersOfS.get(i)){
            lettersOfS.set(i,lettersOfS.get(i)+1)
        }else{
            lettersOfS.set(i,1)
        }
    }
    for(let j of t){
        if(lettersOfS.get(j)){
            let temp = lettersOfS.get(j)-1
            if(temp){
               lettersOfS.set(j,temp)
            }else{
                lettersOfS.delete(j)
            }
        }
    }
    let total=0
    for(let k of lettersOfS.values()){
        total+=k
    }
    return total
};
