const partitionList = (linkedList, num)=>{
    const node1 = new Node();
    const node2 = new Node();
    let left = node1;
    let right = node2;
    let currentNode = linkedList.head;
    while(currentNode != null){
        if(currentNode.data != null && (currentNode.data < num)){
            left.setNext(currentNode);
            left = currentNode;
        }else{
            right.setNext(currentNode);
            right = currentNode;
        }
        currentNode = currentNode.getNext();
    }
    left.setNext(node2.getNext());
    right.setNext(null);
    return node1.getNext();
}