class SinglyLinkedList{

    constructor(){
        this.head = null;
    }

    addToHead(data){
        const newNode = new Node(data);
        const oldHead = this.head;
        this.head = newNode;
        if(oldHead){
           this.head.setNext(oldHead); 
        }
        return this.head;

    }

    addToTail(data){
        const newTail = new Node(data);
        const tail = this.head;

        if(!tail){
            this.head = newTail;
        }else{
            while(tail.getNext()!= null){
                tail = tail.getNext();

            }
            tail.setNext(newTail);
        }

    }
    removeHead(){
        const nodeToRemove = this.head;
        if(!nodeToRemove){
            return;
        }else{
            this.head = nodeToRemove.getNext();
            nodeToRemove.setNext(null);
        }
        return nodeToRemove.data;

    }

   deleteNode(data){
    const currentNode = this.head;
    if(!currentNode){
        return null; //nothing to remove because list is empty
    }else{
        while(currentNode != null){
            if(currentNode.getNext().data === data){
                currentNode.setNext(currentNode.getNext().getNext());
                return currentNode.getNext();

            }
            currentNode = currentNode.getNext();
        }
    }

   }

   swapNodes(data1, data2){
    const node1 = this.head;
    const node2 = this.head;
    const prev1 = null;
    const prev2 = null;
    
    const map1  = this.findPrevAndNode(node1, data1);
    node1 = map1.get("node");
    prev1 = map1.get("prev");

    const map2  = this.findPrevAndNode(node2, data2);
    node2 = map2.get("node");
    prev2 = map2.get("prev");

   if(!prev1){
    this.head = node1;
   }else{
    prev1.setNext(node2.getNext());
   }

   if(!prev2){
    this.head = node2;
   }else{
    prev2.setNext(node1.getNext());

   }
   
   }

   findPrevAndNode(node, data){
    const prev = null;
    const map = new Map();

    while(node != null){
        if(node.data === data){
            break;

        }
        map.set("prev", node);
        map.set("node", node.getNext());
        
    }
    

    return map;


   }

   findListSize(){
     let size = 0;
     let curr = this.head;
     while(curr!=null){
        size++;
        curr = curr.getNext();
     }
     return size;
   }


}