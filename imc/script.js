const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const botaoCalcular = document.getElementById('calcular');
const botaoLimpar = document.getElementById('limpar');
const caixaResultado = document.getElementById('resultado');
const listarHistorico = document.getElementById('historico');



function classificar(imc){
    if(imc < 18.5){
        return ['Abaixo do peso', 'c0'];
    }

    if(imc < 25){
        return ['Peso normal', 'c1'];
    }

    if(imc < 30){
        return ['Sobrepeso', 'c2'];
    }

    if(imc < 35){
        return ['Obesidade 1', 'c3'];
    }

    if(imc < 40){
        return ['Obesidade 2', 'c4'];
    }

    else{
        return ['Obesidade 3', 'c4'];
    }
}

function calcular(){
    const peso = parseFloat(inputPeso.value.replace(',', '.'));
    const altura = parseFloat(inputAltura.value.replace(',', '.'));

    if(peso <= 0 || altura <= 0){
        caixaResultado.className = '';
        caixaResultado.textContent = 'Informe peso e altura válidos, maiores que zero';
        return
    }

    const imc = peso/(altura*altura);
    const [faixa, classe] = classificar(imc);

    caixaResultado.textContent = `Seu IMC é ${imc.toFixed(1)} - ${faixa}`;
    caixaResultado.className = classe
}

botaoCalcular.addEventListener('click', calcular);