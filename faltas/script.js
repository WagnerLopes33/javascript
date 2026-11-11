let falta;
let nota1;
let nota2;
let media;

falta = parseInt(prompt("Quantas faltas você tem?"));
nota1 = parseFloat(prompt("Qual é a sua primeira nota?"));
nota2 = parseFloat(prompt("Qual é a sua segunda nota?"));

media = (nota1 + nota2)/2;

if(falta <= 9){
    if(media >= 7){
        alert(`Aprovado com louvor ${media.toFixed(2)}`);
    }else{
        alert(`Só lamento, reprovado com média ${media.toFixed(2)}`);
    }    
}else{
    alert(`Você está reprovado, você tem ${falta} faltas`);
}