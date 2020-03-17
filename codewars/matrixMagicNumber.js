var luckyNumbers  = function(matrix) {
    let min = matrix.map(el=>Math.min(...el)),max = matrix[0].map((_,p)=>Math.max(...matrix.map(e=>e[p]))),out=[]
    for(let i of matrix){
       for(let j=0;j<i.length;j++){
           if(min.includes(i[j])&&max.includes(i[j])) out.push(i[j])
       }
    }
    return out
};
