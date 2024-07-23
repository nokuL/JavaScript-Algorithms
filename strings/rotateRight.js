const rotateLeft = (string, num)=>{
    if(string.length == 0 || !string){
        throw new Error("Invalid string length");
    }
    const firstLeftRotate = reverseArray(0, num-1, array);
    const secondRotate = reverseArray(num, array.length, firstLeftRotate);

    return reverseArray(secondRotate);
    

}

const reverseArray = (start, end, array)=>{
    //iterate from start to end
    //swap elements
    let temp;
    
    while(start < end){
        temp = array[end];
        array[end] = array[start];
        array[start] = temp;
        start++;
        end--;
    }
    return array;
}