console.log("hey")

const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}

// we want a prompt to continue to appear asking for each piece of info until all pieces of info are complete
// im thinking a While Loop for prompts and until the last is complete
// isComplete added to the object - start it at false, we'll have a function update it to true once all prompts are delivered


// while loop to create prompts while isComplete is false

// while(words.number === false) {
//     const NumberInput = prompt("give me a number")    // test that we create a variable for the number input
//     words.number = Number(NumberInput)                        // put it in the number key of the words object and make sure its a number          
//                                        // run the finishInput sequence   
// }
// while(words.adjective === false) {
//     const newAdjective =
// }

// console.log(words
      // logs a number for the number input

// within the while loop, we'll create pushes for all prompts

// while(words.isComplete === false) {
//     const NumberInput = prompt("give me a number")    
//     words.number = Number(NumberInput)
//     while(words.number ) {
//         const adjectiveInput = prompt("give me an adjective")     // run the adjective input right after the number input
//         words.adjective = adjectiveInput
//     } 

//     finishInput()                                               //finish sequence to test           
// }

// console.log(words)

// thats not looping to the next prompt

// maybe we can create prompts that deliver through a for of loop
// create an array of the questions

const questions = ["give me a number", "and an adjective?", "and a plural noun", "now an adverb", "and finally one more adjective"]
const answers = []

// for of loop to ask prompts and print an array of answers

for(let i of questions) {
    const userInput = prompt(i)
    answers.push(userInput)
}

console.log(answers)

// function to put the answers to the array into the object

const addInputObj = () => {
    words.number = Number(answers[0])
    words.adjective = answers[1]
    words.pluralNoun = answers[2]
    words.adverb = answers[3]
    words.anotherAdjective = answers[4]
}
addInputObj()

console.log(words)

// last function to create alert of the final mad libs

const writeAlert = () => {
    alert(`Once upon a time a group of ${words.number} General Assembly graduates
    got together and made a startup called ${words.adjective} Technologies.
    Their goal was to create smart ${words.pluralNoun}.
    They approached the challenge ${words.adverb}
    which ultimately lead them to ${words.anotherAdjective} fame.
    `)
}

writeAlert()
