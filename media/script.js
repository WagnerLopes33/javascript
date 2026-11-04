let nota1;
let nota2;
let nota3;
let media;

nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));
nota3 = parseFloat(prompt("Digite a terceira nota:"));

media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    alert(`Você foi aprovado com a média: ${media.toFixed(2)}`)
}else{
    alert(`Você foi reprovado com a média: ${media.toFixed(2)}`)
}