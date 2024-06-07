// console.log('Script via body', document.getElementById('n1'))

const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');


function soma() {
   
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);
    
    let resultado = (numero1) + (numero2);
    console.log(resultado);
  
    let conteudoDiv = document.getElementsByClassName('resultado')[0];
   
    conteudoDiv.innerHTML = resultado
}

function sub() {

    
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = (numero1) - (numero2);

    console.log(resultado);

    let conteudoDiv = document.getElementsByClassName('resultado')[0];

    conteudoDiv.innerHTML = resultado

}

function mult() {

    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);
   
    let resultado = (numero1) * (numero2);

    console.log(resultado);
   
    let conteudoDiv = document.getElementsByClassName('resultado')[0];

    conteudoDiv.innerHTML = resultado


}

function div() {

    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    let resultado = (numero1) / (numero2);

    console.log(resultado);

    let conteudoDiv = document.getElementsByClassName('resultado')[0];

    conteudoDiv.innerHTML = resultado


}

    function limpar() {
        document.getElementById('n1').value = ''; // Limpa o valor do primeiro input
        document.getElementById('n2').value = ''; // Limpa o valor do segundo input
        document.querySelector('.resultado').innerHTML = ''; // Limpa o conteúdo da div de resultado
    }
    

