/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 //check to see if the left binary tree is equal to the right binary tree
var isSameTree = function(p, q) {
   if(p===null||q===null){
       if(p===null&&q===null) return true
       return false
   }else if(p.val!==q.val) return false
   let left = isSameTree(p.left,q.left)
   let right  = isSameTree(p.right,q.right)
   if(!left||!right) return false
   return true
};
