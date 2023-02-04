/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

function longestPalindrome(s: string): number {
  let result = 0;
  let keys = {};

  for (const str of s) {
    keys[str] = (keys[str] || 0) + 1;
    if (keys[str] % 2 == 0) result += 2;
  }
  // if s.length > result we already know we have char that we can put in middle on polindrome
  return s.length > result ? result + 1 : result;
}
