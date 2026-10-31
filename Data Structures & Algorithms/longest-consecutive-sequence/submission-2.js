class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
       nums.sort((a, b) => a - b);
  let count = 1;
  let largest = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      continue;
    }
    if (nums[i] == nums[i + 1] - 1) {
      count++;
    } else {
      count = 1;
    }
    largest = Math.max(count,largest)
  
  }
  return largest;
    }
}
