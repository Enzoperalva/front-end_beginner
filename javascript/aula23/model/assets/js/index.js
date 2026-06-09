const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#input-peso')
    const inputAltura = event.target.querySelector('#input-altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResutado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResutado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC É ${imc} (${nivelImc})`
    setResutado(msg, true)
});
function getNivelImc(imc){
    const nivel = [
        'Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'
    ]
    
    if (imc >= 39.9) return nivel[5]; 
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
    
}

function getImc(peso, altura) {
    const imc = peso / (altura * altura); 
    return imc.toFixed(2)
};


function createP() {
    const p = document.createElement('p');
    return p;
};

function setResutado(msg, isValid){
    const reesutado = document.querySelector('#res');
    reesutado.innerHTML = '';
    const p = createP();

    if (isValid) {
        p.classList.add('paragrafo_resultado');
    } else {
        p.classList.add('bad');
    };

    p.innerHTML = msg;
    reesutado.appendChild(p);
}

    