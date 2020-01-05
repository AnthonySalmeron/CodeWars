//given a linked list, determine if it's a palindrome using O(n) time and O(1) additional space
function isListPalindrome(l) {
    let length =0
    let current = l
    while(current){
        current= current.next
        length++
    }
    if(length<2) return true
    current = l
    let total = 2
    let index = 0
    let track = true
    while(current){
        index++
        if(index<(1+length)/2){
          if(current.value){
           track ? total+= current.value : total*=current.value
          }
          track = !track
        }
        if(index>(1+length)/2){
           track=!track
           if(current.value){
            track ? total-= current.value : total/=current.value
           }
        }
        current=current.next
    }
    return total===2
}
//answer has edge cases, a better way to tackle this problem is to reverse the first half of the linked list and then simultaneously run through the second half and determine if there's any difference
//how to reverse a linked list:

        // Initialize three pointers prev as NULL, curr as head and next as NULL.
        // Iterate trough the linked list. In loop, do following.
        //  Before changing next of current,
        //  store next node
        // next = curr->next
        //
        //  Now change next of current
        //  This is where actual reversing happens
        // curr->next = prev
        //
        //  Move prev and curr one step forward
        // prev = curr
        // curr = next
