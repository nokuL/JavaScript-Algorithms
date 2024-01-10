function removespecificValue(array, value){
    /// function to remove specfic value

    left = 0
    for(let i = 0; i < array.length ; i++){
        if(array[i] != value){
            array[left]= array[i]
            left++
        }
    }
    return left
}