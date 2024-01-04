const elementoChute = document.getElementById('chute');


        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'pt-Br';
        recognition.start();

        recognition.addEventListener('result', (e) => {
            let chute = e.results[0][0].transcript;
            exibeResult(chute);
            validaChute(chute);
        });

function exibeResult(chute){
    elementoChute.innerHTML = `
    <div> Você chutou: </div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

