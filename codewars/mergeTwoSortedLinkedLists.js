/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
  @param {ListNode} l1
 @param {ListNode} l2
 @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {//basically will combine l2 into l1
  //if l1 or l2 are missing
    if(!l1) return l2
    if(!l2)return l1
    let current = l1,prev = null
    while(l2&&current){//current will usually be here but if current runs out of l1 (all the elements in l1 are smaller than l2's) then we need this conditional to exit out for us
        if(current.val<l2.val){
            prev = current
            current=current.next
        }else{ //taking the first element of l2 and inserting into l1
            let currentl2 = l2
            l2 = l2.next
            currentl2.next = current
            if(prev){
                prev.next = currentl2
                prev=prev.next //current stays the same and prev becomes this node
            }else{//if we're at the beginning of l1
                l1 = currentl2
                prev = currentl2
            }
        }
    }
    if(l2){// in cases of all elements of l1 being smaller than what's left of l2
        prev.next = l2
    }
    return l1
};
