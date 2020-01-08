// You are given an array of a journey in London, UK. The array will contain bus numbers and TFL tube names as strings e.g.
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.
//
// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx


function londonCityHacker(journey) {
  if (journey.length==0) return "£0.00"
  let trainCost = 0
  let busCost = 0
  for(let i =0;i<journey.length;i++){
    if (typeof journey[i] =="string"){
      trainCost+=240
    }else{
      if(typeof journey[i+1] !="number"){
        busCost+=150
      }else{
        busCost+=150
        i++
      }
    }
  }
  let result = trainCost+busCost
  result = String(result).split("")
  result.splice(-2,0,".")
  result.unshift("£")
  return result.join("")
}
