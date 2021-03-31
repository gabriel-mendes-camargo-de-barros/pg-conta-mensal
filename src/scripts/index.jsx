function calculaContasDomesticas() {
  const luz = Number(document.getElementById("luz").value)
  const agua = Number(document.getElementById("agua").value)
  const internet = Number(document.getElementById("internet").value)
  const telefone = Number(document.getElementById("telefone").value)
  const tv = Number(document.getElementById("tv").value)

  const totalContasDomesticas = luz + agua + internet + telefone + tv

  alert(totalContasDomesticas)
}

let billNumber = 0
function createNewBill() {
  let bills = document.querySelector('.bills'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `<label>Digite a nova conta</label></br><input id="conta${billNumber}" type=text />`;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billNumber++
}

function calculateAllBills() {
  let totalOfBill;
  let valor = 0;
  for( let i = 0; i <= 1;) {
    id = `conta${i}`;
    valor += Number(document.getElementById(id).value)
    i++
    console.log(id)
  }
  alert(valor)
}