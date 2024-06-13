let idade = 17;

/* 
Se a idade for menor que 18 é de menor
Se a idade for = 18 é de maior
*/


/*
=== -> Estritamente igual, verifica o tipo e o valor 
*/

if (idade >= 18) {
    console.log("Você é de maior");
} else if( idade <= 12 && idade >3) {
    console.log("Você é criança");
} else if ( idade <= 3) {
   console.log("Você é um bebê");
} else if (idade >=13 && idade < 18){
    console.log("Você é adolescente");
} else {
    console.log("Você é de menor");
}
