//Pega dia e hora e coloca na variável dataAtual
const dia = String(data.getDate()).padStart(2, '0') //trasforma 1 em 01
const mes = String(data.getMonth() + 1).padStart(2, '0') //trasforma 1 em 01
const ano = data.getFullYear() // 2023
const hora = String(data.getHours()).padStart(2, '0') //trasforma 1 em 01
const minuto = String(data.getMinutes()).padStart(2, '0') //trasforma 1 em 01
const segundo = String(data.getSeconds()).padStart(2, '0') //trasforma 1 em 01
const dataAtual = `Enviado em ${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`
${dataAtual} 

//Descobre qual é o dia da semana 
//Usa a var "data", que já foi declarada lá em cima
var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
console.log('Dia é ' + semana[data.getDay()]);
