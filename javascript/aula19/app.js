const prompt = require('prompt-sync')();
let nivel = 0
let xp = 0

while (true) {
    let continuar1 = prompt('Deseja treinar? [S/N] ').toUpperCase()
    if (continuar1 === 'N'){
        break
    }

    do {
        xp += 25 //Se eu deixar 10 demora de mais
        if (xp === 100){
            console.log(`Parabéns! Você upou de nivel.`)
            nivel += 1
            xp = 0
        }
        continuar2 = prompt('Deseja continuar treinando? [S/N] '.toUpperCase())
        console.log(`Você está com ${xp} de xp`)
        
    } while(continuar2 === 'S');
};
if (nivel >= 1) {
    console.log(`Párabens! Você saiu do treino no level: ${nivel}`)
} else {
    console.log('Você não evoluiu nada, seu merda')
}