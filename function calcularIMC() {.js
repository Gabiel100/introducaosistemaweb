function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    var imc = peso / Math.pow(altura, 2);
    var situacao = "";

    if (imc < 17) {
        situacao = "Muito abaixo do peso";
    } else if (imc >= 17 && imc < 18.5) {
        situacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        situacao = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        situacao = "Acima do peso";
    } else if (imc >= 30 && imc < 35) {
        situacao = "Obesidade I";
    } else if (imc >= 35 && imc < 40) {
        situacao = "Obesidade II (severa)";
    } else {
        situacao = "Obesidade III (mórbida)";
    }

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>${nome}, seu IMC é ${imc.toFixed(2)} - ${situacao}</p>`;
}
