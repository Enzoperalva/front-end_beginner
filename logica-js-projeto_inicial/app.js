//alert('Boas vindas');
//let nome = ('Lua');
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;
//let mensagemDeErro = ('Erro! Preencha todos os campos');

//alert(mensagemDeErro);
//let nameUsuario = prompt('QUal seu nome:');
//let idade_usuario = prompt ('QUal sua idade:');
//if (idade_usuario >= 18) {
//  alert('Pode tirar a habillitação')
//};

day = prompt('Qual é o dia da semana?');
if (day == 'Sábado') {
    alert('Bom fim de semana!');
} else if (day == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let num= prompt('Digite um número:')
if (num <0) {
alert('Seu número é negativo')
} else{
  alert('Seu número é positivo')
}

pontos= prompt('Pontuação:')
if (pontos >=100) {
  alert('Parabéns, você venceu')
} else{
  alert('TENTE NOVAMENTE')
}

let name= prompt('Seu nome:')
let saldo= prompt('Seu saldo:')
alert(`Seja bem vindo ${name}, você tem R$${saldo}`)