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

const dpsEspada = {
    "madeira": 1.6,
    "pedra": 1.6,
    "ferro": 1.6,
    "ouro": 1.6,
    "diamante": 1.6,
    "netherite": 1.6,
}
const dpsMachado = {
    "madeira": 0.8,
    "pedra": 0.8,
    "ferro": 0.9,
    "ouro": 1,
    "diamante": 1,
    "netherite": 1,
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

function calcularDanoE(espada, encantamento, nivel, dps) {
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
function calcularDpsM(machado, encantamento, nivel) {
    return (calcularDanoM(machado, encantamento, nivel) * dpsMachado[machado]).toFixed(2)
}
function calcularDpsE(espada, encantamento, nivel) {
    return (calcularDanoE(espada, encantamento, nivel) * dpsEspada[espada]).toFixed(2)
}
console.log(calcularDpsE("madeira", "afiacao", "4"))
