const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

readline.question(`Hello?`, hello => {
    console.log(`Hello ${hello}!`);
    readline.close();
})