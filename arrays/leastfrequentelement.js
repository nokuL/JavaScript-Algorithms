function leastFrequentElement(array){
    // least frequent element in an array

    //first sort the array
    array.sort()

    let min_count = 1
    let current_count = 1
    let result = arr[0]

    for (let i = 1; i < array.length; i++){
        if(array[i] == array[i-1]){
            current_count++
        }else{
            current_count = 1
        }

        if(current_count < min_count){
            min_count = current_count
            result = array[i-1]
        }


    }
    return result
    

}


function leastFrequentElementTwo(array){
    // least frequent element in an array
    // using hashmap

    let min_count = 1000000000
    let result = array[0]
    let map = new Map()

    for(let i = 0; i< array.length; i++){
        if (map.has(array[i])){
            map.set(array[i], map.get(array[i]) + 1);
        }else{
            map.set(array[i], 1)
        }

        if (map.get(array[i])< min_count){
            min_count = map.get(array[i])
            result = array[i]

        }
    }
    return result
}