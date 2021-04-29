// for input use: https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/

const Math = require('./math.js');
const readline = require("readline");
const main = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

main.question("Enter what number you want of fibonacci: \n",(nu) =>{
    console.log("F(",nu,") =",Math(nu-1));
    main.close();

});

//console.log("Enter what number you want of fibonacci:")



