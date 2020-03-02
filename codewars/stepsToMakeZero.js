//a step can be either a divide by two or a subtract 1, return the number of steps to make a positive integer zero
var numberOfSteps  = function(num,steps=0) {
    if(!num)return steps
    return numberOfSteps(num%2==0 ? num/2 : num-1, steps+1)
};
