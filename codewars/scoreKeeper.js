// You're now a baseball game point recorder.
//
// Given a list of strings, each string can be one of the 4 following types:
//
//    Integer (one round's score): Directly represents the number of points you get in this round.
//    "+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
//    "D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
//    "C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
//
// Each round's operation is permanent and could have an impact on the round before and the round after.
//
// You need to return the sum of the points you could get in all the rounds. 

var calPoints = function(ops) {
    let history  = [],points =0
    for(let i of ops){
        if(i=="C"&&history.length){
            points-=history.pop()
        }else if(i=="+"&&history.length>1){
            history.push(history[history.length-1]+history[history.length-2])
            points+=history[history.length-1]
        }else if(i=="D"&&history.length){
            points+=history[history.length-1]*2
            history.push(history[history.length-1]*2)
        }else if(typeof Number(i) == 'number'){
            points+= Number(i)
            history.push(Number(i))
        }
    }
    return points
};
