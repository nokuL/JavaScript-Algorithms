function mergeSort(array){

    if(array.length === 1){
        return array
    }

    let mid = array.length / 2
    let left_array = array.slice(0, mid)
    let right_array = array.slice(mid +1, array.length)

    mergeSort(left_array)
    mergeSort(right_array)

    let left = 0
    let right = 0
    let k = 0

    while (left < left_array.length && right < right_array.length){
        if(left_array[left] < right_array[right]){
            array[k] = left_array[left]
            left += 1
        }else{
            array[k] = right_array[right]
            right +=1 

        }
        k+=1

    }

    while (left < left_array.length){
        array[k] = left_array[left]
        k+=1
    }
    while(right < right_array.length){
        array[k] = right_array[right]
        k+=1
    }

}