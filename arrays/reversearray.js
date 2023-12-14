function reversearray(array){
    // function to reverse an array
    console.log("Array"+ array)
    let temp;
    let right_pointer = array.length -1;
    let left_pointer = 0;

    while (left_pointer <= right_pointer){
        temp = array[right_pointer]
        array[right_pointer] = array[left_pointer]
        array[left_pointer] = temp;
        left_pointer+=1 
        right_pointer-=1
    }
    console.log("New Array "+ array)
}