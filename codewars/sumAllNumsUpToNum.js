var summation = function (num) {
 let sample=  Array.from({length: num}, (v, i) => i+1);
 return sample.reduce((previous,item) => previous+item)
}
