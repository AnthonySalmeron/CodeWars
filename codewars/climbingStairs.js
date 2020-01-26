//You want to climb to the nth stair, with each step you can take either 1 or 2 steps, find the number of possible unique ways in which you can reach the top

var climbStairs = function(n) {
    //manually tested every number from 1-7, it's Fibonacci
    if(n==1) return 1
    if(n==2) return 2
    let x = 1
    let y = 2
    while(n>2){
        var current = x+y
        x=y
        y=current
        n--
    }
    return current
};
