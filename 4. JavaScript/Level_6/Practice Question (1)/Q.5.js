function concatenate(strings) {
    result = "";
    for (const string of strings) {
      result += string;
    }
    return result;
  }
  
  const words = ["Hello", " world", " how", " are", " you"];
  const concatenated = concatenate(words);
  console.log(concatenated);  //Output: Hello World how are you
  