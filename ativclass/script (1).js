var visor = document.getElementById("visor");

function numero(n) {
    visor.value += n;
}

function operador(op) {
    visor.value += op;
}

function limpar() {
    visor.value = "";
}

function apagar() {
    visor.value = visor.value.slice(0, -1);
}

function igual() {
    try {
        visor.value = eval(visor.value);
    } catch (e) {
        visor.value = "Erro";
    }
}
