export class Node{

    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = previous; 
    }

    setNext(nextNode){
        this.next = nextNode;
    }

    setPrevious(previousNode){
        this.previous = previousNode;
    }

    getNext(){
        return this.next;
    
    }
    getPrevious(){
        return this.previous;
    }
}