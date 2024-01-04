const numeroMaximo = 1000;
const numeroMinimo = 1;
const numeroSecreto = geraNumeroSecreto();

function geraNumeroSecreto(){
    return parseInt(Math.random() * numeroMaximo + 1);
}

console.log(numeroSecreto);

document.getElementById('maior-valor').innerHTML = numeroMaximo;
document.getElementById('menor-valor').innerHTML = numeroMinimo;