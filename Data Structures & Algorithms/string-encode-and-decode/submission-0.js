class Solution {
  /**
   * @param {string} str
   * @returns {string}
   */
  encode(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
      result += str[i].length + "#" + str[i];
    }
    return result;
    // result = 5#Rahul5#Amit5#aman4#ravi
  }

  /**
   * @param {string} str
   * @returns {string}
   */
  decode(str) {
    let result = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      let length = parseInt(str.substring(i, j));
      i = j + 1;
      result.push(str.substring(i, i + length));

      i += length;
     
    }
    return result;
  }
}