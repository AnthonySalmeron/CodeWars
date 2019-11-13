//Each day a plant is growing by upSpeed meters. Each night that plant's height
//decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall.
// We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if(upSpeed>=desiredHeight) return 1;
  let day =0,total=0;
  while(total<desiredHeight){
    total+= upSpeed
    if(total>=desiredHeight) return day+1;
    total-= downSpeed;
    day++;
  }
  return day
}
