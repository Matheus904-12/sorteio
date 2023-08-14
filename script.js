let button = document.getElementById('sortear');

button.addEventListener('click', function () {
    let min = parseInt(document.getElementById('min').value);
    let max = parseFloat(document.getElementById('max').value);

    let resultado = Math.floor(Math.random() * (max - min + 1) + min);

    if (isNaN(resultado)) {
        resultado = "Insira um número";
    }

    document.querySelector('#resultado').textContent = resultado;
});
