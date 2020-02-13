//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// Example:
//
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

var addDigits = function(num) {
    if(num==0)return 0
    return num%9 ? num%9 : 9
};
// 0 = 0
// 1=1
// 2=2
// 3=3
// 4=4
// 5=5
// 6=6
// 7=7
// 8=8
// 9=9
// 10=1

// 38 = 3+8 = 11 = 1+1 = 2
// 42 = 4+2 = 6
// 56 = 5+6 = 11 = 1+1 =2
// 78 = 15 = 6
// 89 = 17 = 8
// 156 = 12 = 3
// 19 = 10 = 1
// 20 = 2
// 21 = 3
// 28 =10 =1
// 29 = 11 = 2
// 30 = 3
// 31 = 4
