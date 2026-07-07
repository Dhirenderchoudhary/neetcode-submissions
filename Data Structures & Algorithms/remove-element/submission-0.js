class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0; // yeh index track karega jahan next valid element rakhna hai

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i]; // val ke alawa element ko front mein le aao
                k++;
            }
        }

        return k;
    }
}