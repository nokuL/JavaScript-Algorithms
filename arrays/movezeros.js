/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    left = 0
    temp =0

    if(isValid(nums)){
        for(let i = 0 ; i < nums.length; i++){
            if(nums[i]!=0){
                temp = nums[left]
                nums[left] = nums[i]
                nums[i]= temp
                left ++

            }
        }
    }
    
};
function isValid(nums){
    if(nums.length > Math.pow(10, 4) ||nums.length < 1){
        return false
    }else if (nums.some(value=> (value > (Math.pow(2, 31))-1)|| value < Math.pow(-2, 31))){
        return false
    }else{
        return true
    }
}
