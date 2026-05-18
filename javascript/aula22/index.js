const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado');
const nome = form.querySelector('.nome');
const sobrenome = form.querySelector('.sobrenome');
const peso = form.querySelector('.peso');
const altura = form.querySelector('.altura');

function recebeEventoForm (event){
    event.preventDefault()

    const saveAll = []
    saveAll.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
    console.log(saveAll)
    resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
}    

form.addEventListener('submit', recebeEventoForm)