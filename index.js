// setTimeout: executa uma função ou código após um tempo específico em milissegundos (ms).
// Neste exemplo, após 5 segundos (5000ms), a mensagem será exibida em um alerta.
setTimeout(() => {
    alert('Olá, seja bem-vindo ao curso de JavaScript');
}, 5000);

// Outro exemplo de setTimeout: 
// Esta função será executada uma única vez após 4 segundos (4000ms).
setTimeout(() => {
    console.log('Executando após 4 segundos');
}, 4000);

// Este console.log será executado imediatamente porque não depende do setTimeout.
console.log('Este console.log aparece antes do setTimeout');

// setInterval: executa uma função repetidamente com um intervalo fixo entre as execuções.
// Aqui, a mensagem será exibida no console a cada 2 segundos (2000ms).
const idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos');
}, 2000);

// O identificador do intervalo (idDoIntervalo) é retornado pelo setInterval. 
// Este valor é necessário para parar o intervalo com clearInterval.
console.log(idDoIntervalo); // Mostra o identificador do intervalo no console.

// clearInterval: interrompe um intervalo em execução. Aqui, estamos cancelando o intervalo imediatamente.
// Como o clearInterval é chamado antes que o primeiro intervalo se complete, a função dentro do setInterval não será executada.
clearInterval(idDoIntervalo);

// clearTimeout: cancela a execução de uma função agendada com setTimeout.
// Neste caso, não há um setTimeout ativo para cancelar, então o clearTimeout não terá efeito.
clearTimeout();
