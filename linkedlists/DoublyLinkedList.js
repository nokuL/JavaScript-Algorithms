import { Node } from "./Node";
class DoublyLinkedList {

    constructor (){
        this.head = null;
        this.tail = null;
    }

    addToHead(data){
        const newNode = new Node(data);
        let oldhead = this.head;
         this.head = newNode;
         if(!this.tail){
            this.tail = newNode;
         }else
         {
            this.head.setNext(oldhead)
            oldhead.setPrevious(newNode);
         }
        
        
    }

    addToTail(data){
        const newNode = new Node(data);
        const oldTail = newNode
        this.tail = newNode;
        if(!this.head){
            this.head = newNode;
        }else{
            this.tail.setPrevious(oldTail);
            if(oldTail){
            oldTail.setNext(newNode);
            }
        }
    }

    removeFromHead(){
        const nodeToRemove = this.head;
        if(!this.head){
            return null;
        }
        this.head = this.head.getNext();
        this.head.setPrevious(null);
        nodeToRemove.setNext(null);
        if(this.tail == nodeToRemove){
            this.removeTail();
        }

        return nodeToRemove.data;
    }

    removeTail(){
        const nodeToRemove = this.tail;
        if(!this.tail){
            return null;
        }else{
           this.tail = this.tail.getPrevious();
           if(this.tail){
           this.tail.setNext(null)
           }
           nodeToRemove.setPrevious(null);
        }

    }

    swapNodes(data1, data2){
        const node1 = this.head;
        const node2 = this.head;
        const map1 = this.findNodeAndPrev(data1, node1);
        const map2 = this.findNodeAndPrev(data2, node2);
        const prev1 = map1.get("prev");
        node1 = map1.get("node");
        const prev2 = map2.get("prev");
        node2 = map2.get("node");
        if(prev1 == null){
            this.head = node2;
        }else{
            prev1.setNext(node2.getNext());
            node2.setPrevious(prev1);
        }
        if(node1.getNext()== null){
            const oldTail = this.tail;
            this.tail = node2;
            prev1.setNext(node2.getNext());
            node2.setPrevious(prev1);
        
        }
        if(node2.getNext()== null){
            const oldTail = this.tail;
            this.tail = node1;
            prev2.setNext(node1.getNext())
            node1.setPrevious(prev2);
        
        }

        if(prev2 == null){
            this.head = node1;

        }else{
            prev2.setNext(node1.getNext())
            node1.setPrevious(prev2);
        }
       

    }

    findNodeAndPrev(data, node){
        const previous = null;
        const currentNode = node;
        Map<String , Node>map;
        while(currentNode !== null){
            if(currentNode.data === data){
                break;
            }
            previous = currentNode;
            currentNode = currentNode.getNext();
            
        }
        map.put("prev", previous);
        map.put("node", node);
        return map;

    }



    ///find node at position
    findNodeAtPosition(position){
        const count = 0;
        const currentNode = this.head;
        while(currentNode!=null){
            if(count == position){
                break;
            }
            count++;
            currentNode = currentNode.getNext();

        }
        return currentNode;

    }

    //delete at position
    deleteNodeAtPosition(position){
        const count =0;
        const currentNode = this.head;
        const previous = null;
        while(currentNode!=null){
            if(count==position){
                break;
            }
            previous = currentNode;
            currentNode = currentNode.getNext();
            count++;
        }
        if(previous !=null){
            previous.setNext(currentNode.getNext());

        }else{
            this.head = currentNode.getNext();
        }
        if(currentNode.getNext()!=null){
            currentNode.getNext().setPrevious(previous);

        }else{
            this.tail = currentNode.getNext();
        }

    }

    printList(){
        const startString = '<head>';
        while(currentNode!=null){
            startString += currentNode.data;
            currentNode = currentNode.getNext();
        }
        startString + '<tail>';
        return startString;
    }

    testMethods(){
        const doublyLinkedList = new DoublyLinkedList();
        doublyLinkedList.addToHead(2);
        doublyLinkedList.addToHead(1);
        doublyLinkedList.addToHead(0);
       console.log(this.printList());
    }
}
testMethods();

