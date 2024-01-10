function deleteDuplicates(array){
    // function to delete duplicates from array

    hashmap = new Map()
    left = 1

    if(array.length< 2){
        throw Error("Invalid array length")
    }
    if(isValid(array)){
        for(let i = 1 ; i < array.length; i++){
           if(array[i] != array[i -1]){
            array[left]= array[i]
            left+=1
    
           }

        }
        return left
    }




}


function isValid(array){
    if(array.length > 3 *Math.pow(10, 4) || array.length < 1){
        return false
    }else if(array.some(value => value < -100) || array.some(value => value > 100)){
        return false
    }else if ( !isArraySorted(array)){
        return false
    }else{
        return true
    }
}

function isArraySorted(array) {
    return array.every((currentValue, index) => {
      if (index === 0) {
        return true;
      }
      return currentValue >= array[index - 1];
    });
  }
  