const reverseLinkedList = (linkedList)=>{
let prev = null;
let next = null;
let curr = linkedList.head;

while(curr != null){
    next = curr.getNext();
    curr.setNext(prev);
    prev = curr;
    curr = next;
}
return prev;

}

const printList = (linkedList)=>{
    
    const curr = linkedList.head;
    while(curr != null){
        console.log(curr.data);
        curr = curr.getNext();
    }
}

