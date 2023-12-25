function checkStrAnagram(str1, str2) {
  const objStr1 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (ch of str1) {
    objStr1[ch] = (objStr1[ch] || 0) + 1;
    // console.log(objStr1[ch], "initial");
    // console.log(objStr1[ch] + 1, "after");
  }
  for (items of str2) {
    if (!objStr1[items]) {
      return false;
    }
    objStr1[items]--;
  }
  return true;
}

console.log(checkStrAnagram("hello", "elooh"));
