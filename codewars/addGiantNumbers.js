//inputs are positive string numbers, output is string
var addStrings = (num1, num2)=>{
    num1 =num1.split("")
    num2= num2.split('')
    let add = ""
    while(num1.length&&num2.length){
      let sum= Number(num1.pop())+Number(num2.pop())
      if(sum>=10){
          sum-=10
          if(num1.length){
              let index = num1.length-1
              num1[index] = Number(num1[index])+1
              while(num1[index]>=10&&index>0){
                 num1[index]-=10
                 index--
                 num1[index] = Number(num1[index])+1
              }
              if(num1[0]>=10){
                  num1[0]-=10
                  num1.unshift('1')
              }
              add= sum + add
          }else if(num2.length){
             let index = num2.length-1
              num2[index] = Number(num2[index])+1
              while(num2[index]>=10&&index>0){
                 num2[index]-=10
                 index--
                 num2[index] = Number(num2[index])+1
              }
              if(num2[0]>=10){
                  num2[0]-=10
                  num2.unshift('1')
              }
              add= sum + add
          }else{
              add = ('1' + sum )+add
          }
      }else{
          add = sum + add
      }
    }
    while(num1.length){
        add = num1.pop() + add
    }
    while(num2.length){
        add = num2.pop() + add
    }
    return add
}
