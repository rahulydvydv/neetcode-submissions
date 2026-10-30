class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let spacefree_String = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let rev = "";
        for (let i = spacefree_String.length - 1; i >= 0; i--) {
            rev += spacefree_String[i];
        }
        return spacefree_String === rev;
    }
}
