const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log(':: INVERSOR DE STRINGS ::')
  readline.question('Digite sua string aqui: ', (str) => {
    let strInverted = '';
  
    for(let i = str.length - 1; i >= 0; i--) {
        strInverted += str[i];
    }

    console.log(`A string invertida é: ${strInverted}`);  
    readline.close();
  });
  