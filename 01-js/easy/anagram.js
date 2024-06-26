/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(str1.length!=str2.length){
    return false;
  }
  let countnum={};
  for(const char of str1){
    countnum[char]=(countnum[char] || 0)+1;
  }
  for(const char of str2){
    countnum[char]=(countnum[char] || 0)-1;
  }

  for(const count of Object.values(countnum)){
    if(count!=0){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
