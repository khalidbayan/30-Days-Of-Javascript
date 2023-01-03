
// Love is the best thing in this world. Some found their love and some are still looking for their love.

let sentenceCount = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let patternTwo = /love/gi   

// console.log(sentenceCount.match('love'))
let loveCount = console.log(sentenceCount.match(patternTwo).length)


let sentence_three = 'You cannot end a sentence with because because because is a conjunction'
let pattern_three = /because/gi

console.log(sentence_three.match(pattern_three).length)