// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
// Given n, find the total number of full staircase rows that can be formed.
// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:
// n = 5
// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤
// Because the 3rd row is incomplete, we return 2.

// Example 2:
// n = 8
// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤
// Because the 4th row is incomplete, we return 3.

var arrangeCoins = function(n) {
    if(n==0)return 0
    let place = 2,jump = 3
    while(n>place){
        place+=jump
        jump++
    }
    return jump-2
};

// 1 1
// 2 1
// 3 2
// 4 2
// 5 2
// 6 3
// 7 3
// 8 3
// 9 3
// 10 4
// 11 4
// 12 4
// 13 4
// 14 4
// 15 5
