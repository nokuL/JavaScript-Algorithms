/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    // using merge sort in js
    if(isValid(nums)){
    mergeSort(nums, 0, nums.length )
    return nums
    }
        
    };
    
    function mergeSort(array, left, right){
        if(array.length ===1){
            return array
    
        }
    
        let mid = Math.floor(array.length/2)
        let left_array = array.slice(0, mid)
        let right_array = array.slice(mid, right)
    
        //merge
        mergeSort(left_array)
        mergeSort(right_array)
    
        left = 0
        right = 0
        k = 0
    
        while(left < left_array.length && right < right_array.length){
            if(left_array[left] < right_array[right]){
                array[k] = left_array[left]
                left += 1
                 }else{
                     array[k] = right_array[right]
                     right += 1
                        }
                k+=1
        }
        while (left < left_array.length){
            array[k] = left_array[left]
            left+=1
            k+=1
        }
        while(right < right_array.length){
            array[k] = right_array[right]
            right += 1
            k+=1
        }
    
    }
    
    
    
    function isValid(nums){
        if(nums.length > Math.pow(10, 5) || nums.length < 1){
            return false
        }else if (nums.some((num)=> (num > Math.pow(10, 4) * 5 )|| num < -5 * Math.pow(10, 4))){
            return false
        }else{
            return true
        }
    }