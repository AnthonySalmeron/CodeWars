//multiply two given string integers together without explicitly transforming them into integers
var multiply = function(num1, num2) {
    let products = [],start=""
    while(num2.length){
        let y = Number(num2[num2.length-1]),current=start,remainder=0
        for(let x=num1.length-1;x>=0;x--){
            let product = Number(num1[x])*y+remainder
            current = product%10 + current
            remainder = Math.floor(product/10)
        }
        if(remainder) current = remainder + current
        products.push(current)
        num2 = num2.slice(0,num2.length-1)
        start+=0
    }
    let product = "",carry=0
    while(products.length){
        let sum = carry
        for(let i=0;i<products.length;i++){
            sum+=Number(products[i][products[i].length-1])
            if(!(products[i].length-1)){//be careful here, I had it written without the parentheses around products[i].length-1
                products.splice(i,1)
                i--
            }else products[i]= products[i].slice(0,products[i].length-1)
        }
        product = sum%10 + product
        carry = Math.floor(sum/10)
    }
    if(carry) product = carry+product
    //this snippet below is just for an edge case where the number is '0000' but the expected answere is '0'
    let checkIfAllZero =true
    for(let j of product){
        if(j!='0'){
            checkIfAllZero=false
            break;
        }
    }
    return checkIfAllZero ? '0': product
};
