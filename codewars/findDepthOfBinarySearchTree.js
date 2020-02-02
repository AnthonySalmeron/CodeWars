var maxDepth = function(root,depth=0) {
    if(root) depth++
    else return depth
    let right=0,left=0
    if(root.left){
        let copy = depth
        left = maxDepth(root.left,copy)
    }
    if(root.right){
        let copy = depth
        right = maxDepth(root.right,copy)
    }
    return Math.max(depth,left,right)
};
