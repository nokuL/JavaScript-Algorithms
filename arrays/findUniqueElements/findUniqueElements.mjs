var findUniqueElements = (array)=>{
    let left = 1;
    for(let i = 1; i< array.length; i++){
        if(array[i] != array[i-1]){
            array[left]= array[i];
            left++;
        }
    }
    return left;

}
export default findUniqueElements;