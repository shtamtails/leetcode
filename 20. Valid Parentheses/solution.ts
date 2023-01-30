/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

function isValid(s: string): boolean {
  if (s.length % 2) return false;
  const charStack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case ")":
        if (charStack[0] === "(") {
          charStack.shift();
        } else {
          return false;
        }
        break;
      case "}":
        if (charStack[0] === "{") {
          charStack.shift();
        } else {
          return false;
        }
        break;
      case "]":
        if (charStack[0] === "[") {
          charStack.shift();
        } else {
          return false;
        }
        break;
      default:
        charStack.unshift(s[i]);
        break;
    }
  }
  return charStack.length === 0;
}
