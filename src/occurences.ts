import wordAndOccurence from "./wordAndOccurence";
/*class for solving the problem with identifing the nr of occurences of each word in a phrase
params: words - an array with objects of type wordAndOccurence
        text - a phrase provided to the constructor 
*/
class occurences {
  private words: wordAndOccurence[] = [];

  constructor(public text: string) {
    //check for empty text
    if (text !== "") {
      //split by non alpha-numeric characters
      let arrayOfWords: string[] = text.split(/[^A-Za-z0-9]/);
      //iterate through the array of words
      for (let i = 0; i < arrayOfWords.length; i++) {
        //check for empty character
        if (arrayOfWords[i] != "") {
          //instance of a word and occurence (occurence initialized by 1)
          let wAndO = new wordAndOccurence(arrayOfWords[i], 1);

          //if word is in our array
          if (this.searchWord(wAndO) != -1) {
            //increase nr of occurences
            this.words[this.searchWord(wAndO)].occ += 1;
          } else {
            //push it in the array
            this.words.push(wAndO);
          }
        }
      }
    }
  }

  //function to search for a word in our words : wordAndOccurence[]
  //returns index: if found
  //            -1: otherwise
  searchWord(word: wordAndOccurence): number {
    for (let i = 0; i < this.words.length; i++) {
      if (word.word === this.words[i].word) {
        return i;
      }
    }
    return -1;
  }

  //function to create a string from our words array of the form [[word1,occurence1],[word2,occurence2],...]
  wordsAndOccurencesToString(): string {
    let str: string = "";
    for (let i = 0; i < this.words.length; i++) {
      str = str + `[${this.words[i].word},${this.words[i].occ}],`;
    }
    var newStr = str.slice(0, str.length - 1);
    return newStr;
  }
}

export default occurences;
