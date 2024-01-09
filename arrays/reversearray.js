function reverseArray(array){
    if (array.length == 0){
        throw Error("Array has invalid length")
    }
    let start = 0
    let end = array.length -1
    let temp = 0
    
    while(start<= end){
        temp = array[end]
        array[end] = array[start]
        array[start]= temp
        start++
        end--
    }

}