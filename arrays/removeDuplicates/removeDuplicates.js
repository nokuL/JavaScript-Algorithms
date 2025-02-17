
const removeDUplicates = (array)=>{

    // have two pinters , one left and another one i
    // for each loop, if the current element is not equal to the previous element, then move the current element to the left pointer
    // return the left pointer          
    let left = 1;
  for(let i = 1; i< array.length; i++){
    if(array[i] != array[i-1]){
        array[left]= array[i];;
        left++

    }
  }
  return left;
};
export default removeDUplicates;