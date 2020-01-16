// The count-and-say sequence is the sequence of integers with the first five terms as following:
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
//
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
//
// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.
var countAndSay = function(n) {
    if(n>1){
        var count = countAndSay(n-1)
    }
    if(n===1) return "1"
    let numCount= 0
    let current = ""
    let out=""
    for(let i of count){
        if(current==i){
            numCount++
        }else{
            if(current){
                out+=(numCount+current)
                numCount=1
                current=i
            }else{
                current = i
                numCount=1
            }
        }
    }
    out+=(numCount+current)
    return out
};
