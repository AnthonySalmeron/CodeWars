var plusOne = function(digits) {
    var i = digits.length-1
    digits[i]++
    while(digits[i]==10&&i>0){
        digits[i]-=10
        i--
        digits[i]++
    }
    if(digits[0]==10){
        digits[0]=0
        digits.unshift(1)
    }
    return digits
};
