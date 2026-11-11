let nota1;
let nota2;
let media;

nota1 = parseFloat(prompt("Digita a primeira nota:"));
nota2 = parseFloat(prompt("Digita a segunda nota:"));

media = (nota1 + nota2)/2;

if(media >= 7){
    alert(`Aprovado com louvor ${media.toFixed(2)}`);
}
else if (media >= 5){
    alert(`Ainda há esperança, recuperação com a média ${media.toFixed(2)}`);
}
else{
    alert(`Só lamento, reprovado com a média ${media.toFixed(2)}`);
}