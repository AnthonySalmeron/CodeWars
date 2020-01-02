// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//Remove all instances of k from the linked list l
function removeKFromList(l, k) {
    var currentNode = l//points to the same place in memory as l
    var previousNode= null
    while(currentNode){//while currentNode is not null
        if(currentNode.value==k){
           if(previousNode){//if it's not the first node
              previousNode.next = currentNode.next//skip the current node
              currentNode =previousNode.next
           }else{
              l=currentNode.next
              currentNode=currentNode.next
           }
        }else{
           previousNode=currentNode
           currentNode=currentNode.next
        }
    }
    return l
}
