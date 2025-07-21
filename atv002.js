function calcularMedia() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    let media = (n1 + n2) / 2;

    alert("A média aritmética é: " + media);
}
