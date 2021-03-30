function calculaContasDomesticas() {
  const luz = Number(document.getElementById("luz").value)
  const agua = Number(document.getElementById("agua").value)
  const internet = Number(document.getElementById("internet").value)
  const telefone = Number(document.getElementById("telefone").value)
  const tv = Number(document.getElementById("tv").value)

  const totalContasDomesticas = luz + agua + internet + telefone + tv

  alert(totalContasDomesticas)
}