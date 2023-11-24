//convert roman to integer value
// function romanToInt(s) {
//   const romanNo = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   for (i = 0; i < s.length; i++) {
//     if (i > 0 && romanNo[s[i]] > romanNo[s[i - 1]]) {
//       result += romanNo[s[i]] - 2 * romanNo[s[i - 1]];
//     } else {
//       result += romanNo[s[i]];
//     }
//   }
//   return result;
// }
// const integerNo = romanToInt("XLIV");
// console.log(integerNo);

//check the given input is palidrome or not

var isPalindrome = function (num) {
  var temp = num;
  console.log(typeof num);
  var numStr = num.toString();
  console.log(typeof numStr);
  const lastDigit = numStr[numStr.length - 1];
  console.log(lastDigit);
  const remainingNo = numStr.slice(1, [numStr.length - 1]);
  console.log(remainingNo, "rem");

  const finalNo = lastDigit + remainingNo + numStr[0];
  console.log(finalNo);
  const newNo = +finalNo;
  console.log(typeof newNo);
  if (newNo === temp) {
    console.log(" is palidrome");
  } else {
    console.log(" is not palidrome");
  }

  //   while (num > 0) {
  //     let last = num % 10;
  //     // console.log(last, "find");
  //     rev = rev * 10 + last;
  //     // console.log(rev, "reverse");
  //     var num = Math.floor(num / 10);
  //     // console.log(num, "check");
  //   }
  //   if (temp === rev) {
  //     console.log("no is palidrome");
  //   } else {
  //     console.log("no is not palidrome");
  //   }
  // for (i < 0; i < num.length; i++) {}
};

isPalindrome(26662);
