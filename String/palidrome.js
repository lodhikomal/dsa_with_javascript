let str = "hello";
function isPalindrome(value) {
  let start = 0;
  let end = str.length - 1;
  let result = true;
  // console.log(end);
  // console.log(start);

  while (end > start) {
    if (value[start] !== value[end]) {
      result = false;
    }
    start++;
    end--;
  }
  return result;
}
console.log(isPalindrome(str));
