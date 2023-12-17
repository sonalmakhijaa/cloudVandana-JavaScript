function reverseCharacters(inputString) {
    const wordsArray = inputString.split(' ');
    for (let i = 0; i < wordsArray.length; i++) {
      let word = wordsArray[i];
      let reversedWord = '';
  
      for (let j = word.length - 1; j >= 0; j--) {
        reversedWord += word[j];
      }
  
      wordsArray[i] = reversedWord;
    }
  
    const reversedString = wordsArray.join(' ');
  
    return reversedString;
  }
  
  const inputString = "sonal makhija";
  // const reversedResult = reverseCharacters(inputString);
  // console.log(reversedResult);
  console.log(reverseCharacters(inputString));
  
  