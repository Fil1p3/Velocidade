document.getElementById('velocidade').addEventListener('submit', function(event) {
    event.preventDefault();
   
    let modelo = document.getElementById('modelo').value;
    let distancia = parseFloat(document.getElementById('distancia').value);
    let tempo = parseFloat(document.getElementById('tempo').value);

    let velocidadeMedia = distancia / tempo;

    document.getElementById('modeloResultado').textContent = modelo;
    document.getElementById('distanciaResultado').textContent = distancia;
    document.getElementById('tempoResultado').textContent = tempo;
    document.getElementById('velocidadeMedia').textContent = velocidadeMedia.toFixed(2); // Arredonda para 2 casas decimais

    document.getElementById('resultado').style.display = 'block';
});
