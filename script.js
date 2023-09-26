
function calcularENotificar() {
    const espadaSelectRef = document.querySelector('select[name="Espada"]')
    const encantamentoSelectRef = document.querySelector('select[name="Encantamento"]')
    const nivelSelectRef = document.querySelector('select[name="Nivel"]')


    const espadaSelecionada = espadaSelectRef.value
    const encantamentoSelecionado = encantamentoSelectRef.value
    const nivelSelecionado = nivelSelectRef.value

    const resultado = calcularDano(espadaSelecionada, encantamentoSelecionado, nivelSelecionado)
    document.querySelector('.result').innerHTML = resultado
}

function calcularDano(espada, encantamento, nivel) {
    let dano = 0
    if (espada == 'madeira') {
        dano = 4
    }
    if (espada == 'pedra') {
        dano = 5
    }
    if (espada == 'ferro') {
        dano = 6
    }
    if (espada == 'ouro') {
        dano = 4
    }
    if (espada == 'diamante') {
        dano = 7
    }
    if (encantamento == 'afiacao') {
        dano = dano + (1.25 * nivel)
    }
    if (encantamento == 'ruinadosartropodes') {
        dano = dano + (2.5 * nivel)
    }
    if (encantamento == 'julgamento') {
        dano = dano + (2.5 * nivel)
    }
    return dano
}


