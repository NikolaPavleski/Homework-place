function greeting(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
      result += array[i];
      if (i < array.length - 1) {
        result += " ";
      }
    }
    return result;
  }
  let words = ["Hello", "there", "students", "of", "SEDC", "!"];
  let stringArray = greeting(words);
  console.log(stringArray);
  
