function commonCharacterCount(s1, s2) {
 let lower = s1.length>s2.length ? s2:s1
 let higher  = lower==s1 ? s2:s1
 let tracker = {}
 for(let i of lower){
     if( i in tracker){
         console.log(`${i} in tracker`)
         if(higher.indexOf(i,tracker[i][1]+1)>0){
             tracker[i][1] = higher.indexOf(i,tracker[i][1]+1)
             tracker[i][0]++
         }
     }else{
         higher.indexOf(i)> -1 ? tracker[i] = [1,higher.indexOf(i)] : ""
     }
 }
 console.log(tracker,lower,higher)
 return Object.values(tracker).reduce((sum,current)=>sum+current[0],0)
}
