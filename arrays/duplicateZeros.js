function duplicateZeros(array){
    // function to duplicate zeros

     let zeros = (array).filter((num)=> num=== 0).length
     let i = array.length -1 
     let j = array.length -1 + zeros

     while (i >=0){
        if(j < array.length){
            array[j] = array[i]
        }
        j--
        if(array[i]===0){
            j--
            if(j< array.length){
                array[j]=0
            }
        }
        i--
        j--
     }
}