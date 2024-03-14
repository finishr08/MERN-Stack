// Qs2. Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function getUniqueChars(str) {
    let uniqueChars = "";
    for (let i = 0; i < str.length; i++) {
      let currChar = str[i];
      if (uniqueChars.indexOf(currChar) === -1) {
        uniqueChars += currChar;
      }
    }
    return uniqueChars;
}
  
let str = "abcdabcdefgggh";
let uniqueString = getUniqueChars(str);
console.log(uniqueString); // Output: "abcdefgh"
  