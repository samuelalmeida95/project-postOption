function calcular() {
  let entrada1 = document.querySelector("input#entrada1")
  let entrada2 = document.querySelector("input#entrada2")
  let res = document.querySelector("div#resultado")
  let agradecimento = document.querySelector("footer#rodape")

  let tipoCombustivel = Number(entrada1.value)
  let reais = Number(entrada2.value)

  let totalLitros = 0;
  let nomeCombustivel = "null"

  if (tipoCombustivel >= 1 && tipoCombustivel <= 3) {
    switch (tipoCombustivel) {
      case 1:
        totalLitros = reais / 4.9
        nomeCombustivel = "gasolina"
        break

      case 2:
        totalLitros = reais / 3.5;
        nomeCombustivel = "alcool"
        break

      case 3:
        totalLitros = reais / 2.85;
        nomeCombustivel = "diesel"
        break

      default:
        "entrada inválida"
        break
    }
    res.innerHTML = `Você abasteceu R$: ${reais} de ${nomeCombustivel} , o total em litros foi: 
     ${totalLitros.toFixed(2)}`

    agradecimento.innerHTML = `Obrigado por abastecer!`
  }
  else {
      alert('entrada inválida! selecione 1, 2 ou 3 referente ao tipo do combustivel! ')
  }
}
