// Given a binary tree root and an integer target, delete all the leaf nodes with value target.
// Note that once you delete a leaf node with value target, if it's parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you can't).
//if a parent matches the target but it still has one valid child, it cannot be deleted

var removeLeafNodes = function(root, target) {
    if(root.left)root.left= removeLeafNodes(root.left,target)
    if(root.right)root.right = removeLeafNodes(root.right,target)
    if(root.val==target&&!root.left&&!root.right) return null
    return root
};//this was a lot harder than four lines of code
