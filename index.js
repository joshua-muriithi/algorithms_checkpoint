function analyzeSentence(sentence) {
   
    if (sentence[sentence.length - 1] !== '.') {
        throw new Error("The sentence must end with a period.");
    }

    
    const trimmedSentence = sentence.slice(0, -1);

   
    const wordsArray = trimmedSentence.split(' ');

    
    const length = sentence.length;  
    const words = wordsArray.length;
    let vowels = 0;

    
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    
    for (let char of trimmedSentence) {
        if (vowelsSet.has(char)) {
            vowels++;
        }
    }

    return {
        length,
        words,
        vowels
    };
}


