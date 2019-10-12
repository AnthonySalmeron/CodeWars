function well(x){
  let y  = x.filter(item => item=="good");
  if (y.length> 0){
    if (y.length>2) {
      return "I smell a series!";
    }else {
      return "Publish!";
    }
  }else {return "Fail!";}
}
