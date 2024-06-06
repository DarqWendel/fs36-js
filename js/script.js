// console.log('Script via body', document.getElementById('n1'))

function soma() {

    // Pegar os números dos inputs do HTML e converter para Float, pois será possivel fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //Pegando o resultado do cálculo e colocando na variável resultado
    let resultado = (numero1) + (numero2);

    console.log(resultado);

    // Pegando o elemento HTML e colocando na variável conteudoDiv
   let conteudoDiv = document.getElementsByClassName('resultado')[0];

   // Pegando o conteudoDiv acessando a prop innerHTML e inserindo o valor do calculo, a variavel
   conteudoDiv.innerHTML = resultado

   
}

function sub() {

    // Pegar os números dos inputs do HTML e converter para Float, pois será possivel fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //Pegando o resultado do cálculo e colocando na variável resultado
    let resultado = (numero1) - (numero2);

    console.log(resultado);

    // Pegando o elemento HTML e colocando na variável conteudoDiv
   let conteudoDiv = document.getElementsByClassName('resultado')[0];

   // Pegando o conteudoDiv acessando a prop innerHTML e inserindo o valor do calculo, a variavel
   conteudoDiv.innerHTML = resultado

   
}

function mult() {

    // Pegar os números dos inputs do HTML e converter para Float, pois será possivel fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //Pegando o resultado do cálculo e colocando na variável resultado
    let resultado = (numero1) * (numero2);

    console.log(resultado);

    // Pegando o elemento HTML e colocando na variável conteudoDiv
   let conteudoDiv = document.getElementsByClassName('resultado')[0];

   // Pegando o conteudoDiv acessando a prop innerHTML e inserindo o valor do calculo, a variavel
   conteudoDiv.innerHTML = resultado

   
}

function div() {

    // Pegar os números dos inputs do HTML e converter para Float, pois será possivel fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //Pegando o resultado do cálculo e colocando na variável resultado
    let resultado = (numero1) / (numero2);

    console.log(resultado);

    // Pegando o elemento HTML e colocando na variável conteudoDiv
   let conteudoDiv = document.getElementsByClassName('resultado')[0];

   // Pegando o conteudoDiv acessando a prop innerHTML e inserindo o valor do calculo, a variavel
   conteudoDiv.innerHTML = resultado

   
}