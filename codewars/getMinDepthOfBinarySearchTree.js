/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root, depth=0) {
    if(!root) return depth
    depth+=1
    var left=10000000,right=10000000,copy = depth
    if(root.left){
        left = minDepth(root.left,copy)
    }
    if(root.right){
       right = minDepth(root.right,copy)
    }
    if(!root.left&&!root.right){
        return depth
    }else{
        return Math.min(left,right)
    }
};
