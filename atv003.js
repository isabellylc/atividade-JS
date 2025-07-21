function converter() {
    let cotacao = parseFloat(document.getElementById("cotacao").value);
    let valorDolar = parseFloat(document.getElementById("valorDolar").value);

    let valorReal = cotacao * valorDolar;

    document.getElementById("resultado").textContent = 
        "Valor em Reais: R$ " + valorReal.toFixed(2);
}
