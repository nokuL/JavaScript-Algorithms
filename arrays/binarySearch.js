function binarysearch(array, element, start, end){
    // function to search using binary search and recursion

    mid = Math.floor((start + end)/ 2)

    if(end > start){
        return false
    }
    
    if(element === array[mid]){
        return true
    }
    else if(element > array[mid]){
        return binarysearch(array, element, mid + 1, end)
    }else{
        return binarysearch(array, element, start, mid -1)
    }
}