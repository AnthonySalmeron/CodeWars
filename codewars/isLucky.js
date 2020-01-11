//determind if a number is "lucky"
//a number is deemed as lucky if the first half of it added together equals the second half added together
//guaranteed constraint of each number having an even number of digits
let isLucky = n=> String(n).slice(0,String(n).length/2).split('').reduce((sum,current)=>sum+Number(current),0) === String(n).slice(String(n).length/2).split('').reduce((sum,current)=>sum+Number(current),0)
