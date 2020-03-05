//given a positive integer, return an array of that size that when summed together equals zero
var sumZero = function(n) {
    if(n%2){
       let ext = []
       for(j=-Math.floor(n/2);j<0;j++){
           ext.push(j)
       }
       ext.push(0)
       for(j=1;j<=Math.floor(n/2);j++){
           ext.push(j)
       }
       return ext
    }else{
       let ext = []
       for(j=-(n/2);j<0;j++){
           ext.push(j)
       }
       for(j=1;j<=(n/2);j++){
           ext.push(j)
       }
       return ext
    }
};
