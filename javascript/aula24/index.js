// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras +  umDia);
// console.log(data.toString())

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function executar() {
    const tempoInicial = new Date();
    console.log("Iniciando...");
    
    await sleep(2000); 
    
    const tempoFinal = new Date();
    const total =  tempoInicial.toString() - tempoFinal.toString();
    console.log("Executado após", total);
}

executar();
