function killKthBit(n, k) {
  return Number('0b'+n.toString(2).split('').reverse().map((el,i)=>i==(k-1)?'0' : el).reverse().join(''));
}
