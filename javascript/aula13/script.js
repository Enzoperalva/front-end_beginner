let nomeUsuario = 'ENzo';
let emailUsuario = 'enzo@gmail.com'

let nomeExibicao = nomeUsuario === '' || nomeUsuario === '0' || nomeUsuario === 0? 'Convidado': nomeUsuario;
let statusCadastro = emailUsuario?.includes('@gmail.com')? 'Cadastro válido': 'Cadastro inválido';



console.log(nomeExibicao )
console.log(statusCadastro)