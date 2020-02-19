// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
//
// Example 1:
//
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].

var averageOfLevels = function(root) {//even though this answer is correct and runs fast, upon review, I think it would've been better to use a map than an Object because there's nothing that guarantees the order in an object and in my return I'm inhenerently trusting the 0's to come first and everything else to come after when that isn't always the case
    var values = {}
    average(root,0,values)
    return Object.values(values).map(el=>el.reduce((sum,current)=>sum+current)/el.length)
};
function average(root,level,values){
    if(values[level]){
        values[level].push(root.val)
    }else{
        values[level] = [root.val]
    }
    if(root.left) average(root.left,level+1,values)
    if(root.right) average(root.right,level+1,values)
}
