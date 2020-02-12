//Given a positive integer num consisting only of digits 6 and 9.
// 
// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
var maximum69Number  = function(num) {
    num = String(num)
    for(let i=0;i<num.length;i++){
        if(num[i]=='6') return Number(num.slice(0,i)+'9'+num.slice(i+1))
    }
    return Number(num)
};
