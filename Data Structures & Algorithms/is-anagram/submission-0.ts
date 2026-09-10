class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let charMap: Map<string, number> = new Map();
        let secondCharMap: Map<string, number> = new Map();

        for (const char of s) {
            if (!charMap.has(char)) {
                charMap.set(char, 1);
            } else {
                charMap.set(char, charMap.get(char)! + 1);
            }
        }
        
        for (const char of t) {
            if (!charMap.has(char)) {
                return false;
            }

            if (!secondCharMap.has(char)) {
                secondCharMap.set(char, 1);
            } else {
                secondCharMap.set(char, secondCharMap.get(char)! + 1);
            }
        }

        for (const [char, count] of charMap) {
            if (secondCharMap.get(char) !== count) {
                return false;
            }
        }

        return true;
    }
}
