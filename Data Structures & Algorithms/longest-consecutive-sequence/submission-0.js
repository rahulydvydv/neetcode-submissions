class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0;
        let set = new Set(nums);
        let longestStreak = 0;
        for (let num of set) {
            if (!set.has(num - 1)) {
                let currNum = num;
                let currentStreak = 1;
                while (set.has(currNum + 1)) {
                    currNum += 1;
                    currentStreak += 1;
                }
                longestStreak = Math.max(longestStreak, currentStreak)
            }
        }
        return longestStreak;
    }
}
