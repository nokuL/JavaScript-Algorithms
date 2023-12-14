function findMax(array){
    if(array.length === 0){
        return null
    }else if(array.length ===1){
        return array[0]
    }else{
        
        let leftPointer = 0;
        let rightPointer = array.length -1;
        let max = 0;
        while(leftPointer<= rightPointer){
        max = Math.max.apply(array[leftPointer], array[rightPointer]);
        leftPointer+=1
        rightPointer-=1

    }
    return max;
}

}

