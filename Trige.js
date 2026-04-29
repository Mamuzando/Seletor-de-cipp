const NOMES_ORIGINAIS = ["Alexandre", "Carlos", "Rodrigo", "Fabio", "Andre", "Bruno", "Douglas"];

function jogar() {
    const btn = document.getElementById('btn-girar');
    const msg = document.getElementById('mensagem');
    const slots = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3')
    ];

    btn.disabled = true;
    msg.innerText = "Girando...";
    msg.style.color = "#2c3e50";

    // 1. ANIMAÇÃO: Fica trocando os nomes loucamente (aqui pode repetir)
    const animacao = setInterval(() => {
        slots.forEach(slot => {
            const aleatorio = NOMES_ORIGINAIS[Math.floor(Math.random() * NOMES_ORIGINAIS.length)];
            slot.innerText = aleatorio;
        });
    }, 100);

    // 2. PARADA: Após 2 segundos, paramos a animação e definimos os nomes ÚNICOS
    setTimeout(() => {
        clearInterval(animacao); // Para o giro visual

        // Lógica para nomes não repetidos no resultado final
        let disponiveis = [...NOMES_ORIGINAIS];
        const resultadosFinais = [];

        for (let i = 0; i < 3; i++) {
            const indice = Math.floor(Math.random() * disponiveis.length);
            const escolhido = disponiveis.splice(indice, 1)[0];
            resultadosFinais.push(escolhido);
        }

        // 3. APLICA O RESULTADO FINAL NOS SLOTS
        slots.forEach((slot, i) => {
            slot.innerText = resultadosFinais[i];
            
            // Efeito visual de parada (o "pulinho" que definimos no CSS)
            slot.style.animation = 'none';
            slot.offsetHeight; 
            slot.style.animation = 'pop 0.3s ease-out';
        });

        msg.innerText = "Não Choras!!!";
        btn.disabled = false;
    }, 2000);
}