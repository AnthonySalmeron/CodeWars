function isInfiniteProcess(a, b) {
    if(a==b)return false
    if (a<b&&((b-a)%2)==0)return false
    return true
}
// Given integers a and b, determine whether the following pseudocode results in an infinite loop
//
// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
//
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.
