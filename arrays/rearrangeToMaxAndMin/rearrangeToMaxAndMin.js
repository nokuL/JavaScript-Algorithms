const rearrangeToMaxAndMin = (array)=>{
    //iterate through the array
    //for each array[i] = array[i] + (array[max] % maxelement )* maxelement
    //for each , divide by maxelement

    let maxElement = array[array.length -1] + 1;
    let max = array.length -1;
    let min = 0;

    for(let i = 0; i<array.length; i++){
        if(i%2 == 0){
            array[i] = array[i] + (array[max] % maxElement) * maxElement;
            max--;
        }else{
            array[i] = array[i] + (array[min] % maxElement) * maxElement;
            min++;

        }
    }

    for(let i = 0; i<array.length; i++){
        array[i] = array[i]/ maxElement;
    }

    return array;
}