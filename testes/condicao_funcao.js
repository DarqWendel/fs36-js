/* 
Testar 5 idades ao mesmo tempo
2, 12, 15, 18, 30, 17
*/


function verificarIdade(idade) {
    // if (idade >= 18) {
    //     console.log("Você é de maior");
    // } else if( idade <= 12 && idade >3) {
    //     console.log("Você é criança");
    // } else if ( idade <= 3) {
    //    console.log("Você é um bebê");
    // } else if (idade >=13 && idade < 18){
    //     console.log("Você é adolescente");
    // } else {
    //     console.log("Você é de menor");
    // }
    if (idade <=3 ) {
        console.log("Você é um bebê");
    } else if (idade > 3 && idade <= 12) {
        console.log("Você é uma criança");
    } else if (idade >=13 && idade < 18) {
        console.log("Você é um adolescente");
    } else if (idade >=18) {
        console.log("Você é de maior");
    } else ("Você é de menor") 
    }


verificarIdade(2);
verificarIdade(12);
verificarIdade(15);
verificarIdade(18);
verificarIdade(30);
verificarIdade(17);