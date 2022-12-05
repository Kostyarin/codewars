// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// "Should return empty string for empty array."
// "One word example should return the word."
// "Multiple words should be separated by spaces."




function smash (words) {
    for (let i = 0; i < words.length; i++) {
        if (words <= 1) {
        return words;
      } else {
        return words.join(" ");
      }
    }
    return '';
  }