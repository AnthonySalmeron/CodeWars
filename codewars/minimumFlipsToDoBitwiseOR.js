// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.
// EXAMPLE: Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)

var minFlips = function(a, b, c) {
    c= c.toString(2)
    a= a.toString(2)
    b= b.toString(2)
    while(a.length<c.length) a = 0+a
    while(b.length<c.length) b = 0+b
    let total = 0,cEnd=c.length-1,bEnd=b.length-1,aEnd=a.length-1
    if(a.length>c.length){
        let i=0
        while(a.length-i>c.length){
            if(a[i]=='1')total++
            i++
        }
    }
    if(b.length>c.length){
        let i=0
        while(b.length-i>c.length){
            if(b[i]=='1')total++
            i++
        }
    }
    while(cEnd>-1){
        if(c[cEnd]=="1"){
            if(a[aEnd]!='1'&&b[bEnd]!='1')total++
        }else{
            if(a[aEnd]=='1')total++
            if(b[bEnd]=='1')total++
        }
        cEnd--
        bEnd--
        aEnd--
    }
    return total
};
