function killKthBit(n, k) {
  return Number('0b'+n.toString(2).split('').reverse().map((el,i)=>i==(k-1)?'0' : el).reverse().join(''));
}

function killKthBit(n, k) {
  return n & ~(1<<k-1);
}
& = sets a bit to 1 if both are 1
~ = not, switches all bits
<< = left shift, adds certain amount of 0 bits to the right
