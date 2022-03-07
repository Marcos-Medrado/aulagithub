
let totalCompra = 0;

function adicionar() {

    let frutaSelecionada = document.getElementById("fruta").value
    

    switch (fruta>Selecionada) {
        case "Banana":
            totalCompra += 2
            alert("Banana, a 2 reais, adicionada com sucesso. Valor total da compra é: " + totalCompra)
            break;
        
        case "Maçã":
            totalCompra += 4
            alert("Maçã, a 4 reais, adicionada com sucesso. Valor total da compra é: " + totalCompra)
            break;

        case "Abacate":
            totalCompra += 2.5
            alert("Abacate, a 2.5, adicionada com sucesso. Valor total da compra é: " + totalCompra)
            break;

        case "Abacaxi":
            totalCompra += 3.5
            alert("Abacaxi, a 3.5, adicionada com sucesso. Valor total da compra é: " + totalCompra)
            break;
        
        default:
            alert("Por gentileza, selecione uma fruta")
            break;
    }
}

function finalizar() {
    alert("Sua compra foi finalizada com sucesso, o total foi de: " + totalCompra + " reais.")
    totalCompra = 0;
}