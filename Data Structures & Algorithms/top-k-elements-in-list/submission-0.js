class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = new Map();
       for(let num in nums) {
        map.set(nums[num], (map.get(nums[num]) || 0) +1);
       }
       let key = Array.from(map.keys()).sort((a,b) => map.get(b) - map.get(a));
       let ktime = key.slice(0,k); 
       return ktime; 
    }
    
}
let topk = new Solution();
let nums = [1,2,2,3,3,3], k = 2;
console.log(topk.topKFrequent(nums,k))