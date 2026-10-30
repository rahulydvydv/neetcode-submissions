class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       let maps = new Map();

       for(let i = 0; i<nums.length; i++){
        let needed = target - nums[i];
    
        if(maps.has(needed)){
            return [maps.get(needed),i]
            
        }
        else{
            maps.set(nums[i] ,i)
        }
       }

    }
}
