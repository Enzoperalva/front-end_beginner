const pesoInput = document.getElementById('input-peso');
const alturaInput = document.getElementById('input-altura');
const formInput = document.getElementById('form');

function recebeEventoForm(event){
    event.preventDefault()
    
    let pesoValue = pesoInput.value;
    let alturaValue = alturaInput.value;
    let containerImc = document.getElementById('imc');
    let calc = false;

    console.log('CHEGOU AQUI')
    if (!pesoValue){
        containerImc.innerHTML = 'Peso inválido';
        containerImc.style.backgroundColor = "pink"
    } else if(!alturaValue){
        containerImc.innerHTML = 'Altura inválida';
        containerImc.style.backgroundColor = "pink"
    } else{
        calc = true
    }
    if (calc){

        const imc = pesoValue / (alturaValue * alturaValue);
        
        if(imc < 18.5) {
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Abaixo do peso)`;
            containerImc.style.backgroundColor = "aquamarine"
        } else if( imc <= 24.9){
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Peso normal)`;
            containerImc.style.backgroundColor = "aquamarine"
        } else if(imc <= 29.9){
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Sobrepeso)`;
            containerImc.style.backgroundColor = "aquamarine"
        } else if(imc <= 34.9){
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Obesidade grau 1)`;
            containerImc.style.backgroundColor = "aquamarine"
        } else if(imc <= 39.9) {
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Obesidade grau 2)`;
            containerImc.style.backgroundColor = "aquamarine"
        } else{
            containerImc.innerHTML = `Seu IMC é ${imc.toFixed(2)}(Obesidade grau 3)`;
            containerImc.style.backgroundColor = "aquamarine"
        };
    };
};


formInput.addEventListener('submit', recebeEventoForm)