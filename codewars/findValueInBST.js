//if you find the value in a bst, return the rest of the tree from that node

var searchBST = function(root, val) {
    if(root.val ==val)return root
    let left = root.left? searchBST(root.left,val): null,right= root.right? searchBST(root.right,val):null
    return left ? left : right ? right : null
};
