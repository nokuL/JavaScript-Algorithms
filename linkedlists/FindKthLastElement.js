const findKthLastElement = (singlyLinkedList, position)=>{
    const count = 0;
    const currentNode = null;
    const tailSeeker = singlyLinkedList.head;

    while(currentNode!=null){
        tailSeeker = tailSeeker.getNext();
        if(count>=position){
            if(currentNode == null){
                currentNode = singlyLinkedList.head;
            }
            currentNode = currentNode.getNext();
        }
        count++;

    }
    return currentNode;

}