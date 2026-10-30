class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let product = 1;
        for(let i = 0; i < nums.length; i++){
            prefix.push(product);
            product = product * nums[i]
        }
        let postfix = [];
        product = 1;
        for(let i = nums.length-1; i >= 0; i--){
            postfix[i] = product;
            product *= nums[i]
        }
        let result = []
        for(let i = 0; i < nums.length; i++){
            result.push(prefix[i] * postfix[i])
        }
        return result
    }
}
