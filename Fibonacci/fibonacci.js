const readline = require('readline');

function FibonacciNumber(number) {
    let a = 0;
    let b = 1;
    while (b <= number) {
        if (b === number) {
            return true;
        }
        const temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('| BEM VINDO |')

rl.question('Digite um número para checkar: ', (userInput) => {
    if (FibonacciNumber(Number(userInput))) {
        console.log(`O número ${userInput} pertence à sequência de Fibonacci...`);
    } else {
        console.log(`O número ${userInput} não pertence à sequência de Fibonacci...`);
    }
    rl.close();
});