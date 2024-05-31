document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const base1 = parseFloat(document.getElementById('base1').value);
    const base2 = parseFloat(document.getElementById('base2').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const area = ((base1 + base2) * altura) / 2;
    document.getElementById('result').textContent = `El área del terreno es de ${area.toFixed(2)} metros cuadrados.`;
});
