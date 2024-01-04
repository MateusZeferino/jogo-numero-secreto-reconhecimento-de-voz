function validaChute(chute){
    const numero = parseInt(chute);

    if(isNaN(numero)){
        elementoChute.innerHTML += `<div>Valor recebido inválido</div>`;
        return
    }

    if (verificaSeOChuteEstaDentroDoLimite(numero)){
        elementoChute.innerHTML += `<div> Fale um número entre ${numeroMinimo} e ${numeroMaximo}`;
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>PARABÊNS Você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar_denovo" class="btn">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número Secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número Secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
    }

}


function isNaN(chute){
    return Number.isNaN(chute);
}

function verificaSeOChuteEstaDentroDoLimite(chute){
    return chute > numeroMaximo || chute < numeroMinimo;
}


document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar_denovo'){
        window.location.reload();
    }
})


