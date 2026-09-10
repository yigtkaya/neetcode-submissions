class Solution {
    replaceElements(arr: number[]): number[] {
        let maxSoFar = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const current = arr[i];
            arr[i] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, current);
        }

        return arr;
    }
}
