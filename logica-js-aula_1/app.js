alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
console.log(`O usuário escolheu o valor ${chute}`)
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou');
    console.log(`O usuario errou, ele escholeu o número ${chute}`)
}