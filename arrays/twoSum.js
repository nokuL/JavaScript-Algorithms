function twoSum(array, target){
    /// function to calculate if two nums sum up to a target

    let compliment = 0
    hashmap = new Map()

    if(validation(array, target)){

    for(let num = 0; num < array.length ; num++ ){
        compliment = target - array[num]
        if(hashmap.has(compliment)){
            return [hashmap.get(compliment), num]
        }
        hashmap.set(array[num], num)


    }
    return []


}
}

function validation(array, target){

    if(array.length > Math.pow(10, 4) || array.length < 2){
        return false

    }else if((array.some(value => value > Math.pow(10, 9))) || array.some(value=> value< Math.pow(-10, 9))){
        return false
    }else if( target  > Math.pow(10, 9)|| target < Math.pow(-10, 9)){
        return false
    }else{
        return true
    }
}