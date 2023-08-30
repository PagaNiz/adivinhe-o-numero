const elementoChute = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaChuteValido(chute);
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div class="voceDisse">Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start());