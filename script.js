const danoMachados = {
    "madeira": 7,
    "pedra": 9,
    "ferro": 9,
    "ouro": 7,
    "diamante": 9,
    "netherite": 10,
}
const danoEspadas = {
    "madeira": 4,
    "pedra": 5,
    "ferro": 6,
    "ouro": 4,
    "diamante": 7,
    "netherite": 8,
}

function calcularENotificarE() {
    const espadaSelectRef = document.querySelector('select[name="Espada"]')
    const encantamentoSelectRef = document.querySelector('select[name="EncantamentoEspada"]')
    const nivelSelectRef = document.querySelector('select[name="NivelEspada"]')


    const espadaSelecionada = espadaSelectRef.value
    const encantamentoSelecionado = encantamentoSelectRef.value
    const nivelSelecionado = nivelSelectRef.value

    const resultado = calcularDanoE(espadaSelecionada, encantamentoSelecionado, nivelSelecionado)
    document.querySelector('.resultE').innerHTML = resultado
}

function calcularDanoE(espada, encantamento, nivel) {
    let dano = danoEspadas[espada]
    switch (encantamento) {
        case "afiacao":
            dano = dano + (1.25 * nivel)
            break;
        case "ruinadosartropodes":
            dano = dano + (2.5 * nivel)
            break;
        case "julgamento":
            dano = dano + (2.5 * nivel)
            break;
        default: ''
            break;
    }
    return dano
}

function calcularENotificarM() {
    const machadoSelectRef = document.querySelector('select[name="Machado"]')
    const encantamentoSelectRef = document.querySelector('select[name="EncantamentoMachado"]')
    const nivelSelectRef = document.querySelector('select[name="NivelMachado"]')


    const machadoSelecionado = machadoSelectRef.value
    const encantamentoSelecionado = encantamentoSelectRef.value
    const nivelSelecionado = nivelSelectRef.value

    const resultado = calcularDanoM(machadoSelecionado, encantamentoSelecionado, nivelSelecionado)
    document.querySelector('.resultM').innerHTML = resultado
}
function calcularDanoM(machado, encantamento, nivel) {
    let dano = danoMachados[machado]
    switch (encantamento) {
        case "afiacao":
            dano = dano + (1.25 * nivel)
            break;
        case "ruinadosartropodes":
            dano = dano + (2.5 * nivel)
            break;
        case "julgamento":
            dano = dano + (2.5 * nivel)
            break;
        default: ''
            break;
    }
    return dano
} 
