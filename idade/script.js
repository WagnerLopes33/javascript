let anoNascimento;
let anoAtual;
let resultadoIdade;

anoNascimento = parseInt(prompt("Digite o ano do seu nascimento:"));
anoAtual = parseInt(prompt("Digite o ano atual:"))

resultadoIdade = anoAtual - anoNascimento

alert(`Sua idade é: ${resultadoIdade}`)