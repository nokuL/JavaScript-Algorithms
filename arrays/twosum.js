var twoSum = function(nums, target) {
    if (isvalid(nums, target)) {
      //define a map and loop through the updste complement with number
      const numMap = new Map()
      const resultArray = [];
      for(let i = 0; i < nums.length ; i++){
          let complement = target - nums[i];
          if (numMap.has(complement)){
              return [numMap.get(complement), i]
          }
          numMap.set(nums[i], i)
      }
    }
    return []; // Return an empty array if no two numbers add up to the target
};

function isvalid(nums, target) {
  if(nums.length < 2 || nums.length > 10**9){
      return false;
  }else if (nums.some(value => value < -(10**9) || value >10 **9)){
      return false;
  }else if(target < -(10**9)|| target > (10**9)){
      return false;
  }else{
      return true;
  }
}