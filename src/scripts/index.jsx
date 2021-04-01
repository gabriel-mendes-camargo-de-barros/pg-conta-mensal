function calculaContasDomesticas() {
  const luz = Number(document.getElementById("luz").value)
  const agua = Number(document.getElementById("agua").value)
  const internet = Number(document.getElementById("internet").value)
  const telefone = Number(document.getElementById("telefone").value)
  const tv = Number(document.getElementById("tv").value)

  const totalContasDomesticas = luz + agua + internet + telefone + tv

  document.getElementById("bills").innerHTML = totalContasDomesticas
}

let billNumber = 0
function createNewBill() {
  let bills = document.querySelector('#bills'),
    HTMLTemporario = bills.innerHTML,
    HTMLNovo = `
    <table>
      <tr>
        <th>
          Digite a nova conta
        </th>
        <th>
          Digite o valor da conta
        </th>
      </tr>
      <tr>
        <td>
          <input id="conta${billNumber}" type="text" />
        </td>
        <td>
          <input id="valorConta${billNumber}" type="number" />
        </td>
      </tr>
    </table>`;

  HTMLTemporario = HTMLTemporario + HTMLNovo;
  bills.innerHTML = HTMLTemporario;
  billNumber++
  
  console.log(billNumber)
}

function calculateAllBills() {
  let valor = 0;
  for( let i = 0; i < billNumber; i++) {
    let id = `valorConta${i}`;
    console.log(id)
    valor = valor + Number(document.getElementById(id).value)
    console.log(valor)
  }
  alert(valor)
}