const minDistance = (array)=>{

    const freqMap = maxAndMinFreq(array);
    const maxElement = freqMap.get("MAX");
    const minElement = freqMap.get("MIN");
    return findMinDistanceBetweenTwoEl(array, maxElement, minElement);



}

const findMinDistanceBetweenTwoEl = (array, x, y )=>{
    //traverse the array
    //declare ans variable to keep track of result
    //keep track of the most recent occurance of either of the two 
    //if array[i]== element_x, recent_x = i, 
    //if recent_y != -1, ans = Math.min(ans, Math.abs(recent_y - recent_x))
    //else if array[i] == element_y , recent_y =i
    //if recent_x != -1, ans = Math.min(ans, Math.abs(recent_y - recent_x))
    // if ans === Math.min_value, return -1
    //else return ans

    let ans = Math.MAX_VALUE;
    let recent_x = -1;
    let recent_y = -1;

    for(let i = 0; i<array.length; i++){
        if(array[i]==x){
            recent_x = i;
            if(recent_y != -1){
                ans = Math.min(ans, Math.abs(recent_x - recent_y));
            }
        }else if(array[i]==y){
            recent_y = i;
            if(recent_x != -1){
                ans = Math.min(ans, Math.abs(recent_x - recent_y));
            }
        }
       
    }
    if(ans = Math.MAX_VALUE){
        return -1;
    }
    return ans;
}

const maxAndMinFreq = (array)=>{
    //get thebmost freq element in array
    //traverse the array
    //for each, check if element is in map
    //if map contains element, increment the value
    //else add element to map
    //if element value in map > count, then count = element value in map
    //maxElement = element in array

    if(!array || array.length == 0){
        throw new Error("Array cannot be null");
    }


    let map = new Map();
    let resultMap = new Map();
    let maxCount = 0;
    let minCount = Number.MAX_VALUE;
        let maxElement = array[0];
        let minElement = array[0];
        for(let i =0; i < array.length; i++){
            if(map.has(array[i])){
                map.set(array[i], map.get(array[i])+1);

            }else{
                map.set(array[i], 1);
            }

            if(map.get(array[i])> maxCount){
                maxCount = map.get(array[i]);
                maxElement = array[i];
            }

            if(map.get(array[i]) < minCount){
                minCount = map.get(array[i]);
                minElement = array[i]

            }

        }
        resultMap.set("MIN", minElement);
        resultMap.set("MAX", maxElement);
        

    return resultMap;
    }

    export default minDistance
    


