/**
 *
 * @param {*} str
 * @returns true if the given string is a palindrome, which is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * @returns false otherwise.
 */
function palindrome(str) {
  // find the length of a string
  const len = str.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {

      // check if first and last string are same
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }
  return true;
}

palindrome("eye");
