function verificaChuteValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>';
        return
    }

    if (numeroForMaiorOuMenorValido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3 class='h3NumeroSecreto'>O número secreto era ${numeroSecreto}</h3>

            <button id='jogarNovamente' class='btnJogar'>Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div class='numeroMenor'>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div class='numeroMaior'>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorValido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogarNovamente'){
        window.location.reload();
    }
})