/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let last = new ListNode(null)
    let current = head
    while(current){
        if(current.val==last.val){
            last.next = current.next
            current = current.next
        }else{
            last = current
            current = current.next
        }
    }
    return head
};
