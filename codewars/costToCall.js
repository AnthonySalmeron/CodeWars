// Some phone usage rate may be described as follows:
//
//     first minute of a call costs min1 cents,
//     each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
//     each minute after 10th costs min11 cents.
//
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?
function phoneCall(min1, min2_10, min11, s) {
    let mins = 0
    let currentCost = min1
    while(s>=currentCost){
        mins++
        if(mins==1){
            s-=min1
            currentCost=min2_10
        }else if(mins<11){
            s-=min2_10
            if(mins==10) currentCost=min11
        }else{
            s-=min11
        }
    }
    return mins
}
