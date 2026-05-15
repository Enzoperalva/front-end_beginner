const numeroTitulo = document.getElementById('numero-titulo');
const fraseNum = document.getElementById('frase-num')
const txt = document.getElementById('txt');
let num = Number(prompt('Digite um número: '));

if (num){
    numeroTitulo.innerHTML = num;
    txt.innerHTML += `<p>Raiz quadrada:  ${num ** 0.5}</p>`;
    txt.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
    txt.innerHTML += `<p>É NaN: ${isNaN(num)}</p>`;
    txt.innerHTML += `<p>Arredondando para baixo: ${Math.floor(num)}</p>`;
    txt.innerHTML += `<p>Arredondando para cima: ${Math.ceil(num)}</p>`;
    txt.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
}else {
    fraseNum.innerHTML = 'Usuário não digitou um número.'
};