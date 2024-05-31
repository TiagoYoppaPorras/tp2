function calcularIMC() {
    const estatura = parseFloat(document.getElementById('estatura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    
    if (estatura > 0 && peso > 0) {
        const imc = peso / (estatura * estatura);
        alert(`Tu IMC es ${peso / (estatura**2)}`);
    } else {
        alert('valor invalido');
    }
}
