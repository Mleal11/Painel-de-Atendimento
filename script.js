// script.js
function atualizarRelogio() {
    const agora = new Date();

    const opcoesHora = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'America/Sao_Paulo'
    };
    
    const opcoesData = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        timeZone: 'America/Sao_Paulo'
    };

    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
    const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);

    const textoRelogio = `${dataFormatada} | ${horaFormatada}`;

    const elementoRelogio = document.getElementById('relogio');
    if (elementoRelogio) {
        elementoRelogio.textContent = textoRelogio;
    }
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);