console.log("hey")

const words = {
    number: 4,
    adjective: "tall",
    pluralNoun: "houses",
    adverb: "strongly",
    anotherAdjective: "nice",
    isComplete: false
}

// we want a prompt to continue to appear asking for each piece of info until all pieces of info are complete
// im thinking a While Loop for prompts and until the last is complete
// isComplete added to the object - start it at false, we'll have a function update it to true once all prompts are delivered

const finishInput = () => {
    words.isComplete = true
}

// while loop to create prompts while isComplete is false

while(words.isComplete === false) {
    const NumberInput = prompt("give me a number")    // test that we create a variable for the number input
    words.number = Number(NumberInput)                        // put it in the number key of the words object and make sure its a number          
    finishInput()                                     // run the finishInput sequence   
}

console.log(words
    )  // logs a number for the number input

// within the while loop, we'll create pushes for all prompts

while(words.isComplete === false) {
    const NumberInput = prompt("give me a number")    
    words.number = Number(NumberInput)
    const adjectiveInput = prompt("give me an adjective")     // run the adjective input right after the number input
    words.adjective = adjectiveInput
    finishInput()                                               //finish sequence to test           
}

console.log(words)