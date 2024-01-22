function quickSort(array, left , right){
   let  partition_pos  = partition(array, left, right)
   quickSort(array, left, partition_pos-1)
   quickSort(array, partition_pos +1 , right)


}

function partition(array, left, right){
    let i = left
   let  j = right -1 
    let pivot = array[right]
    let  temp = 0

    while (i< j){
        while (i < right && array[i] < pivot){
            i+=1
        }
        while (j > left && array[i]>= pivot){
            j+=1
        }
        if (i < j){
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
            
        }
    if (array[i]>pivot){
        temp = array[right]
        array[right] = array[i]
        array[i] = temp
    }
    return i
    }
}