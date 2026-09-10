class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const occurence: Map<number, number> = new Map<number, number>();

        for (const num of nums) {
            if (occurence.has(num)) {
                return true;
            }

            occurence.set(num, num);
        }

        return false;
    }
}
