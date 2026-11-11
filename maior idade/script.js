let idade;

idade = parseInt(prompt("Digite a sua idade:"));

if (idade >= 18){
    if(idade == 18){
        alert("Você tem 18 anos");
    }else{
        alert(`Você é maior de idade ${idade} anos`);
    }
}else{
    alert(`Você é menor de idade ${idade} anos`);
}
