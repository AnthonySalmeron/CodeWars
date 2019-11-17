//Complete the function that returns the color of the given square on a normal, 8x8 chess board:
//img: https://i.imgur.com/aM0oVWW.png
function mineColor(file, rank) {
  let code = file.charCodeAt(0);
  if(((rank%2!=0)&&(code%2!=0))||((rank%2==0)&&(code%2==0))){
    return 'black'
  }else{return 'white'}
}
