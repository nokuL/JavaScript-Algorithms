function mostfrequentelement(array){
    // function to find most freq element using map

    let max_count = 1
    let result = array[0]
    let map = new Map()

    for (let i = 1; i < array.length; i++){
        if(map.has(array[i])){
            map.set(array[i], map.get(array[i])+1)
        }else{
            map.set(array[1], 1)
        }

        if (map.get(array[i]) > max_count){
            max_count = map.get(array[i])
            result = array[i]
        }
    }
    return result
}